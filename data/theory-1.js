/* =========================================================
   THEORY Part 1/4 — Topics 1-5
   Slow Learner Method (FlintK12) — full coverage
   ========================================================= */
var THEORY_DATA_1 = [

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

];
