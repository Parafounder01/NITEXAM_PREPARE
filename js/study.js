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
    { id: 110, category: "ECONOMICS", question: "GST was implemented in India on:", options: ["1 April 2017", "1 July 2017", "1 January 2017", "1 October 2017"], correct: 1, explanation: "GST = 1 July 2017. Goods and Services Tax. 'One Nation, One Tax'. Replaced 17 indirect taxes.", memory: "GST = 'Great Simple Tax' = July 1, 2017", tamil: "ஜிஎஸ்டி = ஜூலை 1, 2017 அன்று நடைமுறைக்கு வந்தது!" },

    // ═══════════════════════════════════════════════════════════════
    // GENERAL STUDIES — ADDITIONAL 50+ Questions
    // ═══════════════════════════════════════════════════════════════

    // SCIENCE - PHYSICS
    { id: 200, category: "SCIENCE", question: "Which law states that every action has an equal and opposite reaction?", options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"], correct: 2, explanation: "Newton's Third Law = Action-Reaction. Examples: Gun fires bullet → Gun pushes back. You jump → Earth pushes up. Rocket launches → Gas pushes down.", memory: "3rd Law = 3 words: Action-Reaction-Equal", tamil: "நியூட்டனின் மூன்றாம் விதி = செயல்-எதிர்செயல்!" },
    { id: 201, category: "SCIENCE", question: "The phenomenon of total internal reflection is used in:", options: ["Mirrors", "Lenses", "Optical fibers", "Prisms"], correct: 2, explanation: "Total Internal Reflection (TIR) = Light bounces inside. Used in: Optical fibers (internet cables), Diamonds (sparkle), Mirages.", memory: "Optical fibers = Light stays inside = Data travels!", tamil: "முழு அக எதிரொளிப்பு = ஒளியிழை (optical fiber)!" },
    { id: 202, category: "SCIENCE", question: "Which color of light has the longest wavelength?", options: ["Violet", "Blue", "Yellow", "Red"], correct: 3, explanation: "VIBGYOR = Violet, Indigo, Blue, Green, Yellow, Orange, Red. Violet = 380-450 nm (shortest). Red = 620-750 nm (longest).", memory: "Red = 'R' = Really long wavelength!", tamil: "சிவப்பு = மிக நீளமான அலைநீளம்!" },
    { id: 203, category: "SCIENCE", question: "The SI unit of electric current is:", options: ["Volt", "Ampere", "Ohm", "Watt"], correct: 1, explanation: "Electric current = Ampere (A). Voltage = Volt (V). Resistance = Ohm (Ω). Power = Watt (W). Named after André-Marie Ampère.", memory: "Ampere = Current = A", tamil: "மின்னோட்டத்தின் SI அலகு = ஆம்பியர்!" },
    { id: 204, category: "SCIENCE", question: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: 2, explanation: "Nitrogen = 78% (most). Oxygen = 21%. Argon = 0.9%. Carbon Dioxide = 0.04%. Hydrogen = trace.", memory: "Nitrogen = 'N' = Number 1 in atmosphere!", tamil: "நைட்ரஜன் = 78% = வளிமண்டலத்தில் மிகுதி!" },
    { id: 205, category: "SCIENCE", question: "The chemical formula for water is:", options: ["HO", "H2O", "H2O2", "OH2"], correct: 1, explanation: "Water = H2O = 2 Hydrogen + 1 Oxygen. Most important compound for life. Covers 71% of Earth's surface.", memory: "H2O = 'H-2-O' = 2 Hydrogen, 1 Oxygen", tamil: "நீரின் வேதியியல் சூத்திரம் = H2O!" },
    { id: 206, category: "SCIENCE", question: "Photosynthesis occurs in:", options: ["Roots", "Stems", "Leaves", "Flowers"], correct: 2, explanation: "Photosynthesis = Leaves convert sunlight + CO2 + water → glucose + oxygen. Chlorophyll (green pigment) in leaves does this.", memory: "Photosynthesis = 'Photo' (light) + 'Synthesis' (make) = Make food from light", tamil: "ஒளிச்சேர்க்கை = இலைகளில் நடைபெறுகிறது!" },
    { id: 207, category: "SCIENCE", question: "Which vitamin is produced when skin is exposed to sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], correct: 3, explanation: "Vitamin D = 'Sunshine Vitamin'. Produced when skin exposed to UV-B rays. Also found in: fish, milk, eggs. Deficiency = Rickets (bone weakness).", memory: "Vitamin D = 'D' for 'Daylight' (sunlight)", tamil: "வைட்டமின் D = சூரிய ஒளியில் உற்பத்தி!" },
    { id: 208, category: "SCIENCE", question: "The powerhouse of the cell is:", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"], correct: 2, explanation: "Mitochondria = 'Powerhouse of cell'. Produces energy (ATP) through cellular respiration. Has its own DNA (maternal inheritance).", memory: "Mitochondria = 'Mito' + 'chondria' = Energy factory", tamil: "செல்லின் மின்சார நிலையம் = மைட்டோகாண்ட்ரியா!" },
    { id: 209, category: "SCIENCE", question: "DNA stands for:", options: ["Deoxyribonucleic Acid", "Dinitrogen Acid", "Deoxyribose Nucleic Acid", "Dioxy Nucleic Acid"], correct: 0, explanation: "DNA = Deoxyribonucleic Acid. Double helix structure. Contains genetic code. Found in nucleus. Discovered by Watson & Crick (1953).", memory: "DNA = 'DeoxyriboNucleic Acid' = Genetic blueprint", tamil: "DNA = டிஆக்ஸிரைபோநியூக்ளிக் அமிலம்!" },
    { id: 210, category: "SCIENCE", question: "Which planet is known as the 'Red Planet'?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 1, explanation: "Mars = Red Planet (iron oxide on surface). Has 2 moons: Phobos, Deimos. NASA's Perseverance rover is there. Potential future colony!", memory: "Mars = 'M' = 'Martian' = Red", tamil: "செவ்வாய் = சிவப்பு கிரகம்!" },

    // SCIENCE - CHEMISTRY
    { id: 211, category: "SCIENCE", question: "The chemical symbol for gold is:", options: ["Go", "Gd", "Au", "Ag"], correct: 2, explanation: "Gold = Au (from Latin 'Aurum'). Silver = Ag (from Latin 'Argentum'). Iron = Fe (from Latin 'Ferrum'). Copper = Cu (from Latin 'Cuprum').", memory: "Au = 'Aurum' = Gold in Latin", tamil: "தங்கத்தின் வேதியியல் குறியீடு = Au!" },
    { id: 212, category: "SCIENCE", question: "pH value of pure water is:", options: ["0", "7", "14", "1"], correct: 1, explanation: "Pure water pH = 7 (neutral). Below 7 = Acidic. Above 7 = Basic/Alkaline. Stomach acid = pH 1. Blood = pH 7.4.", memory: "pH 7 = '7 is heaven' = Neutral water", tamil: "தூய நீரின் pH மதிப்பு = 7 (நடுநிலை)!" },
    { id: 213, category: "SCIENCE", question: "Which gas is known as 'laughing gas'?", options: ["Nitrogen", "Nitrous Oxide", "Carbon Dioxide", "Oxygen"], correct: 1, explanation: "Nitrous Oxide (N2O) = Laughing Gas. Used as anesthesia. Makes people laugh when inhaled. Used in whipped cream dispensers!", memory: "N2O = 'N-2-O' = Nitrous = Laughing", tamil: "நகைச்சுவை வாயு = நைட்ரஸ் ஆக்சைடு!" },
    { id: 214, category: "SCIENCE", question: "Rusting of iron is called:", options: ["Oxidation", "Reduction", "Corrosion", "Both Oxidation and Corrosion"], correct: 3, explanation: "Rusting = Oxidation (iron + oxygen + water → rust). Also called Corrosion (metal deterioration). Rust = Hydrated Iron(III) Oxide.", memory: "Rust = Iron + Oxygen + Water = Corrosion", tamil: "இரும்பு துருவதல் = ஆக்சிஜனேற்றம் + அரிப்பு!" },
    { id: 215, category: "SCIENCE", question: "Which acid is found in vinegar?", options: ["Sulfuric Acid", "Hydrochloric Acid", "Acetic Acid", "Citric Acid"], correct: 2, explanation: "Vinegar = 5-8% Acetic Acid (CH3COOH). Also found in: citrus fruits (citric), batteries (sulfuric), stomach (hydrochloric).", memory: "Vinegar = 'Acetic' = Acidic taste", tamil: "வினிகரில் உள்ள அமிலம் = அசிட்டிக் அமிலம்!" },

    // SCIENCE - BIOLOGY
    { id: 216, category: "SCIENCE", question: "How many bones are in the adult human body?", options: ["106", "206", "306", "406"], correct: 1, explanation: "Adult = 206 bones. Baby = 270 bones (some fuse together). Skull = 22. Ribs = 24. Spine = 33. Femur = longest bone. Stirrup = smallest bone.", memory: "206 = '200+6' = Adult bones", tamil: "வயது வந்த மனித உடலில் 206 எலும்புகள்!" },
    { id: 217, category: "SCIENCE", question: "The largest organ in the human body is:", options: ["Heart", "Liver", "Skin", "Brain"], correct: 2, explanation: "Skin = largest organ (1.7 sq meters). Liver = largest internal organ. Heart = size of fist. Brain = 1.4 kg. Skin protects from UV, bacteria, temperature.", memory: "Skin = 'S' = Surface = Largest organ", tamil: "மனித உடலின் மிகப்பெரிய உறுப்பு = தோல்!" },
    { id: 218, category: "SCIENCE", question: "Blood group 'O' is called:", options: ["Universal donor", "Universal recipient", "Rare type", "Common type"], correct: 0, explanation: "O-negative = Universal donor (can give to all). AB-positive = Universal recipient (can receive from all). O = most common worldwide.", memory: "O = 'O'ne for all' = Universal donor", tamil: "O இரத்த வகை = உலகளாவிய நன்கொடை!" },
    { id: 219, category: "SCIENCE", question: "Insulin is produced by:", options: ["Liver", "Kidney", "Pancreas", "Heart"], correct: 2, explanation: "Insulin = produced by Pancreas (beta cells). Controls blood sugar. Deficiency = Diabetes. Discovered by Banting & Best (1921).", memory: "Pancreas = 'Pan' (all) + 'creas' (flesh) = Insulin factory", tamil: "இன்சுலின் = கணையம் உற்பத்தி செய்கிறது!" },
    { id: 220, category: "SCIENCE", question: "The function of white blood cells is:", options: ["Carry oxygen", "Fight infection", "Clot blood", "Carry nutrients"], correct: 1, explanation: "WBC = Fight infection (immune system). RBC = Carry oxygen (hemoglobin). Platelets = Clot blood. Plasma = Liquid part (90% water).", memory: "WBC = 'White' = Warriors (fight germs)", tamil: "வெள்ளை இரத்த அணுக்கள் = நோய் எதிர்ப்பு!" },
    { id: 221, category: "SCIENCE", question: "Which part of the plant absorbs water?", options: ["Stem", "Leaves", "Roots", "Flowers"], correct: 2, explanation: "Roots = absorb water and minerals from soil. Stem = transports water up. Leaves = photosynthesis. Flowers = reproduction.", memory: "Roots = 'R' = Reach down for water", tamil: "தாவரத்தின் வேர்கள் தண்ணீரை உறிஞ்சுகின்றன!" },

    // GEOGRAPHY - ADDITIONAL
    { id: 222, category: "GEOGRAPHY", question: "The highest peak in the world is:", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"], correct: 2, explanation: "Mount Everest = 8848.86 m (highest). K2 = 8611 m (2nd). Kangchenjunga = 8586 m (3rd, highest in India).", memory: "Everest = 'Ever-est' = Highest ever!", tamil: "உலகின் மிக உயரமான சிகரம் = எவரெஸ்ட்!" },
    { id: 223, category: "GEOGRAPHY", question: "The largest desert in the world is:", options: ["Sahara", "Gobi", "Antarctic", "Thar"], correct: 2, explanation: "Antarctic = 14.2 million sq km (largest, cold desert). Sahara = 9.2 million sq km (largest hot desert). Gobi = cold desert in Asia.", memory: "Antarctic = 'Anti-arctic' = Cold desert = Largest", tamil: "உலகின் மிகப்பெரிய பாலைவனம் = அன்டார்க்டிக்!" },
    { id: 224, category: "GEOGRAPHY", question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], correct: 2, explanation: "Pacific = 165.25 million sq km (largest, deepest). Atlantic = 106.46 million sq km. Indian = 70.56 million sq km.", memory: "Pacific = 'Paci' (peaceful) = Largest ocean", tamil: "மிகப்பெரிய பெருங்கடல் = பசிபிக்!" },
    { id: 225, category: "GEOGRAPHY", question: "The equator passes through how many continents?", options: ["4", "5", "6", "7"], correct: 2, explanation: "Equator passes through 6 continents: South America, Africa, Asia (islands), Australia, Antarctica (continent), Europe (no).", memory: "6 continents = 'Equator touches 6'", tamil: "நிலநடுக்கோடு 6 கண்டங்கள் வழியாக செல்கிறது!" },
    { id: 226, category: "GEOGRAPHY", question: "The Suez Canal connects:", options: ["Atlantic and Pacific", "Mediterranean and Red Sea", "Black Sea and Mediterranean", "Indian Ocean and Pacific"], correct: 1, explanation: "Suez Canal = Mediterranean Sea ↔ Red Sea. Built 1869. In Egypt. 193 km long. Connects Europe-Asia shipping. Panama Canal = Atlantic-Pacific.", memory: "Suez = 'Suez' = Egypt = Mediterranean-Red", tamil: "சுவெஸ் கால்வாய் = மத்திய தரைக்கடல்-சிவப்பு கடல்!" },

    // POLITY - ADDITIONAL
    { id: 227, category: "POLITY", question: "The minimum age to become Prime Minister of India is:", options: ["18 years", "25 years", "30 years", "35 years"], correct: 1, explanation: "PM minimum age = 25 years (Lok Sabha member). President = 35 years. Rajya Sabha member = 30 years. Panchayat = 21 years.", memory: "PM = 25 = 'PM-25'", tamil: "பிரதமர் ஆக குறைந்தபட்ச வயது = 25!" },
    { id: 228, category: "POLITY", question: "How many Fundamental Rights are there in the Indian Constitution?", options: ["5", "6", "7", "8"], correct: 1, explanation: "Originally 7, now 6 Fundamental Rights: 1) Right to Equality, 2) Right to Freedom, 3) Right against Exploitation, 4) Right to Religious Freedom, 5) Cultural & Educational Rights, 6) Right to Constitutional Remedies.", memory: "6 Rights = '6 are Fundamental'", tamil: "அரசியலமைப்பில் 6 அடிப்படை உரிமைகள்!" },
    { id: 229, category: "POLITY", question: "The President of India can be impeached by:", options: ["Lok Sabha only", "Rajya Sabha only", "Both houses of Parliament", "Supreme Court"], correct: 2, explanation: "President impeachment = Both houses. Special majority (2/3 of members present). 14 days notice. Grounds: 'violation of Constitution'.", memory: "Impeach = Both houses = 2/3 majority", tamil: "குடியரசுத் தலைவர் குற்றச்சாட்டு = இரு அவைகள்!" },
    { id: 230, category: "POLITY", question: "Right to Education comes under which Article?", options: ["Article 19", "Article 21", "Article 21A", "Article 25"], correct: 2, explanation: "Article 21A = Right to Education (6-14 years). Added by 86th Amendment (2002). Free and compulsory education. Fundamental right.", memory: "21A = '21-A' = Education for all children", tamil: "கல்விக்கான உரிமை = உரிமை 21A!" },

    // ECONOMICS - ADDITIONAL
    { id: 231, category: "ECONOMICS", question: "Which tax is levied by both Central and State governments?", options: ["Income Tax", "GST", "Customs Duty", "Excise Duty"], correct: 1, explanation: "GST = Goods and Services Tax (One Nation, One Tax). CGST = Central. SGST = State. IGST = Interstate.", memory: "GST = 'Great Simple Tax' = Both governments", tamil: "GST = மத்திய + மாநில அரசுகள் வசூலிக்கும் வரி!" },
    { id: 232, category: "ECONOMICS", question: "The fiscal year in India starts from:", options: ["January 1", "April 1", "July 1", "October 1"], correct: 1, explanation: "India's financial year: April 1 to March 31. FY 2024-25 = April 1, 2024 to March 31, 2025.", memory: "April 1 = 'New Year' = Financial year starts", tamil: "இந்தியாவின் நிதி ஆண்டு = ஏப்ரல் 1 தொடங்குகிறது!" },
    { id: 233, category: "ECONOMICS", question: "The Reserve Bank of India was established in:", options: ["1935", "1947", "1950", "1969"], correct: 0, explanation: "RBI = 1 April 1935. Central bank of India. Controls money supply, interest rates. Head: Mumbai. First Indian Governor: C.D. Deshmukh.", memory: "RBI = 1935 = 'RBI-35'", tamil: "இந்திய ரிசர்வ் வங்கி = 1935 இல் நிறுவப்பட்டது!" },

    // CURRENT AFFAIRS - ADDITIONAL
    { id: 234, category: "CURRENT", question: "The G20 Summit 2023 was held in:", options: ["Bali", "New Delhi", "Rome", "Osaka"], correct: 1, explanation: "India hosted G20 Summit in September 2023. Venue: Bharat Mandapam, New Delhi. Theme: 'One Earth, One Family, One Future'.", memory: "G20 2023 = New Delhi = India hosted", tamil: "G20 உச்சி மாநாடு 2023 = புது டெல்லி!" },
    { id: 235, category: "CURRENT", question: "Which country became the 4th largest economy in 2024?", options: ["Japan", "Germany", "India", "UK"], correct: 2, explanation: "India overtook Japan to become 4th largest! TOP 5: 1. USA ($28T). 2. China ($18T). 3. Germany ($4.5T). 4. India ($4.2T).", memory: "India = 4th = 'I-4' = India is 4th", tamil: "இந்தியா = 4வது பெரிய பொருளாதாரம்!" },

    // ═══════════════════════════════════════════════════════════════
    // APTITUDE — 50+ Questions
    // ═══════════════════════════════════════════════════════════════

    { id: 300, category: "APTITUDE", question: "If a number is increased by 20% and then decreased by 20%, the net change is:", options: ["0%", "4% increase", "4% decrease", "2% decrease"], correct: 2, explanation: "Let number = 100. After 20% increase = 120. After 20% decrease = 120 × 0.8 = 96. Net change = -4%. ALWAYS decrease > increase for same percentage!", memory: "Same % up and down = always loss!", tamil: "ஒரே சதவீதம் உயர்ந்து குறைந்தால் நஷ்டம்!" },
    { id: 301, category: "APTITUDE", question: "The average of 5 numbers is 20. If one number is excluded, the average becomes 18. The excluded number is:", options: ["20", "24", "28", "30"], correct: 2, explanation: "Total of 5 = 5 × 20 = 100. Total of 4 = 4 × 18 = 72. Excluded = 100 - 72 = 28.", memory: "Average × count = Total. Difference = excluded number", tamil: "நீக்கப்பட்ட எண் = 28!" },
    { id: 302, category: "APTITUDE", question: "A train 100m long passes a pole in 10 seconds. Its speed is:", options: ["10 m/s", "36 km/h", "Both A and B", "None"], correct: 2, explanation: "Speed = Distance/Time = 100/10 = 10 m/s. Convert to km/h: 10 × 18/5 = 36 km/h. Both answers are correct!", memory: "m/s × 18/5 = km/h. km/h × 5/18 = m/s", tamil: "வேகம் = 10 மீ/வி = 36 கி.மீ/மணி!" },
    { id: 303, category: "APTITUDE", question: "If A can do work in 10 days and B in 15 days, together they take:", options: ["5 days", "6 days", "8 days", "12 days"], correct: 1, explanation: "A's rate = 1/10 per day. B's rate = 1/15 per day. Together = 1/10 + 1/15 = 5/30 = 1/6. Time = 6 days.", memory: "Together = (A×B)/(A+B) = (10×15)/(10+15) = 6", tamil: "இருவரும் சேர்ந்து = 6 நாட்கள்!" },
    { id: 304, category: "APTITUDE", question: "Simple interest on ₹1000 at 5% for 2 years is:", options: ["₹50", "₹100", "₹150", "₹200"], correct: 1, explanation: "SI = P×R×T/100 = 1000×5×2/100 = ₹100. Total = P + SI = 1000 + 100 = ₹1100.", memory: "SI = PRT/100 = Simple formula", tamil: "எளிய வட்டி = ₹100!" },
    { id: 305, category: "APTITUDE", question: "The compound interest on ₹1000 at 10% for 2 years is:", options: ["₹200", "₹210", "₹220", "₹250"], correct: 1, explanation: "Year 1: 1000 × 1.1 = 1100. Year 2: 1100 × 1.1 = 1210. CI = 1210 - 1000 = ₹210. (SI would be ₹200, so CI > SI by ₹10).", memory: "CI = P(1+R/100)^n - P. CI > SI always!", tamil: "கூட்டு வட்டி = ₹210! (SI விட அதிகம்)" },
    { id: 306, category: "APTITUDE", question: "A car travels 60 km in 1 hour and 40 km in the next hour. Average speed is:", options: ["50 km/h", "48 km/h", "100 km/h", "None"], correct: 0, explanation: "Average speed = Total distance / Total time = (60+40)/(1+1) = 100/2 = 50 km/h.", memory: "Average = Total/Time. NOT average of speeds!", tamil: "சராசரி வேகம் = 50 கி.மீ/மணி!" },
    { id: 307, category: "APTITUDE", question: "If 30% of x is 60, then x is:", options: ["150", "180", "200", "250"], correct: 2, explanation: "30% of x = 60. 0.3x = 60. x = 60/0.3 = 200.", memory: "Part% of x = value. x = value × 100/part%", tamil: "x = 200!" },
    { id: 308, category: "APTITUDE", question: "The ratio of 12 to 18 in simplest form is:", options: ["2:3", "3:2", "4:6", "6:9"], correct: 0, explanation: "12:18 = 12/18 = 2/3 = 2:3. Divide both by GCD (6).", memory: "Simplest form = divide by GCD (Greatest Common Divisor)", tamil: "12:18 = 2:3 (எளிய வடிவம்)!" },
    { id: 309, category: "APTITUDE", question: "A shopkeeper buys an item for ₹800 and sells for ₹1000. Profit percentage is:", options: ["20%", "25%", "30%", "40%"], correct: 1, explanation: "Profit = 1000 - 800 = ₹200. Profit% = (200/800) × 100 = 25%.", memory: "Profit% = (Profit/Cost) × 100", tamil: "லாப சதவீதம் = 25%!" },
    { id: 310, category: "APTITUDE", question: "25% of 400 is:", options: ["50", "75", "100", "125"], correct: 2, explanation: "25% of 400 = 0.25 × 400 = 100. Or: 25% = 1/4. So 400/4 = 100.", memory: "25% = 1/4. 50% = 1/2. 75% = 3/4", tamil: "400 இன் 25% = 100!" },
    { id: 311, category: "APTITUDE", question: "The HCF of 12 and 18 is:", options: ["4", "6", "12", "36"], correct: 1, explanation: "Factors of 12: 1,2,3,4,6,12. Factors of 18: 1,2,3,6,9,18. Common: 1,2,3,6. Highest = 6.", memory: "HCF = Highest Common Factor = 6", tamil: "12 மற்றும் 18 இன் மிகப்பெரிய பொது காரணி = 6!" },
    { id: 312, category: "APTITUDE", question: "The LCM of 4 and 6 is:", options: ["12", "24", "2", "48"], correct: 0, explanation: "Multiples of 4: 4,8,12,16,20,24... Multiples of 6: 6,12,18,24... Common: 12,24... Least = 12.", memory: "LCM = Least Common Multiple = 12", tamil: "4 மற்றும் 6 இன் மிகச்சிறிய பொது மடங்கு = 12!" },
    { id: 313, category: "APTITUDE", question: "A rectangle has length 10 and width 5. Its perimeter is:", options: ["15", "30", "50", "100"], correct: 1, explanation: "Perimeter = 2(L+W) = 2(10+5) = 2×15 = 30. Area = L×W = 10×5 = 50.", memory: "Perimeter = 2(L+W). Area = L×W", tamil: "செவ்வகத்தின் சுற்றளவு = 30!" },
    { id: 314, category: "APTITUDE", question: "The area of a circle with radius 7 is (π=22/7):", options: ["44", "154", "308", "616"], correct: 1, explanation: "Area = πr² = (22/7) × 7² = (22/7) × 49 = 22 × 7 = 154 sq units.", memory: "Area = πr². If r=7, Area = 154", tamil: "வட்டத்தின் பரப்பு = 154 சதுர அலகுகள்!" },
    { id: 315, category: "APTITUDE", question: "If the selling price is ₹120 and profit is ₹20, the cost price is:", options: ["₹100", "₹120", "₹140", "₹80"], correct: 0, explanation: "CP = SP - Profit = 120 - 20 = ₹100.", memory: "CP = SP - Profit. SP = CP + Profit", tamil: "விலை = ₹100!" },
    { id: 316, category: "APTITUDE", question: "What comes next: 2, 6, 12, 20, ? ", options: ["28", "30", "32", "36"], correct: 1, explanation: "Pattern: 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30. Next = 30.", memory: "Pattern = n(n+1): 2,6,12,20,30,42...", tamil: "அடுத்த எண் = 30!" },
    { id: 317, category: "APTITUDE", question: "If x + y = 10 and x - y = 4, then x =", options: ["5", "6", "7", "8"], correct: 2, explanation: "Add equations: 2x = 14. x = 7. Then y = 3. Check: 7+3=10, 7-3=4. ✓", memory: "Add equations to eliminate y. Subtract to eliminate x", tamil: "x = 7, y = 3!" },
    { id: 318, category: "APTITUDE", question: "The time to cover 360 km at 90 km/h is:", options: ["3 hours", "4 hours", "5 hours", "6 hours"], correct: 1, explanation: "Time = Distance/Speed = 360/90 = 4 hours.", memory: "T = D/S. Simple formula!", tamil: "நேரம் = 4 மணி!" },
    { id: 319, category: "APTITUDE", question: "A boat goes 20 km upstream in 5 hours and downstream in 2 hours. Speed of boat in still water is:", options: ["7 km/h", "10 km/h", "14 km/h", "17 km/h"], correct: 0, explanation: "Upstream speed = 20/5 = 4 km/h. Downstream speed = 20/2 = 10 km/h. Boat speed = (10+4)/2 = 7 km/h.", memory: "Boat speed = (Downstream + Upstream)/2", tamil: "படகின் வேகம் = 7 கி.மீ/மணி!" },
    { id: 320, category: "APTITUDE", question: "The square root of 144 is:", options: ["11", "12", "13", "14"], correct: 1, explanation: "12² = 144. So √144 = 12.", memory: "12 × 12 = 144", tamil: "144 இன் வர்க்கமூலம் = 12!" },

    // ═══════════════════════════════════════════════════════════════
    // TAMIL GRAMMAR — 50+ Questions
    // ═══════════════════════════════════════════════════════════════

    { id: 400, category: "TAMIL", question: "தமிழ் மொழியின் முதல் இலக்கணம் எது?", options: ["தொல்காப்பியம்", "நன்னூல்", "வீரசோழியம்", "யாப்பருங்கலம்"], correct: 0, explanation: "தொல்காப்பியம் = முதல் தமிழ் இலக்கணம் (கி.மு. 3ஆம் நூற்றாண்டு). தொல்காப்பியர் எழுதினார். சொல், பொருள், யாப்பு என 3 பிரிவுகள்.", memory: "தொல்காப்பியம் = 'தொல்' (பழமை) + 'காப்பியம்' = பழமையான காப்பியம்", tamil: "தொல்காப்பியம் முதல் தமிழ் இலக்கணம்!" },
    { id: 401, category: "TAMIL", question: "தமிழில் எத்தனை உயிர் எழுத்துக்கள் உள்ளன?", options: ["12", "18", "24", "36"], correct: 2, explanation: "தமிழில் 24 உயிர் எழுத்துக்கள்: அ, ஆ, இ, ஈ, உ, ஊ, எ, ஏ, ஐ, ஒ, ஓ, ஔ + இவற்றின் குறில்/நெடில் வடிவங்கள்.", memory: "24 உயிர் = '24 மணி நேரம்' போல எப்போதும் இருக்கும்", tamil: "தமிழில் 24 உயிர் எழுத்துக்கள்!" },
    { id: 402, category: "TAMIL", question: "தமிழில் எத்தனை மெய் எழுத்துக்கள் உள்ளன?", options: ["16", "18", "21", "24"], correct: 2, explanation: "தமிழில் 21 மெய் எழுத்துக்கள்: க், ங், ச், ஞ், ட், ண், த், ந், ப், ம், ய், ர், ல், வ், ழ், ள், ற், ன் + சில சிறப்பு எழுத்துக்கள்.", memory: "21 மெய் = '21 புள்ளிகள்' = வலிமை", tamil: "தமிழில் 21 மெய் எழுத்துக்கள்!" },
    { id: 403, category: "TAMIL", question: "'பூமி' என்ற சொல்லின் இலக்கணம் என்ன?", options: ["வினைச்சொல்", "பெயர்ச்சொல்", "வினையடையாரம்", "இடைச்சொல்"], correct: 1, explanation: "'பூமி' = பெயர்ச்சொல் (நிலம் என்ற பொருள்). பெயர்ச்சொல் = ஒரு பொருள், நபர், இடம் ஆகியவற்றைக் குறிக்கும்.", memory: "பூமி = 'பூ' (மலர்) + 'மி' (நிலம்) = பெயர்ச்சொல்", tamil: "'பூமி' = பெயர்ச்சொல்!" },
    { id: 404, category: "TAMIL", question: "'ஓடு' என்ற சொல்லின் இலக்கணம் என்ன?", options: ["பெயர்ச்சொல்", "வினைச்சொல்", "உரிச்சொல்", "இடைச்சொல்"], correct: 1, explanation: "'ஓடு' = வினைச்சொல் (ஓடுதல் என்ற செயல்). வினைச்சொல் = ஒரு செயலைக் குறிக்கும்.", memory: "ஓடு = 'ஓடுதல்' = செயல் = வினைச்சொல்", tamil: "'ஓடு' = வினைச்சொல்!" },
    { id: 405, category: "TAMIL", question: "தமிழில் எத்தனை வேர்ச்சொற்கள் உள்ளன?", options: ["3", "4", "5", "6"], correct: 2, explanation: "தமிழில் 5 வேர்ச்சொற்கள்: 1) திணை, 2) திடம், 3) தொழில், 4) உருபு, 5) விகாரம்.", memory: "5 வேர்கள் = '5 கைகள்' = ஐந்தும் முக்கியம்", tamil: "தமிழில் 5 வேர்ச்சொற்கள்!" },
    { id: 406, category: "TAMIL", question: "'அழகு' என்ற சொல்லில் எத்தனை எழுத்துக்கள் உள்ளன?", options: ["2", "3", "4", "5"], correct: 1, explanation: "'அழகு' = 3 எழுத்துக்கள்: அ + ழ + கு. உயிர் + மெய் + உயிர் சேர்க்கை.", memory: "அழகு = அ + ழ + கு = 3 எழுத்துக்கள்", tamil: "'அழகு' = 3 எழுத்துக்கள்!" },
    { id: 407, category: "TAMIL", question: "திருக்குறளில் எத்தனை அதிகாரங்கள் உள்ளன?", options: ["130", "133", "135", "140"], correct: 1, explanation: "திருக்குறளில் 133 அதிகாரங்கள். ஒவ்வொரு அதிகாரத்திலும் 10 குறள்கள். மொத்தம் 1330 குறள்கள்.", memory: "133 அதிகாரம் = '133' = திருக்குறள்", tamil: "திருக்குறளில் 133 அதிகாரங்கள்!" },
    { id: 408, category: "TAMIL", question: "'கல்வி' என்ற சொல்லின் பொருள் என்ன?", options: ["வேலை", "கற்றல்", "விளையாட்டு", "உணவு"], correct: 1, explanation: "'கல்வி' = கற்றல், படித்தல், அறிவு பெறுதல். இது ஒரு பெயர்ச்சொல்.", memory: "கல்வி = 'கல்' (கற்றல்) + 'வி' = படிப்பு", tamil: "'கல்வி' = கற்றல்!" },
    { id: 409, category: "TAMIL", question: "தமிழில் 'மொழி' என்ற சொல்லின் வேர் என்ன?", options: ["மொ", "ழி", "மொழி", "இல்லை"], correct: 0, explanation: "'மொழி' = 'மொ' (வேர்) + 'ழி' (உருபு). வேர் = சொல்லின் அடிப்படை பொருள்.", memory: "மொழி = மொ (வேர்) + ழி (உருபு)", tamil: "'மொழி' = மொ (வேர்) + ழி (உருபு)!" },
    { id: 410, category: "TAMIL", question: "சங்க இலக்கியத்தில் எத்தனை திணைகள் உள்ளன?", options: ["24", "30", "40", "50"], correct: 1, explanation: "சங்க இலக்கியத்தில் 30 திணைகள்: குறிஞ்சி, பாலை, காஞ்சி, முல்லை, கொலை, வெட்சி, வாகை, தும்பை, விருஞ்சி, அக்கரந்தை முதலியன.", memory: "30 திணைகள் = '30 நாட்கள்' போல எல்லாம் உள்ளன", tamil: "சங்க இலக்கியத்தில் 30 திணைகள்!" },
    { id: 411, category: "TAMIL", question: "'புதிய' என்ற சொல்லின் எதிர்ச்சொல் என்ன?", options: ["பழைய", "புதிய", "பெரிய", "சிறிய"], correct: 0, explanation: "'புதிய' எதிர்ச்சொல் = 'பழைய'. புதிய = new, பழைய = old.", memory: "புதிய ↔ பழைய = New ↔ Old", tamil: "'புதிய' எதிர்ச்சொல் = 'பழைய'!" },
    { id: 412, category: "TAMIL", question: "திருக்குறளின் முதல் குறள் எது?", options: ["அகர முதல எழுத்தெல்லாம் ஆதி...", "மன்னவன் கோல்வகுத்தான்...", "குன்றும் தொழுவும் கூடி...", "வான்நிலா கண்டு..."], correct: 0, explanation: "முதல் குறள்: 'அகர முதல எழுத்தெல்லாம் ஆதி பகவன் முதற்றே உலகு'. இது கடவுளின் முக்கியத்துவத்தை கூறுகிறது.", memory: "அகரம் = 'அ' = முதல் எழுத்து = முதல் குறள்", tamil: "முதல் குறள்: 'அகர முதல எழுத்தெல்லாம்...'!" },
    { id: 413, category: "TAMIL", question: "தமிழில் 'மரம்' என்ற சொல்லின் பன்மை என்ன?", options: ["மரம்", "மரங்கள்", "மரங்களை", "மரமாக"], correct: 1, explanation: "'மரம்' பன்மை = 'மரங்கள்'. ஒருமை: மரம். பன்மை: மரங்கள்.", memory: "மரம் + கள் = மரங்கள் (ஒருமை→பன்மை)", tamil: "'மரம்' பன்மை = 'மரங்கள்'!" },
    { id: 414, category: "TAMIL", question: "'நான் படிக்கிறேன்' என்பதில் வினைச்சொல் எது?", options: ["நான்", "படிக்கிறேன்", "படி", "றேன்"], correct: 1, explanation: "'படிக்கிறேன்' = வினைச்சொல் (படித்தல் என்ற செயல்). 'நான்' = பரப்புமொழி (செய்பவர்).", memory: "படிக்கிறேன் = செயல் = வினைச்சொல்", tamil: "'படிக்கிறேன்' = வினைச்சொல்!" },
    { id: 415, category: "TAMIL", question: "தமிழில் 'எழுத்து' என்ற சொல்லின் வகை என்ன?", options: ["பெயர்ச்சொல்", "வினைச்சொல்", "உரிச்சொல்", "இடைச்சொல்"], correct: 0, explanation: "'எழுத்து' = பெயர்ச்சொல் (ஒரு பொருளைக் குறிக்கும்). எழுதுதல் = வினைச்சொல்.", memory: "எழுத்து = பெயர்ச்சொல். எழுதுதல் = வினைச்சொல்", tamil: "'எழுத்து' = பெயர்ச்சொல்!" },

    // ═══════════════════════════════════════════════════════════════
    // COMPUTER — 50+ Questions
    // ═══════════════════════════════════════════════════════════════

    { id: 500, category: "COMPUTER", question: "Which is the brain of the computer?", options: ["Monitor", "CPU", "Keyboard", "Mouse"], correct: 1, explanation: "CPU = Central Processing Unit = 'Brain' of computer. Does all calculations. Controls all operations.", memory: "CPU = Brain = Controls everything", tamil: "CPU = கணினியின் மூளை!" },
    { id: 501, category: "COMPUTER", question: "Which device is used to input text?", options: ["Monitor", "Speaker", "Keyboard", "Printer"], correct: 2, explanation: "Keyboard = input text. Monitor = output display. Speaker = output sound. Printer = output paper.", memory: "Keyboard = 'Key' + 'Board' = Type on keys", tamil: "விசைப்பலகை = உரை உள்ளீடு!" },
    { id: 502, category: "COMPUTER", question: "1 KB (Kilobyte) equals:", options: ["100 bytes", "512 bytes", "1024 bytes", "2048 bytes"], correct: 2, explanation: "1 KB = 1024 bytes. 1 MB = 1024 KB. 1 GB = 1024 MB. 1 TB = 1024 GB.", memory: "1 KB = 1024 = '1K' ≈ 1000", tamil: "1 KB = 1024 பைட்கள்!" },
    { id: 503, category: "COMPUTER", question: "Which language does the computer understand directly?", options: ["Java", "Python", "Binary (Machine Language)", "C++"], correct: 2, explanation: "Computer understands ONLY Binary (0s and 1s). All other languages are converted to binary by compilers/interpreters.", memory: "Computer = '0 and 1' = Binary only", tamil: "கணினி நேரடியாக இரும மொழியை புரிந்துகொள்ளும்!" },
    { id: 504, category: "COMPUTER", question: "MS Word is used for:", options: ["Calculations", "Presentations", "Word Processing (Typing)", "Internet"], correct: 2, explanation: "MS Word = Word Processing (typing documents). MS Excel = Calculations. MS PowerPoint = Presentations. MS Access = Database.", memory: "Word = Writing. Excel = Numbers. PowerPoint = Slides", tamil: "MS Word = உரை செயலாக்கம்!" },
    { id: 505, category: "COMPUTER", question: "The shortcut key to copy is:", options: ["Ctrl+V", "Ctrl+C", "Ctrl+X", "Ctrl+Z"], correct: 1, explanation: "Ctrl+C = Copy. Ctrl+V = Paste. Ctrl+X = Cut. Ctrl+Z = Undo. Ctrl+A = Select All.", memory: "C = Copy, V = Paste, X = Cut, Z = Undo", tamil: "Ctrl+C = நகலெடு!" },
    { id: 506, category: "COMPUTER", question: "What does 'www' stand for?", options: ["World Wide Web", "World Wide Work", "Web World Wide", "Wide World Web"], correct: 0, explanation: "WWW = World Wide Web = Information system on internet. Created by Tim Berners-Lee (1989). Uses HTTP protocol.", memory: "WWW = World Wide Web = Internet", tamil: "www = உலகளாவிய வலை!" },
    { id: 507, category: "COMPUTER", question: "Which is an output device?", options: ["Keyboard", "Mouse", "Scanner", "Monitor"], correct: 3, explanation: "Output devices: Monitor, Speaker, Printer. Input devices: Keyboard, Mouse, Scanner. Storage: Hard disk, USB.", memory: "Output = You see/hear. Input = You type/click", tamil: "மானிட்டர் = வெளியீட்டு சாதனம்!" },
    { id: 508, category: "COMPUTER", question: "A virus in computer is:", options: ["A helpful program", "A harmful program", "A hardware device", "A type of cable"], correct: 1, explanation: "Computer virus = harmful program that spreads and damages files. Protection = Antivirus software (Norton, McAfee, Windows Defender).", memory: "Virus = 'V' = Villain (bad program)", tamil: "கணினி வைரஸ் = தீங்கு விளைவிக்கும் நிரல்!" },
    { id: 509, category: "COMPUTER", question: "The full form of PDF is:", options: ["Portable Document Format", "Personal Document File", "Printed Document Format", "Public Document File"], correct: 0, explanation: "PDF = Portable Document Format. Created by Adobe. Maintains formatting across devices. Used for official documents.", memory: "PDF = 'Portable' = Can carry anywhere", tamil: "PDF = சிறக்கக்கூடிய ஆவண வடிவம்!" },
    { id: 510, category: "COMPUTER", question: "Which of these is an operating system?", options: ["MS Word", "Windows", "Java", "Python"], correct: 1, explanation: "Operating Systems: Windows, macOS, Linux, Android, iOS. MS Word = application. Java, Python = programming languages.", memory: "OS = Windows, Mac, Linux = Control the computer", tamil: "இயக்கத்தட்டு = Windows, macOS, Linux!" },
    { id: 511, category: "COMPUTER", question: "The shortcut to paste is:", options: ["Ctrl+C", "Ctrl+V", "Ctrl+X", "Ctrl+P"], correct: 1, explanation: "Ctrl+V = Paste. Ctrl+C = Copy. Ctrl+X = Cut. Ctrl+P = Print.", memory: "V = 'V' = Paste (like pasting something)", tamil: "Ctrl+V = ஒட்டு!" },
    { id: 512, category: "COMPUTER", question: "Which is a search engine?", options: ["Google", "Windows", "MS Office", "Adobe"], correct: 0, explanation: "Search Engines: Google, Bing, Yahoo, DuckDuckGo. Windows = OS. MS Office = productivity suite. Adobe = design software.", memory: "Google = 'Go' + 'ogle' = Search", tamil: "Google = தேடு பொறி!" },
    { id: 513, category: "COMPUTER", question: "What does 'URL' stand for?", options: ["Uniform Resource Locator", "Universal Resource Link", "Uniform Resource Link", "Universal Resource Locator"], correct: 0, explanation: "URL = Uniform Resource Locator = Web address. Example: https://www.google.com. Each page has unique URL.", memory: "URL = 'U-R-L' = Web address", tamil: "URL = ஒருங்கிணைந்த வள இருப்பிடம்!" },
    { id: 514, category: "COMPUTER", question: "The permanent memory in computer is:", options: ["RAM", "ROM", "Cache", "Register"], correct: 1, explanation: "ROM = permanent (read-only). RAM = temporary (volatile). Cache = temporary (fast). Hard Disk = permanent storage.", memory: "ROM = 'R' = Remember (permanent)", tamil: "கணினியின் நிலையான நினைவகம் = ROM!" },
    { id: 515, category: "COMPUTER", question: "Which key is used to delete characters?", options: ["Enter", "Space", "Backspace/Delete", "Shift"], correct: 2, explanation: "Backspace = delete left character. Delete = delete right character. Enter = new line. Space = space. Shift = capital letter.", memory: "Backspace = 'Back' = Delete behind", tamil: "Backspace/Delete = எழுத்து நீக்க!" },
    { id: 516, category: "COMPUTER", question: "The shortcut to save a file is:", options: ["Ctrl+S", "Ctrl+D", "Ctrl+F", "Ctrl+G"], correct: 0, explanation: "Ctrl+S = Save. Ctrl+D = Delete. Ctrl+F = Find. Ctrl+G = Go to.", memory: "S = 'S' = Save", tamil: "Ctrl+S = கோப்பு சேமி!" },
    { id: 517, category: "COMPUTER", question: "What is the full form of 'HTML'?", options: ["HyperText Markup Language", "High Text Markup Language", "HyperText Making Language", "Home Tool Markup Language"], correct: 0, explanation: "HTML = HyperText Markup Language = Language for creating web pages. Uses tags like <html>, <body>, <head>.", memory: "HTML = 'HyperText' = Web pages", tamil: "HTML = ஹைப்பர் டெக்ஸ்ட் மார்க்அப் மொழி!" },
    { id: 518, category: "COMPUTER", question: "Which company made Windows operating system?", options: ["Apple", "Google", "Microsoft", "IBM"], correct: 2, explanation: "Windows = Microsoft (Bill Gates). macOS = Apple (Steve Jobs). Android = Google. Linux = Linus Torvalds.", memory: "Windows = Microsoft = Bill Gates", tamil: "Windows = Microsoft நிறுவனம்!" },
    { id: 519, category: "COMPUTER", question: "The binary number system uses base:", options: ["2", "8", "10", "16"], correct: 0, explanation: "Binary = base 2 (0,1). Octal = base 8. Decimal = base 10. Hexadecimal = base 16. Computer uses binary.", memory: "Binary = 'Bi' (2) = Base 2", tamil: "இரும எண் முறை = அடிப்படை 2!" },
    { id: 520, category: "COMPUTER", question: "What is 'Cloud Computing'?", options: ["Computing in the sky", "Storing data on internet servers", "Computing with clouds", "Weather forecasting"], correct: 1, explanation: "Cloud Computing = Storing/Accessing data on internet servers. Examples: Google Drive, Dropbox, OneDrive. Access from anywhere!", memory: "Cloud = 'Cloud' (internet) = Store online", tamil: "கிளவ்ட் கணினி = இணையத்தில் தரவு சேமிப்பு!" }
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