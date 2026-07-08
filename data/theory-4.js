/* =========================================================
   THEORY Part 4/4 — Topics 16-19
   Slow Learner Method (FlintK12)
   ========================================================= */
var THEORY_DATA_4 = [

// ===== 16. LAB SAFETY, STANDARDS & CALIBRATION =====
{
  topic: "Lab Safety, Standards & Calibration Practices",
  sections: [
    {
      title: "Electrical Safety — LOTO Saves Lives",
      content: "Lockout/Tagout (LOTO): Lock the power source, tag it so no one restores power while you work. NEVER assume a circuit is dead — measure first.",
      steps: [
        "LOTO: Identify energy source → Shut down → Lock with personal lock → Tag → Verify zero energy → Work → Remove lock/tag → Restore.",
        "NEVER work on live circuits above 50V without proper training and PPE.",
        "ALWAYS use one hand in your pocket when measuring live circuits (prevents arm-to-arm current path through heart).",
        "Verify meter is working on known source first, then measure dead circuit, then verify meter again."
      ],
      analogy: "LOTO = putting a personal lock on the circuit breaker panel so no one flips it back on while you're working. Like putting a 'Do Not Disturb' sign that physically prevents disturbance.",
      takeaway: "Lock it out, tag it out, verify zero energy. Use one hand. Check your meter."
    },
    {
      title: "PPE — Personal Protective Equipment",
      content: "Safety glasses (always!), insulated gloves (for high voltage), steel-toe boots, ear plugs in loud areas. The right PPE depends on the hazard.",
      steps: [
        "EYE: Safety glasses or goggles. Mandatory in any lab or plant.",
        "HAND: Insulated rubber gloves rated for voltage (Class 0 for 1000V, etc.). Leather protectors over them.",
        "FOOT: Steel-toe boots for heavy equipment areas.",
        "HEAD: Hard hat in construction/plant areas.",
        "ARC FLASH: Arc-rated clothing and face shield for high-energy electrical work.",
        "NEVER wear: Jewelry, watches, loose clothing, synthetic fabrics near electrical equipment."
      ],
      takeaway: "PPE = last line of defense. Always wear safety glasses in lab. Never skip PPE for 'just a quick check.'"
    },
    {
      title: "Standards — ISO, NABL, IEC",
      content: "Standards ensure quality, safety, and consistency. Key standards for instrumentation.",
      steps: [
        "ISO 9001: Quality management system. For calibration labs and manufacturers.",
        "ISO 14001: Environmental management.",
        "OHSAS 18001 / ISO 45001: Occupational health and safety.",
        "NABL (National Accreditation Board for Testing and Calibration Laboratories): Indian lab accreditation. Ensures competence of calibration labs.",
        "IEC 60601: Safety of medical electrical equipment.",
        "IEC 61508 / 61511: Functional safety — safety instrumented systems (SIS)."
      ],
      takeaway: "ISO 9001 = quality. NABL = Indian lab accreditation. IEC 61508 = functional safety."
    },
    {
      title: "Calibration Practices",
      content: "Every instrument drifts. Must be periodically checked against a standard. Document everything.",
      steps: [
        "Calibration interval: Manufacturer recommendation or plant history (typically 6-12 months).",
        "AS-FOUND: Record readings before adjustment. Shows drift since last cal.",
        "ADJUSTMENT: Bring instrument back to specification.",
        "AS-LEFT: Record final readings after adjustment.",
        "UNCERTAINTY: Every calibration has uncertainty. Must be ≤ ¼ of the instrument tolerance (4:1 TUR rule).",
        "Temperature and humidity must be controlled and recorded during calibration."
      ],
      formula: "Test Uncertainty Ratio (TUR) = spec_tolerance / calibration_uncertainty. TUR ≥ 4:1 recommended.",
      takeaway: "Calibrate periodically. Record as-found and as-left. TUR ≥ 4:1. Control environment."
    },
    {
      title: "Traceability — Chain of Comparisons",
      content: "Your measurement → lab standard → national standard → SI definition. Unbroken chain.",
      steps: [
        "Your instrument calibrated against a reference standard.",
        "That reference calibrated against a higher-level standard.",
        "Chain continues to national metrology institute (NIST, NPL, CSIR-NPL India).",
        "National standards are realized SI units (meter from speed of light, kilogram from Planck constant).",
        "Without traceability: your measurement is isolated. With traceability: your measurement connects to the global measurement system."
      ],
      analogy: "Traceability = family tree. Your ruler's accuracy → gauge block → laser interferometer → definition of meter (speed of light). Each generation inherits and preserves accuracy.",
      takeaway: "Traceability = unbroken chain to SI. Proves your measurements are valid globally."
    }
  ]
},

// ===== 17. BIOMEDICAL INSTRUMENTATION BASICS =====
{
  topic: "Biomedical Instrumentation Basics",
  sections: [
    {
      title: "Biomedical Signals — Tiny, Noisy, Vital",
      content: "The body produces electrical, chemical, and mechanical signals. They are very small (µV to mV) and need careful amplification and filtering.",
      steps: [
        "ECG (Electrocardiogram): Heart electrical activity. ~1mV at skin. P wave (atria contract), QRS (ventricles contract), T wave (ventricles relax).",
        "EEG (Electroencephalogram): Brain electrical activity. ~10-100µV. Alpha (8-13Hz, relaxed), Beta (13-30Hz, active), Theta, Delta waves.",
        "EMG (Electromyogram): Muscle electrical activity. ~100µV-1mV. Higher frequency (20-500Hz).",
        "Common challenges: 50/60Hz power line interference, motion artifacts, electrode contact noise.",
        "Driven Right Leg (DRL) circuit: An active feedback circuit that reduces common-mode 50/60Hz noise in ECG."
      ],
      analogy: "ECG = listening to heart's electrical rhythm. Each beat has signature pattern. Shape changes → something wrong. EEG = listening to brain's electrical 'weather' — different brain states have different wave patterns.",
      takeaway: "Biomedical signals are µV-mV. Need high-gain, high-CMRR amplifiers. 50Hz filtering critical."
    },
    {
      title: "Patient Safety — Isolation is Critical",
      content: "Medical equipment must NOT endanger the patient. Small leakage currents can cause ventricular fibrillation.",
      steps: [
        "Patient leakage current limit: <10µA for cardiac-connected equipment, <100µA for body-surface.",
        "ISOLATION: Optical isolators, isolation transformers, or capacitive isolation. Breaks the conductive path from patient to mains.",
        "IEC 60601-1: Safety standard for medical electrical equipment. Defines protection classes.",
        "Type B: Body (non-cardiac). Type BF: Body Floating (isolated). Type CF: Cardiac Floating (highest protection, <10µA leakage).",
        "DEFIBRILLATOR PROTECTION: ECG input circuits must survive 5kV defibrillation pulse without damage."
      ],
      takeaway: "Leakage current must be <10µA (cardiac). Isolation amplifiers protect patient. IEC 60601 defines safety classes."
    },
    {
      title: "Common Medical Measurements",
      content: "Blood pressure, oxygen saturation, temperature, respiration — the vital signs.",
      steps: [
        "BLOOD PRESSURE: Invasive (catheter + pressure transducer, direct/accurate) or non-invasive (cuff + oscillometric, Korotkoff sounds). Systolic/Diastolic.",
        "PULSE OXIMETER (SpO₂): Red and infrared light absorption through finger/ear. Oxygenated vs deoxygenated hemoglobin absorb differently. Non-invasive.",
        "RESPIRATION: Impedance pneumography (chest impedance changes with breathing), spirometry (flow/volume measurement).",
        "TEMPERATURE: Thermistor (fast, accurate), thermocouple (wide range), infrared (ear/forehead, non-contact)."
      ],
      formula: "SpO₂ = (HbO₂ / (Hb + HbO₂)) × 100% | BP = Cardiac Output × Peripheral Resistance",
      takeaway: "BP = invasive or cuff. SpO₂ = red/IR absorption. Respiration = impedance or flow. Temp = thermistor or IR."
    },
    {
      title: "Medical Electrodes and Sensors",
      content: "Electrodes couple the body's ionic currents to electronic circuits. Different types for different applications.",
      steps: [
        "Ag/AgCl (Silver-Silver Chloride): Most common ECG electrode. Reversible, low noise, stable. Disposable or reusable.",
        "NEEDLE ELECTRODE: Pierces skin. Used for EMG, EEG. Low impedance, high signal quality.",
        "SURFACE ELECTRODE: Sticks to skin (gel or dry). ECG, EEG, EMG.",
        "ELECTRODE-SKIN INTERFACE: Creates a half-cell potential (DC offset up to ±300mV). Must be stable for good measurement.",
        "Skin preparation: Clean, abrade slightly, apply gel. Reduces impedance and motion artifacts."
      ],
      takeaway: "Ag/AgCl = gold standard for ECG. Electrode-skin interface creates DC offset. Good skin prep reduces noise."
    }
  ]
},

// ===== 18. ROBOTICS & AUTOMATION BASICS =====
{
  topic: "Robotics & Automation Basics",
  sections: [
    {
      title: "What Makes a Robot? — Sense, Plan, Act",
      content: "Three essential parts: SENSORS (perceive), ACTUATORS (act), CONTROL (decide). A toaster is not a robot (no sensors). A Roomba is a robot (senses walls, decides path).",
      steps: [
        "SENSORS: Cameras, LIDAR, ultrasonic, force/torque, encoders, IMU (accelerometer + gyroscope).",
        "ACTUATORS: DC motors (continuous), stepper motors (precise positioning), servo motors (position control), pneumatic/hydraulic cylinders (linear).",
        "CONTROL: Sense → Plan → Act loop. Read sensors, decide, move. Cycle repeats.",
        "AUTOMATION vs ROBOTICS: Automation = fixed sequence (e.g., conveyor belt). Robotics = reprogrammable, flexible."
      ],
      analogy: "Robot = your body. Sensors = eyes/ears/nerves. Actuators = muscles. Control = brain/spine deciding what to do based on sensory input.",
      takeaway: "Robot = sensors + actuators + control (reprogrammable). Automation = fixed sequence."
    },
    {
      title: "Robot Anatomy — Joints, Links, and DOF",
      content: "A robot arm is a series of links connected by joints. Degrees of Freedom (DOF) = number of independent movements.",
      steps: [
        "REVOLUTE JOINT (R): Rotates (like elbow). PRISMATIC JOINT (P): Slides (like a piston).",
        "DOF: Each independent joint = 1 DOF. A 6-axis arm has 6 DOF (3 for position, 3 for orientation).",
        "WORKSPACE (ENVELOPE): The volume the robot can reach. Depends on joint ranges and link lengths.",
        "PAYLOAD: Maximum weight the robot can handle at full extension.",
        "REPEATABILITY: How precisely the robot returns to a taught position (±mm).",
        "ACCURACY: How close the robot gets to a programmed position (different from repeatability)."
      ],
      formula: "DOF = number of independent joint axes. For full positioning in 3D space: need 6 DOF.",
      takeaway: "DOF = number of joints. 6 DOF = full 3D position + orientation. Payload = max weight. Robots are precise, not necessarily accurate."
    },
    {
      title: "Robot Types and Applications",
      content: "Different robot types suit different tasks. Classified by geometry and application.",
      steps: [
        "ARTICULATED (6-axis): Most common industrial robot. Like a human arm. For welding, painting, material handling.",
        "SCARA: Selective Compliance. Rigid in vertical, compliant in horizontal. For assembly, pick-and-place. Fast.",
        "CARTESIAN (Gantry): Moves in X, Y, Z. Linear axes. Large workspace. For heavy payloads, CNC.",
        "DELTA (Parallel): Spider-like. Very fast. For pick-and-place, food packaging, light assembly.",
        "COLLABORATIVE (Cobot): Designed to work alongside humans. Force-limited, safe. For light assembly, machine tending.",
        "MOBILE: AGV (Automated Guided Vehicle), AMR (Autonomous Mobile Robot). For material transport in warehouses, factories."
      ],
      takeaway: "Articulated = general purpose. SCARA = assembly. Cartesian = heavy. Delta = fast pick. Cobot = human-safe. Mobile = transport."
    },
    {
      title: "Robot Sensors and Feedback",
      content: "Robots need feedback to know their position and interact with the environment.",
      steps: [
        "ENCODERS: Measure joint position. Incremental (counts pulses) or absolute (unique position per revolution).",
        "FORCE/TORQUE SENSORS: Measure forces at the wrist or joints. Enable assembly, polishing, force-controlled tasks.",
        "VISION: Cameras for object detection, inspection, guidance. 2D (simple) or 3D/stereo (depth).",
        "PROXIMITY: Inductive (metal), capacitive (various), ultrasonic, LIDAR (laser ranging).",
        "SAFETY: Light curtains, safety mats, laser scanners that stop the robot if a person enters the workspace."
      ],
      takeaway: "Encoders = joint feedback. Force sensors = interaction control. Vision = object detection. Safety sensors = protect humans."
    }
  ]
},

// ===== 19. TESTING, TROUBLESHOOTING & MAINTENANCE =====
{
  topic: "Testing, Troubleshooting & Maintenance",
  sections: [
    {
      title: "Troubleshooting Methodology — Systematic Detective Work",
      content: "Define symptom → Identify possible causes → Test systematically → Isolate fault → Fix → Verify. Change ONE thing at a time and observe.",
      steps: [
        "1. DEFINE: What exactly is wrong? No output? Wrong value? Intermittent? When does it happen?",
        "2. HALF-SPLIT: Divide system in half. Test the middle point. If ok, fault is in second half. Repeat. Fastest isolation method.",
        "3. COMPARE: Compare with a known-working unit. What's different?",
        "4. REPLACE: Swap suspected component with known-good one. Does problem move?",
        "5. VERIFY: After fix, test that system works and fault doesn't return."
      ],
      analogy: "Troubleshooting = doctor diagnosing illness. Symptoms → tests → diagnosis → treatment. Half-split = checking if pain is in upper or lower body first.",
      takeaway: "Define symptom → half-split → test → swap → verify. Change one thing at a time."
    },
    {
      title: "Test Equipment — The Troubleshooter's Tools",
      content: "Each tool tells you something different. Use the right tool for the right measurement.",
      steps: [
        "MULTIMETER (DMM): Measures voltage, current, resistance, continuity. First tool for every job. Check power supply first!",
        "OSCILLOSCOPE: Shows voltage vs TIME. See waveforms, timing, noise, glitches. Essential for dynamic signals.",
        "SIGNAL GENERATOR: Produces test signals (sine, square, ramp, arbitrary). Inject signal, trace through system.",
        "LOGIC ANALYZER: Captures many digital signals simultaneously. For debugging digital buses (SPI, I2C).",
        "FUNCTIONAL TESTER: Tests if a component works (transistor tester, cable tester, insulation tester).",
        "DATA LOGGER: Records measurements over time. For intermittent faults, temperature drift, long-term monitoring."
      ],
      takeaway: "Multimeter = power/continuity first. Scope = see the signal. Generator = inject test signal. Logger = catch intermittents."
    },
    {
      title: "Common Failure Modes",
      content: "Know the most likely failures first: power supply, connections, then components.",
      steps: [
        "POWER SUPPLY: Check for correct voltage, ripple, noise. #1 cause of electronic failures.",
        "CONNECTIONS: Loose wire, cold solder joint, corroded contact, oxidized connector. #2 cause.",
        "CAPACITORS: Bulging, leaking, dried out (electrolytic). Loss of capacitance, increased ESR.",
        "SEMICONDUCTORS: Overheating (main cause). MOSFETs and diodes fail short or open.",
        "RELAYS/CONTACTS: Worn, pitted, welded. Arcing damage over time.",
        "SENSORS: Drift, contamination, mechanical damage. Calibration out of spec.",
        "CABLES: Broken wire inside insulation (flexing damage), chafed insulation, cut by sharp edge."
      ],
      analogy: "Common failures = a doctor knowing the most common diseases. When a patient has a cough, you check for cold/flu first, not a rare lung disease. When equipment fails, check power first, then connections.",
      takeaway: "Check power first. Then connections. Then look for visible damage (bulging caps, burnt components). Then measure."
    },
    {
      title: "Preventive vs Predictive vs Breakdown Maintenance",
      content: "Three maintenance strategies. Proactive is cheaper than reactive.",
      steps: [
        "BREAKDOWN (Reactive): Fix it when it breaks. Most expensive (downtime, emergency repair costs, secondary damage).",
        "PREVENTIVE (Scheduled): Replace/ service at fixed intervals. Example: change oil every 6 months. Prevents unexpected failures but may replace still-good parts.",
        "PREDICTIVE (Condition-Based): Monitor condition and act when needed. Example: vibration analysis, thermal imaging, oil analysis. Most cost-effective — fix only when data shows it's needed.",
        "Reliability-Centered Maintenance (RCM): Optimize maintenance strategy based on failure consequences. Critical equipment → predictive. Non-critical → breakdown."
      ],
      formula: "MTBF = Mean Time Between Failures. MTTR = Mean Time To Repair. Availability = MTBF/(MTBF+MTTR).",
      takeaway: "Predictive (condition-based) = most efficient. Preventive = scheduled. Breakdown = most expensive (emergency). RCM = match strategy to criticality."
    },
    {
      title: "Documentation and Reporting",
      content: "Document everything. Your notes help the next technician and create a history for pattern analysis.",
      steps: [
        "LOG: Date, equipment ID, fault description, measurements taken, diagnosis, repair action, parts used, time spent.",
        "PHOTOS: Take before and after photos. Show the failed part, location, test setup.",
        "SCHEMATICS: Mark measured voltages on the schematic. Circle the fault location.",
        "ROOT CAUSE: Ask 'why' 5 times to get from symptom to root cause. Don't stop at 'the fuse blew' — ask why it blew.",
        "FEEDBACK: Report findings to engineering. Common failure patterns may indicate design flaw or systemic issue."
      ],
      tool: "5 Whys technique: Start with symptom → ask why → answer → ask why again → repeat until root cause is found.",
      takeaway: "Document: what, when, where, how, why. Photos help. 5 Whys finds root cause. Share findings."
    }
  ]
}

];
