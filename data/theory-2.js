/* =========================================================
   THEORY Part 2/4 — Topics 6-10
   Slow Learner Method (FlintK12)
   ========================================================= */
var THEORY_DATA_2 = [

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

];
