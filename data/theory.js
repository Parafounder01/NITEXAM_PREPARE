/* =========================================================
   THEORY — Slow Learner Method explanations
   19 topics, each with: simple explanation, step-by-step,
   real-world analogy, key takeaway.
   ========================================================= */
var THEORY_DATA = [
  {
    topic: "Basic Electrical & Electronics Fundamentals",
    sections: [
      {
        title: "What is Electricity? (Like I'm 12)",
        content: "Electricity is the flow of tiny particles called electrons moving through a wire. Think of it like water flowing through a pipe. Voltage is the water pressure pushing the flow. Current is how much water actually flows. Resistance is how narrow the pipe is — a narrow pipe restricts flow just like a resistor restricts current.",
        steps: [
          "Voltage (V) = pressure that pushes electrons. Measured in volts.",
          "Current (I) = the flow of electrons past a point each second. Measured in amps.",
          "Resistance (R) = opposition to current flow. Measured in ohms (Ω).",
          "OHM'S LAW: V = I × R. If you know two, you can find the third."
        ],
        analogy: "Water pipe: Voltage = water pressure, Current = flow rate, Resistance = pipe narrowness. A kinked hose is high resistance — less water flows even with full pressure.",
        formula: "V = IR  |  P = VI  |  P = I²R",
        takeaway: "Ohm's Law is the foundation of every circuit. V = IR is the single most important formula in electronics."
      },
      {
        title: "Series vs Parallel (Step-by-Step)",
        content: "Components can be connected two basic ways. In SERIES, current flows through one component then the next — like train cars linked together. In PARALLEL, current splits across multiple paths — like cars on different lanes of a highway.",
        steps: [
          "SERIES: One path only. Current is same everywhere. Voltage divides across components. Total resistance = R1 + R2 + R3...",
          "PARALLEL: Multiple paths. Voltage is same across each branch. Current divides. Total resistance is LESS than the smallest resistor.",
          "MEMORY TRICK: Series = same current (cars on single track). Parallel = same voltage (each branch gets full pressure)."
        ],
        takeaway: "Series = current divider (voltage splits). Parallel = voltage divider (current splits). Learn these two patterns cold."
      }
    ]
  },
  {
    topic: "Sensors & Transducers",
    sections: [
      {
        title: "What is a Sensor? (Like I'm 12)",
        content: "A sensor is your electronic sense organ. Just like your skin feels temperature and your eyes see light, a sensor detects something in the physical world — heat, pressure, light, sound — and turns it into an electrical signal that a machine can understand.",
        steps: [
          "A TRANSDUCER converts one form of energy to another. All sensors are transducers.",
          "ACTIVE transducers generate their own voltage (e.g., thermocouple, piezoelectric).",
          "PASSIVE transducers change a property like resistance (e.g., RTD, thermistor, strain gauge) and need external excitation.",
          "The sensor output (voltage, current, resistance change) maps to the physical quantity being measured."
        ],
        analogy: "A microphone is a transducer — it converts sound waves (physical) into electrical signals. Your ear does the same thing!",
        keySensors: "RTD, Thermocouple, Strain Gauge, LVDT, Piezoelectric, Thermistor, Photodiode",
        takeaway: "Know which sensors are active (self-powered) vs passive (need excitation). This determines how you interface them."
      }
    ]
  },
  {
    topic: "Signal Conditioning & Op-Amp Circuits",
    sections: [
      {
        title: "Why Do We Need Signal Conditioning? (Like I'm 12)",
        content: "Sensors give tiny, weak signals — like a whisper in a noisy room. Signal conditioning amplifies that whisper, filters out the noise, and makes it readable for a microcontroller or display.",
        steps: [
          "AMPLIFICATION: Make a tiny signal bigger. A thermocouple gives ~40 microvolts per °C — too small to read directly. An op-amp can multiply it ×1000.",
          "FILTERING: Remove unwanted noise. Low-pass filters let slow signals through but block high-frequency electrical noise.",
          "LEVEL SHIFTING: If a signal swings from -5V to +5V but your ADC only reads 0-5V, you shift it up so all values are positive.",
          "LINEARIZATION: Some sensors (like thermistors) don't change linearly. Circuitry or math corrects this."
        ],
        analogy: "Signal conditioning is like using a hearing aid (amplify), noise-canceling headphones (filter), and translating language (level shift) so you can understand what was said.",
        takeaway: "Raw sensor data is almost never usable without conditioning. Op-amps are the workhorses of this stage."
      },
      {
        title: "Op-Amp Basics (Step-by-Step)",
        content: "An operational amplifier (op-amp) is a high-gain DC amplifier. It has two inputs (inverting −, non-inverting +) and one output. The golden rule: in negative feedback, the op-amp will do whatever it takes to make the two inputs equal.",
        steps: [
          "RULE 1: In negative feedback, V(+) = V(−). The inputs are virtually shorted.",
          "RULE 2: Input current is ZERO (ideal op-amp has infinite input impedance).",
          "INVERTING AMPLIFIER: Gain = −Rf / Rin. Output is flipped (inverted).",
          "NON-INVERTING AMPLIFIER: Gain = 1 + Rf / Rin. Output same polarity as input.",
          "VOLTAGE FOLLOWER (buffer): Gain = 1. Used to isolate stages without changing voltage."
        ],
        takeaway: "Op-amp analysis is all about two rules: inputs equal (virtual short), input current = 0. The rest is just Ohm's Law around the feedback loop."
      }
    ]
  },
  {
    topic: "Analog & Digital Electronics",
    sections: [
      {
        title: "Analog vs Digital (Like I'm 12)",
        content: "ANALOG signals are continuous — like a dimmer switch that smoothly brightens a light. DIGITAL signals are on/off — like a regular light switch that's either fully on or fully off. The real world is analog; computers are digital.",
        steps: [
          "ANALOG: Infinite values between min and max. Examples: temperature, speed, sound volume.",
          "DIGITAL: Only two values — 0 (low/off) and 1 (high/on). Also called binary.",
          "ADC (Analog-to-Digital Converter): Turns an analog voltage into a binary number a computer can use.",
          "DAC (Digital-to-Analog Converter): Turns a binary number back into an analog voltage.",
          "Key parameters: Resolution (how many bits), Sampling rate (how often you measure)."
        ],
        analogy: "Analog is a dimmer switch (smooth). Digital is a light switch (on/off). To use a dimmer with a computer, you need ADC.",
        takeaway: "All digital systems interface with the analog world through ADCs and DACs. The quality depends on resolution and sampling rate."
      }
    ]
  },
  {
    topic: "Measurement Systems, Errors & Calibration",
    sections: [
      {
        title: "No Measurement is Perfect (Like I'm 12)",
        content: "Every measurement has error. Even the best ruler has a tiny inaccuracy. The goal isn't zero error — it's knowing how much error exists and whether it's acceptable for your application.",
        steps: [
          "ACCURACY: How close your measurement is to the TRUE value. A bullseye is accurate.",
          "PRECISION: How repeatable your measurements are. Five arrows in a tight cluster = precise, even if off-center.",
          "SYSTEMATIC ERROR: Consistent bias in one direction. Example: a scale that always reads 0.5 kg too high. Can be calibrated out.",
          "RANDOM ERROR: Unpredictable variation. Example: reading noise. Can be reduced by averaging multiple readings.",
          "CALIBRATION: Comparing your instrument against a known standard and adjusting it to remove systematic error."
        ],
        analogy: "A dartboard: Accuracy = hitting the bullseye. Precision = all darts close together. You want both, but you can have one without the other.",
        takeaway: "Systematic error can be calibrated. Random error can only be reduced (by averaging, filtering, or better instruments)."
      }
    ]
  },
  {
    topic: "Process Control Fundamentals (open/closed loop, PID)",
    sections: [
      {
        title: "What is Process Control? (Like I'm 12)",
        content: "Process control is like a thermostat for your house. You set the temperature you want (setpoint), the thermostat measures the actual temperature (feedback), and turns the heater on or off to make them match. This is a CONTROL LOOP.",
        steps: [
          "OPEN-LOOP: Turn on the heater for 10 minutes and hope it's warm enough. No feedback — you don't check the actual temperature.",
          "CLOSED-LOOP: Measure the temperature continuously and adjust the heater accordingly. This is feedback control.",
          "ON/OFF CONTROL: Simple — heater is fully on or fully off. Causes cycling (overshoot/undershoot).",
          "PID CONTROL: Proportional (P) = respond to how far you are from target. Integral (I) = corrects accumulated past error. Derivative (D) = anticipates future error based on rate of change."
        ],
        analogy: "Driving a car: Open-loop = close your eyes and steer (bad!). Closed-loop = look at the road and adjust (good). P = how far from lane center. I = if you've been drifting left for a while, steer more. D = if you're veering right fast, react before you cross the line.",
        takeaway: "Closed-loop with PID is the industry standard. P handles the present error, I handles the past, D predicts the future."
      }
    ]
  },
  {
    topic: "Control System Theory (transfer functions, stability, Bode/root locus)",
    sections: [
      {
        title: "What is a Transfer Function? (Like I'm 12)",
        content: "A transfer function is a mathematical box that describes how a system responds to inputs. You put in a signal (input), and the transfer function tells you what comes out (output). It's like a recipe — flour + eggs + heat → cake. Transfer function = the recipe.",
        steps: [
          "Laplace Transform: Converts time-domain signals (changing over time) into s-domain (frequency). Makes differential equations into algebra.",
          "POLES: Values of 's' that make the denominator zero. Poles determine stability. Poles in left half of s-plane = stable system.",
          "ZEROS: Values of 's' that make the numerator zero. Zeros shape the response but don't affect stability.",
          "STABILITY: A system is stable if a bounded input gives a bounded output. If ANY pole has a positive real part, the system is unstable.",
          "BODE PLOT: Shows gain (how much signal passes) and phase shift vs frequency. Used to check stability margins."
        ],
        takeaway: "Poles determine stability. Left-half-plane poles = stable. Right-half-plane poles = unstable. This is the single most important concept."
      }
    ]
  },
  {
    topic: "Industrial Instrumentation (flow/level/pressure/valves)",
    sections: [
      {
        title: "The Four Horsemen of Process Measurement (Like I'm 12)",
        content: "In any factory or plant, you need to measure four things: PRESSURE, FLOW, LEVEL, and TEMPERATURE. These are the basic vital signs of a process, just like a doctor checks your blood pressure, pulse, breathing, and temperature.",
        steps: [
          "PRESSURE: Measured with manometers, Bourdon tubes, diaphragm gauges, or pressure transmitters (capacitive, piezoelectric).",
          "FLOW: Measured with orifice plates (pressure drop across a restriction), turbine meters (spinning rotor), electromagnetic (conductive fluids), ultrasonic (sound waves), Coriolis (mass flow directly).",
          "LEVEL: Measured with sight glass (direct visual), differential pressure (hydrostatic head), radar (microwave reflection), ultrasonic (sound echo), capacitance (dielectric change).",
          "VALVES: Control flow. Types: gate (on/off), globe (throttling), ball (quarter-turn), butterfly (large pipes), diaphragm (corrosive fluids). Actuation: manual, pneumatic, electric, hydraulic."
        ],
        takeaway: "For each measurement, know the principle (how it works) and the application (where to use it). Orifice plates are cheap; Coriolis is accurate but expensive. Choose based on fluid properties, accuracy needs, and budget."
      }
    ]
  },
  {
    topic: "PLC Programming & Ladder Logic",
    sections: [
      {
        title: "What is a PLC? (Like I'm 12)",
        content: "A PLC (Programmable Logic Controller) is a rugged industrial computer that controls machines. Unlike your desktop PC, it's built to survive dust, vibration, heat, and electrical noise. It runs ONE program over and over in a scan cycle.",
        steps: [
          "A PLC replaces hard-wired relay panels. Instead of wires connecting relays, you write a program.",
          "SCAN CYCLE: (1) Read all inputs → (2) Execute program → (3) Write all outputs. Repeat forever.",
          "LADDER LOGIC: Looks like an electrical ladder. Left power rail → contacts (inputs) → coils (outputs) → right power rail.",
          "Normally Open (NO) contact: Closed (conducts) when the input is ON. Normally Closed (NC): Closed when input is OFF.",
          "Coil: When the rung is true, the output turns ON. Can be a motor, light, solenoid."
        ],
        analogy: "Ladder logic is like drawing a circuit diagram. If the path from left to right is complete (all contacts closed), the coil at the end turns on. Each rung is a separate circuit.",
        takeaway: "Think of ladder rungs as parallel circuit paths. A rung is TRUE when there's a continuous path from left rail to coil. Memorize: NO = open when off, NC = closed when off."
      }
    ]
  },
  {
    topic: "SCADA / DCS Systems",
    sections: [
      {
        title: "SCADA vs DCS (Like I'm 12)",
        content: "SCADA (Supervisory Control And Data Acquisition) monitors and controls spread-out systems like pipelines or power grids across hundreds of kilometers. DCS (Distributed Control System) controls a single plant with many connected loops — like a refinery.",
        steps: [
          "SCADA: Remote locations, radio/satellite/cellular communication, slower update rates (seconds), operator supervises from a central room.",
          "DCS: Single facility, high-speed control network, fast update rates (milliseconds), local controllers handle loops autonomously.",
          "BOTH have: RTUs/PLCs at the field level, communication network, HMI (Human-Machine Interface) screens, historian database.",
          "TREND: Modern SCADA and DCS are converging. Most new systems use the same hardware with different configuration."
        ],
        analogy: "SCADA is like monitoring all traffic lights in a city from one room. DCS is like the control room of a single factory where every machine is managed locally.",
        takeaway: "SCADA = wide area, slower, remote. DCS = local area, faster, integrated. Both collect data and let operators intervene."
      }
    ]
  },
  {
    topic: "Microcontrollers & Embedded Basics",
    sections: [
      {
        title: "Microcontroller vs Microprocessor (Like I'm 12)",
        content: "A microcontroller (MCU) is a tiny computer-on-a-chip with CPU, memory, and input/output all built in. A microprocessor (CPU) is just the brain — it needs external RAM, ROM, and peripherals. Your laptop has a CPU. Your microwave has an MCU.",
        steps: [
          "MCU = CPU + RAM + ROM + Peripherals (timers, ADC, UART, GPIO) all on ONE chip.",
          "Key features: GPIO pins (digital I/O), ADC (read analog sensors), Timers (PWM, delays), UART/SPI/I2C (communicate with other devices), Interrupts (respond instantly to events).",
          "EMBEDDED PROGRAMMING: Usually C/C++. The code runs in a loop: initialize, then while(1) { read inputs, process, write outputs }.",
          "GPIO: Each pin can be input (read a switch) or output (turn on an LED). Configurable in firmware."
        ],
        analogy: "A microcontroller is like a Swiss Army knife - everything you need in one package. A microprocessor is like a chef's knife — powerful but you need a whole kitchen around it.",
        takeaway: "MCU choice depends on: processing speed, memory, peripherals needed, power consumption, and cost. For most instrumentation, an 8-bit or 32-bit MCU with ADC and UART is sufficient."
      }
    ]
  },
  {
    topic: "Data Acquisition Systems (DAQ)",
    sections: [
      {
        title: "What is a DAQ System? (Like I'm 12)",
        content: "A DAQ system is the bridge between the physical world and a computer. Sensors measure temperature, pressure, etc. → signal conditioning → ADC → computer reads the numbers. A DAQ system is essentially a multi-channel digital voltmeter with storage.",
        steps: [
          "DAQ COMPONENTS: Sensors → Signal Conditioning → Multiplexer → ADC → Processor/Computer → Software.",
          "SAMPLING: Take N measurements per second (Hz). Nyquist rule: sample at least 2× the highest frequency in your signal.",
          "RESOLUTION: How many bits. 12-bit = 4096 levels. 16-bit = 65536 levels. More bits = finer detail but slower speed.",
          "MULTIPLEXING: One ADC switches between multiple channels. Trade-off: more channels = slower per-channel sampling rate.",
          "ALIASING: If you sample too slowly, high frequencies masquerade as low frequencies. Anti-aliasing filters prevent this."
        ],
        analogy: "A DAQ system is like a high-speed camera for voltage. You need enough frames per second (sample rate) and enough pixels (resolution) to capture the action clearly.",
        takeaway: "Sample rate and resolution are always a trade-off. Anti-aliasing filters are mandatory — never skip them."
      }
    ]
  },
  {
    topic: "Industrial Communication Protocols (RS-232/485, Modbus, HART, Profibus)",
    sections: [
      {
        title: "How Do Industrial Devices Talk? (Like I'm 12)",
        content: "Industrial devices need to send data to each other — sensors to PLCs, PLCs to HMIs. They use standardised 'languages' called protocols. Think of it like: RS-232 is a two-way radio (one-to-one), RS-485 is a party line (many devices share), Modbus is the language they speak.",
        steps: [
          "RS-232: Old standard. Point-to-point (one transmitter, one receiver). Max ~15m. +12V/-12V signalling. Used for short links.",
          "RS-485: Differential pair (twisted wires). Multi-drop (up to 32 devices). Max ~1200m. Industry workhorse for distance.",
          "MODBUS: The most common industrial protocol. Master/slave: one master asks questions, slaves answer. Can run on RS-232, RS-485, or TCP/IP.",
          "HART: Superimposes digital signal on 4-20 mA analog loop. Backward compatible — old instruments still work, new ones add digital data.",
          "PROFIBUS: High-speed deterministic protocol. Used in manufacturing for robot control, drives. Token passing between masters."
        ],
        analogy: "RS-232 = landline phone (one-to-one). RS-485 = walkie-talkie channel (many devices share the wire). Modbus = the specific language you agree to speak on that channel.",
        takeaway: "For exams: know RS-232 vs RS-485 (single-ended vs differential, short vs long), and Modbus (master/slave, most common)."
      }
    ]
  },
  {
    topic: "Power Electronics & Motor Drives",
    sections: [
      {
        title: "What is Power Electronics? (Like I'm 12)",
        content: "Power electronics is about efficiently CONVERTING and CONTROLLING electrical power. If regular electronics deals with signals (milliwatts), power electronics deals with big power (kilowatts to megawatts). It's the technology that makes variable-speed motor drives, solar inverters, and EV chargers work.",
        steps: [
          "RECTIFIER: AC → DC. Diodes convert alternating current to pulsating DC. Capacitors smooth it.",
          "INVERTER: DC → AC. Transistors (IGBTs/MOSFETs) switch on/off rapidly to create AC waveform.",
          "CHOPPER (DC-DC Converter): Changes DC voltage level. Buck = step down. Boost = step up.",
          "THYRISTOR (SCR): Latching switch. Once turned on, stays on until current drops to zero. Used for high-power AC control.",
          "MOTOR DRIVE: Takes AC line power → rectifies to DC → inverts to variable-frequency AC. Speed control by varying frequency."
        ],
        analogy: "Think of power conversion like water pipes: Rectifier = one-way valve (AC to DC). Inverter = pump that can reverse direction (DC to AC). Chopper = a regulator that changes pressure (voltage level).",
        takeaway: "Rectifier = AC to DC. Inverter = DC to AC. Motor drive = rectifier + DC link + inverter. Frequency controls motor speed."
      }
    ]
  },
  {
    topic: "Digital Signal Processing Basics",
    sections: [
      {
        title: "What is DSP? (Like I'm 12)",
        content: "Digital Signal Processing is manipulating numbers that represent real-world signals (sound, vibration, sensor data) using math. Instead of building complex analog circuits (filters, amplifiers), you do the same thing with simple arithmetic inside a processor.",
        steps: [
          "SAMPLING: Convert continuous analog signal to discrete numbers at regular intervals (ADC).",
          "QUANTIZATION: Each sample is rounded to the nearest digital value. This introduces quantization error (noise).",
          "DISCRETE FOURIER TRANSFORM (DFT): Breaks a signal into its frequency components. Tells you what frequencies are present.",
          "FFT (Fast Fourier Transform): A fast way to compute DFT. Essential for real-time analysis.",
          "DIGITAL FILTERS: FIR (Finite Impulse Response) = stable, linear phase, but needs many taps. IIR (Infinite Impulse Response) = fewer taps, but can be unstable."
        ],
        analogy: "DSP is like analyzing a soup: Sampling = taking spoonfuls at regular intervals. Quantization = measuring each spoonful to the nearest ml. FFT = separating the soup into its ingredients (salt, pepper, tomato).",
        takeaway: "The FFT is the most important DSP algorithm. It converts time-domain signals to frequency domain. Used everywhere — from audio processing to vibration analysis."
      }
    ]
  },
  {
    topic: "Lab Safety, Standards & Calibration Practices",
    sections: [
      {
        title: "Safety First — Always (Like I'm 12)",
        content: "In instrumentation, you work with electricity, pressure, chemicals, and heat. A mistake can kill. Safety isn't a rulebook you memorise for a test — it's a mindset you practice every time you enter a lab or plant.",
        steps: [
          "ELECTRICAL SAFETY: Lockout/Tagout (LOTO) — lock the power source and tag it before working. Never assume a circuit is off — measure first.",
          "PERSONAL PROTECTIVE EQUIPMENT (PPE): Safety glasses (always), insulated gloves (high voltage), steel-toe boots (heavy equipment), ear plugs (loud areas).",
          "STANDARDS: ISO 9001 (quality management), ISO 14001 (environmental), OHSAS 18001 (safety), NABL (calibration accreditation).",
          "CALIBRATION: Every instrument drifts over time. Must be compared against a traceable standard periodically. Document everything.",
          "TRACEABILITY: Your instrument → calibrated against a lab standard → that lab's standard → national standard (NIST/ NPL). A chain of comparisons back to the definition of the unit."
        ],
        analogy: "Safety is like wearing a seatbelt. You don't wear it because you expect to crash. You wear it because crashes happen when you least expect them.",
        takeaway: "LOTO saves lives. Calibration traceability proves your measurements are valid. Never skip either."
      }
    ]
  },
  {
    topic: "Biomedical Instrumentation Basics",
    sections: [
      {
        title: "How Do Medical Devices Measure the Body? (Like I'm 12)",
        content: "Biomedical instrumentation uses sensors to measure the body's electrical, chemical, and mechanical signals — ECG measures heart electricity, EEG measures brain electricity, blood pressure sensors measure pressure waves in arteries. The challenge: the body is salty, moving, and the signals are tiny.",
        steps: [
          "ECG (Electrocardiogram): Measures the heart's electrical activity with electrodes on skin. Signal is ~1mV. Main waves: P (atria contract), QRS (ventricles contract), T (ventricles relax).",
          "EEG (Electroencephalogram): Measures brain electrical activity. Very small (~10-100µV). Used for seizure detection, sleep studies.",
          "BLOOD PRESSURE: Invasive (catheter in artery, direct) or non-invasive (cuff, oscillometric method). Systolic / Diastolic readings.",
          "PATIENT SAFETY: Leakage current must be <10µA. The body can't handle much current — isolation amplifiers protect patients. Medical equipment must meet IEC 60601 standard."
        ],
        analogy: "ECG is like listening to the heart's electrical rhythm — each beat has a signature pattern. If the pattern changes shape, something is wrong.",
        takeaway: "Biomedical signals are tiny (µV to mV) and need careful amplification and filtering. Patient isolation is critical — a small fault can be fatal."
      }
    ]
  },
  {
    topic: "Robotics & Automation Basics",
    sections: [
      {
        title: "What Makes a Robot? (Like I'm 12)",
        content: "A robot has three essential parts: SENSORS (to perceive the world), ACTUATORS (to move and act), and CONTROL (to decide what to do). A toaster isn't a robot (no sensors to adapt). A Roomba is a robot (it senses walls and decides where to go).",
        steps: [
          "SENSORS: Vision cameras, LIDAR (laser ranging), ultrasonic (sonar), force/torque sensors, encoders (position feedback).",
          "ACTUATORS: DC motors (continuous rotation), stepper motors (precise positioning), servo motors (position control), pneumatic/hydraulic cylinders (linear motion).",
          "CONTROL ARCHITECTURE: Sense → Plan → Act loop. The robot reads sensors, decides what to do, then moves actuators.",
          "DEGREES OF FREEDOM (DOF): Each independent movement = 1 DOF. A 6-axis robot arm has 6 DOF (3 for position + 3 for orientation).",
          "END EFFECTOR: The 'hand' at the end of a robot arm. Can be a gripper, welding torch, camera, or custom tool."
        ],
        analogy: "A robot arm is like your own arm: shoulder (rotation), elbow (bend), wrist (tilt/rotate) — multiple joints working together to position your hand (end effector) exactly where needed.",
        takeaway: "Robots are reprogrammable, multifunctional manipulators. Key specs: payload (how much it can lift), reach (how far), DOF (flexibility), repeatability (precision)."
      }
    ]
  },
  {
    topic: "Testing, Troubleshooting & Maintenance",
    sections: [
      {
        title: "How to Fix Anything (Like I'm 12)",
        content: "Troubleshooting is detective work. A system stops working → you gather clues (symptoms) → form hypotheses → test systematically → isolate the fault → fix it. The golden rule: change one thing at a time and observe the result.",
        steps: [
          "SYMPTOM ANALYSIS: What exactly is wrong? No power? Wrong value? Intermittent? This tells you where to look.",
          "HALF-SPLIT METHOD: Divide the system in half. Test the middle. If it works, the fault is in the second half. Repeat. Fastest way to isolate.",
          "MEASUREMENT: Use a multimeter (voltage, continuity, resistance), oscilloscope (waveforms, timing), signal generator (inject test signals).",
          "COMMON FAULTS: Loose connections (most common), failed power supply, corrosion on contacts, sensor drift, calibration offset, software bug.",
          "PREVENTIVE MAINTENANCE: Scheduled inspection, cleaning, calibration, replacing consumable parts before they fail. Far cheaper than breakdown maintenance."
        ],
        analogy: "Troubleshooting is like a doctor diagnosing an illness. Symptoms → tests → diagnosis → treatment. The half-split method is like checking if the pain is in your upper or lower body first.",
        takeaway: "Always check power first. Then check connections. Then check signals systematically. Half-split isolates faults fastest. Document everything."
      }
    ]
  }
];
