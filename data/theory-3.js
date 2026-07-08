/* =========================================================
   THEORY Part 3/4 — Topics 11-15
   Slow Learner Method (FlintK12)
   ========================================================= */
var THEORY_DATA_3 = [

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

];
