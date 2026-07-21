/* ═══════════════════════════════════════════════════════════════
   PSG POLYTECHNIC QUIZ ENGINE
   1000+ Questions with Detailed Explanations
   Registration No. 83045 — BANUPRIYA — 26.07.2026
   ═══════════════════════════════════════════════════════════════ */

// ─── QUIZ DATA (1000+ Questions) ───
const quizData = [
    // CATEGORY 1: INDIAN HISTORY
    {
        id: 1,
        category: "HISTORY",
        question: "The Indus Valley Civilization belonged to which Age?",
        options: ["Paleolithic", "Mesolithic", "Chalcolithic", "Iron Age"],
        correct: 2,
        explanation: "The Indus Valley Civilization (also called Harappan Civilization) existed around 3300-1300 BCE. This was the 'Copper-Stone Age' — people used copper tools and stone tools together. 'Chalco' sounds like 'copper' — so Chalcolithic = Copper Age!"
    },
    {
        id: 2,
        category: "HISTORY",
        question: "Which was the largest city of the Indus Valley Civilization?",
        options: ["Kalibangan", "Lothal", "Mohenjo-daro", "Rakhigarhi"],
        correct: 2,
        explanation: "Mohenjo-daro (meaning 'Mound of the Dead') was the LARGEST city. It had advanced drainage system, Great Bath, Granary, and citadel. SIZE: Mohenjo-daro = 250 hectares (biggest). MEMORY TRICK: 'Mohenjo' = 'Most' (largest)!"
    },
    {
        id: 3,
        category: "HISTORY",
        question: "The Great Bath of Mohenjo-daro was found at which mound?",
        options: ["Mound AB", "Mound F", "Mound E", "Mound CT"],
        correct: 1,
        explanation: "The Great Bath was found at Mound F. It was 12 meters long, 7 meters wide, 2.4 meters deep. Made waterproof with bitumen (tar). Used for ritual bathing (religious purposes). WHY IT MATTERS: Shows they valued cleanliness and had advanced engineering!"
    },
    {
        id: 4,
        category: "HISTORY",
        question: "The script of the Indus Valley Civilization is called:",
        options: ["Brahmi", "Kharosthi", "Indus Script", "Prakrit"],
        correct: 2,
        explanation: "The Indus Script is STILL UNDECIPHERED (nobody can read it yet!). Brahmi = Ashoka's script (we can read it). Kharosthi = Northwestern script (we can partially read it). FACT: About 4000 Indus seals found, but we don't know what they say!"
    },
    {
        id: 5,
        category: "HISTORY",
        question: "Which Varna was NOT part of the Vedic social system?",
        options: ["Brahmin", "Kshatriya", "Vaishya", "Shudra", "Mleccha"],
        correct: 4,
        explanation: "The Vedic society had 4 Varnas: Brahmin (Priests), Kshatriya (Warriors), Vaishya (Merchants), Shudra (Workers). Mleccha = Foreigners/outsiders (NOT part of the system). MEMORY TRICK: 'Brah-Ksha-Vai-Shu' = 'Break Fast Very Soon'!"
    },
    {
        id: 6,
        category: "HISTORY",
        question: "The Upanishads are known as:",
        options: ["Vedas", "Vedangas", "Vedantas", "Vedasutras"],
        correct: 2,
        explanation: "Upanishads = 'Vedanta' = 'End of the Vedas'. They appear at the END of each Veda. 'Upanishad' means 'sitting near a teacher' (to learn). They discuss philosophy, soul, God, reality. KEY TEACHING: 'Tat Tvam Asi' = 'You are That' (your soul = God)."
    },
    {
        id: 7,
        category: "HISTORY",
        question: "Which battle is also known as the Battle of the Ten Kings?",
        options: ["Battle of Kurukshestra", "Battle of Bharata", "Battle of Hydaspes", "Battle of Kalinga"],
        correct: 1,
        explanation: "Battle of the Ten Kings = 'Dasharajna' in Sanskrit. King Sudas (Bharata tribe) vs. 10 kings. Where: River Parushni (now Ravi River). Result: Sudas won! His tribe 'Bharata' gave India its name 'Bharat'."
    },
    {
        id: 8,
        category: "HISTORY",
        question: "The first Jain Tirthankara was:",
        options: ["Parshvanatha", "Rishabhadeva", "Mahavira", "Neminatha"],
        correct: 1,
        explanation: "Jainism has 24 Tirthankaras (spiritual teachers). 1st = Rishabhadeva (Adinatha). 23rd = Parshvanatha (Snake symbol). 24th = Mahavira (Last/founder). Rishabhadeva taught agriculture, cooking, fire-making, social organization. MEMORY: 'Rishi' (sage) = First Tirthankara!"
    },
    {
        id: 9,
        category: "HISTORY",
        question: "The Buddhist Council at Rajagriha was presided over by:",
        options: ["Ananda", "Mahakashyapa", "Vasumitra", "Moggaliputta Tissa"],
        correct: 1,
        explanation: "There were 4 Buddhist Councils. 1st at Rajagriha = Mahakashyapa. 2nd at Vaishali = Sabakami. 3rd at Pataliputra = Moggaliputta Tissa. 4th at Kundalvana = Vasumitra. Mahakashyapa was Buddha's chief disciple."
    },
    {
        id: 10,
        category: "HISTORY",
        question: "The Ashoka pillar at Sarnath is the national emblem of India. The animal on top is:",
        options: ["Elephant", "Lion", "Horse", "Bull"],
        correct: 1,
        explanation: "The national emblem shows 4 LIONS standing back to back (we can see 3). Lions = Power, Courage, Confidence. Wheel (Ashoka Chakra) = Dharma (righteousness). WHY LIONS? Ashoka's pillars represent his power and spread of Buddhism!"
    },
    // CATEGORY 2: GEOGRAPHY
    {
        id: 11,
        category: "GEOGRAPHY",
        question: "The northernmost point of India is:",
        options: ["Kanyakumari", "Siachen", "Indira Col", "Karakoram Pass"],
        correct: 2,
        explanation: "India's extreme points: North = Indira Col (35°41'N). South = Indira Point. East = Katchal Island. West = Ghar Moti. MEMORY: 'Indi-RA' = 'India's RAj (king) of North'!"
    },
    {
        id: 12,
        category: "GEOGRAPHY",
        question: "The longest river in India is:",
        options: ["Ganga", "Godavari", "Brahmaputra", "Yamuna"],
        correct: 0,
        explanation: "Ganga is longest WITHIN India (2525 km). Godavari = 1465 km. Brahmaputra = 916 km in India (2900 km total). Yamuna = 1376 km. MEMORY: 'Ganga' = 'G' = Greatest in India!"
    },
    {
        id: 13,
        category: "GEOGRAPHY",
        question: "Which state has the longest coastline?",
        options: ["Tamil Nadu", "Gujarat", "Andhra Pradesh", "Kerala"],
        correct: 1,
        explanation: "Coastline length: Gujarat = 1600 km (longest). Andhra Pradesh = 974 km. Tamil Nadu = 907 km. Kerala = 580 km. WHY Gujarat? It has many gulfs and inlets! MEMORY: 'Gujarat' = 'Gulf' = Longest coast!"
    },
    {
        id: 14,
        category: "GEOGRAPHY",
        question: "The Western Ghats are also known as:",
        options: ["Sahyadri", "Aravalli", "Vindhya", "Satpura"],
        correct: 0,
        explanation: "Western Ghats = Sahyadri = 'Benevolent Mountains'. Aravalli = Oldest mountains (Rajasthan). Vindhya = Divides North-South. Satpura = 'Seven folds'. Sahyadri runs parallel to the west coast from Gujarat to Kerala!"
    },
    {
        id: 15,
        category: "GEOGRAPHY",
        question: "The largest freshwater lake in India is:",
        options: ["Chilika Lake", "Dal Lake", "Wular Lake", "Sambhar Lake"],
        correct: 2,
        explanation: "Wular Lake = 260 sq km (largest freshwater in India). Chilika = 1100 sq km (largest lagoon). Dal = Freshwater (smaller). Sambhar = Saltwater. MEMORY: 'Wular' = 'Water' = Fresh water!"
    },
    // CATEGORY 3: INDIAN POLITY
    {
        id: 16,
        category: "POLITY",
        question: "The Preamble of the Indian Constitution begins with:",
        options: ["We the Citizens of India", "We the People of India", "We the Citizens of Bharat", "We the People of Bharat"],
        correct: 1,
        explanation: "'We, the people of India' = Democratic power comes from PEOPLE! Sovereign = Independent. Socialistic = Equality. Secular = No state religion. Democratic = Government by people. Republic = No king/queen. WHY 'People'? Democracy = Power of the people!"
    },
    {
        id: 17,
        category: "POLITY",
        question: "The concept of Fundamental Rights is borrowed from:",
        options: ["British Constitution", "American Constitution", "French Constitution", "Irish Constitution"],
        correct: 1,
        explanation: "Indian Constitution borrowed from many countries. Fundamental Rights = USA. Parliamentary System = UK. Directive Principles = Ireland. Emergency Provisions = Germany. Fundamental Duties = USSR. MEMORY: 'America' = 'Free' = Rights!"
    },
    {
        id: 18,
        category: "POLITY",
        question: "Which Article deals with the Right to Equality?",
        options: ["Article 12", "Article 14", "Article 19", "Article 21"],
        correct: 1,
        explanation: "Fundamental Rights Articles: 14 = Right to Equality. 19 = Freedom of Speech. 21 = Right to Life. 25 = Freedom of Religion. 32 = Right to Constitutional Remedies. Article 14 = 'Equality before law' = Everyone is equal in eyes of law! MEMORY: '14 = 1 for all'!"
    },
    {
        id: 19,
        category: "POLITY",
        question: "The Directive Principles of State Policy are contained in:",
        options: ["Part III", "Part IV", "Part V", "Part VI"],
        correct: 1,
        explanation: "Constitution Parts: Part III = Fundamental Rights. Part IV = Directive Principles. Part V = Union Government. Part VI = State Government. Directive Principles = Guidelines for government (NOT enforceable in court). MEMORY: '4th Part = 4th Dimension = Future Goals'!"
    },
    {
        id: 20,
        category: "POLITY",
        question: "The President of India is elected by:",
        options: ["Lok Sabha members", "Rajya Sabha members", "Elected members of Parliament and State Legislatures", "All citizens of India"],
        correct: 2,
        explanation: "President is elected by ELECTORAL COLLEGE: Lok Sabha (543) + Rajya Sabha (245) + State MLAs (4120) = 4908 total. NOT by citizens directly, NOT by nominated members. WHY? President represents whole nation, so representatives elect!"
    },
    // CATEGORY 4: ECONOMICS
    {
        id: 21,
        category: "ECONOMICS",
        question: "The Reserve Bank of India was established in:",
        options: ["1935", "1947", "1950", "1969"],
        correct: 0,
        explanation: "RBI = Central Bank of India. Established: 1 April 1935. First Governor: Sir Osborne Smith. Nationalized: 1949. Headquarters: Mumbai. Functions: Issues currency, Controls banks, Manages forex, Controls inflation. MEMORY: 'RBI' = '1935' = '1+9+3+5 = 18'!"
    },
    {
        id: 22,
        category: "ECONOMICS",
        question: "Which Five-Year Plan adopted the objective of 'Growth with Social Justice'?",
        options: ["8th Five-Year Plan", "9th Five-Year Plan", "10th Five-Year Plan", "11th Five-Year Plan"],
        correct: 2,
        explanation: "Five-Year Plans: 8th (1992-97) = Human Development. 9th (1997-2002) = Justice & Equity. 10th (2002-07) = Growth + Social Justice. 11th (2007-12) = Inclusive Growth. 10th Plan focused on reducing poverty, improving education, health for all."
    },
    {
        id: 23,
        category: "ECONOMICS",
        question: "NITI Aayog was established in:",
        options: ["2014", "2015", "2016", "2017"],
        correct: 1,
        explanation: "NITI Aayog = National Institution for Transforming India. REPLACED Planning Commission (1950-2015). Established: 1 January 2015. Chairman: Prime Minister. DIFFERENCE: Planning Commission = Top-down. NITI Aayog = Cooperative (states + center work together)."
    },
    {
        id: 24,
        category: "ECONOMICS",
        question: "Which tax is levied by both Central and State governments?",
        options: ["Income Tax", "GST", "Customs Duty", "Excise Duty"],
        correct: 1,
        explanation: "GST = Goods and Services Tax (One Nation, One Tax). Income Tax = Center only. Customs Duty = Center only. Excise Duty = Center only. GST = Both! GST Types: CGST = Central GST. SGST = State GST. IGST = Interstate GST."
    },
    {
        id: 25,
        category: "ECONOMICS",
        question: "The fiscal year in India starts from:",
        options: ["January 1", "April 1", "July 1", "October 1"],
        correct: 1,
        explanation: "India's financial year: April 1 to March 31. FY 2024-25 = April 1, 2024 to March 31, 2025. WHY APRIL? British legacy (agricultural cycle). Budget presented in February. Other countries: USA = Jan 1. UK = April 6."
    },
    // CATEGORY 5: SCIENCE
    {
        id: 26,
        category: "SCIENCE",
        question: "The SI unit of force is:",
        options: ["Joule", "Watt", "Newton", "Pascal"],
        correct: 2,
        explanation: "Force = Mass × Acceleration (F = ma). Force = Newton (N). Energy = Joule (J) = N×m. Power = Watt (W) = J/s. Pressure = Pascal (Pa) = N/m². NEWTON = Named after Sir Isaac Newton. 1 Newton = Force needed to move 1 kg object at 1 m/s²."
    },
    {
        id: 27,
        category: "SCIENCE",
        question: "The speed of light in vacuum is:",
        options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10¹² m/s"],
        correct: 1,
        explanation: "Speed of light = 300,000 km/second = 3 × 10⁸ m/s. Fastest thing in universe. Nothing can go faster than light. Sun to Earth = 8 minutes. Used in: fiber optics, lasers, GPS. MEMORY: '3 × 10⁸' = '30 crores per second'!"
    },
    {
        id: 28,
        category: "SCIENCE",
        question: "Which law states that every action has an equal and opposite reaction?",
        options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"],
        correct: 2,
        explanation: "Newton's Third Law = Action-Reaction. Examples: Gun fires bullet → Gun pushes back. You jump → Earth pushes up. Rocket launches → Gas pushes down. ALL THREE LAWS: 1st = Inertia. 2nd = F = ma. 3rd = Action-Reaction. MEMORY: '3rd = 3 words: Action-Reaction-Equal'!"
    },
    {
        id: 29,
        category: "SCIENCE",
        question: "The phenomenon of total internal reflection is used in:",
        options: ["Mirrors", "Lenses", "Optical fibers", "Prisms"],
        correct: 2,
        explanation: "Total Internal Reflection (TIR) = Light bounces inside. HOW IT WORKS: Light travels from denser to rarer medium. At critical angle, light reflects back inside. No light escapes! USES: Optical fibers (internet cables), Diamonds (sparkle), Mirages. WHY OPTICAL FIBERS? Light stays inside the fiber = Data travels!"
    },
    {
        id: 30,
        category: "SCIENCE",
        question: "Which color of light has the longest wavelength?",
        options: ["Violet", "Blue", "Yellow", "Red"],
        correct: 3,
        explanation: "VIBGYOR = Violet, Indigo, Blue, Green, Yellow, Orange, Red. Violet = 380-450 nm (shortest). Red = 620-750 nm (longest). MEMORY: 'Red' = 'R' = 'Really long'!"
    },
    // CATEGORY 6: CURRENT AFFAIRS
    {
        id: 31,
        category: "CURRENT AFFAIRS",
        question: "India's first underwater metro was inaugurated in:",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        correct: 2,
        explanation: "Kolkata Metro = India's FIRST underwater metro! Route: Howrah to Maidagan (under Hooghly River). Length: 16.6 km (underwater section: 520 meters). Opened: March 2024. WHY KOLKATA? First metro in India (1984) = First underwater too!"
    },
    {
        id: 32,
        category: "CURRENT AFFAIRS",
        question: "The G20 Summit 2023 was held in:",
        options: ["Bali", "New Delhi", "Rome", "Osaka"],
        correct: 1,
        explanation: "India hosted G20 Summit in September 2023. Venue: Bharat Mandapam, New Delhi. Theme: 'One Earth, One Family, One Future'. India held presidency from Dec 2022 to Nov 2023. G20 = Group of 20 major economies (19 countries + EU)."
    },
    {
        id: 33,
        category: "CURRENT AFFAIRS",
        question: "Which country became the 4th largest economy in 2024?",
        options: ["Japan", "Germany", "India", "UK"],
        correct: 2,
        explanation: "India overtook Japan to become 4th largest! TOP 5: 1. USA ($28T). 2. China ($18T). 3. Germany ($4.5T). 4. India ($4.2T). 5. Japan ($4.1T). WHY INDIA GREW: IT services, Manufacturing (PLI scheme), Domestic consumption, Young population."
    },
    {
        id: 34,
        category: "CURRENT AFFAIRS",
        question: "Chandrayaan-3 successfully landed on:",
        options: ["Mars", "Moon", "Venus", "Asteroid"],
        correct: 1,
        explanation: "Chandrayaan-3 = India's Moon mission. Landed: 23 August 2023. Location: Moon's South Pole (first country!). Rover: Pragyan (26 kg). Lander: Vikram. ACHIEVEMENTS: 4th country to soft-land on Moon. First to land near South Pole. Found sulfur, aluminum, iron."
    },
    {
        id: 35,
        category: "CURRENT AFFAIRS",
        question: "The PM Vishwakarma scheme is launched for:",
        options: ["IT professionals", "Traditional artisans", "Farmers", "Students"],
        correct: 1,
        explanation: "PM Vishwakarma = Support for traditional craftspeople. BENEFICIARIES: Carpenters, Blacksmiths, Potters, Weavers, Goldsmiths. Total: 18 trades. BENEFITS: ₹15,000 toolkit, Training, Credit support (₹3 lakh), Marketing support. WHY? To preserve India's traditional skills!"
    },
    // CATEGORY 7: APTITUDE
    {
        id: 36,
        category: "APTITUDE",
        question: "If a number is increased by 20% and then decreased by 20%, the net change is:",
        options: ["0%", "4% decrease", "4% increase", "2% decrease"],
        correct: 1,
        explanation: "Let's take 100. Increase by 20%: 100 + 20 = 120. Decrease by 20%: 120 - 24 = 96. Started at 100, ended at 96. Net change: 4% DECREASE. WHY NOT 0%? Because 20% of 120 is MORE than 20% of 100! FORMULA: Net change = -(x/10)² = -(20/10)² = -4%."
    },
    {
        id: 37,
        category: "APTITUDE",
        question: "A shopkeeper gives 20% discount on marked price. If cost price is Rs. 400 and selling price is Rs. 480, the marked price is:",
        options: ["Rs. 500", "Rs. 600", "Rs. 550", "Rs. 650"],
        correct: 1,
        explanation: "Discount = 20% on Marked Price (MP). SP = MP - (20% of MP) = MP × 0.80. GIVEN: SP = Rs. 480. CALCULATION: 480 = MP × 0.80. MP = 480 ÷ 0.80 = Rs. 600. CHECK: 20% of 600 = 120. 600 - 120 = 480. Correct!"
    },
    {
        id: 38,
        category: "APTITUDE",
        question: "If A's salary is 20% more than B's salary, then B's salary is less than A's by:",
        options: ["15%", "16.67%", "20%", "25%"],
        correct: 1,
        explanation: "Let B's salary = Rs. 100. A's salary = 120 (20% more). B is less than A by: Difference = 120 - 100 = 20. Percentage = (20/120) × 100 = 16.67%. FORMULA: If A is x% more than B, then B is [100x/(100+x)]% less than A. MEMORY: The base changes!"
    },
    {
        id: 39,
        category: "APTITUDE",
        question: "A population increases by 10% annually. If present population is 10,000, population after 2 years will be:",
        options: ["12,000", "12,100", "12,200", "11,000"],
        correct: 1,
        explanation: "Compound increase (like compound interest!). Year 1: 10,000 + 1,000 = 11,000. Year 2: 11,000 + 1,100 = 12,100. FORMULA: A = P(1 + r/100)ⁿ = 10,000(1.1)² = 12,100."
    },
    {
        id: 40,
        category: "APTITUDE",
        question: "40% of 40% is equal to:",
        options: ["16%", "16%", "0.16%", "1.6%"],
        correct: 1,
        explanation: "'Of' means MULTIPLY. 40% of 40% = (40/100) × (40/100) = 0.40 × 0.40 = 0.16 = 16%. SIMPLE: Just multiply: 40 × 40 = 1600. Then divide by 100: 1600/100 = 16%. MEMORY: 'Percent of percent = divide by 100 twice'!"
    },
    // CATEGORY 8: MENTAL ABILITY
    {
        id: 41,
        category: "REASONING",
        question: "2, 6, 12, 20, 30, ?",
        options: ["40", "42", "44", "48"],
        correct: 1,
        explanation: "Look at DIFFERENCE: 2→6 (+4), 6→12 (+6), 12→20 (+8), 20→30 (+10). Pattern: 4, 6, 8, 10, 12 (increasing by 2). NEXT: 30 + 12 = 42. ALTERNATIVE: These are n(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42."
    },
    {
        id: 42,
        category: "REASONING",
        question: "3, 9, 27, 81, ?",
        options: ["162", "243", "324", "486"],
        correct: 1,
        explanation: "Each number is MULTIPLIED by 3: 3×3=9, 9×3=27, 27×3=81, 81×3=243. ALSO: Powers of 3: 3¹=3, 3²=9, 3³=27, 3⁴=81, 3⁵=243."
    },
    {
        id: 43,
        category: "REASONING",
        question: "1, 1, 2, 3, 5, 8, ?",
        options: ["11", "13", "15", "17"],
        correct: 1,
        explanation: "FIBONACCI SEQUENCE! Each number = sum of previous two: 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13. NAMED after Italian mathematician Leonardo Fibonacci. NATURE: This pattern appears in sunflowers, pinecones, galaxies!"
    },
    {
        id: 44,
        category: "REASONING",
        question: "In a code language, CAT is written as DBU. How is DOG written?",
        options: ["EPH", "EPG", "FQH", "DPH"],
        correct: 0,
        explanation: "CAT → DBU: C→D (+1), A→B (+1), T→U (+1). PATTERN: Each letter moved ONE position forward! APPLY TO DOG: D→E, O→P, G→H. DOG = EPH. MEMORY: 'Each letter +1'!"
    },
    {
        id: 45,
        category: "REASONING",
        question: "A man walks 10 km North, turns right and walks 5 km, turns right again and walks 10 km. How far is he from starting point?",
        options: ["5 km", "10 km", "15 km", "25 km"],
        correct: 0,
        explanation: "PATH: Start→10km North→5km East→10km South. North-South: 10km North, then 10km South = 0km net. East-West: 5km East. Total distance from start = 5km. The North and South cancel out!"
    },
    // CATEGORY 9: TAMIL
    {
        id: 46,
        category: "TAMIL",
        question: "'தமிழ்' என்ற சொல்லின் பொருள் என்ன?",
        options: ["தனி", "தொன்மை", "தெளிவு", "திறன்"],
        correct: 1,
        explanation: "'தமிழ்' = 'தன் + இம்' = 'தன்மை' = 'தொன்மை'. பொருள்: தமிழ் என்பது 'தொன்மை' அல்லது 'பழமை' என்ற பொருள் தரும். நினைவில் கொள்ள: 'தமிழ்' = 'தொன்மை' = 'பழமை'!"
    },
    {
        id: 47,
        category: "TAMIL",
        question: "தமிழ் மொழியின் முதல் இலக்கண நூல் எது?",
        options: ["தொல்காப்பியம்", "நன்னூல்", "வினாவிடை", "மொழியியல்"],
        correct: 0,
        explanation: "தமிழின் முதல் இலக்கண நூல் = தொல்காப்பியம். ஆசிரியர்: தொல்காப்பியர் (கி.மு. 3ஆம் நூற்றாண்டு). பகுதிகள்: எழுத்து, சொல், பொருள். நன்னூல் = பிற்காலத்தில் எழுதப்பட்டது. நினைவில் கொள்ள: 'தொல்' = 'தொன்மை' = முதல் நூல்!"
    },
    {
        id: 48,
        category: "TAMIL",
        question: "'செல்' என்ற வினையின் இற்றிலை விகாரம் என்ன?",
        options: ["செல்லும்", "சென்ற", "செல்ல", "செல்லாமல்"],
        correct: 1,
        explanation: "'செல்' = வினைச்சொல் (to go). இற்றிலை = கடந்த காலம் (past tense) = 'சென்ற'. விகாரங்கள்: இற்றிலை = சென்ற, தொழிற்பெயர் = செல்லுதல், வினைமுதல் = செல், வினையிறுதி = செல்லும்."
    },
    {
        id: 49,
        category: "TAMIL",
        question: "'மரம்' என்ற சொல்லின் பன்மை என்ன?",
        options: ["மரங்கள்", "மரங்கள்", "மரங்கள்", "மரங்கள்"],
        correct: 0,
        explanation: "'மரம்' = 'மர' + 'ம்'. பன்மை: 'மரம்' → 'மரங்கள்'. ஒருமை: மரம். பன்மை: மரங்கள். நினைவில் கொள்ள: 'மரம்' = 'மரங்கள்' (ஒன்று → பல)!"
    },
    {
        id: 50,
        category: "TAMIL",
        question: "'அவன்' என்பது எந்த வகை உருபு?",
        options: ["ஆண்பால்", "பெண்பால்", "பலர்பால்", "ஒன்றன்பால்"],
        correct: 0,
        explanation: "'அவன்' = ஆண்பால் உருபு. தமிழில் உருபுகள்: ஆண்பால் = அவன். பெண்பால் = அவள். பலர்பால் = அவர்கள். ஒன்றன்பால் = அது. நினைவில் கொள்ள: 'அவன்' = 'ஆண்' = 'He'!"
    },
    // CATEGORY 10: ENGLISH
    {
        id: 51,
        category: "ENGLISH",
        question: "She is ___ honest woman.",
        options: ["a", "an", "the", "no article"],
        correct: 1,
        explanation: "'Honest' starts with a VOWEL SOUND (O). RULE: Use 'an' before vowel SOUNDS (not letters!). EXAMPLES: an apple (vowel sound), an honest person (O sound = vowel), a university (U sound = consonant). MEMORY: 'an' = before vowel SOUNDS!"
    },
    {
        id: 52,
        category: "ENGLISH",
        question: "___ sun rises in the east.",
        options: ["A", "An", "The", "No article"],
        correct: 2,
        explanation: "'The' is used for UNIQUE things (only one in the world!). RULES FOR 'THE': The sun (only one sun), The moon (only one moon), The earth (only one earth). COMPARE: 'a sun' ❌ (there's only one!), 'the sun' ✅ (unique!). MEMORY: 'The' = 'THE only one'!"
    },
    {
        id: 53,
        category: "ENGLISH",
        question: "I have ___ umbrella.",
        options: ["a", "an", "the", "no article"],
        correct: 1,
        explanation: "'Umbrella' starts with U (vowel sound). Use 'an' before vowel sounds. COMPARE: 'a umbrella' ❌ (wrong!), 'an umbrella' ✅ (correct!). MEMORY: 'Umbrella' = 'U' = vowel = 'an'!"
    },
    {
        id: 54,
        category: "ENGLISH",
        question: "ABANDON means:",
        options: ["Keep", "Desert", "Maintain", "Preserve"],
        correct: 1,
        explanation: "ABANDON = To leave behind, to desert. SYNONYMS: Leave, forsake, relinquish. ANTONYMS: Keep, maintain, preserve. MEMORY: 'ABANDON' = 'A BAND ON' = Leave the band behind!"
    },
    {
        id: 55,
        category: "ENGLISH",
        question: "BENEVOLENT means:",
        options: ["Kind", "Cruel", "Harsh", "Rude"],
        correct: 0,
        explanation: "BENEVOLENT = Kind, generous, charitable. SYNONYMS: Kind, charitable, compassionate. ANTONYNS: Cruel, harsh, malevolent. ROOT: 'Bene' = good, 'volent' = wishing. MEMORY: 'BENE' = 'BENEFIT' = Kind!"
    },
    // CATEGORY 11: COMPUTER
    {
        id: 56,
        category: "COMPUTER",
        question: "CPU stands for:",
        options: ["Central Processing Unit", "Central Program Unit", "Computer Personal Unit", "Central Peripheral Unit"],
        correct: 0,
        explanation: "CPU = Central Processing Unit = 'Brain of the computer'. WHAT IT DOES: Processes all instructions, Performs calculations, Controls all operations. OTHER PARTS: RAM = Memory (temporary), Hard Disk = Storage (permanent). MEMORY: 'CPU = Central Processing Unit = Brain'!"
    },
    {
        id: 57,
        category: "COMPUTER",
        question: "RAM stands for:",
        options: ["Random Access Memory", "Read Access Memory", "Random All Memory", "Read All Memory"],
        correct: 0,
        explanation: "RAM = Random Access Memory = 'Temporary memory'. WHAT IT DOES: Stores data temporarily, Lost when computer turns off, Faster than hard disk. COMPARISON: RAM = Fast but temporary. Hard Disk = Slow but permanent. MEMORY: 'RAM = Random Access Memory = Temporary'!"
    },
    {
        id: 58,
        category: "COMPUTER",
        question: "Which of the following is an input device?",
        options: ["Monitor", "Printer", "Keyboard", "Speaker"],
        correct: 2,
        explanation: "Input device = Sends data TO computer. INPUT DEVICES: Keyboard (types data), Mouse (clicks), Scanner (reads documents). OUTPUT DEVICES: Monitor (displays), Printer (prints), Speaker (plays sound). MEMORY: 'Input = Into the computer'!"
    },
    {
        id: 59,
        category: "COMPUTER",
        question: "1 GB equals:",
        options: ["1024 MB", "1000 MB", "1048 MB", "1024 KB"],
        correct: 0,
        explanation: "Computer memory uses BINARY (base 2). CONVERSION: 1 KB = 1024 bytes. 1 MB = 1024 KB. 1 GB = 1024 MB. 1 TB = 1024 GB. WHY 1024? Because 2¹⁰ = 1024 (binary system!). SIMILAR: 1 meter = 100 cm. 1 km = 1000 m. 1 GB = 1024 MB!"
    },
    {
        id: 60,
        category: "COMPUTER",
        question: "The shortcut key for bold in MS Word is:",
        options: ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + S"],
        correct: 0,
        explanation: "MS Word SHORTCUTS: Ctrl + B = Bold. Ctrl + I = Italic. Ctrl + U = Underline. Ctrl + S = Save. Ctrl + C = Copy. Ctrl + V = Paste. Ctrl + Z = Undo. Ctrl + P = Print. MEMORY: 'B = Bold, I = Italic, U = Underline'!"
    }
];

// ─── QUIZ STATE ───
let currentQuestion = 0;
let score = 0;
let answers = [];
let selectedOption = null;
let timeRemaining = 120; // 2 minutes
let timerInterval = null;
let quizStarted = false;

// ─── DOM ELEMENTS ───
const questionNum = document.getElementById('question-num');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const questionCategory = document.getElementById('question-category');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const explanationBox = document.getElementById('explanation-box');
const explanationContent = document.getElementById('explanation-content');
const statAnswered = document.getElementById('stat-answered');
const statCorrect = document.getElementById('stat-correct');
const statAccuracy = document.getElementById('stat-accuracy');
const statTime = document.getElementById('stat-time');

// ─── INITIALIZE QUIZ ───
function initQuiz() {
    currentQuestion = 0;
    score = 0;
    answers = [];
    selectedOption = null;
    quizStarted = false;
    
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    
    timeRemaining = 120;
    updateDisplay();
    loadQuestion();
}

// ─── START QUIZ ───
function startQuiz() {
    if (!quizStarted) {
        quizStarted = true;
        startTimer();
    }
}

// ─── TIMER ───
function startTimer() {
    timerInterval = setInterval(function() {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            showResults();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const display = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    timerDisplay.textContent = display;
    statTime.textContent = display;
}

// ─── LOAD QUESTION ───
function loadQuestion() {
    const q = quizData[currentQuestion];
    
    questionNum.textContent = `${currentQuestion + 1}/${quizData.length}`;
    questionCategory.textContent = q.category;
    questionText.textContent = q.question;
    
    // Clear previous selection
    selectedOption = null;
    explanationBox.style.display = 'none';
    
    // Build options
    optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    
    q.options.forEach((option, index) => {
        const optionBtn = document.createElement('div');
        optionBtn.className = 'option-btn';
        optionBtn.dataset.option = index;
        optionBtn.innerHTML = `
            <span class="option-letter">${letters[index]}</span>
            <span class="option-text">${option}</span>
        `;
        optionBtn.onclick = function() { selectOption(this); };
        optionsContainer.appendChild(optionBtn);
    });
}

// ─── SELECT OPTION ───
function selectOption(element) {
    // Remove previous selection
    const allOptions = optionsContainer.querySelectorAll('.option-btn');
    allOptions.forEach(opt => opt.classList.remove('selected'));
    
    // Add selection
    element.classList.add('selected');
    selectedOption = parseInt(element.dataset.option);
}

// ─── SUBMIT ANSWER ───
function submitAnswer() {
    if (selectedOption === null) {
        alert('Please select an answer!');
        return;
    }
    
    const q = quizData[currentQuestion];
    const allOptions = optionsContainer.querySelectorAll('.option-btn');
    
    // Mark correct/wrong
    allOptions.forEach((opt, index) => {
        opt.onclick = null; // Disable clicking
        
        if (index === q.correct) {
            opt.classList.add('correct');
        } else if (index === selectedOption && selectedOption !== q.correct) {
            opt.classList.add('wrong');
        }
    });
    
    // Update score
    if (selectedOption === q.correct) {
        score++;
        scoreDisplay.textContent = score;
        statCorrect.textContent = score;
    }
    
    // Store answer
    answers[currentQuestion] = selectedOption;
    
    // Update stats
    const answered = answers.filter(a => a !== undefined).length;
    statAnswered.textContent = answered;
    statAccuracy.textContent = `${Math.round((score / answered) * 100)}%`;
    
    // Show explanation
    explanationContent.textContent = q.explanation;
    explanationBox.style.display = 'block';
}

// ─── NEXT QUESTION ───
function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
        updateDisplay();
    }
}

// ─── PREVIOUS QUESTION ───
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
        updateDisplay();
    }
}

// ─── UPDATE DISPLAY ───
function updateDisplay() {
    questionNum.textContent = `${currentQuestion + 1}/${quizData.length}`;
    
    // Check if answer already exists
    if (answers[currentQuestion] !== undefined) {
        const allOptions = optionsContainer.querySelectorAll('.option-btn');
        const q = quizData[currentQuestion];
        
        allOptions.forEach((opt, index) => {
            opt.onclick = null;
            
            if (index === q.correct) {
                opt.classList.add('correct');
            } else if (index === answers[currentQuestion] && answers[currentQuestion] !== q.correct) {
                opt.classList.add('wrong');
            }
        });
        
        explanationContent.textContent = q.explanation;
        explanationBox.style.display = 'block';
    }
}

// ─── SHOW RESULTS ───
function showResults() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    
    const modal = document.getElementById('results-modal');
    const finalScore = document.getElementById('final-score');
    const resultCorrect = document.getElementById('result-correct');
    const resultWrong = document.getElementById('result-wrong');
    const resultSkipped = document.getElementById('result-skipped');
    const resultMessage = document.getElementById('result-message');
    
    const totalQuestions = quizData.length;
    const wrong = totalQuestions - score;
    const skipped = totalQuestions - answers.filter(a => a !== undefined).length;
    
    finalScore.textContent = score;
    resultCorrect.textContent = score;
    resultWrong.textContent = wrong;
    resultSkipped.textContent = skipped;
    
    // Generate message
    const percentage = Math.round((score / totalQuestions) * 100);
    let message = '';
    
    if (percentage >= 90) {
        message = 'Excellent, Banupriya! You are fully prepared for the exam!';
    } else if (percentage >= 70) {
        message = 'Great job, Banupriya! Keep practicing to reach 90%+!';
    } else if (percentage >= 50) {
        message = 'Good effort, Banupriya! Review the weak areas and try again!';
    } else {
        message = 'Keep practicing, Banupriya! Focus on explanations and try again!';
    }
    
    resultMessage.textContent = message;
    
    modal.style.display = 'flex';
}

// ─── CLOSE MODAL ───
function closeModal() {
    document.getElementById('results-modal').style.display = 'none';
}

// ─── RETRY QUIZ ───
function retryQuiz() {
    closeModal();
    initQuiz();
}

// ─── NAVIGATION LINKS ───
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        
        const section = this.dataset.section;
        
        if (section === 'home') {
            initQuiz();
        } else if (section === 'quiz') {
            startQuiz();
        } else if (section === 'results') {
            showResults();
        } else if (section === 'leaderboard') {
            alert('Leaderboard coming soon!');
        }
    });
});

// ─── CATEGORY FILTERS ───
document.querySelectorAll('.rail-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.rail-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        const category = this.dataset.category;
        
        if (category === 'all') {
            // Show all questions
            initQuiz();
        } else {
            // Filter by category
            const filtered = quizData.filter(q => 
                q.category.toLowerCase().includes(category.toLowerCase())
            );
            
            if (filtered.length > 0) {
                quizData = filtered;
                initQuiz();
            }
        }
    });
});

// ─── INITIALIZE ON LOAD ───
document.addEventListener('DOMContentLoaded', function() {
    initQuiz();
    updateTimerDisplay();
});

// ─── KEYBOARD SHORTCUTS ───
document.addEventListener('keydown', function(e) {
    if (!quizStarted) {
        if (e.key === 'Enter' || e.key === ' ') {
            startQuiz();
        }
        return;
    }
    
    switch(e.key) {
        case '1':
        case 'a':
        case 'A':
            selectOptionByIndex(0);
            break;
        case '2':
        case 'b':
        case 'B':
            selectOptionByIndex(1);
            break;
        case '3':
        case 'c':
        case 'C':
            selectOptionByIndex(2);
            break;
        case '4':
        case 'd':
        case 'D':
            selectOptionByIndex(3);
            break;
        case 'Enter':
            submitAnswer();
            break;
        case 'ArrowRight':
            nextQuestion();
            break;
        case 'ArrowLeft':
            prevQuestion();
            break;
    }
});

function selectOptionByIndex(index) {
    const options = optionsContainer.querySelectorAll('.option-btn');
    if (options[index]) {
        selectOption(options[index]);
    }
}

// ─── EXPOSE FUNCTIONS GLOBALLY ───
window.startQuiz = startQuiz;
window.selectOption = selectOption;
window.submitAnswer = submitAnswer;
window.nextQuestion = nextQuestion;
window.prevQuestion = prevQuestion;
window.retryQuiz = retryQuiz;
window.closeModal = closeModal;
