/* =========================================================
   THEORY — Complete (all 19 topics)
   Slow Learner Method — full coverage for 1010+ questions
   ========================================================= */
var THEORY_DATA = [

// ===== 1. BASIC ELECTRICAL & ELECTRONICS =====
{
  topic: "Basic Electrical & Electronics Fundamentals",
  sections: [
    {
      title: "Ohm's Law — The One Rule to Rule Them All",
      content: "Ohm's Law says Voltage = Current × Resistance. It is the single most important formula in all of electronics. If you understand this one equation, you can analyse 80% of circuits.",
      steps: [
        "V = I × R — If you know any two values, you can find the third.",
        "I = V / R — To find current, divide voltage by resistance.",
        "R = V / I — To find resistance, divide voltage by current.",
        "Units: Volts (V), Amperes (A), Ohms (Ω).",
        "MEMORY TRICK: 'Vir' — V over I gives R. Or draw the triangle: V on top, I×R below."
      ],
      analogy: "Water pipe: Voltage = water pressure (push), Current = flow rate (liters/sec), Resistance = pipe narrowness. High pressure + narrow pipe = less flow. Low pressure + wide pipe = more flow.",
      formula: "V = I × R    |    I = V / R    |    R = V / I",
      commonMistake: "Ohm's Law only works for LINEAR resistors (constant R). Diodes, transistors, lightbulbs do NOT follow Ohm's Law — their resistance changes with voltage/current.",
      worked: "Q: A 12V battery across a 4Ω resistor. What current flows? A: I = V/R = 12/4 = 3A. Q: What voltage across a 10Ω resistor carrying 0.5A? A: V = I×R = 0.5×10 = 5V.",
      takeaway: "V=IR is the foundation. Memorise the three forms. Check units — milliamps × kilohms gives volts if converted properly."
    },
    {
      title: "Power — How Much Energy is Being Used?",
      content: "Power is the rate at which electrical energy is converted to heat, light, or motion. A bright bulb uses more power than a dim one.",
      steps: [
        "P = V × I — Power equals voltage times current. This ALWAYS works.",
        "P = I² × R — Use when you know current and resistance.",
        "P = V² / R — Use when you know voltage and resistance.",
        "Units: Watts (W). 1 watt = 1 volt × 1 amp.",
        "Energy (kWh) = Power (kW) × Time (hours). Your electricity bill measures kWh."
      ],
      analogy: "Power is like the speed of filling a bucket. Voltage = water pressure, current = hose diameter. High pressure × big hose = fills fast (high power).",
      formula: "P = V × I = I²R = V²/R",
      commonMistake: "Don't confuse Power (rate) with Energy (total). A 100W bulb running 10 hours uses 1000 Wh = 1 kWh of energy.",
      worked: "Q: A heater draws 5A from 240V. Find power. A: P = 240×5 = 1200W. Q: A 100W bulb runs on 240V. Find resistance. A: R = V²/P = 240²/100 = 576Ω.",
      takeaway: "Learn all three power formulas. P=VI is the gateway. Use I²R for power lost in resistance. Use V²/R when you know the voltage."
    },
    {
      title: "Series Circuits — One Path, Current is King",
      content: "In a series circuit, components connect end-to-end. There's only ONE path for current. The same current flows through EVERY component.",
      steps: [
        "Total Resistance: R_total = R1 + R2 + R3 + ... (just add them up)",
        "Current: I = V_source / R_total (Ohm's Law on the whole circuit)",
        "Voltage Drops: V1 = I × R1, V2 = I × R2, etc.",
        "KVL: Sum of all voltage drops = source voltage. V_source = V1 + V2 + V3 + ...",
        "The largest resistor drops the most voltage."
      ],
      analogy: "Series = a single-lane road with toll booths. Every car (current) passes through every booth (resistor). Each booth takes some money (voltage drop). More booths = more total money taken.",
      formula: "R_total = R1 + R2 + R3 + ...   |   I = V / R_total   |   V_n = I × R_n",
      commonMistake: "In series, if ONE component breaks (opens), ALL current stops.",
      worked: "Q: R1=10Ω, R2=20Ω, R3=30Ω in series with 12V. Find total R, current, and voltages. A: R_total = 60Ω. I = 12/60 = 0.2A. V1=2V, V2=4V, V3=6V. Check: 2+4+6=12V ✓",
      takeaway: "In series: current SAME everywhere, voltage DIVIDES. Big resistor = big voltage drop."
    },
    {
      title: "Parallel Circuits — Multiple Paths, Voltage is King",
      content: "In a parallel circuit, components connect across the same two points. Each gets FULL source voltage. Current splits between the paths.",
      steps: [
        "Voltage: SAME across every branch.",
        "Current: I_total = I1 + I2 + I3 + ... (divides between branches)",
        "KCL: Current entering a junction = current leaving it.",
        "1/R_total = 1/R1 + 1/R2 + 1/R3 + ...",
        "For TWO resistors: R_total = (R1 × R2) / (R1 + R2) — 'product over sum'.",
        "Total parallel resistance is ALWAYS LESS than the smallest resistor."
      ],
      analogy: "Parallel = highway with multiple lanes. Each lane (resistor) carries some cars (current). Adding more lanes = less total resistance = more total flow.",
      formula: "1/R_total = 1/R1 + 1/R2 + ... | For 2: R_total = (R1×R2)/(R1+R2) | I_n = V / R_n",
      commonMistake: "10Ω || 10Ω = 5Ω (not 10). 10Ω || 100Ω ≈ 9.1Ω (less than smallest).",
      worked: "Q: R1=4Ω, R2=8Ω parallel across 12V. Find R_total, I_total, I1, I2. A: R_total = (4×8)/(4+8)=2.67Ω. I_total=12/2.67=4.5A. I1=12/4=3A. I2=12/8=1.5A. Check: 3+1.5=4.5 ✓",
      takeaway: "In parallel: voltage SAME everywhere, current DIVIDES. Small resistor = more current."
    },
    {
      title: "Kirchhoff's Laws — Circuit Analysis Foundation",
      content: "Two laws that work for ANY circuit. They are the foundation of mesh and nodal analysis.",
      steps: [
        "KVL: Sum of all voltages around ANY closed loop = 0. Voltage rises (batteries) and drops (resistors) must cancel.",
        "KCL: At ANY junction, current entering = current leaving. What goes in must come out."
      ],
      analogy: "KVL = walking around a block. Net elevation change = 0. KCL = fork in a river. Water entering = water leaving via both branches.",
      formula: "KVL: ΣV = 0 around any closed loop. KCL: ΣI_in = ΣI_out at any node.",
      takeaway: "KVL and KCL never fail. When stuck, write KVL equations for loops and KCL for nodes."
    },
    {
      title: "Wye (Y) and Delta (Δ) Conversion",
      content: "Three resistors can connect as Y (wye) or Δ (delta). Convert between them for three-phase analysis.",
      steps: [
        "Y→Δ (balanced): Each Δ arm = 3 × R_Y.",
        "Δ→Y (balanced): Each Y arm = R_Δ / 3.",
        "Unbalanced: Use product-over-sum formulas.",
        "MEMORY: Y→Δ multiply by 3. Δ→Y divide by 3. (Balanced only.)"
      ],
      formula: "Balanced: R_Δ = 3R_Y, R_Y = R_Δ/3",
      worked: "Q: Three 15Ω resistors in Y. Find each Δ arm. A: R_Δ = 3×15 = 45Ω.",
      takeaway: "Balanced Y↔Δ: multiply or divide by 3. Unbalanced: use full formulas."
    },
    {
      title: "AC Circuits — RMS, Impedance, Power Factor",
      content: "AC changes direction sinusoidally (50 Hz in India). Unlike DC, AC has magnitude AND phase. Key: RMS, impedance, power factor.",
      steps: [
        "RMS: The DC equivalent. For sine: V_RMS = V_peak / √2 ≈ 0.707 × V_peak.",
        "V_peak = V_RMS × √2 ≈ 1.414 × V_RMS. A 240V RMS supply peaks at 339V.",
        "IMPEDANCE Z = R + jX. |Z| = √(R² + X²). θ = tan⁻¹(X/R).",
        "POWER FACTOR: pf = cosθ = R/|Z|. Real power P = V × I × pf.",
        "COMPLEX POWER S = P + jQ. P = real (W), Q = reactive (VAR), |S| = apparent (VA)."
      ],
      analogy: "AC = pendulum swinging. RMS = the 'average effective' value. Peaks are higher — wire insulation must handle the peak.",
      formula: "V_RMS = V_peak/√2 | |Z| = √(R²+X²) | pf = cosθ = R/|Z| | P = VI·cosθ",
      commonMistake: "Never mix peak and RMS. Power formulas use RMS values only.",
      worked: "Q: 120V RMS feeds R=20Ω, X_L=60Ω series. Find |Z|, I, P. A: |Z| = √(20²+60²)=63.2Ω. I=120/63.2=1.9A. pf=20/63.2=0.316. P=120×1.9×0.316=72W.",
      takeaway: "AC = RMS values, impedance, power factor. pf tells you how much current does real work."
    },
    {
      title: "RLC Circuits — Resonance and Bandwidth",
      content: "At RESONANCE, inductive and capacitive effects cancel. Circuit acts like a pure resistor.",
      steps: [
        "f₀ = 1 / (2π√(LC)). At resonance X_L = X_C.",
        "Series RLC: minimum impedance at resonance → maximum current.",
        "Q = f₀ / BW = ω₀L / R. Higher Q = sharper peak = more selective.",
        "BW = f₀ / Q. Range where power ≥ half the peak power."
      ],
      analogy: "Resonance = pushing a swing at just the right moment. R = brake on swing (damping). Q = how many swings before stopping.",
      formula: "f₀ = 1/(2π√(LC)) | Q = f₀/BW = ω₀L/R | BW = f₀/Q",
      worked: "Q: L=20mH, C=0.05µF. Find f₀. A: f₀ = 1/(2π√(20e-3×5e-8)) = 1/(2π√(1e-9)) = 5033 Hz.",
      takeaway: "Resonance when X_L = X_C. Q tells sharpness. High Q = narrow bandpass."
    },
    {
      title: "Transformers — Voltage and Current Conversion",
      content: "Transformers transfer energy via magnetic coupling. Step up or step down voltage. AC only — never DC.",
      steps: [
        "Turns ratio N = N_p / N_s.",
        "V_s = V_p × N_s / N_p. Voltage scales with turns ratio.",
        "I_s = I_p × N_p / N_s. Current scales inversely.",
        "Ideal: P_in = P_out (power conserved).",
        "Real losses: Copper (I²R), Core (hysteresis, eddy currents)."
      ],
      analogy: "Transformer = gearbox. Step up voltage = shift to higher gear (speed up, torque down). Power stays same.",
      formula: "V_s/V_p = N_s/N_p | I_s/I_p = N_p/N_s | P_in = P_out (ideal)",
      worked: "Q: 500/100 turns, 240V primary. Find V_s. A: V_s = 240 × 100/500 = 48V.",
      takeaway: "More secondary turns = higher voltage, lower current. Power constant."
    },
    {
      title: "DC Machines — Motors and Generators",
      content: "DC motor converts electrical to mechanical energy. DC generator does the reverse. Key: back EMF.",
      steps: [
        "BACK EMF (E_b): Motor spinning generates voltage opposing the supply. E_b = V - I_a × R_a.",
        "I_a = (V - E_b) / R_a. More load → slower speed → lower E_b → more current → more torque.",
        "Torque T ∝ I_a × φ (shunt motor: T ∝ I_a).",
        "Speed N ∝ E_b / φ. Shunt motor: nearly constant speed.",
        "Types: Series (high starting torque), Shunt (constant speed), Compound (both)."
      ],
      analogy: "Back EMF = generator inside the motor fighting the battery. Unloaded: high speed, high back EMF, low current. Loaded: slower, lower back EMF, higher current.",
      formula: "E_b = V - I_aR_a | I_a = (V-E_b)/R_a | P_out = E_b × I_a",
      worked: "Q: Armature R=0.5Ω, V=220V, E_b=210V. Find I_a. A: I_a = (220-210)/0.5 = 20A.",
      takeaway: "Back EMF is key. More load = slower = less back EMF = more current = more torque."
    },
    {
      title: "Three-Phase Power",
      content: "Three AC voltages 120° apart. More efficient for motors and heavy loads. Standard industrial power.",
      steps: [
        "V_L = √3 × V_ph ≈ 1.732 × V_ph. India: V_L=415V, V_ph=240V.",
        "Star (Wye): V_L = √3 × V_ph, I_L = I_ph.",
        "Delta: V_L = V_ph, I_L = √3 × I_ph.",
        "P = √3 × V_L × I_L × pf (total three-phase power)."
      ],
      formula: "V_L = √3 × V_ph (star) | P = √3 × V_L × I_L × pf",
      commonMistake: "415V is always line-to-line. Phase = 415/√3 = 240V.",
      worked: "Q: Balanced load draws 20kW at pf=1 from 415V line. Find I_L. A: I_L = P/(√3×V_L×pf) = 20000/(1.732×415×1) = 27.82A.",
      takeaway: "Three-phase: V_L = √3 × V_ph. Power formula includes √3."
    },
    {
      title: "Network Theorems — Thevenin, Norton, Superposition",
      content: "Simplify complex circuits to equivalent circuits for easy analysis.",
      steps: [
        "THEVENIN: Any linear circuit = V_th in series with R_th.",
        "V_th = open-circuit voltage at terminals.",
        "R_th = resistance looking into terminals with sources OFF (voltage sources → short, current → open).",
        "NORTON: I_N = V_th / R_th in parallel with R_N = R_th.",
        "SUPERPOSITION: Find contribution of each source independently, then sum.",
        "Max Power Transfer: Maximum power to load when R_load = R_th."
      ],
      formula: "V_th = V_oc | R_th = R_looking_in (sources off) | P_max when R_L = R_th",
      takeaway: "Thevenin = one V + one R equivalent. Norton = current twin. Superposition = analyse one source at a time."
    },
    {
      title: "Meters — Ammeter, Voltmeter, Ohmmeter",
      content: "Practical meters use a sensitive movement (e.g., 5mA, 20Ω) extended with shunt/multiplier resistors.",
      steps: [
        "AMMETER: Connects in SERIES. Very LOW internal resistance.",
        "Shunt extends ammeter range: R_shunt = I_m×R_m / (I_total - I_m).",
        "VOLTMETER: Connects in PARALLEL. Very HIGH internal resistance.",
        "Multiplier extends voltmeter range: R_mult = (V_range / I_m) - R_m.",
        "OHMMETER: Battery + meter. High resistance = less current."
      ],
      formula: "R_shunt = I_mR_m/(I_total - I_m) | R_mult = V_range/I_m - R_m",
      worked: "Q: 5mA movement, 20Ω. Extend to 20A. Find shunt. A: Shunt carries 19.995A. V_m = 0.005×20 = 0.1V. R_shunt = 0.1/19.995 = 0.005Ω.",
      takeaway: "Ammeter = low R in series. Voltmeter = high R in parallel. Shunt = parallel extension. Multiplier = series extension."
    }
  ]
},

// ===== 2. SENSORS & TRANSDUCERS =====
{
  topic: "Sensors & Transducers",
  sections: [
    {
      title: "Active vs Passive — The Power Question",
      content: "ACTIVE transducers generate their own output (like a generator). PASSIVE transducers change electrical properties and need external power.",
      steps: [
        "ACTIVE: Thermocouple (µV/°C), Piezoelectric (voltage from pressure), Photovoltaic (solar cell). No external power.",
        "PASSIVE: RTD (R changes with temp), Thermistor, Strain gauge, LVDT, Capacitive. Need external excitation.",
        "Active = self-powered, simpler wiring, tiny signals. Passive = needs circuitry to convert property change to voltage."
      ],
      analogy: "Active = microphone (generates electricity from sound). Passive = LDR (changes resistance with light, needs battery).",
      takeaway: "Active = self-generating. Passive = needs excitation. Exam loves asking which is which."
    },
    {
      title: "Temperature Sensors — RTD, Thermocouple, Thermistor",
      content: "Three main types: RTD (accurate, stable), Thermocouple (wide range, cheap), Thermistor (sensitive, narrow range).",
      steps: [
        "RTD (Pt100): 100Ω at 0°C. Resistance INCREASES with temp. R_T = R₀(1+αT), α≈0.00385/°C. Most stable. Range -200 to 850°C. Needs 3/4-wire connection.",
        "THERMOCOUPLE: Two dissimilar metals. Voltage ≈ 40µV/°C. Types K (chromel-alumel), J, T. Range -200 to 2300°C. Needs COLD JUNCTION COMPENSATION (CJC).",
        "THERMISTOR (NTC): Resistance DECREASES with temp. Very sensitive. Range -50 to 300°C. Highly nonlinear. Good for narrow-range precision.",
        "PYROMETER: Non-contact. Measures infrared. For high temps or moving objects."
      ],
      analogy: "RTD = accurate bathroom scale. Thermocouple = long measuring tape (great range, less precise). Thermistor = kitchen thermometer.",
      formula: "RTD: R_T = R₀(1+αT) | Thermocouple: V ≈ 40µV × ΔT (Type K)",
      takeaway: "RTD = accurate/stable. Thermocouple = wide range, needs CJC. Thermistor = sensitive, nonlinear. Pyrometer = non-contact."
    },
    {
      title: "Strain Gauges — Measuring Deformation",
      content: "A metal foil pattern bonded to a surface. Stretching changes resistance. Used in load cells, pressure sensors.",
      steps: [
        "Gauge Factor GF = (ΔR/R) / ε ≈ 2.",
        "Stretch → R increases. Compress → R decreases.",
        "Change is tiny (milliohms) — need Wheatstone bridge to measure.",
        "Quarter bridge = 1 active + 3 fixed. Half = 2 active. Full = 4 active.",
        "Temperature compensation: dummy gauge (unstressed) in adjacent bridge arm."
      ],
      analogy: "Strain gauge = rubber band with pencil marks. Stretch = marks farther apart (R up). Compress = closer (R down).",
      formula: "ε = (ΔR/R)/GF | Quarter bridge: V_out = V_ex × GF × ε / 4",
      takeaway: "Strain = ΔR/R. Use Wheatstone bridge. Temperature compensation critical."
    },
    {
      title: "LVDT — Linear Position Sensor",
      content: "Linear Variable Differential Transformer. AC-operated transformer with movable magnetic core. Frictionless, infinite resolution.",
      steps: [
        "One primary, TWO secondaries in series opposition.",
        "Core centered → both secondaries equal → V_out = 0.",
        "Core left → left secondary higher → output in phase.",
        "Core right → right secondary higher → output 180° out of phase.",
        "Output amplitude ∝ displacement. Phase = direction."
      ],
      analogy: "LVDT = seesaw with sensors at both ends. Centered = balanced. Slide left = left dips. Slide right = right dips.",
      takeaway: "Output voltage ∝ displacement. Phase = direction. No sliding contacts → reliable."
    },
    {
      title: "Piezoelectric Sensors — Dynamic Force/Pressure",
      content: "Crystals generate voltage when mechanically stressed. For vibration, pressure, acceleration.",
      steps: [
        "Charge generated only when force CHANGES — AC sensor only (no DC).",
        "High output impedance → needs charge amplifier.",
        "Applications: Accelerometers, knock sensors, microphones, ultrasound.",
        "Very wide frequency range (Hz to MHz)."
      ],
      analogy: "Piezo = sponge with water. Squeeze → water out (voltage). Hold → water stays (leaks). Release → water back in. Only squeeze/release produces flow.",
      takeaway: "Dynamic only (no DC). High impedance. Use charge amplifier. Great for vibration/shock."
    },
    {
      title: "Force, Pressure, and Flow — Principles",
      content: "Each physical quantity has specific sensor technologies suited to different conditions.",
      steps: [
        "FORCE: Strain gauges on load cell (metal bar bending) → Wheatstone bridge.",
        "PRESSURE: Diaphragm + strain gauges (transmitter), capacitive diaphragm, Bourdon tube (mechanical gauge).",
        "DIFFERENTIAL PRESSURE: Used for flow (orifice) and level (hydrostatic head).",
        "FLOW: Orifice plate (ΔP ∝ flow²), Turbine (frequency ∝ flow), Electromagnetic (conductive only), Ultrasonic (Doppler/transit time), Coriolis (mass flow, most accurate).",
        "LEVEL: Sight glass, DP (hydrostatic = ρgh), Radar (microwave), Ultrasonic, Capacitance."
      ],
      analogy: "Pressure sensor = drum skin (diaphragm) that bulges. Flow = paddle wheel in a river. Level = measuring tape with weight (radar).",
      commonMistake: "Orifice plate: ΔP ∝ flow². At half flow, ΔP is only ¼. Sensor needs wide turndown ratio.",
      takeaway: "For each: know PRINCIPLE (how it works) and LIMITATION (what conditions apply)."
    }
  ]
},

// ===== 3. SIGNAL CONDITIONING & OP-AMP =====
{
  topic: "Signal Conditioning & Op-Amp Circuits",
  sections: [
    {
      title: "Op-Amp Golden Rules — The Two Laws",
      content: "Ideal op-amp: infinite gain, infinite input impedance, zero output impedance. With negative feedback, two rules let you analyse any circuit.",
      steps: [
        "RULE 1 (Virtual Short): V(+) = V(−). Op-amp drives output until inputs are EQUAL.",
        "RULE 2 (No Input Current): I(+) = I(−) = 0. Input impedance is infinite.",
        "These two rules are ALL you need. Negative feedback = output connected to (−) input."
      ],
      analogy: "Op-amp with feedback = thermostat. Set desired temp (input), read actual temp (feedback), adjust heater (output) until they match.",
      takeaway: "V(+) = V(−) and I_in = 0. Memorise these. They unlock every op-amp circuit."
    },
    {
      title: "Inverting Amplifier — Gain with Sign Flip",
      content: "Input to (−) terminal through R_in. Feedback R_f from output to (−). (+) to ground.",
      steps: [
        "V(−) = V(+) = 0V (virtual ground at (−) terminal).",
        "Current through R_in = V_in / R_in. Same current flows through R_f (Rule 2).",
        "V_out = -I × R_f = -(V_in / R_in) × R_f.",
        "Gain = -R_f / R_in. Negative sign = output is INVERTED."
      ],
      formula: "V_out = -(R_f / R_in) × V_in | Gain = -R_f / R_in",
      commonMistake: "The (−) input is at virtual ground (0V) — NOT physically grounded. Never short it to ground directly!",
      worked: "Q: R_in=1kΩ, R_f=10kΩ, V_in=2V. Find V_out. A: V_out = -(10k/1k)×2 = -20V.",
      takeaway: "Inverting: Gain = -R_f/R_in. Virtual ground at (−) input."
    },
    {
      title: "Non-Inverting Amplifier — No Polarity Flip",
      content: "Input to (+) terminal. Voltage divider (R_f, R_in) from output to (−).",
      steps: [
        "V(−) = V(+) = V_in (Rule 1).",
        "Voltage divider: V(−) = V_out × R_in / (R_f + R_in).",
        "So V_in = V_out × R_in / (R_f + R_in). Rearranged: V_out = V_in × (1 + R_f/R_in).",
        "Gain = 1 + R_f/R_in. Always ≥ 1."
      ],
      formula: "V_out = V_in × (1 + R_f / R_in) | Gain = 1 + R_f / R_in",
      worked: "Q: R_in=1kΩ, R_f=9kΩ, V_in=1V. Find V_out. A: V_out = 1×(1+9/1) = 10V.",
      takeaway: "Non-inverting: V_out = V_in × (1 + R_f/R_in). Very high input impedance."
    },
    {
      title: "Voltage Follower (Buffer) — Unity Gain Isolation",
      content: "Output directly to (−) input. No resistors. V_out = V_in exactly. Used to isolate stages.",
      steps: [
        "Gain = 1 exactly.",
        "Infinite input impedance (doesn't load source). Zero output impedance (drives loads).",
        "Critical for sensors with high output impedance (pH probe, piezo)."
      ],
      analogy: "Buffer = power steering. Your steering wheel movements (low power) control the car (high power) without loading you.",
      takeaway: "Buffer = gain of 1, impedance matching, isolation."
    },
    {
      title: "Summing Amplifier — Adding Voltages",
      content: "Multiple inputs through R1, R2, R3... to (−) input. One feedback R_f.",
      steps: [
        "Virtual ground at (−). Currents: I1 = V1/R1, I2 = V2/R2, etc.",
        "Total current through R_f = I1 + I2 + I3 + ...",
        "V_out = -R_f × (V1/R1 + V2/R2 + V3/R3 + ...)."
      ],
      formula: "V_out = -R_f × (V1/R1 + V2/R2 + V3/R3 + ...)",
      takeaway: "Summing amp adds voltages. Each input has gain = -R_f/R_n."
    },
    {
      title: "Differential Amplifier — Subtract Two Signals",
      content: "Amplifies the DIFFERENCE between two inputs. Rejects common-mode noise.",
      steps: [
        "V1 to (−) through R1. V2 to (+) through R2.",
        "Ideal: V_out = (R_f/R_1) × (V2 - V1).",
        "CMRR = Common Mode Rejection Ratio. Higher = better at rejecting common noise.",
        "Instrumentation amplifier: 3 op-amps for very high CMRR and input impedance."
      ],
      formula: "V_out = (R_f/R_1)×(V2-V1) | CMRR(dB) = 20log(A_diff/A_cm)",
      analogy: "Diff amp = person hearing only the DIFFERENCE between two microphones. Same room noise cancels. Only the unique signal passes.",
      takeaway: "Diff amp = subtracts, amplifies difference. High CMRR = rejects common noise."
    },
    {
      title: "Active Filters — Op-Amp Based Filtering",
      content: "Op-amp + RC = active filter. No inductors. Can amplify and filter simultaneously.",
      steps: [
        "LOW-PASS: Blocks high frequencies. f_c = 1/(2πRC).",
        "HIGH-PASS: Blocks low frequencies.",
        "BAND-PASS: Passes a specific frequency range.",
        "Roll-off: 1st order = -20dB/decade. 2nd order = -40dB/decade."
      ],
      formula: "Low-pass f_c = 1/(2πRC) | Integrator: V_out = -(1/RC)∫V_in dt",
      takeaway: "Active filters = op-amp + RC. No inductors. Order determines roll-off steepness."
    },
    {
      title: "Comparators and Schmitt Triggers",
      content: "Comparator: compares two voltages, outputs HIGH or LOW (open loop). Schmitt trigger: adds hysteresis to prevent noise-induced chatter.",
      steps: [
        "COMPARATOR: V(+) > V(−) → output HIGH. V(+) < V(−) → output LOW.",
        "SCHMITT TRIGGER: Positive feedback. Two thresholds: V_upper and V_lower.",
        "Input rises above V_upper → switches HIGH. Must fall below V_lower to switch back.",
        "Hysteresis = V_upper - V_lower. Wider = more noise immunity."
      ],
      formula: "V_hyst = V_sat × R1/(R1+R2)",
      takeaway: "Comparator = single threshold (noisy). Schmitt = two thresholds, hysteresis, clean switching."
    },
    {
      title: "Op-Amp Non-Idealities — Real World Issues",
      content: "Real op-amps have input bias current, offset voltage, finite gain-bandwidth.",
      steps: [
        "BIAS CURRENT (I_b): Tiny DC current flows into inputs. Creates voltage error across source resistors. Fix: equalize resistance seen by both inputs.",
        "OFFSET VOLTAGE (V_os): Output ≠ 0V when inputs equal. Typical 1-5mV.",
        "SLEW RATE: Max rate of output change (V/µs). Limits high-freq performance.",
        "GAIN-BANDWIDTH PRODUCT: Gain × BW = constant. At high gain, BW is reduced."
      ],
      formula: "Error from I_b: V_err = I_b × R_source | SR = 2πfV_p | GBP = f × A_v",
      takeaway: "Bias current = offset error. Slew rate = speed limit. GBP = gain-BW trade-off."
    },
    {
      title: "Instrumentation Amplifier — Precision Measurement",
      content: "Three op-amps: two input buffers + differential amp. Very high CMRR and input impedance. Gain set by one resistor.",
      steps: [
        "Input impedance: GΩ (doesn't load sensor).",
        "CMRR: 80-120 dB (rejects 50Hz hum on long wires).",
        "Gain: A_v = 1 + 2R_f / R_g (set by single resistor R_g).",
        "Standard for: strain gauge bridge, RTD, ECG, any small differential signal in noisy environment."
      ],
      analogy: "INA = security guard who ignores crowd noise (common mode) but hears a whisper (small signal).",
      takeaway: "INA = high Z_in + high CMRR + adjustable gain. The standard for precision sensors."
    }
  ]
},

// ===== 4. ANALOG & DIGITAL ELECTRONICS =====
{
  topic: "Analog & Digital Electronics",
  sections: [
    {
      title: "Diodes — The One-Way Valve",
      content: "Diode conducts in ONE direction only (forward bias). Blocks reverse (until breakdown). PN junction.",
      steps: [
        "FORWARD: Anode > Cathode. Conducts. V_drop ≈ 0.7V (Si), 0.3V (Ge).",
        "REVERSE: Blocks until REVERSE BREAKDOWN voltage.",
        "ZENER: Designed for reverse breakdown at specific voltage. Used as voltage regulator.",
        "Half-wave rectifier: 1 diode. Full-wave bridge: 4 diodes. Smoothing capacitor reduces ripple."
      ],
      analogy: "Diode = one-way door. Forward = push through. Reverse = door locked. Push hard enough (breakdown) = door breaks.",
      formula: "V_out = V_in - 0.7V (forward) | Zener: V_out = V_z (if V_in > V_z)",
      takeaway: "Diode = one-way. 0.7V drop. Zener = reverse breakdown regulator."
    },
    {
      title: "BJT Transistors — Current-Controlled Switch/Amp",
      content: "Three-terminal: Base, Collector, Emitter. Small base current controls large collector current.",
      steps: [
        "NPN: B positive relative to E turns ON. C→E current flows.",
        "β = I_C / I_B (current gain, typically 100-300).",
        "CUTOFF: OFF (I_C = 0). SATURATION: Fully ON (V_CE ≈ 0.2V). ACTIVE: Amplifier region.",
        "Common emitter amp: Small I_B change → large I_C change → amplified voltage across R_C."
      ],
      formula: "I_C = β × I_B | V_CE = V_CC - I_C × R_C | Sat: V_CE ≈ 0.2V",
      analogy: "BJT = faucet. Base current = handle turn (small). C-E current = water flow (large). β = multiplication factor.",
      takeaway: "BJT: β = I_C/I_B. Switch: saturation/cutoff. Amp: active region."
    },
    {
      title: "MOSFET — Voltage-Controlled Switch",
      content: "Gate voltage controls D-S current. Nearly zero gate current (GΩ impedance).",
      steps: [
        "Enhancement N-channel: V_GS > V_th turns ON. Higher V_GS = more current.",
        "Saturation: I_D = K(V_GS - V_th)² (amplifier region).",
        "Linear/triode: R_DS(on) very low (switch region).",
        "CMOS = N-channel + P-channel. Basis of all digital logic.",
        "MOSFET is static-sensitive — oxide layer can be destroyed by static electricity."
      ],
      formula: "Saturation: I_D = K(V_GS - V_th)²",
      analogy: "MOSFET = light switch activated by static electricity. Finger near switch plate (no contact = Gate voltage) turns light on/off.",
      takeaway: "MOSFET = voltage-controlled, zero gate current, fast, CMOS basis."
    },
    {
      title: "SCR and Triac — Power Control",
      content: "SCR (DC) and TRIAC (AC) are latching power switches. Once triggered, they stay ON until current drops to zero.",
      steps: [
        "SCR: PNPN. Gate pulse latches ON. Stays ON until current < holding current. DC or AC until zero-cross.",
        "TRIAC: Bidirectional (two SCRs back-to-back). Conducts both AC halves. One gate pulse triggers both directions.",
        "PHASE CONTROL (firing angle α): Earlier firing = more power. Light dimmers, fan speed controllers."
      ],
      analogy: "SCR = self-latching doorstop. Push (gate pulse) → wedges open. Stays wedged until released (current drops to zero).",
      formula: "Power at firing angle α: P = P_max × (1 - α/π + sin(2α)/(2π))",
      takeaway: "SCR = DC latch. TRIAC = AC bidirectional. Phase control = adjust firing angle to vary power."
    },
    {
      title: "ADC and DAC — Bridging Analog and Digital",
      content: "ADC converts analog voltage to digital number. DAC does the reverse.",
      steps: [
        "Resolution n bits → 2ⁿ values. 8-bit=256, 10-bit=1024, 12-bit=4096, 16-bit=65536.",
        "LSB = V_ref / 2ⁿ. Smallest detectable voltage change.",
        "Quantization error = ±½ LSB. Sampling rate must be ≥ 2× highest frequency (Nyquist).",
        "ADC types: SAR (good balance), Flash (very fast, low res), Sigma-Delta (high res, slow), Dual-slope (accurate, slow).",
        "DAC: R-2R ladder (most common), binary-weighted resistor, PWM (cheap)."
      ],
      formula: "LSB = V_ref / 2ⁿ | Digital value = int(V_in × 2ⁿ / V_ref) | f_sample ≥ 2×f_max",
      worked: "Q: 10-bit ADC, V_ref=5V. Digital value for 2.5V? A: LSB = 5/1024=4.88mV. Value = 2.5/0.00488 = 512.",
      takeaway: "Resolution = smallest detectable change. Sample ≥ 2× highest frequency (Nyquist)."
    },
    {
      title: "Digital Logic — TTL vs CMOS",
      content: "Two main logic families: TTL (BJT-based, 5V only) and CMOS (MOSFET-based, wide voltage).",
      steps: [
        "TTL: 5V. 0 = 0-0.8V, 1 = 2-5V. Input sources current (~1.6mA for 0). mW/gate power.",
        "CMOS: 1.8-15V. 0 = 0-0.3×V_DD, 1 = 0.7×V_DD to V_DD. Almost zero static power. Dynamic power = fCV².",
        "CMOS has better noise margins. TTL fan-out ~10, CMOS fan-out very high.",
        "Interfacing TTL→CMOS: pull-up resistors needed (TTL output 3.5V may not reach CMOS 3.5V threshold)."
      ],
      formula: "CMOS dynamic power: P = f × C × V²",
      takeaway: "TTL = faster historically, higher power, 5V only. CMOS = lower power, wide voltage, dominant today."
    },
    {
      title: "Crystal Oscillators — Stable Clock",
      content: "Quartz crystal resonates at precise frequency when electrically stimulated. Very stable.",
      steps: [
        "Electrical equivalent = RLC tank with very high Q (10⁴-10⁶).",
        "Common: 32.768kHz (RTC), 4-20MHz (MCU clock).",
        "Needs two load capacitors (12-22pF typical).",
        "TCXO = temperature compensated. OCXO = oven controlled (most stable)."
      ],
      analogy: "Crystal = tuning fork. Tap it → rings at exactly 440Hz. Crystal rings electrically at its natural frequency.",
      takeaway: "Crystal = most stable clock. Needs load capacitors. Q is very high."
    },
    {
      title: "555 Timer — Swiss Army Knife of Timing",
      content: "NE555 can produce delays (monostable) or square waves (astable).",
      steps: [
        "ASTABLE: Pins 2&6 connected. Charges through R1+R2, discharges through R2. f = 1.44/((R1+2R2)×C).",
        "MONOSTABLE: Trigger (pin 2) makes output HIGH for T = 1.1×R×C, then LOW.",
        "Pinout: 1=GND, 2=Trigger, 3=Output, 4=Reset, 5=Control V, 6=Threshold, 7=Discharge, 8=V_CC."
      ],
      formula: "Astable: f = 1.44/((R1+2R2)×C) | Monostable: T = 1.1×R×C",
      takeaway: "555 = timer/oscillator. Astable = free-running. Monostable = one-shot. Learn the pinout!"
    },
    {
      title: "Rectifiers and Power Supplies",
      content: "AC → DC conversion chain: Transformer → Rectifier → Filter → Regulator.",
      steps: [
        "Half-wave: 1 diode, high ripple. Full-wave bridge: 4 diodes, less ripple.",
        "Smoothing capacitor: V_ripple = I_load / (f×C). Full-wave f = 2×line.",
        "Regulator: 78xx (positive), 79xx (negative). 7805 = 5V output."
      ],
      formula: "V_ripple = I_load / (f×C) (full-wave) | V_DC ≈ V_peak - 1.4V - V_ripple/2",
      takeaway: "Chain: Transformer → Rectifier → Cap filter → Regulator. Bridge rectifier is standard."
    }
  ]
},

// ===== 5. MEASUREMENT SYSTEMS, ERRORS & CALIBRATION =====
{
  topic: "Measurement Systems, Errors & Calibration",
  sections: [
    {
      title: "Accuracy vs Precision — The Darts Analogy",
      content: "Accuracy = closeness to true value. Precision = repeatability. They are DIFFERENT.",
      steps: [
        "ACCURACY: Affected by systematic errors. Improved by calibration.",
        "PRECISION: Affected by random errors. Improved by averaging.",
        "SYSTEMATIC ERROR: Consistent bias (zero offset, scale error).",
        "RANDOM ERROR: Unpredictable (noise, friction, parallax)."
      ],
      analogy: "Darts: Accurate = bullseye. Precise = tight cluster. Systematic = all darts upper-left. Random = scattered.",
      formula: "Error = Measured - True | %Error = (Error/True)×100",
      takeaway: "Accuracy = fix with calibration. Precision = fix with averaging. Need both."
    },
    {
      title: "Types of Measurement Errors",
      content: "Gross (human), Systematic (instrument/environment), Random (noise).",
      steps: [
        "GROSS: Misreading, wrong range, bad connection. Eliminate by procedure and repetition.",
        "SYSTEMATIC: Calibration drift, zero offset, temp drift, parallax. Can be corrected once identified.",
        "RANDOM: Friction, noise, vibration, quantization. Reduce by averaging, cannot eliminate.",
        "Static error = constant measurement. Dynamic error = additional error from response lag."
      ],
      takeaway: "Gross = procedure fixes. Systematic = calibration fixes. Random = averaging reduces."
    },
    {
      title: "Calibration and Traceability",
      content: "Compare instrument against known standard. Traceability chain back to SI units.",
      steps: [
        "CALIBRATION: Known input → measure → adjust to match.",
        "TRACEABILITY: Your instrument → lab standard → national standard (NIST/NPL) → SI definition.",
        "Calibration interval: Typically 6-12 months. Instruments drift over time.",
        "Certificate: Documents as-found, adjustments, as-left, and uncertainty."
      ],
      analogy: "Traceability = family tree for measurements. Your ruler → gauge block → laser interferometer → speed of light definition.",
      takeaway: "Calibration = compare + adjust. Traceability = unbroken chain to SI."
    },
    {
      title: "Uncertainty Analysis — How Trustworthy?",
      content: "Every measurement has uncertainty. Combine all error sources using RSS.",
      steps: [
        "Type A: Statistical (standard deviation of repeated measurements).",
        "Type B: Other sources (specs, certificates, manufacturer data).",
        "Combined: U_c = √(u1² + u2² + ... + un²) (Root-Sum-Square).",
        "Expanded: U = k × U_c. k=2 gives ~95% confidence.",
        "Focus on dominant error source — fix the biggest problem first."
      ],
      formula: "RSS: U_c = √(u1² + u2² + ... + un²) | Expanded: U = k×U_c (k=2 for 95%)",
      analogy: "Uncertainty = photographer's depth of field. Not 'exactly 10m' but 'between 9.8 and 10.2m'.",
      takeaway: "Combine errors by RSS (not addition). k=2 for 95% confidence. Fix dominant error first."
    },
    {
      title: "Loading Errors — Instrument Affects the Measured",
      content: "Connecting a meter changes the circuit. The meter loads the circuit, causing error.",
      steps: [
        "VOLTMETER in parallel: If meter R is not ≫ circuit R, it draws current and reduces voltage.",
        "Rule: Meter R ≥ 100× circuit R for <1% loading error.",
        "AMMETER in series: If meter R is not ≪ circuit R, it adds resistance and reduces current.",
        "Rule: Ammeter R ≤ circuit R/100 for <1% loading error.",
        "Digital multimeter: 10MΩ typical input R. Analog: 20kΩ/V — on 10V range = 200kΩ. Much more loading!"
      ],
      formula: "Voltmeter loading approx = R_meter/(R_meter + R_circuit) × 100%",
      takeaway: "Voltmeter = high R = low loading. Ammeter = low R = low loading. Digital > analog."
    }
  ]
}

,

// ===== 6. PROCESS CONTROL FUNDAMENTALS =====
{
  topic: "Process Control Fundamentals (open/closed loop, PID)",
  sections: [
    {
      title: "Open Loop vs Closed Loop — With and Without Feedback",
      content: "Open-loop: does NOT check the result. Closed-loop: measures the result and corrects.",
      steps: [
        "OPEN-LOOP: Controller → Actuator. No measurement of output. Example: toaster running for set time regardless of bread color.",
        "CLOSED-LOOP: Controller compares measured PV to SP. Error = SP - PV. Corrects to reduce error.",
        "SP = Setpoint (desired value). PV = Process Variable (measured). MV = Manipulated Variable (controller output).",
        "DISTURBANCE: External factor that pushes PV away from SP (e.g., opening oven door)."
      ],
      analogy: "Open-loop = shower with fixed handles (set and hope). Closed-loop = adjust handles based on water feel (measure, compare, adjust).",
      takeaway: "Open-loop = no feedback. Closed-loop = has feedback, can maintain SP despite disturbances."
    },
    {
      title: "On-Off Control — Simple but Oscillates",
      content: "Output is either FULL ON or FULL OFF. Used where cycling is acceptable (home thermostat).",
      steps: [
        "PV < SP - hysteresis → ON. PV > SP + hysteresis → OFF.",
        "Hysteresis (deadband): small zone around SP where no action occurs. Prevents rapid cycling (chattering).",
        "Simple, cheap, no model needed. But PV constantly oscillates — never settles exactly."
      ],
      analogy: "On-off = toilet cistern. Float drops → full on (flush). Float rises → valve shuts. Water level cycles.",
      takeaway: "Simple but oscillates. Hysteresis prevents chattering. Not for precision."
    },
    {
      title: "PID Control — The Industry Standard",
      content: "Three correction terms: P (present error), I (past error), D (future error prediction).",
      steps: [
        "PROPORTIONAL: Output = K_P × Error. Big error = big correction. Problem: leaves offset (steady-state error).",
        "INTEGRAL: Output = K_I × ∫Error dt. Accumulates past errors. Eliminates offset. Problem: can cause overshoot and windup.",
        "DERIVATIVE: Output = K_D × d(Error)/dt. Predicts future. Acts as 'brake'. Reduces overshoot. Problem: amplifies noise.",
        "P-Only: has offset. PI: removes offset (most common in process). PID: full control, fastest with least overshoot.",
        "Ziegler-Nichols tuning: Increase K_P until oscillation → ultimate gain K_u. Then set P, I, D from K_u and period."
      ],
      formula: "Output(t) = K_P·e(t) + K_I·∫e(t)dt + K_D·de(t)/dt",
      analogy: "PID = driving a car: P = turn wheel proportionally to how far off-course. I = if drifting left a while, correct more. D = if veering right fast, counter-steer BEFORE you go too far.",
      takeaway: "P = current error (offset). I = eliminates offset. D = predicts, dampens overshoot. PID has all three."
    },
    {
      title: "P, I, D Effects on System Response",
      content: "Each term affects speed, stability, offset, and overshoot differently.",
      steps: [
        "↑K_P: Faster response, reduces error, increases overshoot. Too high → unstable.",
        "↑K_I: Eliminates steady-state error, increases overshoot and settling time. Too high → low-frequency oscillation.",
        "↑K_D: Reduces overshoot, improves stability, amplifies noise. Too high → high-frequency oscillation.",
        "Tuning order: P first (for speed), then I (to remove offset), then D (to dampen)."
      ],
      takeaway: "P for speed (offset). I for offset (overshoot). D for damping (noise-sensitive). Tune P→I→D."
    },
    {
      title: "Control Configurations — Feedforward, Cascade, Ratio",
      content: "Beyond simple PID feedback, specialized configurations handle specific challenges.",
      steps: [
        "FEEDFORWARD: Measure disturbance and correct BEFORE it affects PV. Example: open steam valve as production rate changes before temperature drops.",
        "CASCADE: Two controllers. Primary sets SP of secondary (inner loop). Inner loop is faster. Example: Level controller sets flow SP, flow controller adjusts valve.",
        "RATIO CONTROL: Maintain fixed ratio between two variables (e.g., fuel-to-air ratio).",
        "BATCH CONTROL: Sequence of steps for a batch. Pre-programmed recipe."
      ],
      takeaway: "Feedforward = act before error. Cascade = nested loops (faster inner). Ratio = maintain proportion."
    }
  ]
},

// ===== 7. CONTROL SYSTEM THEORY =====
{
  topic: "Control System Theory (transfer functions, stability, Bode/root locus)",
  sections: [
    {
      title: "Transfer Functions — The System's Mathematical DNA",
      content: "G(s) = Output(s)/Input(s) = N(s)/D(s). Fully describes linear system response in s-domain.",
      steps: [
        "Laplace Transform: Converts time-domain differential equations to algebraic equations in s.",
        "POLES: Roots of D(s)=0 (denominator). Determine STABILITY and natural response.",
        "ZEROS: Roots of N(s)=0 (numerator). Shape transient response, NOT stability.",
        "System ORDER = highest power of 's' in denominator. First-order (1 pole), second-order (2 poles)."
      ],
      formula: "G(s) = Output/Input = N(s)/D(s)",
      analogy: "Transfer function = recipe. Input = ingredients. G(s) = cooking instructions. Output = finished dish.",
      takeaway: "Poles → stability. Zeros → shape response. System order = highest s-power in denominator."
    },
    {
      title: "Stability — Poles Must Be in Left Half-Plane",
      content: "BIBO stability: bounded input → bounded output. ALL poles must be in LEFT half of s-plane.",
      steps: [
        "STABLE: ALL poles have negative real parts (left half-plane).",
        "UNSTABLE: ANY pole has positive real part (right half-plane).",
        "MARGINALLY STABLE: Pole on imaginary axis (real part = 0). Oscillates forever.",
        "Root locus: Plot of how poles move as gain K increases. Shows where system goes unstable."
      ],
      analogy: "Stability = balancing broomstick. Left-half poles = leaning toward vertical. Right-half = falling away. Imaginary = perfectly balanced but falls at any disturbance.",
      takeaway: "All poles in left half = stable. One pole in right half = unstable."
    },
    {
      title: "First-Order Systems — Simple Lag",
      content: "One pole. Examples: RC circuit, thermometer. Exponential step response.",
      steps: [
        "G(s) = K/(τs+1). K = DC gain, τ = time constant.",
        "Step response: y(t) = K(1-e^(-t/τ)). At t=τ → 63.2% of final value.",
        "At t=3τ → 95%. At t=5τ → 99.3% (steady state).",
        "Rise time (10-90%): t_r = 2.2τ. Settling (2%): t_s = 4τ.",
        "Pole at s = -1/τ. More negative = faster."
      ],
      formula: "G(s) = K/(τs+1) | Step: y(t) = K(1-e^(-t/τ)) | Pole = -1/τ",
      takeaway: "First-order: one pole at -1/τ. After 5τ, settled. Smaller τ = faster."
    },
    {
      title: "Second-Order Systems — Damped Oscillator",
      content: "Two poles. Can oscillate depending on damping ratio ζ.",
      steps: [
        "G(s) = ω_n²/(s²+2ζω_n s+ω_n²). ω_n = natural frequency, ζ = damping ratio.",
        "UNDERDAMPED (0<ζ<1): Complex poles. Oscillates. ζ=0.7 = optimal.",
        "CRITICALLY DAMPED (ζ=1): Two equal real poles. Fastest without overshoot.",
        "OVERDAMPED (ζ>1): Two distinct real poles. Slow, no oscillation.",
        "UNDAMPED (ζ=0): Pure imaginary poles. Oscillates forever at ω_n.",
        "Peak overshoot: M_p = e^(-πζ/√(1-ζ²)). Settling: t_s ≈ 4/(ζω_n)."
      ],
      formula: "M_p = e^(-πζ/√(1-ζ²)) | ζ = 1/(2Q) (for RLC)",
      analogy: "Second-order = car suspension. Underdamped = bouncy. Critically damped = firm + smooth. Overdamped = stiff.",
      takeaway: "ζ<1 = oscillates. ζ=0.7 = optimal. ζ>1 = slow, no oscillation."
    },
    {
      title: "Bode Plots — Frequency Response",
      content: "Two plots: GAIN (dB) and PHASE (°) vs frequency. Shows how system responds at different frequencies.",
      steps: [
        "Each pole contributes -20dB/decade roll-off and -90° phase at high frequencies.",
        "Each zero contributes +20dB/decade and +90° phase.",
        "GAIN CROSSOVER (ω_gc): Frequency where gain = 0 dB.",
        "PHASE CROSSOVER (ω_pc): Frequency where phase = -180°.",
        "PHASE MARGIN = 180° + ∠G(jω_gc). Target ≥ 45-60°.",
        "GAIN MARGIN = -20log|G(jω_pc)| dB. Target ≥ 6-12 dB."
      ],
      formula: "PM = 180° + ∠G(jω_gc) | GM(dB) = -20log|G(jω_pc)|",
      analogy: "Bode = EQ visualizer. Low frequencies pass flat. Above cutoff, signal rolls off. Phase shift = delay at each frequency.",
      takeaway: "Bode = gain + phase vs frequency. Poles add -20dB/decade and -90° each. PM and GM tell stability margin."
    },
    {
      title: "Root Locus — How Poles Move with Gain",
      content: "Plot of closed-loop pole paths as gain K changes from 0 to ∞.",
      steps: [
        "Poles start at open-loop poles (K=0), end at open-loop zeros (K=∞).",
        "Where locus crosses imaginary axis → instability at that K.",
        "Locus exists on real axis LEFT of an odd number of poles+zeros.",
        "Asymptotes angles: ±180°(2k+1)/(#poles - #zeros)."
      ],
      analogy: "Root locus = tracking rocket path as you increase thrust. Low K = stable. Critical K = starts oscillating. Higher K = unstable.",
      takeaway: "Root locus shows pole movement with gain. Imaginary axis crossing = stability limit."
    },
    {
      title: "Steady-State Error — How Accurate?",
      content: "Final difference between output and desired value depends on SYSTEM TYPE.",
      steps: [
        "TYPE = number of integrators (poles at s=0) in open-loop.",
        "Type 0: Has error for step (K_p = position constant).",
        "Type 1: Zero error for step, constant error for ramp (K_v = velocity constant).",
        "Type 2: Zero error for step and ramp, constant for parabola (K_a).",
        "Higher type = better tracking, harder to stabilize."
      ],
      formula: "K_p = lim(s→0) G(s) | K_v = lim(s→0) sG(s) | e_ss (step) = 1/(1+K_p) for Type 0",
      takeaway: "System type = number of integrators. Higher type = tracks more complex inputs. Trade-off: stability."
    }
  ]
},

// ===== 8. INDUSTRIAL INSTRUMENTATION =====
{
  topic: "Industrial Instrumentation (flow/level/pressure/valves)",
  sections: [
    {
      title: "Pressure Measurement — The Most Measured Variable",
      content: "Pressure = Force/Area. Types: gauge (relative to atm), absolute (relative to vacuum), differential (between two points).",
      steps: [
        "MANOMETER: U-tube, liquid height = pressure. Simple, direct, no calibration.",
        "BOURDON TUBE: Curved tube straightens with pressure. Most common gauge. Range: vacuum to 1000+ bar.",
        "DIAPHRAGM/ CAPSULE: Deflects with pressure. Capacitive or strain gauge sensing. Good for low pressure.",
        "PIEZOELECTRIC: Dynamic only. Fast pressure changes.",
        "TRANSMITTER: Strain gauge on diaphragm + 4-20mA output. Industrial standard."
      ],
      formula: "P = F/A | P = hρg (hydrostatic) | 1 bar = 10⁵ Pa",
      takeaway: "Manometer = simple/low. Bourdon = mechanical. Transmitter = electronic 4-20mA."
    },
    {
      title: "Flow Measurement — Methods and Principles",
      content: "Different principles suit different fluids and conditions.",
      steps: [
        "DP (Orifice plate): ΔP ∝ flow². Most common, cheapest. High pressure loss.",
        "POSITIVE DISPLACEMENT: Nutating disc, oval gear. Measures actual volume. Very accurate for custody transfer.",
        "TURBINE: Spinning rotor. Frequency ∝ flow. Good accuracy. Clean fluid needed.",
        "ELECTROMAGNETIC: Faraday's law. ONLY for conductive fluids. No moving parts.",
        "ULTRASONIC: Transit time or Doppler. Clamp-on (non-invasive) or inline.",
        "CORIOLIS: Measures MASS flow directly. Most accurate (0.1%). Expensive.",
        "THERMAL MASS: Heat loss ∝ mass flow. For gases."
      ],
      formula: "Orifice: Q = Cd·A·√(2ΔP/ρ) | Electromagnetic: V = B×L×v",
      analogy: "Flow = counting cars on highway. DP = road dip under cars. Turbine = toll gate spins. EM = metal in magnetic loop. Coriolis = bridge push.",
      takeaway: "DP = general purpose. EM = conductive liquids. Coriolis = mass flow accuracy. Ultrasonic = non-invasive."
    },
    {
      title: "Level Measurement — How Full?",
      content: "Methods range from simple sight glass to sophisticated radar.",
      steps: [
        "DIRECT: Sight glass, dipstick. Simple, needs operator access.",
        "HYDROSTATIC (DP): P = ρgh at bottom. DP transmitter. Open tank: one port to atmosphere. Closed: both ports needed.",
        "CAPACITANCE: Level changes dielectric → capacitance changes.",
        "ULTRASONIC: Sound pulse reflects from surface. Non-contact. Affected by foam/vapor.",
        "RADAR: Microwave pulse reflects. Non-contact, unaffected by density/vapor. Guided wave (TDR) uses probe.",
        "NUCLEAR: Gamma source + detector. Extreme conditions. Expensive, safety concerns."
      ],
      formula: "Hydrostatic: P = ρgh | ΔP = ρgh (closed tank with DP cell)",
      takeaway: "Simple = sight glass. General = DP transmitter. Non-contact = radar. Extreme = nuclear."
    },
    {
      title: "Control Valves — The Final Control Element",
      content: "Valve selection affects control quality, cost, and reliability.",
      steps: [
        "GATE: On/off only. NOT for throttling.",
        "GLOBE: The standard for throttling (control). Good rangeability.",
        "BALL: Quarter-turn. Full bore, low ΔP. On/off and basic control.",
        "BUTTERFLY: Disk rotates. Large pipes (4-48\"). Low cost. Large volumes.",
        "DIAPHRAGM: Pinches against weir. Corrosive fluids, slurries, food.",
        "CHARACTERISTIC: Quick-opening (most flow early), Linear (flow ∝ opening), Equal % (same % change per step).",
        "ACTUATORS: Pneumatic (most common, fail-safe), Electric (precise, slower), Hydraulic (high force)."
      ],
      formula: "Fail-safe: Air-to-open (ATO) → spring closes. Air-to-close (ATC) → spring opens.",
      takeaway: "Globe = best for control. Gate = on/off. Pneumatic actuators = most common. Positioner improves accuracy."
    }
  ]
},

// ===== 9. PLC PROGRAMMING & LADDER LOGIC =====
{
  topic: "PLC Programming & Ladder Logic",
  sections: [
    {
      title: "PLC Basics — The Industrial Computer",
      content: "Rugged computer for industrial control. Replaces relay panels. Programmable via ladder logic.",
      steps: [
        "SCAN CYCLE: (1) Read inputs → (2) Execute program → (3) Write outputs. Repeat.",
        "SCAN TIME: 1-100ms typical. Scan rate = 1/scan_time.",
        "MEMORY: RAM (data), Flash/ROM (program), EEPROM (retentive).",
        "I/O: Digital (24V DC, 120V AC), Analog (0-10V, 4-20mA, TC, RTD).",
        "Power: Typically 24V DC."
      ],
      formula: "Scan rate ≈ 1 / scan_time",
      analogy: "PLC = security guard patrol route: look at doors (inputs), decide (program), lock/alarm (outputs), repeat.",
      worked: "Q: Scan time 5ms. Max scan rate? A: Rate = 1/0.005 = 200 scans/sec.",
      takeaway: "PLC scan: Input → Logic → Output. Repeat. Scan time = response speed."
    },
    {
      title: "Ladder Logic — The Electrician's Language",
      content: "Graphical relay-logic language. Left rail = power. Right rail = return. Contacts and coils on rungs.",
      steps: [
        "NO contact |-| : Closed when input is ON. Open when OFF.",
        "NC contact |/| : Closed when input is OFF. Open when ON. (Opposite of NO.)",
        "Coil |( )| : Energized when rung logic is TRUE.",
        "Series NO-NO = AND. Parallel NO-NO = OR. NC = NOT.",
        "LATCH (SET/RESET): One rung sets a bit, another resets it. Creates memory."
      ],
      analogy: "Ladder = chain of switches controlling a bulb. All closed = bulb lights. NO = normally open. NC = normally closed.",
      takeaway: "NO = on when 1. NC = on when 0. Series = AND. Parallel = OR."
    },
    {
      title: "Timers and Counters — PLC's Stopwatch",
      content: "Timers delay actions. Counters count events.",
      steps: [
        "TON (ON-Delay): Timer starts when rung TRUE. Output ON after preset. Resets if rung FALSE before timeout.",
        "TOF (OFF-Delay): Output ON immediately when rung TRUE. Timer starts when rung FALSE. Output OFF after preset.",
        "RTO (Retentive): Like TON but doesn't reset on FALSE. Must be explicitly reset.",
        "CTU (Count Up): Increments each FALSE→TRUE transition. Output ON when count ≥ preset.",
        "CTD (Count Down): Decrements each transition. Output ON when count ≤ 0."
      ],
      analogy: "TON = bathroom fan timer (press → runs 5 min, stops). TOF = staircase light (press → on, release → counts down → off).",
      takeaway: "TON: ON after delay. TOF: OFF after delay. RTO: retains. CTU: counts up. CTD: counts down."
    },
    {
      title: "PLC Hardware Architecture",
      content: "PLCs come in brick (fixed) or modular (configurable) formats.",
      steps: [
        "BRICK: All I/O built-in. Small, cheap. Example: MicroLogix 800.",
        "MODULAR: Separate CPU, power supply, I/O modules. Configurable and expandable.",
        "RACK: Large chassis. High-end. Example: ControlLogix.",
        "Digital I/O: 8/16/32 points. 24V DC or 120/240V AC. Sourcing (PNP) vs sinking (NPN).",
        "Analog I/O: 4-20mA, 0-10V. Resolution 12-16 bits."
      ],
      takeaway: "Brick = fixed I/O. Modular = configurable. Choose based on I/O count and special functions."
    },
    {
      title: "IEC 61131-3 — Five PLC Languages",
      content: "Standard defines five programming languages. Choose right language for the task.",
      steps: [
        "LD (Ladder): Best for discrete logic, interlocking.",
        "FBD (Function Block): Best for analog processing, PID loops.",
        "ST (Structured Text): Best for complex math, data processing.",
        "IL (Instruction List): Low-level. Legacy. Declining.",
        "SFC (Sequential Function Chart): Best for batch processes, sequential recipes."
      ],
      takeaway: "IEC 61131-3: 5 languages. LD = digital logic. FBD = analog. ST = math. SFC = sequential."
    }
  ]
},

// ===== 10. SCADA / DCS SYSTEMS =====
{
  topic: "SCADA / DCS Systems",
  sections: [
    {
      title: "SCADA vs DCS — Scope and Scale",
      content: "SCADA = wide-area monitoring. DCS = local-area process control.",
      steps: [
        "SCADA: Geographically distributed (pipelines, power grid, water). Communication via radio/satellite/cellular. Slower (1-10 sec updates). RTUs at remote sites.",
        "DCS: Single plant site. High-speed control network. Fast (10-100ms). Distributed controllers. Tight integration.",
        "BOTH: HMI, historian, alarm management. Modern systems are converging."
      ],
      analogy: "SCADA = traffic lights across a city. DCS = control room of one factory.",
      takeaway: "SCADA = wide area, slower, remote. DCS = local area, fast, integrated."
    },
    {
      title: "SCADA Components — RTU, MTU, HMI",
      content: "Three levels: field (RTU), communication, and central (MTU/HMI).",
      steps: [
        "RTU (Remote Terminal Unit): At remote site. Reads sensors, controls actuators. Battery-backed. Can run independently if comms lost.",
        "MTU (Master Terminal Unit): Central computer. Polls RTUs, collects data, sends commands. Redundant.",
        "HMI: Operator screens. Real-time data, alarms, trends.",
        "COMMUNICATION: Polled (MTU asks each RTU) or exception-based (RTU reports changes).",
        "HISTORIAN: Database for historical data, analysis, regulatory compliance."
      ],
      takeaway: "RTU = remote. MTU = central. HMI = operator. Polled or exception-based comms."
    },
    {
      title: "SCADA Security and Reliability",
      content: "Critical infrastructure — security is paramount.",
      steps: [
        "REDUNDANCY: Dual MTUs, dual comms, UPS, dual power supplies.",
        "NETWORK SEPARATION: SCADA network isolated from corporate IT. Firewalls and DMZs.",
        "AUTHENTICATION: Strong passwords, MFA, role-based access.",
        "ENCRYPTION: Encrypt all MTU-RTU communication.",
        "AUDIT TRAIL: Log all operator actions and config changes."
      ],
      takeaway: "SCADA security = network separation + encryption + authentication + physical security."
    },
    {
      title: "DCS Architecture — Distributed Control",
      content: "Control functions distributed across multiple controllers. No single point of failure.",
      steps: [
        "CONTROLLERS: Each handles PID loops for a process area. Redundant.",
        "I/O RACKS: Located near process. Connect to sensors/actuators.",
        "CONTROL NETWORK: High-speed deterministic. Redundant paths.",
        "OPERATOR STATIONS (HMI): Graphical displays with trends and alarms.",
        "ENGINEERING STATION: Configuration and programming only."
      ],
      takeaway: "DCS = distributed controllers + centralized HMI. Failure of one controller doesn't stop plant."
    },
    {
      title: "Alarm Management — Don't Cry Wolf",
      content: "Too many alarms overload operators. Real alarms get missed.",
      steps: [
        "EEMUA 191: Guidelines for alarm management. Defines performance metrics.",
        "Each alarm must have cause, consequence, and operator action. No action = not an alarm.",
        "ALARM FLOOD: >10 alarms per 10 minutes during upset. Bad design.",
        "PRIORITIES: Critical, High, Medium, Low.",
        "STANDING ALARMS: Always active. Should be suppressed or reconfigured."
      ],
      analogy: "Alarm management = hospital monitors. If every beep is urgent, nurses ignore all — even real emergencies.",
      takeaway: "Every alarm must have operator action. Rationalize alarms. Prioritize."
    }
  ]
}

,

// ===== 11. MICROCONTROLLERS & EMBEDDED =====
{
  topic: "Microcontrollers & Embedded Basics",
  sections: [
    {
      title: "MCU vs Microprocessor — All-in-One vs Just the Brain",
      content: "MCU = CPU + memory + I/O on one chip. MPU = CPU only, needs external parts.",
      steps: [
        "MCU: Integrated CPU, RAM, ROM/Flash, Timers, ADC, UART/SPI/I2C, GPIO. Example: ATmega328, STM32.",
        "MPU: Just CPU. Needs external RAM, ROM, peripherals. Example: Intel Core, ARM Cortex-A.",
        "MCU applications: embedded control (microwave, car ECU, IoT sensor).",
        "ROM/Flash: non-volatile program storage. RAM: volatile data. EEPROM: non-volatile config."
      ],
      analogy: "MCU = Swiss Army knife (everything in one). MPU = chef's knife (powerful, needs full kitchen).",
      takeaway: "MCU = CPU + memory + I/O in one package. For embedded control."
    },
    {
      title: "GPIO — Talking to the Outside World",
      content: "Digital pins configurable as input or output. Most basic MCU interface.",
      steps: [
        "OUTPUT: Pin driven HIGH (V_DD) or LOW (0V). Can drive LED, transistor, relay.",
        "INPUT: Reads pin voltage. HIGH (≥0.7×V_DD) = 1. LOW (≤0.3×V_DD) = 0.",
        "PULL-UP/DOWN: Internal resistor keeps pin at defined level when nothing drives it. Prevents floating.",
        "Bit operations: PORT |= (1<<n) sets bit. PORT &= ~(1<<n) clears. PORT ^= (1<<n) toggles."
      ],
      formula: "Set: PORT |= (1<<n) | Clear: PORT &= ~(1<<n) | Toggle: PORT ^= (1<<n) | Read: bit = (PIN>>n) & 1",
      takeaway: "GPIO = configurable digital pins. Output = set HIGH/LOW. Input = read. Use pull-up/down."
    },
    {
      title: "Timers and PWM — Measure and Generate Time",
      content: "Timers count clock ticks. Generate delays, PWM, measure pulse width.",
      steps: [
        "Timer counts from 0 to max (8-bit: 255, 16-bit: 65535).",
        "PRESCALER: Divides MCU clock before timer. MCU 8MHz, prescaler 64 → timer clock = 125kHz.",
        "PWM: Timer counts up/down. Output HIGH for compare_value/period. Duty cycle controls power.",
        "PWM uses: motor speed (1-20kHz), LED dimming (>100Hz).",
        "Input capture: Timer captures count on external event. Measure pulse width or frequency."
      ],
      formula: "Timer clock = MCU_clock / prescaler | PWM_freq = timer_clock / period | Duty = compare/period",
      worked: "Q: MCU 8MHz, prescaler 64, 8-bit timer. Timer clock? A: 8MHz/64 = 125kHz.",
      takeaway: "Prescaler divides clock. PWM duty cycle controls power. Input capture measures events."
    },
    {
      title: "Interrupts — Respond Instantly to Events",
      content: "Interrupts let MCU respond immediately without polling (wasting CPU checking repeatedly).",
      steps: [
        "POLLING: MCU constantly checks if event happened (wastes CPU).",
        "INTERRUPT: Event tells MCU to STOP current task, run ISR (Interrupt Service Routine), then resume.",
        "ISR must be SHORT and FAST. Never put delays inside ISR.",
        "Global enable: CLI/SEI (clear/set interrupt flag).",
        "Sources: Timer overflow, external pin change, ADC complete, UART receive."
      ],
      analogy: "Polling = student asking 'is it lunch yet?' constantly. Interrupt = lunch bell rings, stop, eat, resume.",
      takeaway: "Interrupts = instant response without polling. Keep ISRs short."
    },
    {
      title: "Serial Communication — UART, SPI, I2C",
      content: "Three main serial protocols: UART (simple, 2-wire), SPI (fast, 4-wire), I2C (2-wire, multi-device).",
      steps: [
        "UART: TX, RX. Asynchronous (no clock — must agree baud rate). One-to-one. Baud: 9600, 19200, 115200. Frame: Start+8 data+optional parity+Stop.",
        "SPI: MOSI, MISO, SCK, CS (chip select). Synchronous (master provides clock). Full-duplex. Very fast (MHz). Multiple slaves with separate CS.",
        "I2C: SDA, SCL. Open-drain (need pull-ups). Multi-master, multi-slave. 7/10-bit addresses. Slower (100kHz-3.4MHz).",
        "UART: simple device-to-device. SPI: speed. I2C: many devices with 2 pins."
      ],
      analogy: "UART = walkie-talkie (two people, agree on channel). SPI = teacher calling students one at a time by name. I2C = classroom where anyone speaks but addresses by name.",
      takeaway: "UART = 2-wire async. SPI = 4-wire fast full-duplex. I2C = 2-wire multi-device addressed."
    },
    {
      title: "Watchdog Timer — System's Life Guard",
      content: "Hardware timer that resets MCU if program hangs. Prevents indefinite freeze.",
      steps: [
        "WDT counts up. If not cleared (petted) before timeout → MCU resets.",
        "Pet the WDT periodically in main loop (WDR instruction).",
        "If program gets stuck (infinite loop, fault) → no pet → WDT resets system.",
        "Timeout: typically 16ms to 2 seconds. Configurable."
      ],
      analogy: "WDT = lifeguard asking 'Still running?' every few seconds. Fail to answer → CPR (reset).",
      takeaway: "Pet the watchdog. If it times out → system reset. Saves from hangs."
    }
  ]
},

// ===== 12. DATA ACQUISITION SYSTEMS (DAQ) =====
{
  topic: "Data Acquisition Systems (DAQ)",
  sections: [
    {
      title: "DAQ System Architecture — Sensor to Software",
      content: "Complete chain: Sensor → Signal Conditioning → Filter → MUX → Sample/Hold → ADC → Computer.",
      steps: [
        "SIGNAL CONDITIONING: Amplify, filter, isolate, linearize before conversion.",
        "ANTIALIASING FILTER: Low-pass BEFORE ADC. Prevents aliasing. CRITICAL.",
        "MULTIPLEXER (MUX): Switch between channels. More channels = lower per-channel sample rate.",
        "SAMPLE/HOLD: Captures voltage and holds constant during ADC conversion.",
        "ADC: Converts to digital. Key specs: resolution (bits) and sample rate (S/s)."
      ],
      formula: "Per-channel rate = total_rate / channels",
      worked: "Q: 100kS/s over 16 channels. Per-channel rate? A: 100000/16 = 6250 S/s = 6.25 kS/s.",
      takeaway: "Chain: Sensor → Conditioner → Filter → MUX → S/H → ADC → Computer."
    },
    {
      title: "Sampling Theory — The Nyquist Rule",
      content: "Must sample at ≥ 2× highest signal frequency. Violating this = ALIASING.",
      steps: [
        "NYQUIST RATE: f_sample ≥ 2 × f_max. Absolute minimum.",
        "Practice: sample at 5-10× f_max for good waveform shape.",
        "ALIASING: 60Hz signal sampled at 50Hz appears as 10Hz. False signal!",
        "ANTIALIASING FILTER: Sharp low-pass at ≤ f_sample/2. Must be steep (≥ 8th order)."
      ],
      formula: "f_Nyquist = f_sample/2 | Aliased freq = |f_signal - N×f_sample|",
      analogy: "Aliasing = wagon wheel in movies. Wheel spins forward but appears backward. Camera samples below Nyquist.",
      takeaway: "Sample ≥ 2× highest frequency. Use antialiasing filter. Aliasing creates fake signals."
    },
    {
      title: "Resolution and Accuracy — Bits and Noise",
      content: "Resolution determines smallest detectable change. Accuracy depends on many factors.",
      steps: [
        "LSB = V_ref / 2ⁿ. 12-bit ADC, 5V ref → LSB = 5/4096 = 1.22mV.",
        "Quantization error = ±½ LSB.",
        "Dynamic Range = 6.02n dB. SNR (ideal) = 6.02n + 1.76 dB.",
        "ENOB (Effective Number of Bits): real resolution after noise.",
        "Oversampling: sample much faster then average. Increases effective bits by √(ratio)."
      ],
      formula: "LSB = V_ref/2ⁿ | DR = 6.02n dB | SNR = 6.02n + 1.76 dB",
      takeaway: "LSB = smallest voltage change. ENOB = real resolution. Oversampling improves SNR."
    },
    {
      title: "DAQ Software and Data Flow",
      content: "Buffering, triggering, and data rate management are key to successful DAQ.",
      steps: [
        "BUFFERING: Temporary storage prevents data loss when computer is busy.",
        "TRIGGERING: Start on condition (edge, window, software command).",
        "CONTINUOUS vs FINITE: Continuous = run until stopped. Finite = N samples.",
        "Data rate = sample_rate × channels × bytes_per_sample."
      ],
      formula: "Data rate = sample_rate × channels × bytes_per_sample",
      takeaway: "Buffers prevent data loss. Triggers start at right time. Know your data rate."
    }
  ]
},

// ===== 13. INDUSTRIAL COMMUNICATION PROTOCOLS =====
{
  topic: "Industrial Communication Protocols (RS-232/485, Modbus, HART, Profibus)",
  sections: [
    {
      title: "RS-232 and RS-485 — The Physical Layer",
      content: "Physical standards: define voltage levels, wiring, distance. NOT data format.",
      steps: [
        "RS-232: Single-ended (signal vs ground). ±5-15V. Point-to-point. Max 15m. 115kbps. DB9 connector.",
        "RS-485: Differential (A-B twisted pair). Noise immune. Multi-drop (up to 32 devices). Max 1200m. 10Mbps.",
        "RS-485 needs terminating resistor (120Ω) at each end. Half-duplex (one talks at a time).",
        "RS-422: Like RS-485 but full-duplex (4 wires). One driver, multiple receivers."
      ],
      analogy: "RS-232 = private face-to-face conversation. RS-485 = conference call, one speaks at a time, all hear.",
      takeaway: "RS-232 = short, point-to-point. RS-485 = long, multi-drop, differential (noise immune)."
    },
    {
      title: "Modbus — The Universal Industrial Protocol",
      content: "Most widely supported industrial protocol. Open, simple. Works on RS-232/485 and TCP/IP.",
      steps: [
        "MASTER/SLAVE: Master initiates all communication. Slaves only respond.",
        "Modbus RTU: Binary, compact, CRC error check. Standard for RS-485.",
        "Modbus ASCII: Hex readable, slower, LRC check.",
        "Modbus TCP: Over Ethernet port 502. No CRC (Ethernet handles).",
        "FUNCTION CODES: 01=Read Coils, 02=Read Inputs, 03=Read Holding Registers, 04=Read Input Registers, 05=Write Coil, 06=Write Register.",
        "Data: Coils (1-bit out), Inputs (1-bit in), Input Registers (16-bit RO), Holding Registers (16-bit RW)."
      ],
      formula: "RTU frame: Address + Function + Data + CRC",
      analogy: "Modbus = formal letter exchange. Master writes to specific slave. Slave responds. Strict format.",
      takeaway: "Modbus = master/slave. RTU = binary/compact. TCP = Ethernet. 03 and 06 are most common function codes."
    },
    {
      title: "HART — Digital on 4-20mA",
      content: "HART superimposes digital on 4-20mA analog. Backward compatible. Two wires carry both.",
      steps: [
        "4-20mA carries primary variable (e.g., pressure = 12mA).",
        "FSK digital signal: 1200Hz=1, 2200Hz=0. Average = 0 — doesn't affect analog.",
        "Point-to-point (one device) or Multi-drop (up to 15 devices, analog unused).",
        "Device Descriptions (DDs): Standard files for interoperability.",
        "Commands: Universal (read PV), Common Practice (calibration), Device-Specific."
      ],
      analogy: "HART = TV with subtitles. Picture (4-20mA) = main story. Subtitles (digital) = extra info.",
      takeaway: "HART = 4-20mA + digital on same wires. Backward compatible. Multi-drop = up to 15 devices."
    },
    {
      title: "Profibus — High-Speed Factory Bus",
      content: "PROFIBUS-DP (factory, fast) and PROFIBUS-PA (process, intrinsically safe).",
      steps: [
        "DP: 12 Mbps. For drives, robots, I/O. Deterministic.",
        "PA: 31.25 kbps. For hazardous areas. Powered over bus.",
        "TOKEN RING: Multiple masters pass token. Only token holder initiates.",
        "Within token slot, master polls its slaves. Slaves only respond.",
        "Competing with: EtherNet/IP, PROFINET, Modbus TCP."
      ],
      analogy: "Profibus = production line with shift supervisors passing a speaking stick. Only holder gives instructions.",
      takeaway: "DP = fast factory bus. PA = process, safe. Token ring between masters."
    },
    {
      title: "4-20mA Current Loop — The Analog Standard",
      content: "4mA = zero (live zero), 20mA = full scale. Current is immune to wire resistance — standard for process instrumentation.",
      steps: [
        "Why current? Same current flows everywhere in series loop. Wire resistance doesn't matter. Miles of cable possible.",
        "4mA = live zero. 0mA = broken wire (fault detection).",
        "20mA = full scale. Sensor adjusts current proportionally.",
        "Two-wire transmitter: sensor draws power from loop. Most common.",
        "Receiver: precision resistor (250Ω) converts 4-20mA to 1-5V."
      ],
      formula: "PV(mA) = 4 + (value/range) × 16 | At receiver: V = I × 250Ω",
      analogy: "4-20mA = water pipe carrying both water and info. Flow rate = process value. 0mA = burst pipe. 4mA = minimum flow (live zero).",
      takeaway: "4-20mA = immune to wire R, live zero, fault detection. Two-wire = sensor loop-powered."
    }
  ]
},

// ===== 14. POWER ELECTRONICS & MOTOR DRIVES =====
{
  topic: "Power Electronics & Motor Drives",
  sections: [
    {
      title: "Power Semiconductor Devices — The Switches",
      content: "Specialized switches for high voltage/current. Each suits different applications.",
      steps: [
        "DIODE: Uncontrolled. Rectifiers.",
        "THYRISTOR (SCR): Latching. Gate pulse turns ON. Stays ON until current < holding. AC phase control.",
        "TRIAC: Bidirectional SCR. AC control.",
        "GTO: Gate Turn-Off. Can turn OFF with negative gate pulse.",
        "IGBT: MOSFET input + BJT output. Voltage-controlled, high current. Dominant for motor drives, solar inverters, EVs.",
        "MOSFET: Very fast (MHz). Low voltage, high frequency (DC-DC converters)."
      ],
      analogy: "Diode = check valve. SCR = latching valve (push opens, stays). IGBT = fast electric valve. MOSFET = super-fast small valve.",
      takeaway: "Signal level → Diode < Thyristor < IGBT < MOSFET (speed↑, power↓). IGBT = motor drive workhorse."
    },
    {
      title: "Rectifiers — AC to DC",
      content: "Convert AC to DC. Single-phase and three-phase. Need filtering for smooth DC.",
      steps: [
        "Single-phase half-wave: 1 diode. High ripple.",
        "Single-phase full-wave bridge: 4 diodes. Both AC halves used. Lower ripple.",
        "Three-phase bridge: 6 diodes. Very low ripple. Standard for industrial DC.",
        "Smoothing capacitor: V_ripple = I/(f×C). Full-wave f = 2×line.",
        "Controlled rectifier: Replace diodes with SCRs. Vary firing angle to control DC voltage."
      ],
      formula: "V_avg (3-phase full-bridge) = (3√2/π) × V_line ≈ 1.35 × V_line",
      takeaway: "More phases = smoother DC. Controlled rectifier uses SCRs for variable DC."
    },
    {
      title: "Inverters — DC to AC",
      content: "Convert DC to variable-frequency AC for motor speed control.",
      steps: [
        "Basic inverter: H-bridge (4 switches). Switches close diagonally to create AC.",
        "PWM INVERTER: Switches turn on/off at high frequency (kHz). Pulse width varies to create sine wave.",
        "VARIABLE FREQUENCY DRIVE (VFD): AC line → Rectifier → DC bus → Inverter → Variable AC to motor.",
        "V/f control: Keep voltage/frequency ratio constant to maintain constant motor flux.",
        "Switching devices: IGBTs (most common), MOSFETs (low power), SCRs (very high power)."
      ],
      analogy: "Inverter = a pump that can reverse direction. PWM = rapidly switching valves to create smooth flow.",
      formula: "Motor speed N ∝ f (frequency) | V/f ratio constant for constant torque",
      takeaway: "VFD: AC→DC→AC (variable frequency). IGBT switches. V/f kept constant for motor."
    },
    {
      title: "DC-DC Converters (Choppers) — Voltage Level Change",
      content: "Change DC voltage level. Buck (step-down), Boost (step-up), Buck-Boost (either).",
      steps: [
        "BUCK: Switch + diode + LC filter. V_out = V_in × D (duty cycle). Output ≤ input.",
        "BOOST: Switch + diode + LC. V_out = V_in / (1-D). Output ≥ input.",
        "BUCK-BOOST: Can step up or down. V_out = -V_in × D/(1-D). Inverted output.",
        "SWITCHING REGULATOR: Efficient (80-95%). Uses inductor to store energy. PWM controls output."
      ],
      formula: "Buck: V_out = D×V_in | Boost: V_out = V_in/(1-D) | Duty cycle D = t_on/T",
      takeaway: "Buck = step down. Boost = step up. Buck-Boost = either (inverted). Switching is efficient."
    },
    {
      title: "Motor Types and Control",
      content: "DC motors (brushed), induction motors (AC), BLDC (brushless DC), stepper motors.",
      steps: [
        "DC MOTOR: Brushed. Speed controlled by armature voltage. Torque ∝ armature current. Simple control.",
        "INDUCTION MOTOR: Most common industrial motor. Speed controlled by frequency (VFD). Robust, no brushes.",
        "BLDC: Permanent magnet rotor, electronic commutation. High efficiency, precise control. Used in EVs, drones.",
        "STEPPER MOTOR: Moves in discrete steps. Open-loop position control. Used in 3D printers, CNC.",
        "SERVO MOTOR: Closed-loop position/speed/ torque control. Encoder feedback. Precision motion."
      ],
      formula: "Induction motor sync speed: N_s = 120×f / P (P = poles). Slip s = (N_s - N)/N_s",
      takeaway: "DC = simple speed control. Induction = VFD needed. BLDC = efficient. Stepper = open-loop position. Servo = closed-loop precision."
    }
  ]
},

// ===== 15. DIGITAL SIGNAL PROCESSING BASICS =====
{
  topic: "Digital Signal Processing Basics",
  sections: [
    {
      title: "What is DSP? — Math on Numbers",
      content: "Manipulate digitized signals using arithmetic instead of analog circuits.",
      steps: [
        "SAMPLING: Convert continuous analog to discrete numbers at regular intervals (ADC).",
        "QUANTIZATION: Round each sample to nearest digital value. Introduces quantization noise.",
        "SAMPLING RATE: How many samples per second (Hz). Determines highest frequency you can capture.",
        "NYQUIST: f_sample ≥ 2×f_max. Otherwise → ALIASING (false frequencies appear)."
      ],
      analogy: "DSP = analyzing soup. Sampling = taking spoonfuls at regular intervals. Quantization = measuring each to nearest ml.",
      takeaway: "Sample rate determines max frequency. Nyquist rule: sample ≥ 2× highest frequency."
    },
    {
      title: "Discrete Fourier Transform (DFT) — Frequency Analysis",
      content: "DFT breaks a signal into its frequency components. Tells you what frequencies are present.",
      steps: [
        "DFT takes N time-domain samples and produces N frequency-domain values (positive and negative frequencies).",
        "The output is complex: magnitude = amplitude of frequency component, phase = phase shift.",
        "FFT (Fast Fourier Transform): An algorithm to compute DFT quickly. N log₂N operations instead of N².",
        "N-point FFT produces N/2 unique frequency bins from DC to f_sample/2.",
        "LEAKAGE: If signal frequency doesn't exactly match a bin, energy 'leaks' into adjacent bins. Windowing reduces this.",
        "Windowing: Apply function (Hamming, Hanning, Blackman) to signal before FFT to reduce leakage."
      ],
      formula: "X[k] = Σ x[n] × e^(-j2πkn/N) for n=0 to N-1 | FFT speed: O(N log N) vs DFT O(N²)",
      analogy: "FFT = separating a soup into ingredients. DFT tells you 'this much salt, this much pepper, this much tomato' at each frequency.",
      takeaway: "DFT = time→frequency. FFT = fast DFT. N-point FFT gives N/2 frequency bins. Windowing reduces leakage."
    },
    {
      title: "Digital Filters — FIR and IIR",
      content: "FIR (Finite Impulse Response) = stable, linear phase, more computation. IIR (Infinite Impulse Response) = efficient, can be unstable.",
      steps: [
        "FIR: Output = weighted sum of recent inputs. No feedback. Always stable. Linear phase (no phase distortion). Needs many taps (coefficients) for sharp filtering.",
        "IIR: Output = weighted sum of inputs + weighted sum of previous outputs (has feedback). Fewer taps. Can be unstable. Nonlinear phase.",
        "Filter design: Low-pass, high-pass, band-pass, band-stop. Specify cutoff frequency, roll-off rate, passband ripple.",
        "Roll-off: FIR order = number of taps - 1. IIR order = number of poles. Higher order = steeper roll-off."
      ],
      formula: "FIR: y[n] = Σ b_k × x[n-k] | IIR: y[n] = Σ b_k×x[n-k] + Σ a_k×y[n-k]",
      takeaway: "FIR = stable, linear phase, more taps. IIR = efficient, can be unstable. Choose based on phase vs efficiency needs."
    },
    {
      title: "Z-Transform — Discrete-Time Version of Laplace",
      content: "The Z-transform is to discrete-time systems what the Laplace transform is to continuous-time systems.",
      steps: [
        "Z = e^(sT_s). Maps s-plane to z-plane. Unit circle in z corresponds to imaginary axis in s.",
        "Poles inside unit circle (|z| < 1) = stable. Poles outside = unstable.",
        "On unit circle (|z| = 1) = marginally stable (pure oscillation).",
        "Region of Convergence (ROC): Range of z where the sum converges. Essential for inverse transform."
      ],
      formula: "X(z) = Σ x[n] × z^(-n) | Stability: all poles inside |z| = 1",
      takeaway: "Z-transform = discrete analog of Laplace. Stability: all poles inside unit circle."
    }
  ]
}

,

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
