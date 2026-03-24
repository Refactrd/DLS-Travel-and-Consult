export interface CountryData {
  slug: string;
  name: string;
  flag: string;
  heroTagline: string;
  heroImage: string;
  whyTitle: string;
  whyBody: string[];
  programs: {
    emoji: string;
    title: string;
  }[];
  requirements: string[];
  language: {
    heading: string;
    body: string;
    levels: string[];
    ctaLabel: string;
  };
  roadmap: {
    step: number;
    title: string;
    description: string;
  }[];
  gallery: string[];
  sidebar: {
    heading: string;
    testimonial: {
      name: string;
      visa: string;
      quote: string;
    };
  };
}

export const countriesData: CountryData[] = [
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    heroTagline: "Europe's largest economy and vocational training powerhouse",
    heroImage: "/images/germany-hero section.png",
    whyTitle: "A Land of Opportunity for Africa's Talent",
    whyBody: [
      "Germany is the economic powerhouse of Europe. Offering world-class universities, a renowned dual vocational training system, and one of the most structured pathways for skilled immigration. With growing demand for qualified professionals and a welcoming international community, Germany tops the list for African migrants and students.",
      "Germany offers fully funded public university education, a strong job market post-graduation, and multiple legal pathways to permanent residency. Whether you want to study, train, work, or reunite with family, Germany has a clear and accessible route for you.",
    ],
    programs: [
      { emoji: "🎓", title: "Study Abroad" },
      { emoji: "🤝", title: "Vocational Training (Ausbildung)" },
      { emoji: "🌐", title: "Voluntary Service (FSJ/BFD)" },
      { emoji: "👨‍👩‍👧", title: "Family Reunification" },
    ],
    requirements: [
      "Valid international passport",
      "Language proficiency certificate",
      "Admission letter or program acceptance",
      "Proof of financial means",
      "Completed visa application form",
      "Additional documents per visa type",
    ],
    language: {
      heading: "Learn German with DLS",
      body: "We run certified German Language courses from A1 to C1. Our instructors prepare you for TestDaF, Goethe, and TELC exams, all required for German visa applications.",
      levels: ["A1 - Starter", "A2 - Elementary", "B1 - Intermediate", "B2 - Upper Intermediate", "C1 - Advanced"],
      ctaLabel: "Enquire About German Classes",
    },
    roadmap: [
      { step: 1, title: "Initial Consultation", description: "We assess your qualifications, goals, and the most suitable program for your profile." },
      { step: 2, title: "Language Training", description: "Begin your German course with DLS. Reach the required level for your visa category." },
      { step: 3, title: "Document Preparation", description: "We guide you through gathering, translating, and certifying all required documents." },
      { step: 4, title: "Application Submission", description: "We assist with your university/employer application and support your visa appointment booking." },
      { step: 5, title: "Visa Interview Prep", description: "We coach you thoroughly for your embassy interview, what to say, how to present yourself, and what to bring." },
      { step: 6, title: "Departure and Arrival Support", description: "Pre-departure briefing, arrival tips, accommodation guidance, and continued check-ins once you've landed." },
    ],
    gallery: [
      "/images/german.png",
      "/images/german.png",
      "/images/german.png",
      "/images/german.png",
      "/images/german.png",
      "/images/german.png",
    ],
    sidebar: {
      heading: "Ready to Move to Germany?",
      testimonial: {
        name: "Ethan White",
        visa: "Student Visa · Germany",
        quote: "I was ecstatic when my student visa for Germany was granted on my first attempt!",
      },
    },
  },
  {
    slug: "france",
    name: "France",
    flag: "🇫🇷",
    heroTagline: "Prestigious Grandes Ecoles, cutting-edge research and a vibrant cultural capital",
    heroImage: "/images/france (1).png",
    whyTitle: "Where Culture Meets Academic Excellence",
    whyBody: [
      "France is home to some of the most prestigious universities and research institutions in the world. From the Grandes Ecoles to state universities with low or zero tuition, France offers an exceptional academic environment for ambitious African students.",
      "With a strong tradition of welcoming international talent, France provides clear visa pathways for students, trainees, volunteers, and families. The country's vibrant culture and central European location make it a top destination for those building a future abroad.",
    ],
    programs: [
      { emoji: "🎓", title: "Study Abroad" },
      { emoji: "🤝", title: "Vocational Training" },
      { emoji: "🌐", title: "Voluntary Service" },
      { emoji: "👨‍👩‍👧", title: "Family Reunification" },
    ],
    requirements: [
      "Valid international passport",
      "French language proficiency certificate (TCF/DELF)",
      "Admission letter or Campus France acceptance",
      "Proof of accommodation in France",
      "Proof of financial means",
      "Completed long-stay visa application form",
    ],
    language: {
      heading: "Learn French with DLS",
      body: "We run certified French language courses from A1 to C1. Our instructors prepare you for TCF and DELF exams, required for French visa and university applications.",
      levels: ["A1 - Starter", "A2 - Elementary", "B1 - Intermediate", "B2 - Upper Intermediate", "C1 - Advanced"],
      ctaLabel: "Enquire About French Classes",
    },
    roadmap: [
      { step: 1, title: "Initial Consultation", description: "We assess your goals and identify the right French program or pathway for your profile." },
      { step: 2, title: "Language Training", description: "Start your French course with DLS and reach the level required for your visa category." },
      { step: 3, title: "Campus France Registration", description: "We guide you through the Campus France process, required for most student applications." },
      { step: 4, title: "Document Preparation", description: "We help you gather, translate, and certify every document needed for your application." },
      { step: 5, title: "Visa Application Support", description: "We prepare and submit your long-stay visa application and coach you for the interview." },
      { step: 6, title: "Departure and Arrival Support", description: "Pre-departure briefing, accommodation tips, and continued support after you arrive in France." },
    ],
    gallery: [
      "/images/francee.png",
      "/images/francee.png",
      "/images/francee.png",
      "/images/francee.png",
      "/images/francee.png",
      "/images/francee.png",
    ],
    sidebar: {
      heading: "Ready to Move to France?",
      testimonial: {
        name: "Emily Davis",
        visa: "Student Visa · France",
        quote: "Dash explained everything clearly and my training application went through without a hitch.",
      },
    },
  },
  {
    slug: "austria",
    name: "Austria",
    flag: "🇦🇹",
    heroTagline: "World-class education in the heart of Central Europe",
    heroImage: "/images/Austria (1).png",
    whyTitle: "Quality Living Meets Academic Prestige",
    whyBody: [
      "Austria combines outstanding academic institutions with an exceptional quality of life. Vienna consistently ranks among the most livable cities in the world, and its universities attract thousands of international students every year.",
      "Austria offers affordable public university education, a structured student visa pathway, and growing opportunities in healthcare, engineering, and hospitality sectors. For Africans seeking a high-quality European education, Austria is an underrated and highly accessible option.",
    ],
    programs: [
      { emoji: "🎓", title: "Study Abroad" },
      { emoji: "🤝", title: "Vocational Training" },
      { emoji: "🌐", title: "Voluntary Service" },
      { emoji: "👨‍👩‍👧", title: "Family Reunification" },
    ],
    requirements: [
      "Valid international passport",
      "German language proficiency certificate (B2 minimum for most programs)",
      "University admission letter",
      "Proof of financial means (blocked account or sponsor letter)",
      "Health insurance documentation",
      "Completed visa application form",
    ],
    language: {
      heading: "Learn German with DLS",
      body: "Austria uses German as its official language. We offer certified German courses from A1 to C1, preparing you for Goethe and OSD exams required for Austrian visa and university applications.",
      levels: ["A1 - Starter", "A2 - Elementary", "B1 - Intermediate", "B2 - Upper Intermediate", "C1 - Advanced"],
      ctaLabel: "Enquire About German Classes",
    },
    roadmap: [
      { step: 1, title: "Initial Consultation", description: "We review your background and identify the right Austrian program or pathway for you." },
      { step: 2, title: "Language Training", description: "Complete your German course with DLS to the level required for your visa type." },
      { step: 3, title: "University Application", description: "We guide you through the Austrian university application process and documentation." },
      { step: 4, title: "Document Preparation", description: "We assist with translation, certification, and compilation of all required documents." },
      { step: 5, title: "Visa Application Support", description: "We prepare and submit your student visa application and coach you for your embassy appointment." },
      { step: 6, title: "Departure and Arrival Support", description: "Pre-departure briefing, accommodation tips, and continued check-ins once you arrive." },
    ],
    gallery: [
      "/images/austria.png",
      "/images/austria.png",
      "/images/austria.png",
      "/images/austria.png",
      "/images/austria.png",
      "/images/austria.png",
    ],
    sidebar: {
      heading: "Ready to Move to Austria?",
      testimonial: {
        name: "Olivia Martinez",
        visa: "Student Visa · Austria",
        quote: "I was over the moon when my student visa for Austria was granted on the first attempt!",
      },
    },
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    heroTagline: "English-speaking, immigrant-friendly, and globally ranked universities",
    heroImage: "/images/canada.png",
    whyTitle: "The Clearest Path to a Global Future",
    whyBody: [
      "Canada is one of the most immigration-friendly countries in the world. With globally ranked universities, a multicultural society, and clear pathways from study permit to permanent residency, Canada is an exceptional destination for ambitious Africans.",
      "Whether you are pursuing a degree, a diploma program, or professional certification, Canada offers a structured and transparent process from application to arrival. The country's open immigration culture and bilingual environment make it especially welcoming for Nigerian students.",
    ],
    programs: [
      { emoji: "🎓", title: "Study Abroad" },
      { emoji: "🤝", title: "Vocational Training" },
      { emoji: "👨‍👩‍👧", title: "Family Reunification" },
    ],
    requirements: [
      "Valid international passport",
      "Letter of Acceptance from a Designated Learning Institution (DLI)",
      "Proof of financial means",
      "Statement of Purpose",
      "English proficiency certificate (IELTS or equivalent)",
      "Completed study permit application",
    ],
    language: {
      heading: "English and French Preparation with DLS",
      body: "Canada is bilingual. We offer IELTS preparation and English communication courses to ensure you meet the language requirements for your chosen Canadian institution.",
      levels: ["IELTS Preparation", "English Communication", "Academic Writing", "French A1 to B1"],
      ctaLabel: "Enquire About English Classes",
    },
    roadmap: [
      { step: 1, title: "Initial Consultation", description: "We review your academic background and identify the right Canadian institution and program for you." },
      { step: 2, title: "Language Preparation", description: "Prepare for IELTS or required English proficiency tests with our certified instructors." },
      { step: 3, title: "Institution Application", description: "We guide you through applying to Designated Learning Institutions and securing your acceptance letter." },
      { step: 4, title: "Document Preparation", description: "We assist with compiling, translating, and certifying all required documents." },
      { step: 5, title: "Study Permit Application", description: "We prepare and submit your Canadian study permit application with the strongest possible profile." },
      { step: 6, title: "Departure and Arrival Support", description: "Pre-departure briefing, arrival tips, accommodation guidance, and continued support after landing." },
    ],
    gallery: [
      "/images/canada.png",
      "/images/canada.png",
      "/images/canada.png",
      "/images/canada.png",
      "/images/canada.png",
      "/images/canada.png",
    ],
    sidebar: {
      heading: "Ready to Move to Canada?",
      testimonial: {
        name: "James Carter",
        visa: "Study Permit · Canada",
        quote: "DLS made the entire Canadian application process feel simple and achievable. I'm now studying in Toronto!",
      },
    },
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    flag: "🇳🇱",
    heroTagline: "High-ranked English-taught programs and a highly international community",
    heroImage: "/images/Netherlands (1).png",
    whyTitle: "Europe's Most International Study Destination",
    whyBody: [
      "The Netherlands hosts some of the highest-ranked English-taught bachelor's and master's programs in Europe. Cities like Amsterdam, Utrecht, and Eindhoven offer a dynamic, internationally minded environment that makes settling in relatively seamless for African students.",
      "Dutch universities are globally recognized, and the country offers a post-study job-search visa that gives graduates a year to find employment after completing their degree. Combined with strong infrastructure and a high standard of living, the Netherlands is one of the most strategic destinations in Europe.",
    ],
    programs: [
      { emoji: "🎓", title: "Study Abroad" },
      { emoji: "🤝", title: "Vocational Training" },
      { emoji: "👨‍👩‍👧", title: "Family Reunification" },
    ],
    requirements: [
      "Valid international passport",
      "University admission letter (MVV sponsor letter)",
      "English proficiency certificate (IELTS or TOEFL)",
      "Proof of financial means (minimum required by IND)",
      "Health insurance coverage",
      "Completed MVV and residence permit application",
    ],
    language: {
      heading: "English and Dutch Preparation with DLS",
      body: "Most Dutch university programs are taught in English. We offer IELTS preparation and introductory Dutch language courses to help you integrate smoothly after arrival.",
      levels: ["IELTS Preparation", "Academic English", "Dutch A1 - Starter", "Dutch A2 - Elementary"],
      ctaLabel: "Enquire About English Classes",
    },
    roadmap: [
      { step: 1, title: "Initial Consultation", description: "We assess your academic background and identify the right Dutch program for your goals." },
      { step: 2, title: "Language Preparation", description: "Prepare for IELTS or English proficiency tests required by Dutch institutions." },
      { step: 3, title: "University Application", description: "We guide you through Studielink and direct university applications." },
      { step: 4, title: "Document Preparation", description: "We assist with gathering, translating, and certifying all required documents." },
      { step: 5, title: "MVV and Residence Permit", description: "We prepare your MVV application and guide you through the IND residence permit process." },
      { step: 6, title: "Departure and Arrival Support", description: "Pre-departure briefing, arrival tips, and continued support once you land in the Netherlands." },
    ],
    gallery: [
      "/images/netherlands.png",
      "/images/netherlands.png",
      "/images/netherlands.png",
      "/images/netherlands.png",
      "/images/netherlands.png",
      "/images/netherlands.png",
    ],
    sidebar: {
      heading: "Ready to Move to the Netherlands?",
      testimonial: {
        name: "Sophia Wilson",
        visa: "Student Visa · Netherlands",
        quote: "I was thrilled to receive my student visa for the Netherlands on my first try!",
      },
    },
  },
  {
    slug: "belgium",
    name: "Belgium",
    flag: "🇧🇪",
    heroTagline: "Multilingual, EU-connected, and home to excellent academic programs",
    heroImage: "/images/Belgium (1).png",
    whyTitle: "At the Heart of Europe with Global Reach",
    whyBody: [
      "Belgium is a small but strategically powerful country at the center of Europe. As host to EU institutions and NATO headquarters, Belgium offers unmatched professional networking opportunities and a deeply international student community.",
      "Belgian universities in cities like Brussels, Leuven, and Ghent offer high-quality programs in both French and Dutch, often at very accessible tuition rates. The country's bilingual character and central location make it an ideal launchpad for a career across Europe.",
    ],
    programs: [
      { emoji: "🎓", title: "Study Abroad" },
      { emoji: "🌐", title: "Voluntary Service" },
      { emoji: "👨‍👩‍👧", title: "Family Reunification" },
    ],
    requirements: [
      "Valid international passport",
      "University admission letter",
      "Proof of financial means",
      "Language proficiency certificate (French or Dutch depending on institution)",
      "Health insurance documentation",
      "Completed student visa (Type D) application",
    ],
    language: {
      heading: "Learn French or Dutch with DLS",
      body: "Belgium has two major language communities: French-speaking Wallonia and Dutch-speaking Flanders. We offer certified courses in both languages, from A1 to C1, tailored to your target region and institution.",
      levels: ["A1 - Starter", "A2 - Elementary", "B1 - Intermediate", "B2 - Upper Intermediate", "C1 - Advanced"],
      ctaLabel: "Enquire About Language Classes",
    },
    roadmap: [
      { step: 1, title: "Initial Consultation", description: "We identify the right Belgian university, region, and language track for your goals." },
      { step: 2, title: "Language Training", description: "Complete your French or Dutch course with DLS to meet the required proficiency level." },
      { step: 3, title: "University Application", description: "We assist with your application to Belgian universities and securing your admission letter." },
      { step: 4, title: "Document Preparation", description: "We help gather, translate, and certify all required documents for your visa application." },
      { step: 5, title: "Visa Application Support", description: "We prepare and submit your Type D student visa application and prepare you for the embassy process." },
      { step: 6, title: "Departure and Arrival Support", description: "Pre-departure briefing, city orientation tips, and continued support once you arrive." },
    ],
    gallery: [
      "/images/belgium.png",
      "/images/belgium.png",
      "/images/belgium.png",
      "/images/belgium.png",
      "/images/belgium.png",
      "/images/belgium.png",
    ],
    sidebar: {
      heading: "Ready to Move to Belgium?",
      testimonial: {
        name: "Johnson Adewale",
        visa: "Student Visa · Belgium",
        quote: "When my student visa for Belgium was approved I was completely overwhelmed with joy. DLS delivered.",
      },
    },
  },
  {
    slug: "sweden",
    name: "Sweden",
    flag: "🇸🇪",
    heroTagline: "Innovation, sustainability, and world-class education in Scandinavia",
    heroImage: "/images/Sweden (1).png",
    whyTitle: "A Progressive Society Built for International Talent",
    whyBody: [
      "Sweden is globally recognized for its commitment to innovation, sustainability, and inclusive education. Swedish universities consistently rank among the top in the world, and many programs are offered entirely in English, removing language barriers for international students.",
      "Sweden's progressive immigration policies, high quality of life, and strong tech ecosystem make it a compelling destination for African professionals and students who want to build long-term careers in Europe.",
    ],
    programs: [
      { emoji: "🎓", title: "Study Abroad" },
      { emoji: "🌐", title: "Voluntary Service" },
      { emoji: "👨‍👩‍👧", title: "Family Reunification" },
    ],
    requirements: [
      "Valid international passport",
      "University admission letter from a Swedish institution",
      "English proficiency certificate (IELTS or equivalent)",
      "Proof of financial means (minimum SEK required by Migrationsverket)",
      "Health insurance for the first 12 months",
      "Completed residence permit application",
    ],
    language: {
      heading: "English and Swedish Preparation with DLS",
      body: "Most Swedish university programs are taught in English. We offer IELTS preparation and introductory Swedish courses to help you settle in and integrate into Swedish society.",
      levels: ["IELTS Preparation", "Academic English", "Swedish A1 - Starter", "Swedish A2 - Elementary"],
      ctaLabel: "Enquire About English Classes",
    },
    roadmap: [
      { step: 1, title: "Initial Consultation", description: "We assess your academic background and identify the right Swedish university and program." },
      { step: 2, title: "Language Preparation", description: "Prepare for IELTS or required English tests with our certified instructors." },
      { step: 3, title: "University Application", description: "We guide you through Universityadmissions.se and direct program applications." },
      { step: 4, title: "Document Preparation", description: "We assist with gathering, translating, and certifying all required documents." },
      { step: 5, title: "Residence Permit Application", description: "We prepare your Swedish residence permit application through Migrationsverket." },
      { step: 6, title: "Departure and Arrival Support", description: "Pre-departure briefing, arrival tips, and continued support once you land in Sweden." },
    ],
    gallery: [
      "/images/sweden.png",
      "/images/sweden.png",
      "/images/sweden.png",
      "/images/sweden.png",
      "/images/sweden.png",
      "/images/sweden.png",
    ],
    sidebar: {
      heading: "Ready to Move to Sweden?",
      testimonial: {
        name: "Amara Osei",
        visa: "Student Visa · Sweden",
        quote: "DLS handled every step of my Swedish university application. I arrived in Stockholm with zero stress.",
      },
    },
  },
  {
    slug: "spain",
    name: "Spain",
    flag: "🇪🇸",
    heroTagline: "Quality of life, vibrant culture, and growing opportunities in Southern Europe",
    heroImage: "/images/Spain (1).png",
    whyTitle: "Sun, Culture, and a Gateway to Europe",
    whyBody: [
      "Spain offers an outstanding quality of life combined with an increasingly strong academic and professional landscape. With over 80 public universities, a warm climate, and a rich cultural heritage, Spain is a deeply rewarding destination for African students and workers.",
      "Spain has become one of the most popular destinations for international students in the world. Its growing tech sector, affordable cost of living relative to Northern Europe, and vibrant social life make it an attractive long-term base for those building a future in Europe.",
    ],
    programs: [
      { emoji: "🎓", title: "Study Abroad" },
      { emoji: "🌐", title: "Voluntary Service" },
      { emoji: "👨‍👩‍👧", title: "Family Reunification" },
    ],
    requirements: [
      "Valid international passport",
      "University admission or program acceptance letter",
      "Spanish language proficiency certificate (DELE) where required",
      "Proof of financial means",
      "Health insurance coverage",
      "Completed student visa application form",
    ],
    language: {
      heading: "Learn Spanish with DLS",
      body: "We offer certified Spanish language courses from A1 to C1. Our instructors prepare you for DELE exams, which are required for many Spanish university and visa applications.",
      levels: ["A1 - Starter", "A2 - Elementary", "B1 - Intermediate", "B2 - Upper Intermediate", "C1 - Advanced"],
      ctaLabel: "Enquire About Spanish Classes",
    },
    roadmap: [
      { step: 1, title: "Initial Consultation", description: "We assess your goals and identify the best Spanish university or program for your profile." },
      { step: 2, title: "Language Training", description: "Complete your Spanish course with DLS and reach the required level for your visa category." },
      { step: 3, title: "University Application", description: "We assist with applications to Spanish institutions and securing your admission letter." },
      { step: 4, title: "Document Preparation", description: "We help you gather, translate, and certify all required documents." },
      { step: 5, title: "Visa Application Support", description: "We prepare your student visa application and coach you for the Spanish embassy appointment." },
      { step: 6, title: "Departure and Arrival Support", description: "Pre-departure briefing, arrival tips, and continued support after you land in Spain." },
    ],
    gallery: [
      "/images/spain.png",
      "/images/spain.png",
      "/images/spain.png",
      "/images/spain.png",
      "/images/spain.png",
      "/images/spain.png",
    ],
    sidebar: {
      heading: "Ready to Move to Spain?",
      testimonial: {
        name: "Michael Brown",
        visa: "Student Visa · Spain",
        quote: "My family is together in Spain now. Forever grateful to the Dash team.",
      },
    },
  },
  {
    slug: "finland",
    name: "Finland",
    flag: "🇫🇮",
    heroTagline: "World-leading education system and a high quality of life in Northern Europe",
    heroImage: "/images/Finland.png",
    whyTitle: "The World's Best Education System Awaits You",
    whyBody: [
      "Finland is consistently ranked as having the best education system in the world. Finnish universities emphasize critical thinking, innovation, and student wellbeing, producing graduates who are highly sought after globally.",
      "With a growing number of English-taught master's programs, a welcoming immigration policy, and one of the highest standards of living in Europe, Finland is an increasingly popular destination for ambitious African students seeking quality over prestige.",
    ],
    programs: [
      { emoji: "🎓", title: "Study Abroad" },
      { emoji: "🌐", title: "Voluntary Service" },
      { emoji: "👨‍👩‍👧", title: "Family Reunification" },
    ],
    requirements: [
      "Valid international passport",
      "University admission letter from a Finnish institution",
      "English proficiency certificate (IELTS or equivalent)",
      "Proof of financial means (as required by Finnish Immigration Service)",
      "Health insurance documentation",
      "Completed residence permit application",
    ],
    language: {
      heading: "English and Finnish Preparation with DLS",
      body: "Many Finnish programs are taught in English at the master's level. We offer IELTS preparation and introductory Finnish language courses to support your integration into Finnish society.",
      levels: ["IELTS Preparation", "Academic English", "Finnish A1 - Starter", "Finnish A2 - Elementary"],
      ctaLabel: "Enquire About English Classes",
    },
    roadmap: [
      { step: 1, title: "Initial Consultation", description: "We review your background and identify the right Finnish university and program for you." },
      { step: 2, title: "Language Preparation", description: "Prepare for IELTS or English proficiency tests required by Finnish institutions." },
      { step: 3, title: "University Application", description: "We guide you through studyinfo.fi and direct university applications." },
      { step: 4, title: "Document Preparation", description: "We assist with gathering, translating, and certifying all required documents." },
      { step: 5, title: "Residence Permit Application", description: "We prepare your Finnish residence permit application through Migri." },
      { step: 6, title: "Departure and Arrival Support", description: "Pre-departure briefing, arrival tips, and continued support once you land in Finland." },
    ],
    gallery: [
      "/images/german.png",
      "/images/german.png",
      "/images/german.png",
      "/images/german.png",
      "/images/german.png",
      "/images/german.png",
    ],
    sidebar: {
      heading: "Ready to Move to Finland?",
      testimonial: {
        name: "Chioma Adeyemi",
        visa: "Student Visa · Finland",
        quote: "DLS found me a fully funded master's program in Helsinki. I could not have done this without them.",
      },
    },
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    flag: "🇨🇭",
    heroTagline: "World-renowned education, political stability, and a high standard of living",
    heroImage: "/images/swiss.png",
    whyTitle: "Precision, Excellence, and Global Opportunity",
    whyBody: [
      "Switzerland is home to some of the most prestigious universities in the world, including ETH Zurich, consistently ranked in the global top 10. Swiss institutions are known for research excellence, innovation, and strong industry partnerships that give graduates a direct route into top-tier careers.",
      "With four national languages, a highly internationalized economy, and one of the best living standards in the world, Switzerland offers an exceptional environment for African students and professionals ready to invest in their future.",
    ],
    programs: [
      { emoji: "🎓", title: "Study Abroad" },
      { emoji: "🤝", title: "Vocational Training" },
      { emoji: "👨‍👩‍👧", title: "Family Reunification" },
    ],
    requirements: [
      "Valid international passport",
      "University admission letter from a Swiss institution",
      "Language proficiency certificate (German, French, or English depending on institution)",
      "Proof of financial means (CHF required per academic year)",
      "Health insurance valid in Switzerland",
      "Completed student visa application",
    ],
    language: {
      heading: "Language Preparation with DLS",
      body: "Switzerland has four official languages: German, French, Italian, and Romansh. We offer certified German and French courses from A1 to C1 to prepare you for your Swiss university application and visa requirements.",
      levels: ["A1 - Starter", "A2 - Elementary", "B1 - Intermediate", "B2 - Upper Intermediate", "C1 - Advanced"],
      ctaLabel: "Enquire About Language Classes",
    },
    roadmap: [
      { step: 1, title: "Initial Consultation", description: "We assess your goals and identify the right Swiss institution and program for your profile." },
      { step: 2, title: "Language Training", description: "Complete your German or French course with DLS to the required proficiency level." },
      { step: 3, title: "University Application", description: "We guide you through Swiss university applications and securing your admission letter." },
      { step: 4, title: "Document Preparation", description: "We assist with gathering, translating, and certifying all required documents." },
      { step: 5, title: "Visa Application Support", description: "We prepare your Swiss student visa application and coach you for the embassy appointment." },
      { step: 6, title: "Departure and Arrival Support", description: "Pre-departure briefing, arrival tips, and continued support after you arrive in Switzerland." },
    ],
    gallery: [
      "/images/uk.png",
      "/images/uk.png",
      "/images/uk.png",
      "/images/uk.png",
      "/images/uk.png",
      "/images/uk.png",
    ],
    sidebar: {
      heading: "Ready to Move to Switzerland?",
      testimonial: {
        name: "Noah Garcia",
        visa: "Student Visa · Switzerland",
        quote: "I was thrilled when my student visa for Switzerland was approved on my first try!",
      },
    },
  },
  {
    slug: "denmark",
    name: "Denmark",
    flag: "🇩🇰",
    heroTagline: "One of the world's happiest nations with top universities and a welcoming culture",
    heroImage: "/images/Denmark.png",
    whyTitle: "Happiness, Innovation, and Academic Excellence",
    whyBody: [
      "Denmark consistently tops global rankings for happiness, quality of life, and work-life balance. Danish universities are internationally recognized for their research output and their emphasis on independent thinking and collaborative learning.",
      "With a growing number of English-taught programs, a strong welfare state, and a welcoming attitude toward international students, Denmark is an increasingly attractive destination for Africans looking to build a life in Scandinavia.",
    ],
    programs: [
      { emoji: "🎓", title: "Study Abroad" },
      { emoji: "🌐", title: "Voluntary Service" },
      { emoji: "👨‍👩‍👧", title: "Family Reunification" },
    ],
    requirements: [
      "Valid international passport",
      "University admission letter from a Danish institution",
      "English proficiency certificate (IELTS or equivalent)",
      "Proof of financial means (as required by SIRI)",
      "Health insurance documentation",
      "Completed residence permit application",
    ],
    language: {
      heading: "English and Danish Preparation with DLS",
      body: "Most Danish university programs at the master's level are taught in English. We offer IELTS preparation and introductory Danish language courses to help you integrate after arrival.",
      levels: ["IELTS Preparation", "Academic English", "Danish A1 - Starter", "Danish A2 - Elementary"],
      ctaLabel: "Enquire About English Classes",
    },
    roadmap: [
      { step: 1, title: "Initial Consultation", description: "We review your background and identify the right Danish university and program for you." },
      { step: 2, title: "Language Preparation", description: "Prepare for IELTS or English proficiency tests required by Danish institutions." },
      { step: 3, title: "University Application", description: "We assist with applications through optagelse.dk and direct university portals." },
      { step: 4, title: "Document Preparation", description: "We help gather, translate, and certify all required documents." },
      { step: 5, title: "Residence Permit Application", description: "We prepare your Danish residence permit application through SIRI." },
      { step: 6, title: "Departure and Arrival Support", description: "Pre-departure briefing, arrival tips, and continued support once you land in Denmark." },
    ],
    gallery: [
      "/images/france.png",
      "/images/france.png",
      "/images/france.png",
      "/images/france.png",
      "/images/france.png",
      "/images/france.png",
    ],
    sidebar: {
      heading: "Ready to Move to Denmark?",
      testimonial: {
        name: "Ethan White",
        visa: "Student Visa · Denmark",
        quote: "I was ecstatic when my student visa for Denmark was granted on my first attempt!",
      },
    },
  },
  {
    slug: "portugal",
    name: "Portugal",
    flag: "🇵🇹",
    heroTagline: "Affordable living, warm climate, and a growing tech and startup scene",
    heroImage: "/images/Portugal.png",
    whyTitle: "Europe's Most Accessible Gateway",
    whyBody: [
      "Portugal has emerged as one of the most attractive destinations in Europe for international students and professionals. With a low cost of living relative to Western Europe, a warm climate, and a welcoming population, Portugal offers an exceptional quality of life.",
      "Portuguese universities are increasingly investing in English-taught programs, and the country's growing tech and startup ecosystem in Lisbon and Porto is creating exciting career opportunities for internationally trained graduates.",
    ],
    programs: [
      { emoji: "🎓", title: "Study Abroad" },
      { emoji: "🌐", title: "Voluntary Service" },
      { emoji: "👨‍👩‍👧", title: "Family Reunification" },
    ],
    requirements: [
      "Valid international passport",
      "University admission letter from a Portuguese institution",
      "Portuguese or English proficiency certificate",
      "Proof of financial means",
      "Health insurance coverage",
      "Completed student visa (Visto de Estudo) application",
    ],
    language: {
      heading: "Learn Portuguese with DLS",
      body: "We offer certified European Portuguese language courses from A1 to B2. Our instructors help you reach the level required for your Portuguese university or visa application.",
      levels: ["A1 - Starter", "A2 - Elementary", "B1 - Intermediate", "B2 - Upper Intermediate"],
      ctaLabel: "Enquire About Portuguese Classes",
    },
    roadmap: [
      { step: 1, title: "Initial Consultation", description: "We assess your goals and identify the right Portuguese institution and program for you." },
      { step: 2, title: "Language Training", description: "Complete your Portuguese course with DLS to meet the required proficiency level." },
      { step: 3, title: "University Application", description: "We guide you through the Portuguese university application process." },
      { step: 4, title: "Document Preparation", description: "We help gather, translate, and certify all required documents for your visa application." },
      { step: 5, title: "Visa Application Support", description: "We prepare your student visa application and coach you for the Portuguese consulate process." },
      { step: 6, title: "Departure and Arrival Support", description: "Pre-departure briefing, arrival tips, and continued support once you land in Portugal." },
    ],
    gallery: [
      "/images/spain.png",
      "/images/spain.png",
      "/images/spain.png",
      "/images/spain.png",
      "/images/spain.png",
      "/images/spain.png",
    ],
    sidebar: {
      heading: "Ready to Move to Portugal?",
      testimonial: {
        name: "Ava Lee",
        visa: "Student Visa · Portugal",
        quote: "I was so excited when my student visa for Portugal got approved. DLS made it happen.",
      },
    },
  },
];

export function getCountryBySlug(slug: string): CountryData | undefined {
  return countriesData.find((c) => c.slug === slug);
}