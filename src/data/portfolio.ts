export const personal = {
  name: "Mahargi Anugerahwan Pamungkas",
  nickname: "Mahargi",
  title: "Mobile Developer",
  subtitle: "Flutter Specialist · Clean Architecture · NLP Researcher",
  email: "yuumap83@gmail.com",
  phone: "+62 812-3314-4229",
  location: "Sidoarjo, Jawa Timur, Indonesia",
  linkedin: "https://www.linkedin.com/in/mahargi/",
  github: "https://github.com/Mahargip",
  about: `I'm a Mobile Developer and Informatics Engineering student specialising in Flutter. I build
performant, user-centric mobile applications following Clean Architecture principles, with a strong
focus on real-time features, API integration, and state management. My academic research in NLP
and transformer-based AI — submitted to JOIV — adds a unique machine-learning dimension to my
engineering background. I thrive in Agile environments, adapting quickly while staying proactive
and self-organised.`,
  photo: "/images/profile.jpg",
  aboutPhoto: "/images/about.jpg",
};

export const experiences = [
  {
    company: "PT Hayago Informatika",
    location: "Surabaya, Jawa Timur",
    role: "Mobile Developer",
    period: "Jul 2025 – Jan 2026",
    description:
      "AI-IoT Industrial Solution Provider specialising in automation and industrial digitalisation — AITOMA platform.",
    bullets: [
      "Proposed and developed a reusable Flutter UI Kits library, improving maintainability across future mobile applications.",
      "Built a real-time machine condition monitoring app integrated with proprietary IoT sensors.",
      "Implemented AI-based anomaly detection features for early fault identification and proactive maintenance.",
    ],
  },
  {
    company: "PT Mitra Informatika",
    location: "Surabaya, Jawa Timur",
    role: "Mobile Developer (Intern)",
    period: "Jan 2025 – Jun 2025",
    description:
      "Leading IT solution provider in Surabaya offering system integration, infrastructure, and application development.",
    bullets: [
      "Developed Flutter applications following Clean Architecture for modularity and scalability.",
      "Built a real-time chat app using WebSockets with typing indicators and delivery status.",
      "Implemented Riverpod state management and Firebase Cloud Messaging (FCM) for push notifications.",
      "Applied Modular Monolith Architecture for large-scale application growth.",
      "Integrated REST APIs and collaborated using Git branching strategies in an Agile workflow.",
    ],
  },
  {
    company: "Laras App",
    location: "Surabaya, Jawa Timur",
    role: "Mobile Developer",
    period: "Apr 2024 – Dec 2024",
    description:
      "Mental health self-care app featuring meditation guides, audio relaxation, and journaling tools.",
    bullets: [
      "Integrated third-party APIs, boosting user engagement by 20% via real-time notifications.",
      "Optimised code and reduced load times, improving overall app performance by 15%.",
      "Resolved 70%+ of reported bugs within two weeks of release, improving stability and reviews.",
      "Collected user feedback and drove iterative improvements, raising customer satisfaction by 25%.",
    ],
  },
];

export const projects = [
  {
    title: "AITOMA Machine Monitoring App",
    description:
      "Real-time industrial machine condition monitoring mobile app integrated with proprietary IoT sensors. Features live operational tracking, diagnostics, and AI-based anomaly detection for early fault identification.",
    tech: ["Flutter", "Dart", "IoT Integration", "AI Analytics", "REST API"],
    image: "/images/projects/aitoma.png",
    github: null as string | null,
    demo: null as string | null,
    featured: true,
  },
  {
    title: "Flutter UI Kits",
    description:
      "A comprehensive reusable Flutter UI component library designed to enforce design consistency and drastically accelerate future app development within the company.",
    tech: ["Flutter", "Dart", "Clean Architecture", "UI/UX Design", "Component Library"],
    image: "",
    github: null as string | null,
    demo: null as string | null,
    featured: true,
  },
  {
    title: "Laras — Mental Health App",
    description:
      "Self-care mobile application promoting mental well-being with meditation guides, audio relaxation sessions, and a journaling system. Achieved a 25% boost in user satisfaction through iterative, feedback-driven development.",
    tech: ["Flutter", "Dart", "Firebase", "REST API", "State Management"],
    image: "/images/projects/laras.png",
    github: null as string | null,
    demo: null as string | null,
    featured: true,
  },
  {
    title: "NKRI Sambung",
    description:
      "Full-featured chat app built with WebSockets and WebRTC, supporting real-time messaging, typing indicators, message delivery status, and push notifications via Firebase Cloud Messaging.",
    tech: ["Flutter", "WebSockets", "Firebase FCM", "Riverpod", "REST API"],
    image: "/images/projects/nkri-sambung.png",
    github: null as string | null,
    demo: null as string | null,
    featured: false,
  },
];

export const research = {
  title:
    "Cross-Domain Fake News Detection via Task-Adaptive Pre-Training (TAPT) with BERT, RoBERTa, and DeBERTa",
  journal: "JOIV — Journal of Innovation in Vocational Technology",
  year: "2026",
  description:
    "Investigated continuation training as a TAPT strategy for cross-domain fake news detection under severe domain shift conditions. Evaluated three transformer architectures across two large-scale public datasets.",
  highlights: [
    "BERT Full Fine-Tuning: 98.99% Weighted-F1 on source domain (ISOT)",
    "DeBERTa: 96.89% Macro-F1 after target-domain adaptation (WELFake)",
    "Quantified cross-domain degradation and recovery via TAPT",
    "Compared 7 model configurations including TF-IDF baseline classifiers",
  ],
  datasets: ["ISOT: 44,898 samples", "WELFake: 72,134 samples"],
  tech: ["Python", "PyTorch", "HuggingFace Transformers", "BERT", "RoBERTa", "DeBERTa", "Scikit-learn", "Google Colab"],
  doi: null as string | null,
};

export const education = [
  {
    institution: "Politeknik Elektronika Negeri Surabaya (PENS)",
    location: "Surabaya, Jawa Timur",
    degree: "Bachelor of Informatics Engineering",
    period: "Aug 2022 – Jul 2026 (Expected)",
  },
  {
    institution: "SMA Antartika Sidoarjo",
    location: "Sidoarjo, Jawa Timur",
    degree: "Senior High School — Mathematics & Science",
    period: "Jun 2019 – Jun 2022",
  },
];

export const skills: Record<string, string[]> = {
  Mobile: ["Flutter", "Dart", "Firebase", "FCM", "Riverpod", "BLoC"],
  Frontend: ["HTML", "CSS", "JavaScript", "Responsive UI"],
  Backend: ["Laravel", "REST API", "Java", "WebSockets"],
  Architecture: ["Clean Architecture", "Modular Monolith", "OOP", "SOLID"],
  "AI / ML": ["BERT", "RoBERTa", "DeBERTa", "HuggingFace", "PyTorch", "Scikit-learn", "TF-IDF"],
  "Tools & DevOps": ["Git", "GitHub", "Agile / Scrum", "Google Colab", "Quality Assurance"],
};

export const certifications = [
  { name: "TOEFL ITP", issuer: "Educational Testing Service", year: "2026" },
  { name: "EF SET English Certificate", issuer: "EF Standard English Test", year: "2026" },
];
