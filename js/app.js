/* =========================================================
   ICE HARDMODE — app logic
   Vanilla JS. No dependencies. Strict Write-safe rendering.
   ========================================================= */
(function () {
  "use strict";

  var BANK = (typeof QUESTION_BANK !== "undefined" && Array.isArray(QUESTION_BANK)) ? QUESTION_BANK : [];

  var TOPIC_META = [
    { key: "Basic Electrical & Electronics Fundamentals", short: "Basic Electrical & Electronics" },
    { key: "Sensors & Transducers", short: "Sensors & Transducers" },
    { key: "Signal Conditioning & Op-Amp Circuits", short: "Signal Conditioning & Op-Amp" },
    { key: "Analog & Digital Electronics", short: "Analog & Digital Electronics" },
    { key: "Measurement Systems, Errors & Calibration", short: "Measurement & Errors" },
    { key: "Process Control Fundamentals (open/closed loop, PID)", short: "Process Control (PID)" },
    { key: "Control System Theory (transfer functions, stability, Bode/root locus)", short: "Control System Theory" },
    { key: "Industrial Instrumentation (flow/level/pressure/valves)", short: "Industrial Instrumentation" },
    { key: "PLC Programming & Ladder Logic", short: "PLC & Ladder Logic" },
    { key: "SCADA / DCS Systems", short: "SCADA / DCS" },
    { key: "Microcontrollers & Embedded Basics", short: "Microcontrollers & Embedded" },
    { key: "Data Acquisition Systems (DAQ)", short: "Data Acquisition (DAQ)" },
    { key: "Industrial Communication Protocols (RS-232/485, Modbus, HART, Profibus)", short: "Industrial Comms" },
    { key: "Power Electronics & Motor Drives", short: "Power Electronics & Drives" },
    { key: "Digital Signal Processing Basics", short: "DSP Basics" },
    { key: "Lab Safety, Standards & Calibration Practices", short: "Lab Safety & Standards" },
    { key: "Biomedical Instrumentation Basics", short: "Biomedical Basics" },
    { key: "Robotics & Automation Basics", short: "Robotics & Automation" },
    { key: "Testing, Troubleshooting & Maintenance", short: "Testing & Maintenance" }
  ];

  var MODES = {
    practice: { label: "Practice", length: 12, perQuestionSec: 0, totalTimeSec: 0, immediate: true, hardOnly: false },
    exam:     { label: "Exam",     length: 25, perQuestionSec: 75, totalTimeSec: 0, immediate: false, hardOnly: false },
    hardest:  { label: "Hardest",  length: 25, perQuestionSec: 0, totalTimeSec: 2700, immediate: false, hardOnly: true }
  };

  var LS = {
    history: "icehm_history",
    lastMode: "icehm_lastMode",
    lastTopic: "icehm_lastTopic",
    session: "icehm_session"
  };

  // ---- DOM refs ----
  var $ = function (id) { return document.getElementById(id); };
  var header = $("appHeader");
  var progressWrap = $("progressWrap"), progressFill = $("progressFill"), progressLabel = $("progressLabel");
  var timerChip = $("timerChip"), timerText = $("timerText");
  var exitBtn = $("exitBtn");
  var hero = $("hero"), topicsEl = $("topics"), quizEl = $("quiz"), resultsEl = $("results"), reviewEl = $("review"), theoryEl = $("theory");
  var theoryTopicList = $("theoryTopicList"), theoryContent = $("theoryContent"), theoryBackBtn = $("theoryBackBtn");
  var theoryTopicTitle = $("theoryTopicTitle"), theorySections = $("theorySections");
  var startBtn = $("startBtn");
  var topicGrid = $("topicGrid"), topicsNote = $("topicsNote");
  var quizProgressFill = $("quizProgressFill"), quizCount = $("quizCount");
  var qTopic = $("qTopic"), qDiff = $("qDiff"), qText = $("qText"), optionsEl = $("options");
  var qFeedback = $("qFeedback"), fbLine = $("fbLine"), fbExplain = $("fbExplain"), nextBtn = $("nextBtn");
  var questionCard = $("questionCard");
  var statGrid = $("statGrid"), resultsNote = $("resultsNote");
  var retryBtn = $("retryBtn"), reviewBtn = $("reviewBtn"), homeBtn = $("homeBtn");
  var reviewList = $("reviewList"), reviewBackBtn = $("reviewBackBtn");

  // ---- state ----
  var state = {
    mode: null,
    topic: null,
    order: [],        // array of question objects
    index: 0,
    answers: [],      // { qid, chosen, correct, correctIndex }
    startedAt: 0,
    timerId: null,
    totalTimerId: null,
    timeLeft: 0,
    totalTimeLeft: 0,
    answered: false,
    finished: false
  };

  // ---- utils ----
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function questionsForTopic(topic) {
    return BANK.filter(function (q) { return q.topic === topic; });
  }
  function fmtTime(sec) {
    sec = Math.max(0, Math.floor(sec));
    var m = Math.floor(sec / 60), s = sec % 60;
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }
  function lsGet(key, fallback) {
    try { var v = localStorage.getItem(key); return v == null ? fallback : JSON.parse(v); }
    catch (e) { return fallback; }
  }
  function lsSet(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }
  function lsDel(key) { try { localStorage.removeItem(key); } catch (e) {} }

  // ---- header visibility ----
  function setHeader(context) {
    // contexts: "home" | "quiz" | "results"
    var inQuiz = context === "quiz";
    var inFlow = context === "quiz" || context === "results" || context === "review";
    progressWrap.hidden = !inQuiz;
    timerChip.hidden = false; // always visible
    exitBtn.hidden = !inFlow;
  }

  // ---- view switching ----
  function showOnly(el) {
    [hero, topicsEl, quizEl, resultsEl, reviewEl, theoryEl].forEach(function (e) { e.hidden = (e !== el); });
  }

  // ---- mode selection ----
  var selectedMode = null;
  Array.prototype.forEach.call(document.querySelectorAll(".mode-card"), function (card) {
    card.addEventListener("click", function () {
      selectedMode = card.getAttribute("data-mode");
      Array.prototype.forEach.call(document.querySelectorAll(".mode-card"), function (c) {
        c.setAttribute("aria-checked", c === card ? "true" : "false");
      });
      if (selectedMode === "theory") {
        startBtn.disabled = false;
        startBtn.textContent = "START LEARNING →";
        startBtn.onclick = goToTheory;
      } else {
        startBtn.disabled = false;
        startBtn.textContent = "CHOOSE TOPIC →";
        startBtn.onclick = goToTopics;
      }
    });
  });

  // ---- theory/learn ----
  function goToTheory() {
    if (selectedMode !== "theory") return;
    setHeader("home");
    showOnly(theoryEl);
    theoryContent.hidden = true;
    theoryTopicList.hidden = false;
    buildTheoryTopicList();
  }

  function buildTheoryTopicList() {
    theoryTopicList.innerHTML = "";
    theoryTopicList.hidden = false;
    if (typeof THEORY_DATA === "undefined" || !THEORY_DATA.length) {
      theoryTopicList.innerHTML = '<p class="theory-empty">Theory content not loaded.</p>';
      return;
    }
    THEORY_DATA.forEach(function (t, i) {
      var card = document.createElement("div");
      card.className = "topic-card";
      card.innerHTML =
        '<span class="topic-index">TOPIC ' + String(i + 1).padStart(2, "0") + '</span>' +
        '<span class="topic-label">' + t.topic + '</span>' +
        '<span class="topic-count">' + (t.sections ? t.sections.length : 0) + ' CONCEPTS</span>' +
        '<span class="topic-link">Learn &rarr;</span>';
      card.addEventListener("click", function () { showTheoryTopic(t); });
      theoryTopicList.appendChild(card);
    });
  }

  function showTheoryTopic(topic) {
    theoryTopicList.hidden = true;
    theoryContent.hidden = false;
    theoryTopicTitle.textContent = topic.topic;
    theorySections.innerHTML = "";
    (topic.sections || []).forEach(function (sec) {
      var div = document.createElement("div");
      div.className = "theory-section";
      var html = '<h4 class="theory-sec-title">' + esc(sec.title) + '</h4>';
      html += '<p class="theory-sec-body">' + esc(sec.content) + '</p>';
      if (sec.steps && sec.steps.length) {
        html += '<ol class="theory-steps">';
        sec.steps.forEach(function (s) { html += '<li>' + esc(s) + '</li>'; });
        html += '</ol>';
      }
      if (sec.analogy) {
        html += '<div class="theory-analogy"><span class="theory-label">Analogies:</span> ' + esc(sec.analogy) + '</div>';
      }
      if (sec.formula) {
        html += '<div class="theory-formula"><span class="theory-label">Formula:</span> <code>' + esc(sec.formula) + '</code></div>';
      }
      if (sec.keySensors) {
        html += '<div class="theory-key"><span class="theory-label">Key Types:</span> ' + esc(sec.keySensors) + '</div>';
      }
      if (sec.takeaway) {
        html += '<div class="theory-takeaway"><span class="theory-label">Takeaway:</span> ' + esc(sec.takeaway) + '</div>';
      }
      div.innerHTML = html;
      theorySections.appendChild(div);
    });
  }

  theoryBackBtn.addEventListener("click", function () {
    theoryContent.hidden = true;
    theoryTopicList.hidden = false;
  });

  function goToTopics() {
    if (!selectedMode) return;
    state.mode = selectedMode;
    lsSet(LS.lastMode, selectedMode);
    setHeader("home");
    buildTopicGrid();
    showOnly(topicsEl);
  }

  function buildTopicGrid() {
    topicGrid.innerHTML = "";
    TOPIC_META.forEach(function (t, i) {
      var q = questionsForTopic(t.key);
      var count = q.length;
      var card = document.createElement("div");
      card.className = "topic-card";
      card.innerHTML =
        '<span class="topic-index">TOPIC ' + String(i + 1).padStart(2, "0") + '</span>' +
        '<span class="topic-label">' + t.short + '</span>' +
        '<span class="topic-count">' + count + ' QUESTIONS</span>' +
        '<span class="topic-link">Practice &rarr;</span>';
      card.addEventListener("click", function () { startQuiz(t.key); });
      topicGrid.appendChild(card);
    });
  }

  // ---- quiz build ----
  function startQuiz(topic) {
    state.topic = topic;
    state.finished = false;
    lsSet(LS.lastTopic, topic);
    var cfg = MODES[state.mode];
    var pool = questionsForTopic(topic);
    if (cfg.hardOnly) pool = pool.filter(function (q) { return q.difficulty === "hard"; });
    pool = shuffle(pool).slice(0, cfg.length);
    if (pool.length === 0) {
      // fallback if no hard questions exist for topic
      pool = shuffle(questionsForTopic(topic)).slice(0, cfg.length);
    }
    state.order = pool;
    state.index = 0;
    state.answers = [];
    state.startedAt = Date.now();
    state.answered = false;
    clearTotalTimer();
    // start total countdown if configured
    if (cfg.totalTimeSec > 0) {
      state.totalTimeLeft = cfg.totalTimeSec;
      updateTimerText();
      state.totalTimerId = setInterval(function () {
        state.totalTimeLeft--;
        updateTimerText();
        if (state.totalTimeLeft <= 60) timerChip.classList.add("warn");
        if (state.totalTimeLeft <= 0) {
          clearTotalTimer();
          finishQuiz();
        }
      }, 1000);
    }
    saveSession();
    setHeader("quiz");
    showOnly(quizEl);
    renderQuestion();
  }

  function renderQuestion() {
    clearTimer();
    state.answered = false;
    var cfg = MODES[state.mode];
    var q = state.order[state.index];
    qTopic.textContent = shortTopic(q.topic);
    qDiff.textContent = q.difficulty || "hard";
    qDiff.className = "q-diff " + (q.difficulty || "hard");
    qText.textContent = q.question;

    optionsEl.innerHTML = "";
    var keys = ["A", "B", "C", "D"];
    q.options.forEach(function (opt, i) {
      var b = document.createElement("button");
      b.className = "option-btn";
      b.type = "button";
      b.innerHTML = '<span class="opt-key">' + keys[i] + '</span><span class="opt-text">' + opt + '</span>';
      b.addEventListener("click", function () { onAnswer(i, b); });
      optionsEl.appendChild(b);
    });

    qFeedback.hidden = true;
    questionCard.classList.remove("flash-ok", "flash-no");

    // progress
    var done = state.index, total = state.order.length;
    quizProgressFill.style.width = ((done / total) * 100) + "%";
    quizCount.textContent = (state.index + 1) + " / " + total;

    // header progress
    progressFill.style.width = ((done / total) * 100) + "%";
    progressLabel.textContent = (state.index) + " / " + total;

    // show submit button only for total-timer modes
    var submitBtn = $("submitQuizBtn");
    if (cfg.totalTimeSec > 0) {
      submitBtn.hidden = false;
    } else {
      submitBtn.hidden = true;
    }

    // timer: skip per-question timer if total timer is active
    if (cfg.totalTimeSec > 0) {
      // total timer already running in startQuiz, just update display
      updateTimerText();
    } else if (cfg.perQuestionSec > 0) {
      state.timeLeft = cfg.perQuestionSec;
      updateTimerText();
      timerChip.classList.remove("warn");
      state.timerId = setInterval(function () {
        state.timeLeft--;
        updateTimerText();
        if (state.timeLeft <= 10) timerChip.classList.add("warn");
        if (state.timeLeft <= 0) {
          clearTimer();
          // auto-answer as "no choice" -> wrong
          onAnswer(-1, null);
        }
      }, 1000);
    } else {
      // practice: count up elapsed for whole quiz
      state.timeLeft = 0;
      updateTimerText();
      state.timerId = setInterval(function () {
        state.timeLeft++;
        updateTimerText();
      }, 1000);
    }
  }

  function updateTimerText() {
    var cfg = MODES[state.mode];
    if (!cfg) { timerText.textContent = "00:00"; return; }
    if (cfg.totalTimeSec > 0) {
      timerText.textContent = fmtTime(state.totalTimeLeft);
    } else if (cfg.perQuestionSec > 0) {
      timerText.textContent = fmtTime(state.timeLeft);
    } else {
      timerText.textContent = "+" + fmtTime(state.timeLeft);
    }
  }

  function clearTimer() {
    if (state.timerId) { clearInterval(state.timerId); state.timerId = null; }
  }
  function clearTotalTimer() {
    if (state.totalTimerId) { clearInterval(state.totalTimerId); state.totalTimerId = null; }
  }

  function onAnswer(chosen, btn) {
    if (state.answered) return;
    state.answered = true;
    clearTimer();
    var q = state.order[state.index];
    var correctIndex = q.correctIndex;
    var isCorrect = (chosen === correctIndex);
    state.answers.push({
      qid: q.id, chosen: chosen, correct: isCorrect, correctIndex: correctIndex, topic: q.topic
    });

    var cfg = MODES[state.mode];
    var buttons = optionsEl.querySelectorAll(".option-btn");

    if (cfg.immediate) {
      // reveal feedback
      Array.prototype.forEach.call(buttons, function (b, i) {
        b.disabled = true;
        if (i === correctIndex) b.classList.add("correct");
        else if (i === chosen) b.classList.add("wrong");
        else b.classList.add("dim");
      });
      qFeedback.hidden = false;
      fbLine.textContent = isCorrect ? "Correct" : "Incorrect";
      fbLine.className = "fb-line " + (isCorrect ? "ok" : "no");
      fbExplain.textContent = (q.explanation || "");
      questionCard.classList.add(isCorrect ? "flash-ok" : "flash-no");
      nextBtn.textContent = (state.index + 1 < state.order.length) ? "NEXT →" : "SEE RESULTS →";
    } else {
      // exam / hardest: lock, brief highlight, auto-advance
      Array.prototype.forEach.call(buttons, function (b) { b.disabled = true; });
      if (btn) {
        if (isCorrect) btn.classList.add("correct");
        else { btn.classList.add("wrong"); if (buttons[correctIndex]) buttons[correctIndex].classList.add("correct"); }
      } else if (buttons[correctIndex]) {
        buttons[correctIndex].classList.add("correct");
      }
      questionCard.classList.add(isCorrect ? "flash-ok" : "flash-no");
      saveSession();
      setTimeout(function () {
        if (state.index + 1 < state.order.length) { state.index++; saveSession(); renderQuestion(); }
        else finishQuiz();
      }, 450);
      return;
    }
    saveSession();
  }

  // ---- submit quiz early ----
  var submitQuizBtn = $("submitQuizBtn");
  if (submitQuizBtn) {
    submitQuizBtn.addEventListener("click", function () {
      if (state.finished) return;
      // record current question as unanswered if not answered
      if (!state.answered) {
        var q = state.order[state.index];
        state.answers.push({
          qid: q.id, chosen: -1, correct: false, correctIndex: q.correctIndex, topic: q.topic
        });
      }
      // record any remaining unanswered questions
      for (var si = state.index + 1; si < state.order.length; si++) {
        var sq = state.order[si];
        state.answers.push({
          qid: sq.id, chosen: -1, correct: false, correctIndex: sq.correctIndex, topic: sq.topic
        });
      }
      finishQuiz();
    });
  }

  nextBtn.addEventListener("click", function () {
    if (state.index + 1 < state.order.length) {
      state.index++;
      saveSession();
      renderQuestion();
    } else {
      finishQuiz();
    }
  });

  // ---- session persistence ----
  function saveSession() {
    lsSet(LS.session, {
      mode: state.mode, topic: state.topic,
      order: state.order.map(function (q) { return q.id; }),
      index: state.index, answers: state.answers, startedAt: state.startedAt
    });
  }
  function restoreSession() {
    var s = lsGet(LS.session, null);
    if (!s || !s.order || !s.order.length) return false;
    var order = s.order.map(function (id) {
      return BANK.filter(function (q) { return q.id === id; })[0];
    }).filter(Boolean);
    if (order.length === 0) return false;
    // complete only if finished
    if (s.index >= order.length) return false;
    state.mode = s.mode; state.topic = s.topic;
    state.order = order; state.index = s.index;
    state.answers = s.answers || []; state.startedAt = s.startedAt || Date.now();
    state.answered = false;
    return true;
  }

  // ---- finish / results ----
  function finishQuiz() {
    if (state.finished) return;
    state.finished = true;
    clearTimer();
    clearTotalTimer();
    lsDel(LS.session);
    var total = state.order.length;
    var correct = state.answers.filter(function (a) { return a.correct; }).length;
    var accuracy = total ? Math.round((correct / total) * 100) : 0;
    var timeSec = Math.round((Date.now() - state.startedAt) / 1000);

    // history
    var hist = lsGet(LS.history, []);
    if (!Array.isArray(hist)) hist = [];
    hist.unshift({
      date: new Date().toISOString(),
      mode: state.mode, topic: state.topic,
      score: correct, total: total, accuracy: accuracy, timeSec: timeSec
    });
    hist = hist.slice(0, 30);
    lsSet(LS.history, hist);

    renderResults({ total: total, correct: correct, accuracy: accuracy, timeSec: timeSec });
  }

  function renderResults(r) {
    setHeader("results");
    showOnly(resultsEl);
    resultsNote.textContent = MODES[state.mode].label + " · " + shortTopic(state.topic) +
      " · " + new Date().toLocaleString();

    // per-topic breakdown (within this quiz, by topic)
    var byTopic = {};
    state.answers.forEach(function (a) {
      if (!byTopic[a.topic]) byTopic[a.topic] = { c: 0, t: 0 };
      byTopic[a.topic].t++;
      if (a.correct) byTopic[a.topic].c++;
    });
    var tbRows = Object.keys(byTopic).map(function (t) {
      var d = byTopic[t];
      var pct = d.t ? Math.round((d.c / d.t) * 100) : 0;
      return '<div class="tb-row"><span class="tb-name">' + shortTopic(t) +
        '</span><span class="tb-bar"><span class="tb-fill" style="width:' + pct + '%"></span></span>' +
        '<span class="tb-val">' + d.c + '/' + d.t + ' (' + pct + '%)</span></div>';
    }).join("");

    var best = (lsGet(LS.history, []) || []).reduce(function (m, h) { return Math.max(m, h.accuracy || 0); }, 0);

    statGrid.innerHTML =
      '<div class="stat-card"><div class="stat-value">' + r.correct + '/' + r.total + '</div><div class="stat-key">Score</div></div>' +
      '<div class="stat-card"><div class="stat-value">' + r.accuracy + '%</div><div class="stat-key">Accuracy</div></div>' +
      '<div class="stat-card"><div class="stat-value">' + fmtTime(r.timeSec) + '</div><div class="stat-key">Time</div></div>' +
      '<div class="stat-card"><div class="stat-value">' + best + '%</div><div class="stat-key">Best Accuracy</div></div>' +
      '<div class="stat-card wide"><div class="stat-key">Per-Topic Breakdown</div><div class="topic-breakdown">' + tbRows + '</div></div>';
  }

  retryBtn.addEventListener("click", function () { startQuiz(state.topic); });
  reviewBtn.addEventListener("click", function () { renderReview(); showOnly(reviewEl); setHeader("results"); });
  homeBtn.addEventListener("click", function () { goHome(); });
  reviewBackBtn.addEventListener("click", function () { showOnly(resultsEl); setHeader("results"); });

  function renderReview() {
    reviewList.innerHTML = "";
    state.order.forEach(function (q, i) {
      var a = state.answers[i] || { chosen: -1, correct: false, correctIndex: q.correctIndex };
      var item = document.createElement("div");
      item.className = "review-item " + (a.correct ? "ok" : "no");
      var keys = ["A", "B", "C", "D"];
      var yoursTxt = a.chosen >= 0 ? (keys[a.chosen] + ". " + q.options[a.chosen]) : "— not answered —";
      var corrTxt = keys[a.correctIndex] + ". " + q.options[a.correctIndex];
      item.innerHTML =
        '<div class="review-meta">Q' + (i + 1) + ' · ' + shortTopic(q.topic) + ' · ' + (q.difficulty || "hard") + '</div>' +
        '<div class="review-q">' + q.question + '</div>' +
        '<div class="review-ans"><span class="tag yours ' + (a.correct ? "ok" : "no") + '">YOUR:</span><span class="yours ' + (a.correct ? "ok" : "no") + '">' + esc(yoursTxt) + '</span></div>' +
        '<div class="review-ans"><span class="tag correct">CORRECT:</span><span class="correct">' + esc(corrTxt) + '</span></div>' +
        '<div class="review-exp">' + esc(q.explanation || "") + '</div>';
      reviewList.appendChild(item);
    });
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function shortTopic(full) {
    for (var i = 0; i < TOPIC_META.length; i++) if (TOPIC_META[i].key === full) return TOPIC_META[i].short;
    return full;
  }

  // ---- home / exit ----
  function goHome() {
    clearTimer();
    clearTotalTimer();
    lsDel(LS.session);
    selectedMode = null;
    startBtn.disabled = true;
    startBtn.textContent = "SELECT A MODE";
    Array.prototype.forEach.call(document.querySelectorAll(".mode-card"), function (c) {
      c.setAttribute("aria-checked", "false");
    });
    setHeader("home");
    showOnly(hero);
  }
  exitBtn.addEventListener("click", goHome);

  // ---- boot ----
  function boot() {
    if (!BANK.length) {
      qText.textContent = "Question bank failed to load (data/questions.js missing or empty).";
      startBtn.disabled = true;
      return;
    }
    // resume an in-progress session if present
    if (restoreSession()) {
      setHeader("quiz");
      showOnly(quizEl);
      renderQuestion();
      return;
    }
    setHeader("home");
    showOnly(hero);
  }

  boot();
})();
