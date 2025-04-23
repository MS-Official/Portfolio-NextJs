import { getTotalWorkingExperiences } from "@/lib/utils";
import { Experience, Project } from "@/types";

export const domainPath = "https://kelvinyou.vercel.app";

export const experiences: Experience[] = [
  {
    title: "Freelance Software Engineer | Full-Stack Web Developer",
    company: "Self-Employed",
    companyUrl: "",
    location: "Remote",
    type: "Freelance",
    startDate: "2024-08-28",
    endDate: undefined,
    description: "Designed and developed dynamic, scalable web applications and backend services for various clients.",
    responsibilities: [
      "Designed and developed dynamic, scalable web applications using React.js, Next.js, and Node.js.",
      "Built and optimized RESTful APIs and backend services with Node.js, Express.js, and MongoDB.",
      "Integrated Firebase for real-time database management, authentication, and cloud storage solutions.",
      "Created responsive, user-friendly interfaces with Tailwind CSS, Bootstrap, and modern UI/UX practices.",
      "Deployed and maintained full-stack applications, ensuring high performance, security, and scalability.",
      "Worked with clients to understand project requirements, provide technical solutions, and deliver high-quality products.",
      "Managed project timelines, version control (Git), and collaborated in agile development environments."
    ],
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS", "Bootstrap", "Git"],
    logo: "",
    projects: []
  },
  {
    title: "Digital Marketing and Content Creator",
    company: "Capital Link International Holdings",
    companyUrl: "",
    location: "Colombo, Western Province, Sri Lanka",
    type: "Full-time",
    startDate: "2025-02-26",
    endDate: undefined,
    description: "Managed digital branding and social media content to boost company presence online.",
    responsibilities: [
      "Handled brand marketing and digital strategy.",
      "Created and posted engaging content on social media platforms.",
      "Contributed to digital campaigns and performance tracking."
    ],
    skills: ["Digital Marketing", "Content Creation", "Social Media", "Branding"],
    logo: "",
    projects: []
  },
  {
    title: "Software Engineer Intern",
    company: "CDAZZDEV (Ceylon Dazzling Dev Holding PVT LTD)",
    companyUrl: "",
    location: "Remote",
    type: "Internship",
    startDate: "2023-09-28",
    endDate: "2024-03-28",
    description: "Contributed to software development and data extraction solutions while collaborating with a dynamic engineering team.",
    responsibilities: [
      "Gained hands-on experience in designing and developing innovative software solutions.",
      "Developed and implemented web scraping solutions using Python to extract and analyze data efficiently.",
      "Collaborated with a dynamic team to solve real-world technical challenges and enhance system performance.",
      "Worked on coding, debugging, and optimizing applications to improve efficiency and scalability.",
      "Contributed to various projects, applying problem-solving skills and modern development practices.",
      "Strengthened expertise in software engineering principles, agile methodologies, and industry best practices."
    ],
    skills: ["Python", "Web Scraping", "Problem Solving", "Agile Development", "Software Engineering"],
    logo: "",
    projects: []
  },
  {
    title: "Direct Shipping - self-employed",
    company: "Daraz.lk",
    companyUrl: "https://www.daraz.lk/",
    location: "Sri Lanka",
    type: "Part-time",
    startDate: "2022-12-10",
    endDate: "2025-03-10",
    description: "Managing Daraz direct shipping part-time, overseeing order processing, packaging, and timely dispatch.",
    responsibilities: [
      "Oversaw order processing, packaging, and timely dispatch for Daraz.lk's direct shipping service.",
      "Ensured efficient logistics and excellent customer service to maintain a smooth delivery experience."
    ],
    skills: ["Logistics", "Customer Service", "Time Management", "Order Management"],
    logo: "",
    projects: []
  },
  // {
  //   title: "Marketing Team Lead and Project Manager",
  //   company: "Capital Link International Holdings",
  //   companyUrl: "",
  //   location: "Colombo, Western Province, Sri Lanka",
  //   type: "Full-time",
  //   startDate: "2025-04-01",
  //   endDate: null,
  //   description: "Leading marketing initiatives and project coordination for Capital Link International Holdings.",
  //   responsibilities: [
  //     "Led the marketing team and managed projects to meet business goals.",
  //     "Coordinated cross-functional tasks and ensured timely project delivery.",
  //     "Oversaw planning and execution of marketing campaigns and strategies."
  //   ],
  //   skills: ["Team Leadership", "Project Management", "Marketing Strategy", "Agile Workflow"],
  //   logo: "",
  //   projects: []
  // },
  
];


export const personalInfo = {
  name: "M.F. Abdulla ",
  title: "Software Engineer",
  fullname: "Fayyaz Abdullah",
  contact: {
    email: "abdullahfy28@gmail.com",
    phone: "+94 77 520 6851",
    linkedin: "https://www.linkedin.com/in/fayyazabdulla/",
    github: "https://github.com/FayyazAbdulla",
    personalWebsite: domainPath,
    location: "23/1 Alles road, Negombo - 11500, Sri Lanka",
  },
  profilePicture: "/images/Abd-profile-picture1.jpeg",
  summary:
    `Experienced software engineer with ${getTotalWorkingExperiences(experiences)} of experience in developing and maintaining web applications (includes all internships). Skilled in agile methodologies and CI/CD. I'm an INTP-T, nerd. I'm also passionate about blockchain, investing and chess.`,
};


// Example education data
export const educations = [
  {
    degree: "Bachelor of Software Engineering (Honours)",
    institution: "University of Bedfordshire",
    location: "United Kingdom",
    startDate: "2024-1-8",
    endDate: "2024-9-31",
    description: "Taken core courses for software development such as Data Structure and Algorithm in Java, Human-Computer Interaction, Graphics Programming, Distributed System and Parallel Computing. Exposed to technologies such as Mobile App Development, Blockchain App Development, Data Science through elective courses.",
    achievements: [
      // "Dean's List", 
      // "Best Graduate Research Award", 
      // "AI Research Scholarship"
    ],
    logo: "/images/institutions/UOB2.png",
    cgpa: "#",
    institutionUrl: "https://www.beds.ac.uk/",
    documents: [
      {
        name: "Transcript",
        url: "/pdf/educations/degree-transcript.pdf"
      }
    ],
    techStacks: [
      "JavaScript",
      "Flutter",
      "C++",
      "TypeScript",
      "ReactJS",
      "NextJS",
      "Python",
      "Git",
    ],
  },
  {
    degree: "Diploma in Computer Science",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    location: "New Kandy Road, Malabe, Sri Lanka",
    startDate: "2021-6-10",
    endDate: "2023-12-10",
    description: "Basic Programming Concepts through various languages such as Object-Oriented Programming in Java, C, and Assembly Language. Mathematics courses included Algebra, Calculus, Statistics, Discrete Math.",
    achievements: [
      // "Graduated Summa Cum Laude", 
      // "Innovation Award for Senior Project", 
      // "Coding Competition Winner (2017)"
    ],
    logo: "/images/institutions/UOB2.png",
    cgpa: "3.7439",
    institutionUrl: "https://tarc.edu.my/",
    documents: [
      {
        name: "Transcript",
        url: "/pdf/educations/diploma-transcript.pdf"
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
  }
];

export const projects: Project[] = [
  {
    title: "Personal Website (Portfolio)",
    description: "A personal website built with Next.js, TailwindCSS, and Vercel",
    image: "/images/projects/M-F-Abdulla-Portfolio.png",
    github: "#",
    demo: "#",
    status: "In Progress",
    techStacks: ["Next.js", "TailwindCSS", "Shadcn", "React"],
    date: "2025-3-3",
    blogSlugs: ['personal-website']
  },
  {
    title: "Personal Website (Portfolio - 1)",
    description: "A personal website built with React.js, CSS, and Vercel",
    image: "/images/projects/Abdulla-Portfolio.png",
    github: "https://github.com/FayyazAbdulla/MyPortfolio.git",
    demo: "https://my-portfolio-chi-tawny-44.vercel.app/",
    status: "Maintaining",
    techStacks: ["Next.js", "TailwindCSS", "Shadcn", "React"],
    date: "2025-3-3",
    blogSlugs: ['personal-website']
  },
  {
    title: "FortGrandJewels",
    description: "Real world web app for a Billing Management with Next.js, TailwindCSS, Firebase Admin SDK, NodeJs and more",
    image: "/images/projects/F-G-J-Your-Trusted-Jeweler.png",
    demo: "https://fgj-billing-app.vercel.app/",
    status: "In Progress",
    techStacks: ["Next.js", "TailwindCSS", "React"],
    date: "2025-3-10"
  },
  {
    title: "Zenith Rent Car Billing Management System",
    description: "Real world web app for a Billing Management with React+vite, TailwindCSS, Firebase Admin SDK and more",
    image: "/images/projects/Zenith-Car-Rental-System.png",
    github: "https://github.com/FayyazAbdulla/ZRC.git",
    status: "Completed",
    techStacks: ["Next.js", "TailwindCSS", "React"],
    date: "2024-11-14"
  },
  {
    title: "OMAC Groups Ticketing Agency Website UK ( flyomac.uk )",
    description: "A sleek React and Bootstrap site for OMAC Groups, integrating Firebase and EmailJS for secure ticket booking, inquiries, and instant user support.",
    image: "/images/projects/OMAC-GROUPS-UK.png",
    github: "https://github.com/FayyazAbdulla/flyomac.uk.git",
    status: "Completed",
    techStacks: ["React", "Solidity", "Ethereum"],
    date: "2024-10-5"
  },
  {
    title: "OMAC Groups Ticketing Agency Website",
    description: "A modern React-based website for OMAC Groups with Firebase and EmailJS integration, enabling secure ticket booking, user support, and real-time notifications.",
    image: "/images/projects/OMAC-GROUPS-SL.png",
    github: "https://github.com/FayyazAbdulla/flyomac.lk.git",
    demo: "https://flyomaclk.vercel.app/",
    status: "Completed",
    techStacks: ["React", "Bootstrap", "Firebase", "EmailJS"],
    date: "2024-9-23"
  },
  {
    title: "OMAC Groups CRM System",
    description: "A React+Vite and Firebase-powered CRM for OMAC Groups, streamlining inquiries, client data, and bookings with a secure, responsive interface.",
    image: "/images/projects/OMAC-CRM.png",
    github: "https://github.com/FayyazAbdulla/omacgroups.git",
    demo: "https://omacgroups.vercel.app/",
    status: "Completed",
    techStacks: ["React", "Bootstrap", "Firebase", "EmailJS"],
    date: "2024-8-23"
  },
  {
    title: "Visual Salah Monitor",
    description: "A real-time Salah posture monitoring tool using TensorFlow.js and React, offering instant feedback, posture guides, and Dua explanations to help Muslims, especially new converts, improve their prayers.",
    image: "/images/projects/Visual-Salah-Moniter.png",
    demo: "https://youtu.be/NhK-wT5DTH0?si=diYdkr2w537zpn7v",
    status: "Completed",
    techStacks: ["Python", "TensorFlow", "React.js", "Node.js", "Express.js", "Flask", "Computer Vision"],
    date: "2024-2-21"
  },
  {
    title: "Cineplex",
    description: "A web-based Cineplex Management System built with PHP and MySQL, featuring user, movie, and booking management with role-based admin and customer access.",
    image: "/images/projects/CineplexC.png",
    github: "https://github.com/FayyazAbdulla/Cineplex.git",
    status: "Completed",
    techStacks: ["HTML", "CSS", "PHP", "MySQL"],
    date: "2024-5-17"
  },
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
  "languages": ["TypeScript", "JavaScript", "Java", "Go"],
  "frameworks": ["Next.js", "React", "Express", "Node.js", "React Native", "Flutter"],
  "databases": ["PostgreSQL", "MySQL"],
  "tools": ["Git", "Docker", "Postman", "Supabase"],
}