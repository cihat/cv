import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Cihat SALIK",
  initials: "CS",
  location: "Istanbul, Turkey",
  locationLink: "https://www.google.com/maps/place/istanbul",
  about:
    "Software Engineer who enjoys researching, learning and developing. I love open source.",
  summary:
    "A curious Software Engineer living in Istanbul/Turkey who enjoys researching, learning and developing. I love open source development and I am building something on my Github.",
  avatarUrl: "https://avatars.githubusercontent.com/u/57585087?v=4",
  personalWebsiteUrl: "https://cihat.dev",
  contact: {
    email: "cihatsalik1@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/cihat",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/cihatsalik/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/chtslk",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Firat University",
      degree: "Bachelor's Degree in Computer Engineering",
      start: "Oct 2018",
      end: "Mar 2023",
    },
  ],
  work: [
    {
      company: "JotForm",
      link: "https://jotform.com",
      badges: ["Remote", "Istanbul"],
      title: "Junior Software Engineer",
      start: "August 2023",
      end: null,
      description:
        "Developing and enhancing a data visualization project using React.js and Highcharts.js. Rewrote the editor page of the project, adding new features using monaco-editor to edit the project's JSON structure. Implementing various calculation tools outside of the team's dashboard.",
    },
    {
      company: "Akinon",
      link: "https://akinon.com",
      badges: ["Remote"],
      title: "Software Engineer",
      start: "June 2023",
      end: "August 2023",
      description:
        "Developed Web Components written in Pure JavaScript and updated them based on customer requests. Fixed frontend bugs of many major e-commerce sites in Turkey together with the team. Conducted task allocation using Agile management with the team via Jira.",
    },
    {
      company: "JotForm",
      link: "https://jotform.com",
      badges: ["Remote"],
      title: "Frontend Support Engineer",
      start: "October 2022",
      end: "May 2023",
      description:
        "Fixed bugs in many live products on JotForm. Contributed to solving bugs by communicating with customers one-on-one and understanding their problems.",
    },
    {
      company: "JotForm",
      link: "https://jotform.com",
      badges: ["Remote"],
      title: "Frontend Developer Intern",
      start: "June 2022",
      end: "September 2022",
      description:
        "Developed 'frontend-gui' (a full-stack project) where you can manage(run, stop, build, checking build size) frontend mono-repo projects in-house with a UI instead of a CLI.",
    },
    {
      company: "Upwork",
      link: "https://upwork.com",
      badges: ["Remote"],
      title: "Junior Software Engineer",
      start: "March 2022",
      end: "August 2022",
      description:
        "While studying at school, took a project from Upwork called Odincity, where developments were made using React.js.",
    },
    {
      company: "Saypr",
      link: "https://saypr.com",
      badges: ["Remote"],
      title: "Junior Software Engineer",
      start: "March 2021",
      end: "October 2021",
      description:
        "Development using React.js, Next.js, CSS/SCSS, JavaScript technologies. Front-End part responsive development of Figma design using Next.js. Website development for the CabinPanda Data collection platform using React.js, Git, Bitbucket and Trello as a team. Front-end development of the promotion website for Riot Forge Games using Gatsby.js, and SCSS.",
    },
    // {
    //   company: "Film.io",
    //   link: "https://film.io",
    //   badges: ["Remote"],
    //   title: "Software Architect",
    //   logo: ConsultlyLogo,
    //   start: "2024",
    //   end: null,
    //   description:
    //     "Leading the development of the Film.io platform. Technologies: React, TypeScript, Node.js",
    // },
    // {
    //   company: "Parabol",
    //   link: "https://parabol.co",
    //   badges: ["Remote"],
    //   title: "Senior Full Stack Developer",
    //   logo: ParabolLogo,
    //   start: "2021",
    //   end: "2024",
    //   description:
    //     "Implemented new features, led a squad, improved code delivery process, and initiated migration from Emotion to Tailwind CSS. Technologies: React, TypeScript, GraphQL",
    // },
    // {
    //   company: "Clevertech",
    //   link: "https://clevertech.biz",
    //   badges: ["Remote"],
    //   title: "Lead Android Developer → Full Stack Developer",
    //   logo: ClevertechLogo,
    //   start: "2015",
    //   end: "2021",
    //   description:
    //     "Created Android mobile apps and led teams for companies like Vision Media, DKMS, and AAA. Built a live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    // },
    // {
    //   company: "Jojo Mobile",
    //   link: "https://bsgroup.eu/",
    //   badges: [],
    //   title: "Android Developer → Lead Android Developer",
    //   logo: JojoMobileLogo,
    //   start: "2012",
    //   end: "2015",
    //   description:
    //     "Led the Android team and developed apps for major Polish companies like LOT, Polskie Radio, Agora, and PolskaPress",
    // },
    // {
    //   company: "Nokia Siemens Networks",
    //   link: "https://www.nokia.com",
    //   badges: [],
    //   title: "C/C++ Developer",
    //   logo: NSNLogo,
    //   start: "2010",
    //   end: "2012",
    //   description: "Developed and tested software for LTE base stations",
    // },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/",
    "Next.js",
    "Node.js",
    "GraphQL",
    "WebRTC",
    "Vue",
    "Redux",
    "Pinia",
    "Vite.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "SCSS/CSS",
    "HTML",
    "Docker",
    "Vim",
  ],
  projects: [
    {
      title: "stack",
      techStack: ["MongoDB", "Node.js", "Vue", "Docker"],
      description:
        "A starter repository for MongoDB, Node.js, and Vue.js, with a local environment based on Docker.",
      link: {
        label: "github.com",
        href: "https://github.com/cihat/stack",
      },
    },
    {
      title: ".dotfiles",
      techStack: ["Lua"],
      description: "Some configs for my environment.",
      link: {
        label: "github.com",
        href: "https://github.com/cihat/.dotfiles",
      },
    },
    {
      title: "sync",
      techStack: ["JavaScript"],
      description:
        "This is a developer-friendly CLI tool that allows users to customize and pull, push, and synchronize RDS for their preferred projects in the specified file path.",
      link: {
        label: "github.com",
        href: "https://github.com/cihat/sync",
      },
    },
    {
      title: "sync.rs",
      techStack: ["Rust"],
      description: "CLI tool that updates many repos in local.",
      link: {
        label: "github.com",
        href: "https://github.com/cihat/sync.rs",
      },
    },
    {
      title: "learning",
      techStack: ["JavaScript"],
      description: "Something I've been learning about software.",
      link: {
        label: "github.com",
        href: "https://github.com/cihat/learning",
      },
    },
    {
      title: "cihat.dev",
      techStack: ["TypeScript"],
      description: "Personal website and blog built with TypeScript.",
      link: {
        label: "github.com",
        href: "https://github.com/cihat/cihat.dev",
      },
    },
    {
      title: "solaris-odyssey",
      techStack: ["JavaScript"],
      description:
        "\"Solaris Odyssey\" is a space-themed typing game where players race against time to type descending words and conquer cosmic challenges.",
      link: {
        label: "github.com",
        href: "https://github.com/cihat/solaris-odyssey",
      },
    },
    {
      title: "dictionary",
      techStack: ["TypeScript", "Next.js"],
      description:
        "Project that tries to help you learn English.",
      link: {
        label: "github.com",
        href: "https://github.com/cihat/dictionary",
      },
    },
    {
      title: "data-visio",
      techStack: ["Vue"],
      description: "Visualize your data with charts from just an URL.",
      link: {
        label: "github.com",
        href: "https://github.com/cihat/data-visio",
      },
    },
    {
      title: "twitter-clone",
      techStack: ["Vue.js", "SCSS"],
      description:
        "This is the Twitter Clone project I made using SCSS with Vue.js.",
      link: {
        label: "github.com",
        href: "https://github.com/cihat/twitter-clone",
      },
    },
    {
      title: "DataStructure",
      techStack: ["JAVA", "Data Structure", "Algorithm", "C++", "Python", "JavaScript"],
      description:
        "Notes and examples in the data structure and all lessons course. Data Structures with Java.",
      link: {
        label: "github.com",
        href: "https://github.com/cihat/DataStructure",
      },
    },
    {
      title: "codificato",
      techStack: ["TypeScript"],
      description:
        "A web extension that finds which programming language the projects in the GitHub links on the page are written in.",
      link: {
        label: "github.com",
        href: "https://github.com/cihat/codificato",
      },
    },
    {
      title: "boardersteller",
      techStack: ["TypeScript"],
      description: "Create a dashboard easily.",
      link: {
        label: "github.com",
        href: "https://github.com/cihat/boardersteller",
      },
    },
    {
      title: "stoic-philosophy",
      techStack: ["TypeScript"],
      description: "A project exploring Stoic philosophy.",
      link: {
        label: "github.com",
        href: "https://github.com/cihat/stoic-philosophy",
      },
    },
    {
      title: "seating-arrangement",
      techStack: ["JavaScript"],
      description:
        "This is a school project I did to solve the problems I saw in the library.",
      link: {
        label: "github.com",
        href: "https://github.com/cihat/seating-arrangement",
      },
    },
    {
      title: "delaygram",
      techStack: ["TypeScript"],
      description: "Full-stack Instagram clone.",
      link: {
        label: "github.com",
        href: "https://github.com/cihat/delaygram",
      },
    },
  ],
} as const;
