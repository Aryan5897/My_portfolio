import { Icons } from "@/components/icons";
import { HomeIcon, FileTextIcon } from "lucide-react";

export const DATA = {
  name: "Aryan Kumar",
  initials: "AK",
  url: "https://aryan-product.vercel.app",
  location: "Pune, Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description: [
    "Associate Product Manager specializing in HRMS & B2B SaaS.",
    "I love building products that solve real business problems.",
  ],
  summary:
    "Associate Product Manager (HRMS) with 3+ years of combined experience across product execution, B2B SaaS platforms, and customer-facing solutions. Experienced in owning HRMS modules, translating business requirements into user stories, driving data-backed product improvements, and collaborating cross-functionally to deliver scalable features. Strong in HRMS, biometric integrations, SQL-based analysis, and UAT-driven releases.",
  avatarUrl: "/me.png",
  skills: {
    "Product Management": [
      "Product Discovery",
      "User Stories & Requirements",
      "Feature Prioritization",
      "Roadmapping",
      "Stakeholder Management",
      "Product Lifecycle Management",
      "Customer Development",
      "Competitive Analysis",
      "Go-to-Market Strategy",
    ],
    "Product Analytics & Tools": [
      "SQL",
      "Funnel Analysis",
      "Adoption Metrics",
      "Product KPIs & Dashboards",
      "Data-Driven Decision Making",
      "A/B Testing",
      "User Analytics",
      "JIRA",
      "Confluence",
    ],
       "Product Execution": [
      "Agile/Scrum",
      "Sprint Planning",
      "User Acceptance Testing (UAT)",
      "Release Management",
      "Product Documentation",
      "Client Demos & Training",
      "Bug Triage & Prioritization",
      "Cross-functional Collaboration",
    ],
    "Domain Expertise": [
      "B2B SaaS Platforms",
      "HRMS Systems",
      "Attendance & Leave Management",
      "Payroll Systems",
      "Employee Onboarding",
      "Biometric Integrations",
      "Admin Portals",
      "Multi-tenant Architecture",
    ],
    "Technical Skills": [
      "SQL (MySQL, PostgreSQL)",
      "REST APIs",
      "Postman",
      "HTML/CSS/JavaScript",
      "Chrome DevTools",
      "System Design Basics",
      "Database Design",
      "API Integration",
    ],
    "Machine Learning & AI": [
      "Python",
      "Machine Learning Models",
      "XGBoost",
      "Random Forest",
      "ResNet",
      "VGG",
      "Flask",
      "Data Preprocessing",
      "Model Evaluation",
    ],
    "Development Tools": [
      "Git & Version Control",
      "VS Code",
      "Postman",
      "Chrome DevTools",
      "Debugging Tools",
      "SQL Clients",
      "API Testing Tools",
    ],
    "Soft Skills": [
      "Communication",
      "Problem Solving",
      "Critical Thinking",
      "Team Leadership",
      "Client Management",
      "Presentation Skills",
      "Technical Writing",
      "Conflict Resolution",
    ],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://case-studies-blogs.vercel.app/", icon: FileTextIcon, label: "Case Studies" },
  ],
  contact: {
    email: "aryan.productmngr98@gmail.com",
    tel: "+917004400716",
    social: {
     
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aryan-kumar-87079921b/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:aryan.productmngr98@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "iT Gurus Software",
      href: "https://itgurus.com",
      badges: [],
      location: "Pune, Maharashtra, India",
      title: "Associate Product Manager",
      logoUrl: "/itguru.jpeg",
      start: "December 2023",
      end: "Present",
      description: [
        "Owned and delivered core **HRMS modules** (Employee Onboarding, Attendance, Leave, Admin Controls) for **40+ client organizations**, managing the product lifecycle end to end",
        "Translated HR, payroll, and business needs into **user stories**, functional specs, and acceptance criteria, partnering with engineering and QA to ship reliable releases",
        "Drove customer-led product improvements by analyzing support tickets, HR feedback, and usage data, reducing recurring attendance issues by **25%**",
        "Designed and shipped **UX enhancements** (attendance source indicators, onboarding status visibility), improving HR admin productivity by **30%+** and onboarding completion by **20%**",
        "Owned attendance system logic (multi-source punches, shifts, late/early rules, reconciliation) and improved **biometric integrations**, achieving **99%+ data accuracy** across locations",
        "Used **SQL** and product dashboards to guide data-backed decisions and led **UAT**, production releases, demos, and client training to ensure smooth rollouts and adoption",
      ],
    },
    {
      company: "TwiLearn Edtech",
      href: "https://twilearn.com",
      badges: [],
      location: "Remote",
      title: "Frontend Developer Intern",
      logoUrl: "/twilearn_logo.jpeg",
      start: "August 2023",
      end: "October 2023",
      description: [
        "Developed and optimized responsive web application features using **HTML**, **CSS**, and **JavaScript**",
        "Incorporated continuous user feedback to enhance overall user experience and usability",
        "Collaborated with design and backend teams to implement pixel-perfect UI components",
      ],
    },
    {
      company: "Giganox Software",
      href: "https://giganox.com",
      badges: [],
      location: "Remote",
      title: "UI Developer Intern",
      logoUrl: "/giganox.png",
      start: "April 2023",
      end: "July 2023",
      description: [
        "Contributed to the **UI development** of an ERP project, focusing on user-friendly interfaces and functionality",
        "Implemented innovative solutions to enhance system usability and performance",
        "Worked closely with senior developers to learn best practices in enterprise software development",
      ],
    },
    {
      company: "Jan Sewa Parisad (NGO)",
      href: "",
      badges: [],
      location: "Hazaribag, Jharkhand, India",
      title: "Web Developer",
      logoUrl: "/jansewa.png",
      start: "August 2020",
      end: "August 2021",
      description: [
        "Maintained and enhanced web infrastructure for government projects, ensuring seamless functionality",
        "Provided technical mentorship and updates to live projects, meeting user requirements effectively",
        "Collaborated with government stakeholders to deliver reliable web solutions for public services",
      ],
    },
  ],
  education: [
    {
      school: "Vellore Institute of Technology (VIT)",
      href: "https://vit.ac.in/",
      degree: "Master of Computer Applications (MCA), Information Technology",
      logoUrl: "/VIT.png",
      start: "2021",
      end: "2023",
      score: "CGPA: 8.06/10.0",
    },
    {
      school: "Birla Institute of Technology (BIT)",
      href: "https://www.bitmesra.ac.in/",
      degree: "Bachelor of Computer Applications (BCA), Information Technology",
      logoUrl: "/BIT.jpeg",
      start: "2017",
      end: "2020",
      score: "CGPA: 7.98/10.0",
    },
  ],
  frontendProjects: [],
  caseStudies: [
    {
      title: "Agent.ai: Autonomous AI Agents That Execute Complex Workflows",
      href: "https://case-studies-blogs.vercel.app/blog/agentai-autonomous-workflows",
      dates: "December 27, 2024",
      active: true,
      description:
        "How Agent.ai enables truly autonomous AI agents that can plan, execute, and adapt multi-step workflows without human intervention",
      detailedDescription:
        "Analysis of Agent.ai's approach to creating autonomous AI agents that can execute complex workflows. This case study explores how the platform enables AI agents to plan, execute, and adapt multi-step workflows without human intervention, revolutionizing automation across various industries.",
      features: [
        "Autonomous workflow execution",
        "Multi-step planning capabilities",
        "Adaptive learning mechanisms",
        "Human-in-the-loop safety protocols",
        "Industry-agnostic application framework",
      ],
      techStack: [
        {
          category: "AI & ML",
          items: ["Autonomous Agents", "Machine Learning", "Natural Language Processing"],
        },
        {
          category: "Platform Architecture",
          items: ["Workflow Engine", "API Integration", "Safety Protocols"],
        },
      ],
      technologies: [
        "AI Agents",
        "Machine Learning",
        "Natural Language Processing",
        "Workflow Automation",
        "API Integration",
      ],
      links: [
        { type: "Website", href: "https://case-studies-blogs.vercel.app/blog/agentai-autonomous-workflows" },
      ],
      image: "/agentai-workflows.webp",
      video: "",
    },
    {
      title: "Airbnb's Booking Conversion Optimization: Building Trust in a High-Risk Decision",
      href: "https://case-studies-blogs.vercel.app/blog/airbnb-booking-conversion",
      dates: "December 27, 2024",
      active: true,
      description:
        "How Airbnb transformed search-to-booking conversion through trust signals, transparency, and friction reduction",
      detailedDescription:
        "Deep dive into Airbnb's conversion optimization strategy, focusing on how the company addressed the high-risk nature of booking accommodations. This case study examines the implementation of trust signals, transparent communication, and friction reduction techniques that significantly improved booking conversion rates.",
      features: [
        "Trust signal implementation",
        "Transparent pricing strategies",
        "Friction reduction in booking flow",
        "User-generated content integration",
        "Dynamic personalization algorithms",
      ],
      techStack: [
        {
          category: "Frontend",
          items: ["React", "Next.js", "TypeScript"],
        },
        {
          category: "Analytics",
          items: ["A/B Testing", "Conversion Rate Optimization", "User Behavior Analytics"],
        },
      ],
      technologies: [
        "Conversion Rate Optimization",
        "User Experience Design",
        "A/B Testing",
        "Data Analytics",
        "Trust & Safety",
      ],
      links: [
        { type: "Website", href: "https://case-studies-blogs.vercel.app/blog/airbnb-booking-conversion" },
      ],
      image: "/airbnb-conversion.webp",
      video: "",
    },
    {
      title: "Airbnb's Crisis Roadmap: How to Prioritize When Everything Changes Overnight",
      href: "https://case-studies-blogs.vercel.app/blog/airbnb-roadmap-downturn",
      dates: "December 27, 2024",
      active: true,
      description:
        "Inside Airbnb's product strategy during COVID-19 - a masterclass in crisis roadmapping and adaptive product leadership",
      detailedDescription:
        "Analysis of how Airbnb pivoted its product strategy during the COVID-19 pandemic. This case study explores the decision-making process, feature prioritization, and strategic shifts that allowed Airbnb to survive and eventually thrive during unprecedented market changes.",
      features: [
        "Crisis response strategy",
        "Feature prioritization frameworks",
        "Market adaptation techniques",
        "Customer segment pivoting",
        "Revenue model adjustments",
      ],
      techStack: [
        {
          category: "Product Management",
          items: ["Roadmapping", "Analytics", "A/B Testing"],
        },
        {
          category: "Strategy",
          items: ["Market Analysis", "Customer Research", "Competitive Analysis"],
        },
      ],
      technologies: [
        "Product Strategy",
        "Crisis Management",
        "Market Adaptation",
        "Customer Research",
        "Business Model Innovation",
      ],
      links: [
        { type: "Website", href: "https://case-studies-blogs.vercel.app/blog/airbnb-roadmap-downturn" },
      ],
      image: "/airbnb-downturn.webp",
      video: "",
    },
    {
      title: "Atlassian Intelligence: AI Embedded in Team Workflows",
      href: "https://case-studies-blogs.vercel.app/blog/atlassian-intelligence-ai-workflows",
      dates: "December 27, 2024",
      active: true,
      description:
        "How Atlassian embedded AI directly into Jira, Confluence, and team workflows to accelerate productivity without context switching",
      detailedDescription:
        "Deep dive into Atlassian's approach to integrating AI into existing team workflows. This case study explores how Atlassian embedded AI capabilities directly into Jira, Confluence, and other tools to enhance productivity without disrupting established workflows.",
      features: [
        "AI integration in existing workflows",
        "Context-aware AI assistance",
        "Productivity enhancement without disruption",
        "Seamless AI adoption",
        "Workflow optimization",
      ],
      techStack: [
        {
          category: "AI & ML",
          items: ["Natural Language Processing", "Machine Learning", "Contextual AI"],
        },
        {
          category: "Platform",
          items: ["Jira", "Confluence", "Atlassian Ecosystem"],
        },
      ],
      technologies: [
        "AI Integration",
        "Natural Language Processing",
        "Workflow Automation",
        "Productivity Tools",
        "Contextual AI",
      ],
      links: [
        { type: "Website", href: "https://case-studies-blogs.vercel.app/blog/atlassian-intelligence-ai-workflows" },
      ],
      image: "/atlassian-intelligence.webp",
      video: "",
    },
    {
      title: "Gamma: AI That Designs Beautiful Presentations Instantly",
      href: "https://case-studies-blogs.vercel.app/blog/gamma-ai-presentation-design",
      dates: "December 27, 2024",
      active: true,
      description:
        "How Gamma uses AI to transform ideas into polished presentations without the pain of traditional slide design",
      detailedDescription:
        "Analysis of Gamma's AI-powered presentation platform. This case study explores how Gamma transforms text-based ideas into professionally designed presentations using AI, eliminating the time-consuming process of traditional slide design.",
      features: [
        "AI-powered presentation generation",
        "Text-to-presentation conversion",
        "Automated design optimization",
        "Professional layout generation",
        "Content-to-visual transformation",
      ],
      techStack: [
        {
          category: "AI & ML",
          items: ["Generative AI", "Natural Language Processing", "Computer Vision"],
        },
        {
          category: "Design",
          items: ["Automated Design", "Layout Optimization", "Visual Generation"],
        },
      ],
      technologies: [
        "Generative AI",
        "Presentation Tools",
        "Automated Design",
        "Natural Language Processing",
        "Computer Vision",
      ],
      links: [
        { type: "Website", href: "https://case-studies-blogs.vercel.app/blog/gamma-ai-presentation-design" },
      ],
      image: "/gamma-presentations.webp",
      video: "",
    },
    {
      title: "GitHub Copilot: How AI Became a Developer's Pair Programmer",
      href: "https://case-studies-blogs.vercel.app/blog/github-copilot-ai-pair-programmer",
      dates: "December 27, 2024",
      active: true,
      description:
        "Inside GitHub Copilot's product strategy - from context-aware AI to billion-dollar ARR through developer productivity",
      detailedDescription:
        "Deep analysis of GitHub Copilot's product strategy and journey to billion-dollar ARR. This case study examines how GitHub transformed AI code completion into a product that functions as a developer's pair programmer, increasing productivity and changing how developers work.",
      features: [
        "Context-aware code completion",
        "AI pair programming",
        "Developer productivity enhancement",
        "Code quality improvement",
        "Learning from public code",
      ],
      techStack: [
        {
          category: "AI & ML",
          items: ["OpenAI Codex", "Machine Learning", "Natural Language Processing"],
        },
        {
          category: "Development",
          items: ["VS Code Integration", "IDE Tools", "Code Analysis"],
        },
      ],
      technologies: [
        "AI Code Completion",
        "Developer Tools",
        "Machine Learning",
        "Natural Language Processing",
        "IDE Integration",
      ],
      links: [
        { type: "Website", href: "https://case-studies-blogs.vercel.app/blog/github-copilot-ai-pair-programmer" },
      ],
      image: "/github-copilot.webp",
      video: "",
    },
  ],
  currentlyWorkingOn: {
    title: "HRMS Product Enhancement",
    description: "Leading ongoing enhancements to HRMS platform including advanced attendance analytics, automated compliance reporting, and AI-powered leave prediction to reduce approval bottlenecks and improve employee experience.",
    highlights: [
      "Developing advanced attendance analytics dashboard with real-time insights",
      "Building automated compliance reporting for labor law requirements",
      "Implementing AI-powered leave prediction to optimize workforce planning",
      "Designing mobile-first employee self-service portal",
      "Creating smart notification system to reduce approval delays",
    ],
    technologies: ["Product Management", "HRMS", "Data Analytics", "UX Design", "SQL"],
    github: "",
    status: "In Development",
  },
  projects: [
    {
      title: "Modern Agriculture Prediction System",
      href: "https://github.com/aryankumar",
      dates: "September 2022 - April 2023",
      active: true,
      description:
        "ML-powered agriculture analytics platform for crop yield prediction, plant disease classification, and soil analysis using ensemble models.",
      detailedDescription:
        "A comprehensive machine learning platform designed to support modern agricultural decision-making through predictive analytics. The system leverages multiple ML models including XGBoost, Random Forest, ResNet, and VGG to provide farmers with actionable insights for crop yield optimization, early disease detection, and soil health assessment. Built with Python and Flask, the platform processes environmental data (temperature, humidity, soil conditions) to deliver accurate predictions that help farmers make data-driven decisions, reduce crop losses, and improve overall agricultural productivity.",
      features: [
        "Crop yield prediction using XGBoost and Random Forest ensemble models",
        "Plant disease classification with deep learning (ResNet, VGG) achieving 92%+ accuracy",
        "Soil condition analysis and nutrient deficiency detection",
        "Real-time weather data integration for dynamic predictions",
        "Interactive dashboard for farmers to visualize predictions and recommendations",
        "Historical trend analysis for crop performance over multiple seasons",
        "Mobile-responsive interface for field-level access",
        "Data preprocessing pipeline for handling diverse agricultural datasets",
        "Model performance monitoring and continuous improvement",
        "Export functionality for reports and actionable insights",
      ],
      techStack: [
        {
          category: "Machine Learning",
          items: ["XGBoost", "Random Forest", "ResNet", "VGG", "Scikit-learn"],
        },
        {
          category: "Backend & API",
          items: ["Python 3.8+", "Flask", "RESTful APIs"],
        },
        {
          category: "Data Processing",
          items: ["Pandas", "NumPy", "Data Preprocessing", "Feature Engineering"],
        },
        {
          category: "Deep Learning",
          items: ["TensorFlow", "Keras", "Computer Vision"],
        },
        {
          category: "Frontend",
          items: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        },
      ],
      technologies: [
        "Python",
        "Machine Learning",
        "XGBoost",
        "Random Forest",
        "ResNet",
        "VGG",
        "Flask",
        "TensorFlow",
        "Pandas",
        "NumPy",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  achievements: [
    {
      title: "AIR 42 in DU-ET Exam",
      date: "2021",
      description: "Secured All India Rank 42 in Delhi University Entrance Test (DU-ET) among 1.2 lakh+ applicants",
      icon: "🏆",
    },
    {
      title: "Beyond Performance Award",
      date: "August 2024",
      description: "Recognized for excellent performance and exceptional contributions to HRMS product development at iT Gurus Software",
      icon: "⭐",
    },
    {
      title: "On The Spot Award (2x)",
      date: "May 2024",
      description: "Awarded twice for addressing extremely escalated client issues and delivering critical product fixes under tight deadlines",
      icon: "🎯",
    },
  ],
} as const;
