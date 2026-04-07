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
    description: string;
  }[];
  requirements: {
    label: string;
    detail: string;
  }[];
  language: {
    heading: string;
    body: string;
    levels: string[];
    ctaLabel: string;
  };
  continuousSupport: string;
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
  // ─── GERMANY ──────────────────────────────────────────────────
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    heroTagline: "Europe's largest economy and vocational training powerhouse",
    heroImage: "/images/germany-hero section.png",
    whyTitle: "Discover Opportunities in Germany with Ease",
    whyBody: [
      "Germany is renowned for its world-class education, thriving industries, and structured career pathways. Its strong economy and high quality of life make it a top choice for study, work, and relocation opportunities.",
    ],
    programs: [
      {
        emoji: "🎓",
        title: "Study Abroad Programs",
        description:
          "Explore top universities and courses across Germany, with expert guidance on applications, admissions, and visa processes.",
      },
      {
        emoji: "💼",
        title: "Work & Internship Opportunities",
        description:
          "Gain professional experience through internships or full-time roles in Germany's thriving industries, with support throughout documentation and relocation.",
      },
      {
        emoji: "📋",
        title: "Training & Skill Development Programs",
        description:
          "Enhance your skills with specialized training programs designed to boost your career prospects globally.",
      },
      {
        emoji: "🌐",
        title: "Voluntary Service Programs",
        description:
          "Participate in meaningful volunteer initiatives or cultural exchange programs, gaining international exposure and valuable experience.",
      },
      {
        emoji: "👨‍👩‍👧",
        title: "Family Reunification Support",
        description:
          "Move and settle in Germany with your loved ones, with professional guidance for a smooth, stress-free transition.",
      },
    ],
    requirements: [
      {
        label: "Valid Passport",
        detail: "Ensure your passport is ready for your journey abroad.",
      },
      {
        label: "Visa & Documentation",
        detail: "We guide you through all necessary forms and approvals effortlessly.",
      },
      {
        label: "Educational Credentials",
        detail: "Provide your academic certificates or transcripts for a smooth application process.",
      },
      {
        label: "Language Proficiency",
        detail: "Demonstrate English or German skills based on your chosen program.",
      },
      {
        label: "Health & Insurance",
        detail:
          "Through our partnership with Barmer Health Insurance, we handle your health coverage completely, giving you full protection during your stay.",
      },
    ],
    language: {
      heading: "Learn German with Confidence and Ease",
      body: "Learn German with expert guidance and fully adaptable schedules. Private, weekday, weekend, or customized classes ensure busy professionals, students, and travelers achieve fluency at their own pace.",
      levels: ["A1 - Starter", "A2 - Elementary", "B1 - Intermediate", "B2 - Upper Intermediate", "C1 - Advanced"],
      ctaLabel: "Enquire About German Classes",
    },
    continuousSupport:
      "Our team remains available to provide ongoing support, answering questions and guiding you through your integration, ensuring a confident and comfortable start to your new life in Germany.",
    roadmap: [
      { step: 1, title: "Initial Consultation", description: "We assess your qualifications, goals, and the most suitable program for your profile." },
      { step: 2, title: "Language Training", description: "Begin your German course with DLS. Reach the required level for your visa category." },
      { step: 3, title: "Document Preparation", description: "We guide you through gathering, translating, and certifying all required documents." },
      { step: 4, title: "Application Submission", description: "We assist with your university or employer application and support your visa appointment booking." },
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
        name: "Fatima Adegbaju",
        visa: "Student Visa · Germany",
        quote: "Studying abroad was always my dream, and DLS  made it a reality, even though studying German language was a little bit demanding. Highly recommend them!",
      },
    },
  },

  // ─── FRANCE ───────────────────────────────────────────────────
  {
    slug: "france",
    name: "France",
    flag: "🇫🇷",
    heroTagline: "Experience France: Study, Work, and Thrive",
    heroImage: "/images/france (1).png",
    whyTitle: "Where Culture Meets Academic Excellence",
    whyBody: [
      "France offers world-class education, diverse career opportunities, and a rich cultural heritage. With its high quality of life and global influence, it is an ideal destination for study, work, and relocation.",
    ],
    programs: [
      {
        emoji: "🎓",
        title: "Study Abroad Programs",
        description:
          "Access top universities and programs in France with expert guidance on admissions, documentation, and visa processing.",
      },
      {
        emoji: "💼",
        title: "Work & Internship Opportunities",
        description:
          "Explore career and internship opportunities across France, with full support for applications, permits, and relocation.",
      },
      {
        emoji: "📋",
        title: "Training & Skill Development",
        description:
          "Enhance your career with specialized training programs designed to meet international standards and boost employability.",
      },
      {
        emoji: "🌐",
        title: "Voluntary Service & Cultural Exchange",
        description:
          "Engage in meaningful volunteer programs while experiencing French culture and gaining global exposure.",
      },
      {
        emoji: "👨‍👩‍👧",
        title: "Family Reunification Support",
        description:
          "Reunite with your loved ones in France through a smooth and well-guided relocation process.",
      },
    ],
    requirements: [
      {
        label: "Valid Passport",
        detail: "Ensure your passport is ready for your journey abroad.",
      },
      {
        label: "Visa & Documentation",
        detail: "We guide you through all forms and approvals seamlessly.",
      },
      {
        label: "Educational Credentials",
        detail: "Submit required academic certificates or relevant qualifications.",
      },
      {
        label: "Language Proficiency",
        detail: "Demonstrate English or French language skills based on your program.",
      },
      {
        label: "Health & Insurance",
        detail: "We assist you in securing the required health insurance coverage for your stay in France.",
      },
    ],
    language: {
      heading: "Learn French with Mastery and Fluency",
      body: "We offer flexible French language programs with private, weekday, and weekend classes, tailored to your schedule, perfect for busy professionals, students, and individuals preparing for life in France.",
      levels: ["A1 - Starter", "A2 - Elementary", "B1 - Intermediate", "B2 - Upper Intermediate", "C1 - Advanced"],
      ctaLabel: "Enquire About French Classes",
    },
    continuousSupport:
      "We support your settlement and provide continuous guidance for a smooth and successful experience.",
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
        name: "Micheal B",
        visa: "Student Visa · France",
        quote: "DLS Travel made my volunteer service abroad seamless. From applications to arrival, their team supported me at every step.",
      },
    },
  },

  // ─── AUSTRIA ──────────────────────────────────────────────────
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
      { emoji: "🎓", title: "Study Abroad", description: "Access world-class Austrian universities with full guidance on applications, admissions, and visa processes." },
      { emoji: "🤝", title: "Vocational Training", description: "Gain hands-on professional training in Austria's structured dual education system." },
      { emoji: "🌐", title: "Voluntary Service", description: "Participate in European volunteer programs while experiencing Austrian culture firsthand." },
      { emoji: "👨‍👩‍👧", title: "Family Reunification", description: "Reunite with your loved ones in Austria through a guided, stress-free relocation process." },
    ],
    requirements: [
      { label: "Valid Passport", detail: "Ensure your passport is current and valid for international travel." },
      { label: "German Language Certificate", detail: "B2 minimum required for most Austrian university programs." },
      { label: "University Admission Letter", detail: "A confirmed offer from your chosen Austrian institution." },
      { label: "Proof of Financial Means", detail: "Blocked account or sponsor letter demonstrating sufficient funds." },
      { label: "Health Insurance", detail: "Valid health insurance documentation for the duration of your stay." },
    ],
    language: {
      heading: "Learn German with DLS",
      body: "Austria uses German as its official language. We offer certified German courses from A1 to C1, preparing you for Goethe and OSD exams required for Austrian visa and university applications.",
      levels: ["A1 - Starter", "A2 - Elementary", "B1 - Intermediate", "B2 - Upper Intermediate", "C1 - Advanced"],
      ctaLabel: "Enquire About German Classes",
    },
    continuousSupport:
      "Our team stays by your side after arrival, helping with registration, housing, and integration into Austrian life.",
    roadmap: [
      { step: 1, title: "Initial Consultation", description: "We review your background and identify the right Austrian program or pathway for you." },
      { step: 2, title: "Language Training", description: "Complete your German course with DLS to the level required for your visa type." },
      { step: 3, title: "University Application", description: "We guide you through the Austrian university application process and documentation." },
      { step: 4, title: "Document Preparation", description: "We assist with translation, certification, and compilation of all required documents." },
      { step: 5, title: "Visa Application Support", description: "We prepare and submit your student visa application and coach you for your embassy appointment." },
      { step: 6, title: "Departure and Arrival Support", description: "Pre-departure briefing, accommodation tips, and continued check-ins once you arrive." },
    ],
    gallery: ["/images/austria.png", "/images/austria.png", "/images/austria.png", "/images/austria.png", "/images/austria.png", "/images/austria.png"],
    sidebar: {
      heading: "Ready to Move to Austria?",
      testimonial: {
        name: "Olivia Martinez",
        visa: "Student Visa · Austria",
        quote: "I was over the moon when my student visa for Austria was granted on the first attempt!",
      },
    },
  },

  // ─── CANADA ───────────────────────────────────────────────────
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
      { emoji: "🎓", title: "Study Abroad", description: "Access globally ranked Canadian universities with comprehensive admissions and visa support." },
      { emoji: "🤝", title: "Vocational Training", description: "Pursue practical training programs aligned with Canada's high-demand industries." },
      { emoji: "👨‍👩‍👧", title: "Family Reunification", description: "Reunite with your loved ones in Canada through a clear and well-supported process." },
    ],
    requirements: [
      { label: "Valid Passport", detail: "A valid international passport ready for your journey." },
      { label: "Letter of Acceptance", detail: "From a Designated Learning Institution (DLI) in Canada." },
      { label: "Proof of Financial Means", detail: "Evidence of sufficient funds to cover tuition and living expenses." },
      { label: "Statement of Purpose", detail: "A clear statement outlining your academic or career goals." },
      { label: "English Proficiency", detail: "IELTS or equivalent certificate meeting your institution's minimum requirements." },
    ],
    language: {
      heading: "English and French Preparation with DLS",
      body: "Canada is bilingual. We offer IELTS preparation and English communication courses to ensure you meet the language requirements for your chosen Canadian institution.",
      levels: ["IELTS Preparation", "English Communication", "Academic Writing", "French A1 to B1"],
      ctaLabel: "Enquire About English Classes",
    },
    continuousSupport:
      "We provide continued guidance and support to help you settle smoothly into Canadian life after arrival.",
    roadmap: [
      { step: 1, title: "Initial Consultation", description: "We review your academic background and identify the right Canadian institution and program for you." },
      { step: 2, title: "Language Preparation", description: "Prepare for IELTS or required English proficiency tests with our certified instructors." },
      { step: 3, title: "Institution Application", description: "We guide you through applying to Designated Learning Institutions and securing your acceptance letter." },
      { step: 4, title: "Document Preparation", description: "We assist with compiling, translating, and certifying all required documents." },
      { step: 5, title: "Study Permit Application", description: "We prepare and submit your Canadian study permit application with the strongest possible profile." },
      { step: 6, title: "Departure and Arrival Support", description: "Pre-departure briefing, arrival tips, accommodation guidance, and continued support after landing." },
    ],
    gallery: ["/images/canada.png", "/images/canada.png", "/images/canada.png", "/images/canada.png", "/images/canada.png", "/images/canada.png"],
    sidebar: {
      heading: "Ready to Move to Canada?",
      testimonial: {
        name: "James Carter",
        visa: "Study Permit · Canada",
        quote: "DLS made the entire Canadian application process feel simple and achievable. I'm now studying in Toronto!",
      },
    },
  },

  // ─── NETHERLANDS ──────────────────────────────────────────────
  {
    slug: "netherlands",
    name: "Netherlands",
    flag: "🇳🇱",
    heroTagline: "Embrace Your Future in the Netherlands Today",
    heroImage: "/images/Netherlands (1).png",
    whyTitle: "Europe's Most International Study Destination",
    whyBody: [
      "The Netherlands offers innovative education, strong career opportunities, and a high quality of life. Known for its progressive environment and global outlook, it's ideal for study, work, and relocation.",
    ],
    programs: [
      {
        emoji: "🎓",
        title: "Study Abroad Programs",
        description:
          "Gain access to globally recognized universities with comprehensive support for admissions, documentation, and visa applications.",
      },
      {
        emoji: "💼",
        title: "Work & Internship Opportunities",
        description:
          "Pursue career and internship experiences in dynamic, international, and innovative work environments.",
      },
      {
        emoji: "📋",
        title: "Training & Skill Development",
        description:
          "Advance your expertise through specialized programs designed to meet global industry standards.",
      },
      {
        emoji: "🌐",
        title: "Voluntary Service & Cultural Exchange",
        description:
          "Engage in meaningful initiatives while immersing yourself in Dutch culture and lifestyle.",
      },
      {
        emoji: "👨‍👩‍👧",
        title: "Family Reunification Support",
        description:
          "Relocate with confidence and reunite with your loved ones through a guided, stress-free process.",
      },
    ],
    requirements: [
      {
        label: "Valid Passport",
        detail: "Ensure your passport is current and ready for international travel.",
      },
      {
        label: "Visa & Documentation",
        detail: "Receive expert guidance through all necessary applications and approvals.",
      },
      {
        label: "Educational Credentials",
        detail: "Submit the required academic or professional qualifications with ease.",
      },
      {
        label: "Language Proficiency",
        detail: "English is widely accepted, while some programs may require proficiency in Dutch.",
      },
      {
        label: "Health & Insurance",
        detail: "Get assistance securing suitable health insurance coverage for your stay.",
      },
    ],
    language: {
      heading: "Master Dutch with Ease and Comfort",
      body: "We offer flexible Dutch and English language support with private, weekday, and weekend classes, tailored to your schedule, perfect for busy professionals and students.",
      levels: ["IELTS Preparation", "Academic English", "Dutch A1 - Starter", "Dutch A2 - Elementary"],
      ctaLabel: "Enquire About Language Classes",
    },
    continuousSupport:
      "Ongoing support to ensure a smooth integration into Dutch life.",
    roadmap: [
      { step: 1, title: "Initial Consultation", description: "We assess your academic background and identify the right Dutch program for your goals." },
      { step: 2, title: "Language Preparation", description: "Prepare for IELTS or English proficiency tests required by Dutch institutions." },
      { step: 3, title: "University Application", description: "We guide you through Studielink and direct university applications." },
      { step: 4, title: "Document Preparation", description: "We assist with gathering, translating, and certifying all required documents." },
      { step: 5, title: "MVV and Residence Permit", description: "We prepare your MVV application and guide you through the IND residence permit process." },
      { step: 6, title: "Departure and Arrival Support", description: "Pre-departure briefing, arrival tips, and continued support once you land in the Netherlands." },
    ],
    gallery: ["/images/netherlands.png", "/images/netherlands.png", "/images/netherlands.png", "/images/netherlands.png", "/images/netherlands.png", "/images/netherlands.png"],
    sidebar: {
      heading: "Ready to Move to the Netherlands?",
      testimonial: {
        name: "Linda A",
        visa: "Voluntary Service · Netherlands",
        quote: "The international training program I attended was life-changing, and DLS Travel ensured every detail, from travel to accommodation, was perfect.",
      },
    },
  },

  // ─── BELGIUM ──────────────────────────────────────────────────
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
      { emoji: "🎓", title: "Study Abroad", description: "Access top Belgian universities with full guidance on admissions, documentation, and visa processes." },
      { emoji: "🌐", title: "Voluntary Service", description: "Join recognized voluntary programs while experiencing Belgium's rich multilingual culture." },
      { emoji: "👨‍👩‍👧", title: "Family Reunification", description: "Reunite with loved ones in Belgium through a professionally guided relocation process." },
    ],
    requirements: [
      { label: "Valid Passport", detail: "Current passport ready for international travel." },
      { label: "University Admission Letter", detail: "Confirmed offer from a Belgian institution." },
      { label: "Proof of Financial Means", detail: "Evidence of sufficient funds for tuition and living costs." },
      { label: "Language Proficiency", detail: "French or Dutch certificate depending on your institution and region." },
      { label: "Health Insurance", detail: "Valid health insurance documentation for your stay in Belgium." },
    ],
    language: {
      heading: "Learn French or Dutch with DLS",
      body: "Belgium has two major language communities. We offer certified courses in both French and Dutch, from A1 to C1, tailored to your target region and institution.",
      levels: ["A1 - Starter", "A2 - Elementary", "B1 - Intermediate", "B2 - Upper Intermediate", "C1 - Advanced"],
      ctaLabel: "Enquire About Language Classes",
    },
    continuousSupport:
      "We provide city orientation and continued guidance to help you settle confidently into Belgian life.",
    roadmap: [
      { step: 1, title: "Initial Consultation", description: "We identify the right Belgian university, region, and language track for your goals." },
      { step: 2, title: "Language Training", description: "Complete your French or Dutch course with DLS to meet the required proficiency level." },
      { step: 3, title: "University Application", description: "We assist with your application to Belgian universities and securing your admission letter." },
      { step: 4, title: "Document Preparation", description: "We help gather, translate, and certify all required documents for your visa application." },
      { step: 5, title: "Visa Application Support", description: "We prepare and submit your Type D student visa application and prepare you for the embassy process." },
      { step: 6, title: "Departure and Arrival Support", description: "Pre-departure briefing, city orientation tips, and continued support once you arrive." },
    ],
    gallery: ["/images/belgium.png", "/images/belgium.png", "/images/belgium.png", "/images/belgium.png", "/images/belgium.png", "/images/belgium.png"],
    sidebar: {
      heading: "Ready to Move to Belgium?",
      testimonial: {
        name: "Johnson Adewale",
        visa: "Student Visa · Belgium",
        quote: "When my student visa for Belgium was approved I was completely overwhelmed with joy. DLS delivered.",
      },
    },
  },

  // ─── SWEDEN ───────────────────────────────────────────────────
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
      { emoji: "🎓", title: "Study Abroad", description: "Access top Swedish universities with full guidance on admissions, documentation, and visa processes." },
      { emoji: "🌐", title: "Voluntary Service", description: "Join recognized volunteer programs while experiencing Sweden's progressive culture." },
      { emoji: "👨‍👩‍👧", title: "Family Reunification", description: "Reunite with loved ones in Sweden through a professionally guided relocation process." },
    ],
    requirements: [
      { label: "Valid Passport", detail: "Current passport ready for international travel." },
      { label: "University Admission Letter", detail: "From a Swedish institution." },
      { label: "English Proficiency Certificate", detail: "IELTS or equivalent meeting your program requirements." },
      { label: "Proof of Financial Means", detail: "Minimum SEK as required by Migrationsverket." },
      { label: "Health Insurance", detail: "Coverage for the first 12 months of your stay." },
    ],
    language: {
      heading: "English and Swedish Preparation with DLS",
      body: "Most Swedish university programs are taught in English. We offer IELTS preparation and introductory Swedish courses to help you settle in and integrate into Swedish society.",
      levels: ["IELTS Preparation", "Academic English", "Swedish A1 - Starter", "Swedish A2 - Elementary"],
      ctaLabel: "Enquire About English Classes",
    },
    continuousSupport:
      "We provide ongoing guidance and support to ensure a smooth and comfortable transition into Swedish life.",
    roadmap: [
      { step: 1, title: "Initial Consultation", description: "We assess your academic background and identify the right Swedish university and program." },
      { step: 2, title: "Language Preparation", description: "Prepare for IELTS or required English tests with our certified instructors." },
      { step: 3, title: "University Application", description: "We guide you through Universityadmissions.se and direct program applications." },
      { step: 4, title: "Document Preparation", description: "We assist with gathering, translating, and certifying all required documents." },
      { step: 5, title: "Residence Permit Application", description: "We prepare your Swedish residence permit application through Migrationsverket." },
      { step: 6, title: "Departure and Arrival Support", description: "Pre-departure briefing, arrival tips, and continued support once you land in Sweden." },
    ],
    gallery: ["/images/sweden.png", "/images/sweden.png", "/images/sweden.png", "/images/sweden.png", "/images/sweden.png", "/images/sweden.png"],
    sidebar: {
      heading: "Ready to Move to Sweden?",
      testimonial: {
        name: "Amara Osei",
        visa: "Student Visa · Sweden",
        quote: "DLS handled every step of my Swedish university application. I arrived in Stockholm with zero stress.",
      },
    },
  },

  // ─── SPAIN ────────────────────────────────────────────────────
  {
    slug: "spain",
    name: "Spain",
    flag: "🇪🇸",
    heroTagline: "Live the vibrant Spanish dream",
    heroImage: "/images/Spain (1).png",
    whyTitle: "Sun, Culture, and a Gateway to Europe",
    whyBody: [
      "Spain offers a vibrant lifestyle, expanding career opportunities, and a rich cultural heritage. With its warm climate and dynamic cities, it stands as an exceptional destination for study, professional advancement, and personal growth.",
    ],
    programs: [
      {
        emoji: "🎓",
        title: "Study Abroad Programs",
        description:
          "Access reputable universities and programs with full guidance on admissions, documentation, and visa processes.",
      },
      {
        emoji: "💼",
        title: "Work & Internship Opportunities",
        description:
          "Explore career paths and internships in Spain's growing sectors with complete relocation support.",
      },
      {
        emoji: "📋",
        title: "Training & Skill Development",
        description:
          "Boost your career with internationally recognized training programs tailored to your goals.",
      },
      {
        emoji: "🌐",
        title: "Voluntary Service & Cultural Exchange",
        description:
          "Engage in impactful volunteer programs while experiencing Spain's rich culture and lifestyle.",
      },
      {
        emoji: "👨‍👩‍👧",
        title: "Family Reunification Support",
        description:
          "Reunite with loved ones in Spain through a smooth and well-supported relocation process.",
      },
    ],
    requirements: [
      {
        label: "Valid Passport",
        detail: "Ensure your passport is ready for your international journey.",
      },
      {
        label: "Visa & Documentation",
        detail: "We guide you through all application steps and approvals seamlessly.",
      },
      {
        label: "Educational Credentials",
        detail: "Submit relevant academic or professional qualifications.",
      },
      {
        label: "Language Proficiency",
        detail: "Basic Spanish or English may be required depending on your program.",
      },
      {
        label: "Health & Insurance",
        detail: "We assist you in securing the required health insurance for your stay in Spain.",
      },
    ],
    language: {
      heading: "Learn Spanish with Clarity and Comfort",
      body: "We provide flexible Spanish language programs with private, weekday, and weekend classes, designed to fit your schedule, perfect for busy professionals, students, and travelers alike.",
      levels: ["A1 - Starter", "A2 - Elementary", "B1 - Intermediate", "B2 - Upper Intermediate", "C1 - Advanced"],
      ctaLabel: "Enquire About Spanish Classes",
    },
    continuousSupport:
      "Enjoy ongoing support throughout your stay in Spain. We assist with housing, registration, and integration into Spanish life.",
    roadmap: [
      { step: 1, title: "Initial Consultation", description: "We assess your goals and identify the best Spanish university or program for your profile." },
      { step: 2, title: "Language Training", description: "Complete your Spanish course with DLS and reach the required level for your visa category." },
      { step: 3, title: "University Application", description: "We assist with applications to Spanish institutions and securing your admission letter." },
      { step: 4, title: "Document Preparation", description: "We help you gather, translate, and certify all required documents." },
      { step: 5, title: "Visa Application Support", description: "We prepare your student visa application and coach you for the Spanish embassy appointment." },
      { step: 6, title: "Departure and Arrival Support", description: "Pre-departure briefing, arrival tips, and continued support after you land in Spain." },
    ],
    gallery: ["/images/spain.png", "/images/spain.png", "/images/spain.png", "/images/spain.png", "/images/spain.png", "/images/spain.png"],
    sidebar: {
      heading: "Ready to Move to Spain?",
      testimonial: {
        name: "Grace F",
        visa: "Voluntary Service · Spain",
        quote: "I gained new skills overseas thanks to DLS’s impeccable support. They handled everything and allowed me to focus fully on learning.",
      },
    },
  },

  // ─── FINLAND ──────────────────────────────────────────────────
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
      { emoji: "🎓", title: "Study Abroad", description: "Access world-class Finnish universities with full guidance on admissions, documentation, and visa processes." },
      { emoji: "🌐", title: "Voluntary Service", description: "Join recognized voluntary programs and experience Finland's innovative and inclusive culture." },
      { emoji: "👨‍👩‍👧", title: "Family Reunification", description: "Reunite with loved ones in Finland through a guided, stress-free relocation process." },
    ],
    requirements: [
      { label: "Valid Passport", detail: "Current passport ready for international travel." },
      { label: "University Admission Letter", detail: "From a Finnish institution." },
      { label: "English Proficiency Certificate", detail: "IELTS or equivalent as required by your institution." },
      { label: "Proof of Financial Means", detail: "As required by the Finnish Immigration Service." },
      { label: "Health Insurance", detail: "Valid health insurance for the duration of your stay." },
    ],
    language: {
      heading: "English and Finnish Preparation with DLS",
      body: "Many Finnish programs are taught in English at the master's level. We offer IELTS preparation and introductory Finnish language courses to support your integration into Finnish society.",
      levels: ["IELTS Preparation", "Academic English", "Finnish A1 - Starter", "Finnish A2 - Elementary"],
      ctaLabel: "Enquire About English Classes",
    },
    continuousSupport:
      "We provide ongoing support to help you settle confidently into Finnish life after arrival.",
    roadmap: [
      { step: 1, title: "Initial Consultation", description: "We review your background and identify the right Finnish university and program for you." },
      { step: 2, title: "Language Preparation", description: "Prepare for IELTS or English proficiency tests required by Finnish institutions." },
      { step: 3, title: "University Application", description: "We guide you through studyinfo.fi and direct university applications." },
      { step: 4, title: "Document Preparation", description: "We assist with gathering, translating, and certifying all required documents." },
      { step: 5, title: "Residence Permit Application", description: "We prepare your Finnish residence permit application through Migri." },
      { step: 6, title: "Departure and Arrival Support", description: "Pre-departure briefing, arrival tips, and continued support once you land in Finland." },
    ],
    gallery: ["/images/german.png", "/images/german.png", "/images/german.png", "/images/german.png", "/images/german.png", "/images/german.png"],
    sidebar: {
      heading: "Ready to Move to Finland?",
      testimonial: {
        name: "Chioma Adeyemi",
        visa: "Student Visa · Finland",
        quote: "DLS found me a fully funded master's program in Helsinki. I could not have done this without them.",
      },
    },
  },

  // ─── SWITZERLAND ──────────────────────────────────────────────
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
      { emoji: "🎓", title: "Study Abroad", description: "Access some of the world's most prestigious universities with full admissions and visa support." },
      { emoji: "🤝", title: "Vocational Training", description: "Gain professional training in Switzerland's highly structured and industry-connected dual system." },
      { emoji: "👨‍👩‍👧", title: "Family Reunification", description: "Reunite with your loved ones in Switzerland through a carefully guided relocation process." },
    ],
    requirements: [
      { label: "Valid Passport", detail: "Current passport ready for international travel." },
      { label: "University Admission Letter", detail: "From a Swiss institution." },
      { label: "Language Proficiency Certificate", detail: "German, French, or English depending on your institution." },
      { label: "Proof of Financial Means", detail: "Sufficient CHF per academic year as required." },
      { label: "Health Insurance", detail: "Valid Swiss health insurance for the duration of your stay." },
    ],
    language: {
      heading: "Language Preparation with DLS",
      body: "Switzerland has four official languages: German, French, Italian, and Romansh. We offer certified German and French courses from A1 to C1 to prepare you for your Swiss university application and visa requirements.",
      levels: ["A1 - Starter", "A2 - Elementary", "B1 - Intermediate", "B2 - Upper Intermediate", "C1 - Advanced"],
      ctaLabel: "Enquire About Language Classes",
    },
    continuousSupport:
      "We provide ongoing guidance to help you integrate confidently into Swiss life and professional culture.",
    roadmap: [
      { step: 1, title: "Initial Consultation", description: "We assess your goals and identify the right Swiss institution and program for your profile." },
      { step: 2, title: "Language Training", description: "Complete your German or French course with DLS to the required proficiency level." },
      { step: 3, title: "University Application", description: "We guide you through Swiss university applications and securing your admission letter." },
      { step: 4, title: "Document Preparation", description: "We assist with gathering, translating, and certifying all required documents." },
      { step: 5, title: "Visa Application Support", description: "We prepare your Swiss student visa application and coach you for the embassy appointment." },
      { step: 6, title: "Departure and Arrival Support", description: "Pre-departure briefing, arrival tips, and continued support after you arrive in Switzerland." },
    ],
    gallery: ["/images/uk.png", "/images/uk.png", "/images/uk.png", "/images/uk.png", "/images/uk.png", "/images/uk.png"],
    sidebar: {
      heading: "Ready to Move to Switzerland?",
      testimonial: {
        name: "Noah Garcia",
        visa: "Student Visa · Switzerland",
        quote: "I was thrilled when my student visa for Switzerland was approved on my first try!",
      },
    },
  },

  // ─── DENMARK ──────────────────────────────────────────────────
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
      { emoji: "🎓", title: "Study Abroad", description: "Access top Danish universities with full guidance on admissions, documentation, and visa processes." },
      { emoji: "🌐", title: "Voluntary Service", description: "Join recognized volunteer programs and experience Denmark's progressive and welcoming culture." },
      { emoji: "👨‍👩‍👧", title: "Family Reunification", description: "Reunite with loved ones in Denmark through a guided, stress-free relocation process." },
    ],
    requirements: [
      { label: "Valid Passport", detail: "Current passport ready for international travel." },
      { label: "University Admission Letter", detail: "From a Danish institution." },
      { label: "English Proficiency Certificate", detail: "IELTS or equivalent as required." },
      { label: "Proof of Financial Means", detail: "As required by SIRI." },
      { label: "Health Insurance", detail: "Valid health insurance documentation for your stay." },
    ],
    language: {
      heading: "English and Danish Preparation with DLS",
      body: "Most Danish university programs at the master's level are taught in English. We offer IELTS preparation and introductory Danish language courses to help you integrate after arrival.",
      levels: ["IELTS Preparation", "Academic English", "Danish A1 - Starter", "Danish A2 - Elementary"],
      ctaLabel: "Enquire About English Classes",
    },
    continuousSupport:
      "We provide ongoing support to ensure a smooth and comfortable integration into Danish life.",
    roadmap: [
      { step: 1, title: "Initial Consultation", description: "We review your background and identify the right Danish university and program for you." },
      { step: 2, title: "Language Preparation", description: "Prepare for IELTS or English proficiency tests required by Danish institutions." },
      { step: 3, title: "University Application", description: "We assist with applications through optagelse.dk and direct university portals." },
      { step: 4, title: "Document Preparation", description: "We help gather, translate, and certify all required documents." },
      { step: 5, title: "Residence Permit Application", description: "We prepare your Danish residence permit application through SIRI." },
      { step: 6, title: "Departure and Arrival Support", description: "Pre-departure briefing, arrival tips, and continued support once you land in Denmark." },
    ],
    gallery: ["/images/france.png", "/images/france.png", "/images/france.png", "/images/france.png", "/images/france.png", "/images/france.png"],
    sidebar: {
      heading: "Ready to Move to Denmark?",
      testimonial: {
        name: "Ethan White",
        visa: "Student Visa · Denmark",
        quote: "I was ecstatic when my student visa for Denmark was granted on my first attempt!",
      },
    },
  },

  // ─── PORTUGAL ─────────────────────────────────────────────────
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
      { emoji: "🎓", title: "Study Abroad", description: "Access Portuguese universities with full guidance on admissions, documentation, and visa processes." },
      { emoji: "🌐", title: "Voluntary Service", description: "Join recognized volunteer programs while experiencing Portugal's warm and welcoming culture." },
      { emoji: "👨‍👩‍👧", title: "Family Reunification", description: "Reunite with loved ones in Portugal through a smooth and professionally guided process." },
    ],
    requirements: [
      { label: "Valid Passport", detail: "Current passport ready for international travel." },
      { label: "University Admission Letter", detail: "From a Portuguese institution." },
      { label: "Language Proficiency", detail: "Portuguese or English certificate as required by your program." },
      { label: "Proof of Financial Means", detail: "Evidence of sufficient funds for your stay." },
      { label: "Health Insurance", detail: "Valid health insurance coverage for your stay in Portugal." },
    ],
    language: {
      heading: "Learn Portuguese with DLS",
      body: "We offer certified European Portuguese language courses from A1 to B2. Our instructors help you reach the level required for your Portuguese university or visa application.",
      levels: ["A1 - Starter", "A2 - Elementary", "B1 - Intermediate", "B2 - Upper Intermediate"],
      ctaLabel: "Enquire About Portuguese Classes",
    },
    continuousSupport:
      "We provide ongoing support to help you settle smoothly into Portuguese life after arrival.",
    roadmap: [
      { step: 1, title: "Initial Consultation", description: "We assess your goals and identify the right Portuguese institution and program for you." },
      { step: 2, title: "Language Training", description: "Complete your Portuguese course with DLS to meet the required proficiency level." },
      { step: 3, title: "University Application", description: "We guide you through the Portuguese university application process." },
      { step: 4, title: "Document Preparation", description: "We help gather, translate, and certify all required documents for your visa application." },
      { step: 5, title: "Visa Application Support", description: "We prepare your student visa application and coach you for the Portuguese consulate process." },
      { step: 6, title: "Departure and Arrival Support", description: "Pre-departure briefing, arrival tips, and continued support once you land in Portugal." },
    ],
    gallery: ["/images/spain.png", "/images/spain.png", "/images/spain.png", "/images/spain.png", "/images/spain.png", "/images/spain.png"],
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