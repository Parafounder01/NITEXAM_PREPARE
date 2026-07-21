/* ═══════════════════════════════════════════════════════════════
   STUDY MODE ENGINE — SLOW LEARNER FRIENDLY
   Flip Cards, Spaced Repetition, Mind Maps, Audio, Step-by-Step
   ═══════════════════════════════════════════════════════════════ */

// ─── QUESTION DATABASE ───
const studyData = [
    // HISTORY - ANCIENT
    { id: 61, category: "HISTORY", question: "The Indus Valley people worshiped which god primarily?", options: ["Indra", "Pashupati (Proto-Shiva)", "Brahma", "Vishnu"], correct: 1, explanation: "Indus Valley people worshiped Pashupati (Proto-Shiva) — a figure sitting in yoga pose with animals. They also worshiped Mother Goddess (fertility). Seals show Pashupati surrounded by animals. This is early form of Hinduism!", memory: "Pashupati = 'Pashu' (animal) + 'Pati' (lord) = Lord of Animals", tamil: "இந்துஸ் மக்கள் பசுபதியை (ஆரம்ப சிவன்) வழிபட்டார்கள். இது ஆரம்ப இந்து மதம்!" },
    { id: 62, category: "HISTORY", question: "Which metal was NOT known to the Indus Valley people?", options: ["Copper", "Gold", "Iron", "Silver"], correct: 2, explanation: "Indus Valley people knew Copper, Gold, Silver, Bronze — but NOT Iron. Iron came later (Vedic period, ~1200 BCE). They used Bronze (copper + tin) for tools and weapons.", memory: "Indus = Bronze Age, No Iron!", tamil: "இந்துஸ் மக்களுக்கு இரும்பு தெரியாது. வேத காலத்தில் இரும்பு வந்தது." },
    { id: 63, category: "HISTORY", question: "The famous 'Dancing Girl' statue was found at:", options: ["Harappa", "Mohenjo-daro", "Lothal", "Kalibangan"], correct: 1, explanation: "Dancing Girl statue found at Mohenjo-daro. Made of bronze. 10.5 cm tall. She stands in tribhanga (three-bend) pose. Shows they had art, dance, and bronze casting skills!", memory: "Dancing Girl = Mohenjo-daro's most famous find", tamil: "நடனப் பெண் சிலை மொஹஞ்சதாரோவில் கிடைத்தது. இது கலை மற்றும் நடனத்தை காட்டுகிறது!" },
    { id: 64, category: "HISTORY", question: "Lothal was famous for:", options: ["Great Bath", "Dockyard", "Fire altars", "Granary"], correct: 1, explanation: "Lothal (Gujarat) had the world's FIRST known dockyard! Connected to Arabian Sea. Shows they had maritime trade. They traded with Mesopotamia (Iraq). Also had rice husk evidence!", memory: "Lothal = 'Loot' (port) = Dockyard!", tamil: "லோத்தலில் உலகின் முதல் கப்பல் துறைமுகம்! அவர்கள் மெசபடோமியாவுடன் வர்த்தகம் செய்தார்கள்." },
    { id: 65, category: "HISTORY", question: "Dholavira is famous for:", options: ["Dockyard", "Water management system", "Fire altars", "Seals"], correct: 1, explanation: "Dholavira (Gujarat) had advanced water management! Found reservoirs, channels, dams. City divided into 3 parts. UNESCO World Heritage Site (2021).", memory: "Dholavira = 'Dhol' (drum) + 'vira' (hero) = Water Hero!", tamil: "தோலவீரா நீர் மேலாண்மை அமைப்புக்கு பெயர் பெற்றது. இது யுனெஸ்கோ உலக பாரம்பரிய தலம்!" },
    { id: 66, category: "HISTORY", question: "The Vedic period is named after:", options: ["Vedas", "Vindhya mountains", "Vidura", "Vijayanagara"], correct: 0, explanation: "Vedic period named after Vedas (holy books). Rig Veda is oldest (1500-1200 BCE). Four Vedas: Rig, Sama, Yajur, Atharva. Vedic people = Aryans who came from Central Asia.", memory: "Vedic = Vedas = Holy Books", tamil: "வேத காலம் வேதங்கள் பெயரில் பெயரிடப்பட்டது. ரிக் வேதம் மிகப் பழமையானது." },
    { id: 67, category: "HISTORY", question: "The Buddha's original name was:", options: ["Siddhartha Gautama", "Vardhamana Mahavira", "Bindusara", "Chandragupta"], correct: 0, explanation: "Buddha = Siddhartha Gautama. Born in Lumbini (Nepal, 563 BCE). Father = Suddhodana (king). Mother = Maya. Left palace at 29, became Buddha at 35!", memory: "Siddhartha = 'One who achieves the goal'", tamil: "புத்தரின் உண்மை பெயர் சித்தார்த கௌதம. நேபாளத்தில் பிறந்தார்." },
    { id: 68, category: "HISTORY", question: "The Four Noble Truths of Buddhism are:", options: ["Life is suffering, cause is desire, suffering can end, path is Eightfold Path", "Truth, Non-violence, Casteless, God", "Work, Worship, Charity, Knowledge", "Earth, Water, Fire, Air"], correct: 0, explanation: "Four Noble Truths: 1) Dukkha = Life is suffering. 2) Samudaya = Desire causes suffering. 3) Nirodha = Suffering can end. 4) Magga = Eightfold Path ends suffering.", memory: "D-S-N-M = 'Does Suffering Need Medicine?'", tamil: "நான்கு உயர்ந்த உண்மைகள்: துக்கம், காரணம், முடிவு, வழி!" },
    { id: 69, category: "HISTORY", question: "Jainism teaches:", options: ["Bhakti (devotion)", "Ahimsa (non-violence) strictly", "Yoga", "Meditation only"], correct: 1, explanation: "Jainism = STRICTEST non-violence (Ahimsa). Even monks sweep ground before walking (to avoid killing insects). Mahavira = 24th Tirthankara.", memory: "Jain = 'Jina' = Conqueror of self through non-violence", tamil: "சமணம் = மிக கடுமையான அகிம்சை. காக்கைச் சிறகேர் காலில் தட்டி நடப்பார்கள்!" },
    { id: 70, category: "HISTORY", question: "Alexander the Great invaded India in:", options: ["326 BCE", "305 BCE", "261 BCE", "185 BCE"], correct: 0, explanation: "Alexander invaded India in 326 BCE. Crossed the Indus River. Fought King Porus at Battle of Hydaspes (Jhelum River). Alexander won but was impressed by Porus.", memory: "Alexander = 326 BCE = 'Alexander-326'", tamil: "ஆலெக்சாண்டர் கி.மு. 326 இல் இந்தியாவை ஆக்கிரமித்தார்." },
    { id: 71, category: "HISTORY", question: "Chandragupta Maurya founded the Maurya Empire with help of:", options: ["Ashoka", "Kautilya (Chanakya)", "Bindusara", "Megasthenes"], correct: 1, explanation: "Chandragupta Maurya + Kautilya (Chanakya) = Maurya Empire! Kautilya wrote 'Arthashastra' (political science book). Overthrew Nanda dynasty (322 BCE).", memory: "Kautilya = 'Chanakya' = Chanakya Neeti = Political Master", tamil: "சந்திரகுப்த மௌரியர் + கௌடிலியர் = மௌரிய பேரரசு!" },
    { id: 72, category: "HISTORY", question: "Ashoka fought the Kalinga War in:", options: ["305 BCE", "261 BCE", "232 BCE", "185 BCE"], correct: 1, explanation: "Kalinga War = 261 BCE. Ashoka conquered Kalinga (Odisha). But saw massive bloodshed (100,000 dead). Regretted violence. Converted to Buddhism.", memory: "Ashoka = 261 = 'A-261' (Ashoka won but felt sad)", tamil: "கலிங்கப் போர் = கி.மு. 261. அசோகர் புத்த மதத்தை தழுவினார்." },
    { id: 73, category: "HISTORY", question: "The Maurya Empire's capital was:", options: ["Pataliputra", "Taxila", "Ujjain", "Kalinga"], correct: 0, explanation: "Maurya capital = Pataliputra (modern Patna, Bihar). Located at confluence of Ganga and Son rivers. Most magnificent city of ancient India.", memory: "Pataliputra = 'Patna' = Maurya Capital", tamil: "மௌரிய தலைநகரம் = பாடலிபுத்திரம் (பாட்னா)!" },
    { id: 74, category: "HISTORY", question: "The Gupta period is known as:", options: ["Dark Age", "Golden Age", "Silver Age", "Iron Age"], correct: 1, explanation: "Gupta period (320-550 CE) = 'Golden Age of India'! Great progress in: Science (Aryabhata), Literature (Kalidasa), Art (Ajanta caves), Mathematics (Zero, Decimal).", memory: "Gupta = 'Gold' era = Golden Age", tamil: "குப்த காலம் = 'இந்தியாவின் பொற்காலம்'!" },
    { id: 75, category: "HISTORY", question: "Aryabhata invented:", options: ["Zero", "Decimal system", "Both Zero and Decimal system", "Neither"], correct: 2, explanation: "Aryabhata (476-550 CE) invented Zero AND Decimal system! Also calculated: Earth's circumference (39,968 km), Pi (3.1416), Solar year (365.358 days).", memory: "Aryabhata = 'Arya-bhatta' = Noble scholar = Zero + Decimal", tamil: "ஆரியபட்டர் சுழியம் மற்றும் தசம முறை கண்டுபிடித்தார்!" },

    // HISTORY - MEDIEVAL
    { id: 76, category: "HISTORY", question: "The Delhi Sultanate was founded by:", options: ["Qutub-ud-din Aibak", "Iltutmish", "Razia Sultana", "Balban"], correct: 0, explanation: "Delhi Sultanate founded by Qutub-ud-din Aibak (1206 CE). He was a slave of Muhammad Ghori. Called 'Slave Dynasty'. Started Mamluk dynasty.", memory: "Qutub = 'Tower' = Qutub Minar = First Sultan", tamil: "டெல்லி சுல்தானகம் = குத்புத்தீன் ஐபக்!" },
    { id: 77, category: "HISTORY", question: "The first female ruler of India was:", options: ["Razia Sultana", "Chand Bibi", "Rani Lakshmibai", "Nur Jahan"], correct: 0, explanation: "Razia Sultana = first female ruler of Delhi (1236-1240). Daughter of Iltutmish. Ruled for 4 years. Wore men's clothes, sat in court without purdah.", memory: "Razia = 'Raja' (king) + 'ia' = Queen who ruled like a king", tamil: "ராசியா சுல்தானா = இந்தியாவின் முதல் பெண் ஆட்சியாளர்!" },
    { id: 78, category: "HISTORY", question: "The Vijayanagara Empire was founded by:", options: ["Harihara I and Bukka Raya I", "Krishnadevaraya", "Deva Raya II", "Achyuta Raya"], correct: 0, explanation: "Vijayanagara Empire = Harihara I + Bukka Raya I (1336 CE). Founded with help of sage Vidyaranya. Capital: Vijayanagara (Hampi, Karnataka).", memory: "Hari + Bukka = 'Hari-Bukka' = Vijayanagara founders", tamil: "விஜயநகரப் பேரரசு = ஹரிஹர I + புக்க ராய I!" },
    { id: 79, category: "HISTORY", question: "Babur invaded India because:", options: ["Religious reasons", "Lust for wealth and territory", "To spread Islam", "To find treasure"], correct: 1, explanation: "Babur invaded India for WEALTH and TERRITORY. He was Timurid prince from Fergana (Uzbekistan). Lost his kingdom, needed new land. Defeated Ibrahim Lodi at First Battle of Panipat (1526)!", memory: "Babur = 'Baby' ruler who wanted India's money", tamil: "பாபர் செல்வம் மற்றும் பிரதேசத்திற்காக இந்தியாவை ஆக்கிரமித்தார்!" },
    { id: 80, category: "HISTORY", question: "The First Battle of Panipat was fought between:", options: ["Babur and Ibrahim Lodi", "Akbar and Hemu", "Sher Shah and Humayun", "Aurangzeb and Shahu"], correct: 0, explanation: "First Battle of Panipat (1526) = Babur vs Ibrahim Lodi. Babur used gunpowder and cannons (first time in India). Mughal Empire started!", memory: "1526 = 1st Panipat = Babur wins = Mughal start", tamil: "முதல் பானிபட் போர் = பாபர் vs இப்ராகிம் லோடி!" },
    { id: 81, category: "HISTORY", question: "Akbar's capital was at:", options: ["Delhi", "Agra", "Fatehpur Sikri", "Lahore"], correct: 2, explanation: "Akbar's new capital = Fatehpur Sikri (1571-1585). Built for Sufi saint Sheikh Salim Chishti. Famous buildings: Panch Mahal, Diwan-i-Khas, Buland Darwaza.", memory: "Fatehpur = 'Victory City' = Akbar's dream capital", tamil: "அக்பரின் புதிய தலைநகரம் = ஃபதேபூர் சிக்ரி!" },
    { id: 82, category: "HISTORY", question: "The Taj Mahal was built by:", options: ["Akbar", "Shah Jahan", "Aurangzeb", "Jahangir"], correct: 1, explanation: "Taj Mahal = Shah Jahan (1632-1653) for wife Mumtaz Mahal. 22 years to build. 20,000 workers. Cost: ₹32 crore (then). Made of white marble. One of 7 Wonders!", memory: "Taj Mahal = 'Crown of Palaces' = Love story", tamil: "தாஜ்மகால் = ஷாஜகான் மனைவி மும்தாஜ் மகாலுக்காக கட்டினார்!" },
    { id: 83, category: "HISTORY", question: "Shivaji is famous for:", options: ["Navy", "Guerilla warfare (Ganimi Kava)", "Cavalry only", "Elephant warfare"], correct: 1, explanation: "Shivaji = FAMOUS for Guerilla warfare (Ganimi Kava). Small, fast attacks. Hit and run. Used terrain. This is still studied in military academies!", memory: "Shivaji = 'Shiva' + 'ji' = Guerilla King", tamil: "சிவாஜி = கொரில்லா போர்முறைக்கு பெயர் பெற்றவர்!" },
    { id: 84, category: "HISTORY", question: "The Battle of Plassey (1757) was fought between:", options: ["British and French", "British and Siraj-ud-Daulah", "British and Hyder Ali", "British and Tipu Sultan"], correct: 1, explanation: "Battle of Plassey (1757) = British (Clive) vs Siraj-ud-Daulah. Clive bribed Mir Jafar. Siraj lost. British got Bengal. This started British rule!", memory: "Plassey = 'Place' where British took India", tamil: "பிளாசிப் போர் = பிரிட்டிஷ் ஆட்சி தொடக்கம்!" },
    { id: 85, category: "HISTORY", question: "The Revolt of 1857 started at:", options: ["Delhi", "Meerut", "Kanpur", "Lucknow"], correct: 1, explanation: "1857 Revolt started at Meerut (10 May 1857). Soldiers refused Enfield rifle cartridges (greased with cow/pig fat). Mangal Pandey fired first shot!", memory: "1857 = Meerut = Mangal Pandey = First War of Independence", tamil: "1857 கிளர்ச்சி மீரட்டில் தொடங்கியது!" },

    // GEOGRAPHY
    { id: 86, category: "GEOGRAPHY", question: "The northernmost point of India is:", options: ["Kanyakumari", "Siachen", "Indira Col", "Karakoram Pass"], correct: 2, explanation: "India's extreme points: North = Indira Col (35°41'N). South = Indira Point. East = Katchal Island. West = Ghar Moti.", memory: "Indira Col = North Pole of India", tamil: "இந்தியாவின் வடக்கு முனை = இந்திரா கோல்!" },
    { id: 87, category: "GEOGRAPHY", question: "The longest river in India is:", options: ["Ganga", "Godavari", "Brahmaputra", "Yamuna"], correct: 0, explanation: "Ganga is longest WITHIN India (2525 km). Godavari = 1465 km. Brahmaputra = 916 km in India (2900 km total).", memory: "Ganga = 'G' = Greatest in India!", tamil: "கங்கா = இந்தியாவில் மிக நீளமான நதி!" },
    { id: 88, category: "GEOGRAPHY", question: "Which state has the longest coastline?", options: ["Tamil Nadu", "Gujarat", "Andhra Pradesh", "Kerala"], correct: 1, explanation: "Coastline: Gujarat = 1600 km (longest). Andhra Pradesh = 974 km. Tamil Nadu = 907 km. Kerala = 580 km.", memory: "Gujarat = 'Gulf' = Longest coast!", tamil: "குஜராத் = மிக நீளமான கடற்கரை!" },
    { id: 89, category: "GEOGRAPHY", question: "The Western Ghats are also known as:", options: ["Sahyadri", "Aravalli", "Vindhya", "Satpura"], correct: 0, explanation: "Western Ghats = Sahyadri = 'Benevolent Mountains'. Aravalli = Oldest mountains (Rajasthan). Vindhya = Divides North-South.", memory: "Sahyadri = 'Sahi' (benevolent) + 'Adri' (mountain)", tamil: "மேற்கு தொடர்மலை = சாக்யாத்ரி!" },
    { id: 90, category: "GEOGRAPHY", question: "The largest freshwater lake in India is:", options: ["Chilika Lake", "Dal Lake", "Wular Lake", "Sambhar Lake"], correct: 2, explanation: "Wular Lake = 260 sq km (largest freshwater). Chilika = 1100 sq km (largest lagoon). Dal = Freshwater (smaller). Sambhar = Saltwater.", memory: "Wular = 'Water' = Fresh water!", tamil: "வுலர் ஏரி = இந்தியாவின் மிகப்பெரிய நன்னீர் ஏரி!" },
    { id: 91, category: "GEOGRAPHY", question: "The Tropic of Cancer passes through how many Indian states?", options: ["6", "7", "8", "9"], correct: 2, explanation: "Tropic of Cancer (23.5°N) passes through 8 states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, WB, Tripura, Mizoram.", memory: "8 states = '8 is Great' = Tropic of Cancer", tamil: "கடக ரேகை 8 மாநிலங்கள் வழியாக செல்கிறது!" },
    { id: 92, category: "GEOGRAPHY", question: "Which lake is formed by a meteorite impact?", options: ["Chilika Lake", "Lonar Lake", "Wular Lake", "Dal Lake"], correct: 1, explanation: "Lonar Lake = meteorite impact crater. In Maharashtra. 50,000 years old. Only saltwater lake in basalt rock.", memory: "Lonar = 'Lone' + 'ar' = One meteorite = One lake", tamil: "லோனார் ஏரி = விண்கல் தாக்க பள்ளம்!" },

    // POLITY
    { id: 93, category: "POLITY", question: "The Preamble of the Indian Constitution begins with:", options: ["We the Citizens of India", "We the People of India", "We the Citizens of Bharat", "We the People of Bharat"], correct: 1, explanation: "'We, the people of India' = Democratic power comes from PEOPLE! Sovereign, Socialistic, Secular, Democratic, Republic.", memory: "Preamble = 'We the People' = Democracy = People power", tamil: "அரசியலமைப்பு முன்னுரை 'நாம், இந்திய மக்கள்' என்று தொடங்குகிறது!" },
    { id: 94, category: "POLITY", question: "The concept of Fundamental Rights is borrowed from:", options: ["British Constitution", "American Constitution", "French Constitution", "Irish Constitution"], correct: 1, explanation: "Fundamental Rights = USA. Parliamentary System = UK. Directive Principles = Ireland. Emergency Provisions = Germany.", memory: "America = 'Free' = Rights!", tamil: "அடிப்படை உரிமைகள் = அமெரிக்க அரசியலமைப்பு!" },
    { id: 95, category: "POLITY", question: "Which Article deals with the Right to Equality?", options: ["Article 12", "Article 14", "Article 19", "Article 21"], correct: 1, explanation: "Article 14 = Right to Equality. Article 19 = Freedom of Speech. Article 21 = Right to Life. Article 32 = Right to Constitutional Remedies.", memory: "14 = '1 for all' = Equality", tamil: "உரிமை 14 = சமத்துவ உரிமை!" },
    { id: 96, category: "POLITY", question: "The Directive Principles of State Policy are contained in:", options: ["Part III", "Part IV", "Part V", "Part VI"], correct: 1, explanation: "Fundamental Rights = Part III (Articles 12-35). Directive Principles = Part IV (Articles 36-51). Fundamental Duties = Part IVA (Article 51A).", memory: "Part IV = 'IV' = 'Four' = DPSP", tamil: "கொள்கை வழிகாட்டுதல்கள் = பகுதி IV!" },
    { id: 97, category: "POLITY", question: "The President of India is elected by:", options: ["People directly", "Members of Parliament", "Electoral College", "Prime Minister"], correct: 2, explanation: "President is elected by Electoral College: elected members of both houses of Parliament + elected members of state legislative assemblies.", memory: "President = Electoral College = MP + MLA", tamil: "குடியரசுத் தலைவர் தேர்தல் கல்லூரி மூலம் தேர்ந்தெடுக்கப்படுகிறார்!" },
    { id: 98, category: "POLITY", question: "The Supreme Court of India was established in:", options: ["1947", "1950", "1952", "1955"], correct: 1, explanation: "Supreme Court established on 28 January 1950. First Chief Justice: H.J. Kania. Located in New Delhi. Has original, appellate, and advisory jurisdiction.", memory: "SC = 1950 = 'SC-50' = Supreme Court", tamil: "உச்ச நீதிமன்றம் = 1950 இல் நிறுவப்பட்டது!" },

    // SCIENCE
    { id: 99, category: "SCIENCE", question: "The SI unit of force is:", options: ["Joule", "Watt", "Newton", "Pascal"], correct: 2, explanation: "Force = Mass × Acceleration (F = ma). Force = Newton (N). Energy = Joule (J) = N×m. Power = Watt (W) = J/s.", memory: "Newton = Force = N = 'N' for Newton", tamil: "விசையின் SI அலகு = நியூட்டன்!" },
    { id: 100, category: "SCIENCE", question: "The speed of light in vacuum is:", options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10¹² m/s"], correct: 1, explanation: "Speed of light = 300,000 km/second = 3 × 10⁸ m/s. Fastest thing in universe. Nothing can go faster than light.", memory: "3 × 10⁸ = '30 crores per second'!", tamil: "ஒளியின் வேகம் = 3 × 10⁸ மீ/வினாடி!" },

    // CURRENT AFFAIRS
    { id: 101, category: "CURRENT", question: "India's first underwater metro was inaugurated in:", options: ["Mumbai", "Delhi", "Kolkata", "Chennai"], correct: 2, explanation: "Kolkata Metro = India's FIRST underwater metro! Route: Howrah to Maidagan (under Hooghly River). Opened: March 2024.", memory: "Kolkata = 'Cal' = First underwater", tamil: "கொல்கத்தா மெட்ரோ = இந்தியாவின் முதல் நீர்மட்ட மெட்ரோ!" },
    { id: 102, category: "CURRENT", question: "Chandrayaan-3 successfully landed on:", options: ["Mars", "Moon", "Venus", "Asteroid"], correct: 1, explanation: "Chandrayaan-3 landed on Moon's South Pole (first country!). Lander: Vikram. Rover: Pragyan. Found sulfur, aluminum, iron.", memory: "Chandrayaan-3 = 'Chandra' (Moon) = Moon landing", tamil: "சந்திரயான்-3 = சந்திரனில் தரையிறங்கியது!" },
    { id: 103, category: "CURRENT", question: "The PM Vishwakarma scheme is launched for:", options: ["IT professionals", "Traditional artisans", "Farmers", "Students"], correct: 1, explanation: "PM Vishwakarma = Support for traditional craftspeople. 18 trades. Benefits: ₹15,000 toolkit, Training, Credit support.", memory: "Vishwakarma = 'Vishwa' (world) + 'Karma' (work) = Artisans", tamil: "பிஎம் விஸ்வகர்மா = பாரம்பரிய கைவினைஞர்களுக்கு உதவி!" },

    // COMPUTER
    { id: 104, category: "COMPUTER", question: "CPU stands for:", options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"], correct: 0, explanation: "CPU = Central Processing Unit = 'Brain' of computer. Does all calculations. Has ALU (math), Control Unit (instructions), Registers (temporary storage).", memory: "CPU = 'Central Processing Unit' = Brain", tamil: "CPU = மைய செயலாக்க அலகு = கணினியின் மூளை!" },
    { id: 105, category: "COMPUTER", question: "RAM stands for:", options: ["Random Access Memory", "Read Access Memory", "Random Activity Memory", "Read Activity Memory"], correct: 0, explanation: "RAM = Random Access Memory = Temporary storage. Data lost when power off. Faster than hard disk. Used to run programs.", memory: "RAM = 'Random' = Temporary = Volatile", tamil: "RAM = குறிப்பிட்ட அணுகல் நினைவகம் = தற்காலிக சேமிப்பு!" },
    { id: 106, category: "COMPUTER", question: "HTTP stands for:", options: ["HyperText Transfer Protocol", "High Text Transfer Protocol", "HyperText Transmission Protocol", "High Text Transmission Protocol"], correct: 0, explanation: "HTTP = HyperText Transfer Protocol = Rules for transferring web pages. HTTPS = HTTP + Security (encrypted).", memory: "HTTP = 'HyperText' = Web pages", tamil: "HTTP = ஹைப்பர் டெக்ஸ்ட் டிரான்ஸ்பர் ப்ரோட்டோகால்!" },

    // TAMIL GK
    { id: 107, category: "TAMIL", question: "Thirukkural was written by:", options: ["Valluvar", "Thiruvalluvar", "Both are same", "Neither"], correct: 2, explanation: "Thirukkural = Thiruvalluvar = Valluvar (same person!). 1330 couplets in 133 chapters. Three sections: Virtue, Wealth, Love.", memory: "Thirukkural = 'Thiru' (holy) + 'Kural' (couplet)", tamil: "திருக்குறள் = திருவள்ளுவர் எழுதினார். 1330 குறள்கள்!" },
    { id: 108, category: "TAMIL", question: "The Sangam Age is associated with:", options: ["North India", "South India (Tamil Nadu)", "Central India", "East India"], correct: 1, explanation: "Sangam Age = Ancient Tamil Nadu (300 BCE - 300 CE). Three Tamil kingdoms: Chera, Chola, Pandya.", memory: "Sangam = 'Gathering' of poets in Tamil Nadu", tamil: "சங்க காலம் = பண்டைய தமிழ்நாடு!" },
    { id: 109, category: "TAMIL", question: "Silappadhikaram was written by:", options: ["Thiruvalluvar", "Illango Adigal", "Kamban", "Bharathiar"], correct: 1, explanation: "Silappadhikaram = 'Story of the Jewel Anklet' by Illango Adigal. Epic about Kannagi and Kovalan. One of Five Great Epics of Tamil!", memory: "Silappadhikaram = 'Silambu' (anklet) + 'Adhikaram' (chapter)", tamil: "சிலப்பதிகாரம் = இளங்கோ அடிகள் எழுதினார்!" },

    // ECONOMICS
    { id: 110, category: "ECONOMICS", question: "GST was implemented in India on:", options: ["1 April 2017", "1 July 2017", "1 January 2017", "1 October 2017"], correct: 1, explanation: "GST = 1 July 2017. Goods and Services Tax. 'One Nation, One Tax'. Replaced 17 indirect taxes.", memory: "GST = 'Great Simple Tax' = July 1, 2017", tamil: "ஜிஎஸ்டி = ஜூலை 1, 2017 அன்று நடைமுறைக்கு வந்தது!" }
];

// ─── STATE MANAGEMENT ───
let currentMode = 'flipcards';
let currentCategory = 'all';
let filteredData = [...studyData];
let currentIndex = 0;
let isFlipped = false;
let stepAnswer = null;
let speechSynth = window.speechSynthesis;
let currentUtterance = null;
let autoRead = true;
let speechSpeed = 1;

// Spaced repetition data
let spacedData = {};
function loadSpacedData() {
    const saved = localStorage.getItem('psg_study_spaced');
    if (saved) spacedData = JSON.parse(saved);
}
function saveSpacedData() {
    localStorage.setItem('psg_study_spaced', JSON.stringify(spacedData));
}
function getSpacedLevel(id) {
    if (!spacedData[id]) return { level: 0, nextReview: 0, correct: 0, wrong: 0 };
    return spacedData[id];
}
function updateSpacedLevel(id, quality) {
    if (!spacedData[id]) spacedData[id] = { level: 0, nextReview: 0, correct: 0, wrong: 0 };
    const data = spacedData[id];
    
    if (quality === 'easy') {
        data.level = Math.min(data.level + 1, 5);
        data.correct++;
    } else if (quality === 'hard') {
        data.level = Math.max(data.level - 1, 0);
        data.wrong++;
    } else {
        data.correct++;
    }
    
    // Calculate next review based on level (spaced repetition intervals)
    const intervals = [1, 3, 7, 14, 30, 60]; // days
    data.nextReview = Date.now() + (intervals[data.level] * 24 * 60 * 60 * 1000);
    
    saveSpacedData();
    updateProgress();
}

// ─── INITIALIZATION ───
document.addEventListener('DOMContentLoaded', function() {
    loadSpacedData();
    showTips();
    updateProgress();
});

// ─── TIPS POPUP ───
function showTips() {
    document.getElementById('tips-popup').style.display = 'flex';
}
function closeTips() {
    document.getElementById('tips-popup').style.display = 'none';
}

// ─── MODE STARTER ───
function startMode(mode) {
    currentMode = mode;
    document.querySelector('.mode-section').style.display = 'none';
    document.querySelector('.study-area').style.display = 'block';
    document.getElementById('mode-label').textContent = mode.toUpperCase().replace(/([A-Z])/g, ' $1').trim();
    
    // Show/hide mode-specific containers
    document.getElementById('flipcard-container').style.display = mode === 'flipcards' ? 'block' : 'none';
    document.getElementById('step-container').style.display = mode === 'stepbystep' ? 'block' : 'none';
    document.getElementById('mindmap-container').style.display = mode === 'mindmap' ? 'block' : 'none';
    document.getElementById('audio-bar').style.display = (mode === 'audio' || autoRead) ? 'block' : 'none';
    document.getElementById('category-bar').style.display = mode === 'category' ? 'flex' : 'flex';
    
    filterData();
    loadCard();
}

// ─── FILTER DATA ───
function filterData() {
    if (currentCategory === 'all') {
        filteredData = [...studyData];
    } else {
        filteredData = studyData.filter(q => q.category === currentCategory);
    }
    currentIndex = 0;
    document.getElementById('step-total').textContent = filteredData.length;
}

// ─── CATEGORY SELECTOR ───
document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentCategory = this.dataset.cat;
        filterData();
        loadCard();
    });
});

// ─── LOAD CARD ───
function loadCard() {
    if (filteredData.length === 0) return;
    
    const q = filteredData[currentIndex];
    
    // Update counter
    document.getElementById('card-counter').textContent = `${currentIndex + 1} / ${filteredData.length}`;
    
    if (currentMode === 'flipcards') {
        loadFlipCard(q);
    } else if (currentMode === 'stepbystep') {
        loadStepQuestion(q);
    } else if (currentMode === 'mindmap') {
        loadMindMap(q);
    } else {
        loadFlipCard(q); // Default to flipcard for audio/category/challenge
    }
}

// ─── FLIP CARD ───
function loadFlipCard(q) {
    document.getElementById('card-category').textContent = q.category;
    document.getElementById('card-number').textContent = `Q${q.id}`;
    document.getElementById('card-question').textContent = q.question;
    document.getElementById('card-answer').textContent = `${String.fromCharCode(65 + q.correct)}) ${q.options[q.correct]}`;
    document.getElementById('card-explanation').textContent = q.explanation;
    
    // Memory trick
    if (q.memory) {
        document.getElementById('card-memory').style.display = 'block';
        document.getElementById('card-memory-text').textContent = q.memory;
    } else {
        document.getElementById('card-memory').style.display = 'none';
    }
    
    // Tamil explanation
    if (q.tamil) {
        document.getElementById('card-tamil').style.display = 'block';
        document.getElementById('card-tamil-text').textContent = q.tamil;
    } else {
        document.getElementById('card-tamil').style.display = 'none';
    }
    
    // Reset flip
    isFlipped = false;
    document.getElementById('flipcard').classList.remove('flipped');
    
    // Auto-read
    if (autoRead) {
        setTimeout(() => speakQuestion(), 500);
    }
}

function flipCard() {
    isFlipped = !isFlipped;
    document.getElementById('flipcard').classList.toggle('flipped');
    
    if (isFlipped && autoRead) {
        setTimeout(() => speakExplanation(), 500);
    }
}

// ─── STEP-BY-STEP ───
function loadStepQuestion(q) {
    document.getElementById('step-current').textContent = currentIndex + 1;
    document.getElementById('step-category').textContent = q.category;
    document.getElementById('step-question').textContent = q.question;
    
    const optionsContainer = document.getElementById('step-options');
    optionsContainer.innerHTML = '';
    
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'step-option';
        btn.textContent = `${String.fromCharCode(65 + i)}) ${opt}`;
        btn.onclick = () => selectStepOption(i);
        optionsContainer.appendChild(btn);
    });
    
    stepAnswer = null;
    document.getElementById('step-explanation').style.display = 'none';
    document.getElementById('step-check').style.display = 'block';
    document.getElementById('step-next').style.display = 'none';
}

function selectStepOption(index) {
    document.querySelectorAll('.step-option').forEach(btn => btn.classList.remove('selected'));
    document.querySelectorAll('.step-option')[index].classList.add('selected');
    stepAnswer = index;
}

function checkStepAnswer() {
    if (stepAnswer === null) return;
    
    const q = filteredData[currentIndex];
    const options = document.querySelectorAll('.step-option');
    
    options.forEach((opt, i) => {
        opt.style.pointerEvents = 'none';
        if (i === q.correct) opt.classList.add('correct');
        else if (i === stepAnswer && stepAnswer !== q.correct) opt.classList.add('wrong');
    });
    
    document.getElementById('step-answer').textContent = `✅ Correct Answer: ${String.fromCharCode(65 + q.correct)}) ${q.options[q.correct]}`;
    document.getElementById('step-why').textContent = q.explanation;
    document.getElementById('step-tamil').textContent = q.tamil || '';
    document.getElementById('step-explanation').style.display = 'block';
    document.getElementById('step-check').style.display = 'none';
    document.getElementById('step-next').style.display = 'block';
}

function nextStep() {
    if (currentIndex < filteredData.length - 1) {
        currentIndex++;
        loadCard();
    }
}

// ─── MIND MAP ───
function loadMindMap(q) {
    const categories = [...new Set(studyData.map(item => item.category))];
    const center = document.getElementById('mindmap-center');
    center.textContent = '📚 ALL TOPICS';
    
    const branches = document.getElementById('mindmap-branches');
    branches.innerHTML = '';
    
    const colors = ['#4a6cf7', '#f68d1f', '#20c997', '#9f7aea', '#ed64a6', '#fc8181', '#ecc94b', '#48bb78', '#667eea'];
    const icons = ['📜', '🌍', '⚖️', '💰', '🔬', '💻', '🏮', '📰', '🧮'];
    
    categories.forEach((cat, i) => {
        const count = studyData.filter(q => q.category === cat).length;
        const branch = document.createElement('div');
        branch.className = 'mindmap-branch';
        branch.style.borderColor = colors[i % colors.length];
        branch.innerHTML = `
            <div class="branch-icon">${icons[i] || '📁'}</div>
            <div class="branch-title">${cat}</div>
            <div class="branch-count">${count} questions</div>
        `;
        branch.onclick = () => {
            currentCategory = cat;
            filterData();
            currentIndex = 0;
            loadFlipCard(filteredData[0]);
        };
        branches.appendChild(branch);
    });
}

// ─── NAVIGATION ───
function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        loadCard();
    }
}

function nextCard() {
    if (currentIndex < filteredData.length - 1) {
        currentIndex++;
        loadCard();
    }
}

// ─── SPACED REPETITION MARKS ───
function markHard() {
    const q = filteredData[currentIndex];
    updateSpacedLevel(q.id, 'hard');
    nextCard();
}

function markOk() {
    const q = filteredData[currentIndex];
    updateSpacedLevel(q.id, 'ok');
    nextCard();
}

function markEasy() {
    const q = filteredData[currentIndex];
    updateSpacedLevel(q.id, 'easy');
    nextCard();
}

// ─── PROGRESS ───
function updateProgress() {
    let mastered = 0, learning = 0, newCount = 0;
    
    studyData.forEach(q => {
        const level = getSpacedLevel(q.id);
        if (level.level >= 4) mastered++;
        else if (level.level > 0) learning++;
        else newCount++;
    });
    
    document.getElementById('stat-mastered').textContent = mastered;
    document.getElementById('stat-learning').textContent = learning;
    document.getElementById('stat-new').textContent = newCount;
    document.getElementById('progress-text').textContent = `${mastered + learning} / ${studyData.length}`;
    document.getElementById('progress-fill').style.width = `${((mastered + learning) / studyData.length) * 100}%`;
}

// ─── TEXT-TO-SPEECH ───
function speakQuestion() {
    const q = filteredData[currentIndex];
    speak(q.question);
}

function speakExplanation() {
    const q = filteredData[currentIndex];
    speak(`${q.options[q.correct]}. ${q.explanation} ${q.tamil || ''}`);
}

function speakStepExplanation() {
    const q = filteredData[currentIndex];
    speak(`${q.options[q.correct]}. ${q.explanation} ${q.tamil || ''}`);
}

function speakMindmap() {
    const q = filteredData[currentIndex];
    speak(`${q.category}: ${q.question} Answer: ${q.options[q.correct]}`);
}

function speak(text) {
    if (speechSynth.speaking) speechSynth.cancel();
    
    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.lang = 'en-IN';
    currentUtterance.rate = speechSpeed;
    currentUtterance.pitch = 1;
    
    currentUtterance.onstart = () => {
        document.getElementById('audio-play').textContent = '⏸';
    };
    currentUtterance.onend = () => {
        document.getElementById('audio-play').textContent = '▶';
    };
    
    speechSynth.speak(currentUtterance);
}

function toggleAudio() {
    if (speechSynth.speaking) {
        speechSynth.cancel();
        document.getElementById('audio-play').textContent = '▶';
    } else {
        speakExplanation();
    }
}

function changeSpeed() {
    const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];
    const currentIndex = speeds.indexOf(speechSpeed);
    speechSpeed = speeds[(currentIndex + 1) % speeds.length];
    document.getElementById('audio-speed').textContent = `${speechSpeed}x`;
}

// ─── KEYBOARD SHORTCUTS ───
document.addEventListener('keydown', function(e) {
    switch(e.key) {
        case 'ArrowLeft':
            prevCard();
            break;
        case 'ArrowRight':
            nextCard();
            break;
        case ' ':
        case 'Enter':
            if (currentMode === 'flipcards') flipCard();
            break;
        case '1':
            markHard();
            break;
        case '2':
            markOk();
            break;
        case '3':
            markEasy();
            break;
        case 's':
            speakQuestion();
            break;
    }
});

// ─── EXPOSE TO WINDOW ───
window.startMode = startMode;
window.flipCard = flipCard;
window.prevCard = prevCard;
window.nextCard = nextCard;
window.markHard = markHard;
window.markOk = markOk;
window.markEasy = markEasy;
window.checkStepAnswer = checkStepAnswer;
window.nextStep = nextStep;
window.closeTips = closeTips;
window.toggleAudio = toggleAudio;
window.changeSpeed = changeSpeed;
window.speakQuestion = speakQuestion;
window.speakExplanation = speakExplanation;
window.speakStepExplanation = speakStepExplanation;
window.speakMindmap = speakMindmap;