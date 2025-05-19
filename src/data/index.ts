import { getTotalWorkingExperiences } from "@/lib/utils";
import { Experience, Project } from "@/types";

export const domainPath = "https://abd-portfolio-two.vercel.app/";

export const experiences: Experience[] = [
  {
    title: "Software Engineer | Full-Stack Developer",
    company: "Self-Employed",
    companyUrl: "",
    location: "Remote",
    type: "Freelance",
    startDate: "2024-08-28",
    endDate: undefined,
    description: "Designed and developed full-stack web applications using modern technologies and best practices.",
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
    projects: ["SLIIT Cinema", "ShoeLand E-Commerce", "Hospital Management System", "Student Record Management System", "QR-Barcode Generator"]
  },
  {
    title: "Marketing Team Lead & Project Manager | Digital Content Specialist",
    company: "Capital Link International Holdings",
    companyUrl: "https://www.capitallinkintl.com/",
    location: "Colombo, Western Province, Sri Lanka",
    type: "Full-time",
    startDate: "2025-02-01",
    endDate: undefined,
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
    `Motivated and detail-oriented Software Engineer (Undergraduate) with ${getTotalWorkingExperiences(experiences)} of experience in developing full-stack web applications, including internships, trainings and project-based work. Proficient in modern technologies such as Java, JavaScript, Node.js, HTML/CSS, and MongoDB. Experienced in agile development, software architecture, UI/UX design, and cloud-based solutions. Proven ability to manage digital projects, lead marketing initiatives, and create technical content. Passionate about building scalable applications, delivering meaningful user experiences, and continuously learning—I'm a fast learner who thrives in dynamic environments. Also deeply interested in blockchain, investing, and chess. ⁠`,
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
