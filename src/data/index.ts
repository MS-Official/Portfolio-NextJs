import { getTotalWorkingExperiences } from "@/lib/utils";
import { Experience, Project } from "@/types";

export const domainPath = "https://portfolio-ms-lac.vercel.app/p/";

export const experiences: Experience[] = [
  {
  title: "Intern | Software Developer | Frontend & Backend Engineer",
  company: "Heaven'sCode (PVT) LTD",
  companyUrl: "https://theheavenscode.com/",
  location: "Hybrid (Sri Lanka)",
  type: "Internship",
  startDate: "2025-10-06",
  endDate: undefined,
  description: "Contributed to multiple client and internal software projects under Heaven’sCode, focusing on performance, scalability, and modern web design.",
  responsibilities: [
    "Developed responsive and SEO-optimized websites using Angular and Tailwind CSS.",
    "Built RESTful APIs and integrated backend logic using Node.js, SpringBoot, and Postgresql using Docker.",
    "Implemented CI/CD pipelines using Azure Devops and deployed projects on Firebase, Vercel, and cPanel servers.",
    "Collaborated closely with UI/UX designers to ensure visually appealing and user-friendly interfaces.",
    "Worked on real estate, e-commerce, and portfolio-based projects with optimized page load speeds and high Lighthouse scores."
  ],
  skills: [
    "Angular", "Node.js", "SpringBoot", "Docker", "JHipster", "Postgresql", "Azure Devops",
    "Tailwind CSS", "Bootstrap", "Git", "CI/CD", "GitHub", "FHipster"
  ],
  logo: "data:image/jpeg;base64,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"
  },
  {
    title: "Software Engineer | Full-Stack Developer ( Acadamic Projects )",
    company: "Team CodeMe",
    companyUrl: "",
    location: "Remote",
    type: "Project-Based",
    startDate: "2024-08-28",
    endDate: undefined,
    description: "Designed and developed full-stack web applications using modern technologies and best practices for Academic projects.",
    responsibilities: [
      "Built scalable applications using Java, JavaScript (ES6), Node.js, HTML5, CSS3, React.js, and PHP.",
      "Developed RESTful APIs and backend systems with Node.js, Firebase, MongoDB, and MySQL.",
      "Created responsive front-end designs with Bootstrap, jQuery, and reusable UI components.",
      "Deployed apps via Firebase Hosting and managed version control with Git and GitHub.",
      "Managed tasks using Agile/Scrum with Trello, Asana, and Microsoft Project.",
      "Delivered projects like SLIIT Cinema, ShoeLand E-Commerce, Hospital Management System, and more."
    ],
    skills: ["Java", "JavaScript", "Node.js", "PHP", "React.js", "Firebase", "MongoDB", "MySQL", "HTML", "CSS", "Git", "Agile", "REST APIs"],
    logo: "",
    projects: []
  },
  {
    title: "Marketing Team Lead & Project Manager | Digital Content Specialist",
    company: "Capital Link International Holdings",
    companyUrl: "https://www.capitallinkintl.com/",
    location: "Colombo, Western Province, Sri Lanka",
    type: "Full-time",
    startDate: "2025-02-01",
    endDate: "2025-05-31",
    description: "Led digital marketing initiatives and managed project execution to enhance the company’s online presence and branding.",
    responsibilities: [
      "Directed and executed multiple marketing campaigns across digital platforms.",
      "Created engaging content to improve user interaction and brand awareness.",
      "Managed team workflows using Asana, Notion, and Microsoft Project.",
      "Analyzed campaign performance and adjusted strategies to meet KPIs."
    ],
    skills: ["Digital Marketing", "Content Creation", "Marketing Strategy", "Project Management", "Social Media Advertising"],
    logo: "",
    projects: []
  },
  {
    title: "Marketing Trainee - Digital Marketing",
    company: "Institute of Certified Management Accountants of Sri Lanka (CMA)",
    companyUrl: "https://www.cma-srilanka.org/",
    location: "Colombo, Sri Lanka",
    type: "Internship",
    startDate: "2024-12-01",
    endDate: "2025-01-31",
    description: "Worked on digital branding and social media strategies to support CMA Sri Lanka's engagement and visibility goals.",
    responsibilities: [
      "Managed and scheduled content across social platforms.",
      "Contributed to digital campaign planning and performance analysis."
    ],
    skills: ["Social Media Marketing", "Content Strategy", "Campaign Optimization"],
    logo: "",
    projects: []
  },
  {
    title: "Digital Outreach Executive",
    company: "LimitOne Lanka (Pvt) Ltd.",
    companyUrl: "https://limitone.io/",
    location: "Sri Lanka",
    type: "Contract",
    startDate: "2024-08-01",
    endDate: "2025-03-31",
    description: "Executed digital marketing strategies to grow audience reach and increase customer interaction.",
    responsibilities: [
      "Implemented social engagement strategies and improved brand visibility.",
      "Used digital tools to track and enhance marketing performance."
    ],
    skills: ["Digital Outreach", "Marketing Tools", "Brand Engagement"],
    logo: "",
    projects: []
  },
  {
    title: "Senior Recruitment Officer",
    company: "Rogers International (Pvt) Limited",
    companyUrl: "https://www.rogers-group.org/",
    location: "Sri Lanka",
    type: "Full-time",
    startDate: "2022-11-01",
    endDate: "2023-01-31",
    description: "Led end-to-end recruitment operations and collaborated with internal teams to meet staffing needs.",
    responsibilities: [
      "Managed job postings, candidate screening, and interview scheduling.",
      "Improved onboarding experience and collaborated with stakeholders."
    ],
    skills: ["Recruitment", "Onboarding", "Talent Acquisition", "Communication"],
    logo: "",
    projects: []
  },
  {
    title: "Direct Shipping - Self-Employed",
    company: "Daraz.lk",
    companyUrl: "https://www.daraz.lk/",
    location: "Sri Lanka",
    type: "Part-time",
    startDate: "2022-12-10",
    endDate: "2025-03-10",
    description: "Managed order fulfillment and logistics operations for Daraz.lk’s direct shipping services.",
    responsibilities: [
      "Processed and packaged customer orders with accuracy and timeliness.",
      "Ensured high customer satisfaction through efficient communication and delivery tracking."
    ],
    skills: ["Logistics", "Order Management", "Customer Service", "Time Management"],
    logo: "",
    projects: []
  },
  {
    title: "Team Member | Brand Marketing (Back Office)",
    company: "AIESEC in SLIIT",
    companyUrl: "https://aiesec.lk/",
    location: "Sri Lanka",
    type: "Volunteer",
    startDate: "2021-12-01",
    endDate: "2022-04-30",
    description: "Supported AIESEC's marketing campaigns with design and coordination tasks.",
    responsibilities: [
      "Created promotional content aligned with brand strategy.",
      "Assisted in organizing and managing marketing campaign resources."
    ],
    skills: ["Design", "Marketing Coordination", "Team Collaboration"],
    logo: "",
    projects: []
  }
];


export const personalInfo = {
  name: "M.M.M. Shurafa ",
  title: "Software Engineer",
  fullname: "Mahdiya Shurafa",
  contact: {
    email: "smahdiya.official@gmail.com",
    phone: "+94 74 047 2228",
    linkedin: "https://www.linkedin.com/in/mahdiya-shurafa/",
    github: "https://github.com/MS-Official/",
    personalWebsite: domainPath,
    location: "41/6 Perakumba Mawatha, Kolonnawa - 10600, Sri Lanka",
  },
  profilePicture: "/images/MS-headshot-b.png",
  summary:
    `Motivated and detail-oriented Software Engineer (Undergraduate) with ${getTotalWorkingExperiences(experiences)} of experience in Working, including internships, trainings and project-based work. Proficient in modern technologies such as Java, JavaScript, Node.js, HTML/CSS, and MongoDB. Experienced in agile development, software architecture, UI/UX design, and cloud-based solutions. Proven ability to manage digital projects, lead marketing initiatives, and create technical content. Passionate about building scalable applications, delivering meaningful user experiences, and continuously learning—I'm a fast learner who thrives in dynamic environments. Also deeply interested in blockchain, investing, and chess. ⁠`,
};


// Example education data
export const educations = [
  // {
  //   degree: "Bachelor of Science in Software Engineering & Computer Science",
  //   institution: "University of Bedfordshire",
  //   location: "United Kingdom",
  //   startDate: "2026-1-8",
  //   endDate: "2027-1-8",
  //   description: "Taken core courses for software development such as Data Structure and Algorithm in Java, Human-Computer Interaction, Graphics Programming, Distributed System and Parallel Computing. Exposed to technologies such as Mobile App Development, Blockchain App Development, Data Science through elective courses.",
  //   achievements: [
  //     // "Dean's List", 
  //     // "Best Graduate Research Award", 
  //     // "AI Research Scholarship"
  //   ],
  //   logo: "/images/institutions/UOB2.png",
  //   cgpa: "#",
  //   institutionUrl: "https://www.beds.ac.uk/",
  //   documents: [
  //     {
  //       name: "Transcript",
  //       url: "/pdf/educations/bsc_degree_certificate.pdf",
  //       Turl: "/pdf/educations/bsc_degree_transcript.pdf"
  //     }
  //   ],
  //   techStacks: [
  //     "JavaScript",
  //     "Flutter",
  //     "C++",
  //     "TypeScript",
  //     "ReactJS",
  //     "NextJS",
  //     "Python",
  //     "Git",
  //   ],
  // },
  {
    degree: "Higher National Diploma in Computer Science and Software Engineering",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    location: "New Kandy Road, Malabe, Sri Lanka",
    startDate: "2024-1-10",
    endDate: "2025-12-10",
    description: "Basic Programming Concepts through various languages such as Object-Oriented Programming in Java, C++, and C Language. Mathematics courses included Algebra, Calculus, Statistics, Discrete Math.",
    achievements: [
      // "Graduated Summa Cum Laude", 
      // "Innovation Award for Senior Project", 
      // "Coding Competition Winner (2017)"
    ],
    logo: "/images/institutions/New_SCU_Logo.png",
    cgpa: "3.7439",
    institutionUrl: "https://www.sliit.lk/",
    documents: [
      {
        name: "Transcript",
        url: "#",
        Turl: "#"
      }
    ],
    techStacks: [
      "C lang",
      "Java",
      "C++",
      "html",
      "css",
      "JavaScript",
      "Linux",
      "Git"
    ],
  },
  {
    degree: "Foundation Certificate in Information Technology",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    location: "New Kandy Road, Malabe, Sri Lanka",
    startDate: "2023-01-01",
    endDate: "2023-12-31",
    description: "Completed foundation program covering essential topics in IT and software engineering, laying the groundwork for higher education in computing and programming",
    achievements: [
      // "Graduated Summa Cum Laude", 
      // "Innovation Award for Senior Project", 
      // "Coding Competition Winner (2017)"
    ],
    logo: "/images/institutions/New_SCU_Logo.png",
    cgpa: "#",
    institutionUrl: "https://www.sliit.lk/",
    documents: [
      {
        name: "Transcript",
        url: "#", // *** certificate pending
        Turl: "/pdf/educations/Foundation Transcript.pdf"
      }
    ],
     techStacks: ["C++", "Java", "HTML", "CSS", "JavaScript", "Git"],
  }
];
 
export const projects: Project[] = [ 
  {
    title: "ShoeLand E-Commerce",
    description: "A full-stack responsive e-commerce website featuring product listings, dynamic cart, user authentication, and responsive design. Built with PHP, JavaScript, and MySQL.",
    image: "/images/projects/ShoeLand.jpeg",
    github: "https://github.com/MS-Official/ShoeLand-eCommerce",
    demo: "",
    status: "Completed",
    techStacks: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
    date: "2024-04-01",
    blogSlugs: ["shoeland-ecommerce"]
  },
  {
    title: "Hospital Management System (Visionary Vibes)",
    description: "Group project by Visionary Vibes: A Java-based desktop application aimed at digitizing MediCare Plus's hospital operations. Features include appointment scheduling, outpatient service management, and pharmacy handling. Developed using Swing UI and MySQL with CRUD operations, SMS/email notifications, and a responsive workflow to streamline administration.",
    image: "/images/projects/hospital-management.jpeg",
    github: "https://github.com/MS-Official/Visionary-Vibes",
    demo: "",
    status: "Completed",
    techStacks: ["Java", "Swing", "MySQL", "HTML", "CSS", "JavaScript"],
    date: "2023-11-01",
    blogSlugs: ["hospital-management-system"]
  },
  {
    title: "Student Record Management System (SRMS)",
    description: "Web-based app using Firebase and REST APIs to automate student record handling. Features a responsive UI and real-time database updates for efficient administration.",
    image: "/images/projects/SRMS.jpeg",
    github: "https://github.com/MS-Official/SRM-System-ETF-G1",
    demo: "",
    status: "Completed",
    techStacks: ["Firebase", "REST API", "JavaScript", "HTML", "CSS"],
    date: "2024-02-01",
    blogSlugs: ["student-record-management"]
  },
  {
    title: "SLIIT Cinema",
    description: "Homepage for a fictional movie platform showcasing dynamic front-end features built with HTML, CSS, JavaScript, and jQuery. Demonstrates teamwork and front-end design skills.",
    image: "/images/projects/SLIITCinema.jpeg",
    github: "https://github.com/MS-Official/SLIIT-Cinema",
    demo: "",
    status: "Completed",
    techStacks: ["HTML", "CSS", "JavaScript", "jQuery"],
    date: "2023-10-01",
    blogSlugs: ["sliit-cinema"]
  },
  {
    title: "QR-Barcode Generator",
    description: "A Next.js application that lets users create and download QR codes and digital business cards. Links can include websites, contact info, and social profiles.",
    image: "/images/projects/QR-Barcode-Generator.png",
    github: "https://github.com/MS-Official/qr-br-generator",
    demo: "",
    status: "Completed",
    techStacks: ["Next.js", "React.js", "JavaScript", "HTML", "CSS"],
    date: "2025-01-15",
    blogSlugs: ["qr-barcode-generator"]
  },
  {
    title: "Team Codeme Platform",
    description: "Community platform by and for tech enthusiasts. Encourages collaboration, project building, innovation, and technical growth. Core values include creativity, code sharing, and empowerment.",
    image: "/images/projects/Team-CodeMe.png",
    github: "https://github.com/MS-Official/team-codeme",
    demo: "",
    status: "In Progress",
    techStacks: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    date: "2025-04-01",
    blogSlugs: ["team-codeme"]
  },
  {
    title: "Barcode Generator",
    description: "A Python-based desktop app using PyQt5 for generating Code128 barcodes. Includes live preview and export options. Ideal for inventory and product tagging.",
    image: "/images/projects/BarCode_Gen.jpeg",
    github: "https://github.com/MS-Official/barcode-generator",
    demo: "",
    status: "Completed",
    techStacks: ["Python", "PyQt5"],
    date: "2025-03-20",
    blogSlugs: ["barcode-generator"]
  },
  {
    title: "QR Code Generator",
    description: "Customizable QR code generator using Python and the `qrcode` library. Supports encoding URLs, text, and contact info with styling and error correction.",
    image: "/images/projects/placeholder.png",
    github: "https://github.com/MS-Official/qr-code-generator",
    demo: "",
    status: "Completed",
    techStacks: ["Python", "qrcode", "Pillow"],
    date: "2025-03-22",
    blogSlugs: ["qr-code-generator"]
  },
  {
    title: "ClassTask7_Nature",
    description: "Implements a web app where data is stored in a JSON file and managed using PHP. The interface, built with HTML, CSS, Bootstrap, and jQuery, supports viewing, fetching, and adding records via AJAX. Demonstrates client-server communication and JSON-based data handling.",
    image: "/images/projects/ClassTask7_Nature.jpeg",
    github: "https://github.com/MS-Official/ClassTask7_Nature",
    demo: "",
    status: "Completed",
    techStacks: ["PHP", "JSON", "HTML", "CSS", "Bootstrap", "jQuery", "AJAX"],
    date: "2024-03-01",
    blogSlugs: ["class-task7-nature"]
  },
  {
    title: "2D Mario Game (Mini Project)",
    description: "A fun 2D Mario-style game built to demonstrate object-oriented programming and interactive graphics using Java.",
    image: "/images/projects/placeholder.png",
    github: "https://github.com/MS-Official/2D-mario-game",
    demo: "",
    status: "Completed",
    techStacks: ["Java"],
    date: "2023-09-01",
    blogSlugs: ["2d-mario-game"]
  },
  {
    title: "First Portfolio Website",
    description: "A simple, clean portfolio site to showcase early projects and learning journey. Built using HTML, CSS, and a touch of JavaScript.",
    image: "/images/projects/placeholder.png",
    github: "https://github.com/MS-Official/first-portfolio",
    demo: "",
    status: "Completed",
    techStacks: ["HTML", "CSS", "JavaScript"],
    date: "2023-06-01",
    blogSlugs: ["first-portfolio"]
  }
];

export const certifications = [
  {
    name: 'Front-End Development with React.js & JavaScript July 2023',
    link: '#',
    issuingOrganization: 'dewTown',
    issueDate: '2023-6-20',
    pdf: `${domainPath}assets/pdf/#`
  },
  {
    name: '7-day Bootcamp on Python & Artificial Intelligence',
    link: `#`,
    issuingOrganization: 'The Digital Adda',
    issueDate: '2023-12-11',
    pdf: `${domainPath}assets/pdf/#`
  },
  {
    name: 'Back-End Development with JavaScript, Node.js & Express.js June 2023',
    link: `#`,
    issuingOrganization: 'The Digital Adda',
    issueDate: '2023-12-12',
    pdf: `${domainPath}assets/pdf/#`
  },
  {
    name: 'Google Certification for Git, GitHub & Version Control',
    link: `#`,
    issuingOrganization: 'The Digital Adda',
    issueDate: '2023-12-12',
    pdf: `${domainPath}assets/pdf/#`
  },
  {
    name: 'Microsoft Certification for Web Development using JavaScript, Node.js & Express Bootcamp',
    link: `#`,
    issuingOrganization: 'The Digital Adda',
    issueDate: '2023-12-12',
    pdf: `${domainPath}assets/pdf/#`
  },

  {
    name: 'DevTown Certification for Python',
    link: `#`,
    issuingOrganization: 'The Digital Adda',
    issueDate: '2023-12-12',
    pdf: `${domainPath}assets/pdf/#`
  },
  {
    name: 'Certification for completing 7-day Bootcamp with DevTown on HotStar Clone using HTML, CSS, and JavaScript',
    link: `#`,
    issuingOrganization: 'The Digital Adda',
    issueDate: '2023-12-12',
    pdf: `${domainPath}assets/pdf/#`
  },

  // {
  //   name: 'Rust Workshop 2024 - Parallel Programming',
  //   link: 'https://credsverse.com/credentials/af37b752-6f6d-4f6d-9368-34f56c1242e5',
  //   issuingOrganization: '',
  //   issueDate: '2024-4-25',
  //   pdf: `${domainPath}assets/pdf/rust-workshop-2024-parallel-programming.pdf`
  // }
]



export const skills = {
  languages: ["TypeScript", "JavaScript", "Java", "Go", "Python"],
  frameworks: ["Next.js", "React", "Express", "Node.js", "React Native", "Flutter"],
  databases: ["PostgreSQL", "MySQL"],
  tools: ["Git", "Docker", "Postman", "Supabase", "Google Colab", "Hugging Face Transformers", "PyTorch"]
};
