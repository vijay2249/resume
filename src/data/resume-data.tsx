import {
  Amdocs,
  JohnDeere,
} from "@/images/logos";
import { GitHubIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Vijay Chowdary Nelakurthi",
  initials: "VCN",
  location: "Kanigiri, AP, India",
  locationLink: "https://www.google.com/maps/place/Kanigiri", 
  summary: "Software Developer with experience in Automation Testing and Developing Microservices",
  about:[
    "As a Software Developer, I have worked with developing microservice applications that integrate with kakfa and connect with Couchbase DB", 
    "As a Automation Test Engineer I have also created framework for UI automation using TestNG, Selenium, Playwright.",
  ],
  avatarUrl: "https://avatars.githubusercontent.com/u/65058877",
  personalWebsiteUrl: "https://vijay2249.github.io",
  contact: {
    email: "vijaychowdary2249@protonmail.com",
    tel: false,
    social: [
      {
        userName: "Vijay2249",
        name: "GitHub",
        url: "https://github.com/vijay2249",
        icon: GitHubIcon,
      },
      {
        userName: "VijayCh0710",
        name: "X",
        url: "https://x.com/VijayCh0710",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "National Institute of Technology, Warangal",
      degree: "B.Tech in Computer Science and Engineering",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Amdocs",
      link: "https://www.amdocs.com/",
      title: "Software Developer",
      logo: Amdocs,
      badges: [],
      start: "July 2023",
      end: "Ongoing",
      description: [
        "Worked on UI automation from scratch using Playwright, TestNG, SpringBoot frameworks in Java",
        "Worked on Backend automation using TestNG, JUnit, SpringBoot framework in Java",
        "Created jenkins pipelines in groovy language to run these automation scripts daily on multiple environments to do sanity",
        "Working on large-scale projects with a microservices architecture, utilizing technologies like Kubernetes for container orchestration, Couchbase as a NoSQL database, and Java with the Spring Boot framework for back-end development",
      ]
    },
    {
      company: "John Deere",
      link: "https://www.deere.com/en/index.html", 
      badges: ["Intern"],
      title: "Automation Test Intern",
      logo: JohnDeere,
      start: "May 2022",
      end: "July 2022",
      description: [
        "Build automation framework from scratch in Python using Pywinauto framework for custom windows application.",
        "Technologies: Python",
      ]
    },
  ],
  skills: [
    "JavaScript",
    "ReactJs",
    "Java",
    "SpringBoot",
    "Linux",
    "Git",
    "Docker",
    "Python",
    "Selenium",
    "Playwright",
    "TestNG",
    "JUnit",
    "Postman",
    "C++"
  ],
  projects: [
    {
      title: "MaxiMock",
      description: "AddOn functionalities on mapping stub responses in an wiremock setup environment",
      techStack: [
        "Java",
        "Maven"
      ],
      link: {
        label: "Mocks",
        href: "https://github.com/wedonttrack/maximock"
      }
    },
    {
      title: "BoringNotes",
      description: "My place where I share my notes and concepts that I learned along the way with folks like me.",
      techStack: [
        "JavaScript",
        "Java",
        "Docker",
        "Azure Concepts"
      ],
      link: {
        label: "",
        href: "https://github.com/vijay2249/BoringNotes"
      }
    },
    {
      title: "Playground",
      description: "All repos with the name playground as suffix are separate repos to play and learn the concepts of languages and frameworks.",
      techStack: [
        "Java",
        "JavaScript",
        "Docker",
        "SpringBoot",
        "ReactJS",
        "Nodejs",
        "MongoDB"
      ],
      link: {
        label: "",
        href: "https://github.com/vijay2249?tab=repositories&q=playground"
      }
    },
    {
      title: "Security Basics",
      description: "Basic scripts to display some security attacks learned while preparing for CompTIA certification",
      techStack: ["Python", "C"],
      link: {
        label: "",
        href: "https://github.com/vijay2249/random-stuff"
      }
    },
    {
      title: "Stress relief",
      description: "Got bored in the first day of new semester and had to clean system for lot of copies of previous semester assignments and projects and notes, written this script to do the task for me",
      techStack: ['Python'],
      link: {
        label: "",
        href: "https://github.com/vijay2249/stress-relief",
      }
    },
    {
      title: "Smart Brain",
      description: "From a given url, it will try to detect the human faces in it",
      techStack: ["ReactJS", "CSS", "Heroku"],
      link: {
        label: "",
        href: "https://vijay2249.github.io/Smart-Brain/"
      }
    },
    {
      title: "Robo-Friends",
      description: "Sample application that I created while learning ReactJS",
      techStack: ["ReactJS", "CSS", "Netlify"],
      link: {
        label: "",
        href: "https://the-bots-assembly.netlify.app/"
      }
    }
  ],
  achievements: [
    {
      title: "MaxiMock",
      description: "AddOn functionalities on mapping stub responses in an wiremock setup environment",
      techStack: [
        "Java",
        "Maven"
      ],
      link: {
        label: "Mocks",
        href: "https://github.com/wedonttrack/maximock"
      }
    },
  ],
} as const;
