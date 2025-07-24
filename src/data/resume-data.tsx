import {
  AkinonLogo,
  JotformLogo,
  SayprLogo,
  UpworkLogo
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { WebsiteIcon } from "@/components/icons/WebsiteIcon";

export const RESUME_DATA = {
  name: "Cihat SALİK",
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
        name: "Blog",
        url: "https://cihat.dev",
        icon: WebsiteIcon
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
      start: "October 2018",
      end: "March 2023",
    },
  ],
  work: [
    {
      company: "JotForm",
      link: "https://jotform.com",
      badges: ["Istanbul"],
      title: "Software Engineer",
      logo: JotformLogo,
      start: "January 2025",
      end: "Present",
      description: ""
    },
    {
      company: "JotForm",
      link: "https://jotform.com",
      badges: ["Istanbul"],
      title: "Junior Software Engineer",
      logo: JotformLogo,
      start: "August 2023",
      end: "January 2025",
      description:
        "Developing and enhancing a data visualization project using React.js and Highcharts.js. Rewrote the editor page of the project, adding new features using monaco-editor to edit the project's JSON structure. Implementing various calculation tools outside of the team's dashboard.",
    },
    {
      company: "Akinon",
      link: "https://akinon.com",
      badges: ["Remote"],
      title: "Software Engineer",
      logo: AkinonLogo,
      start: "June 2023",
      end: "August 2023",
      description:
        "Developed Web Components written in Pure JavaScript and updated them based on customer requests. Fixed frontend bugs of many major e-commerce sites in Turkey together with the team. Conducted task allocation using Agile management with the team via Jira.",
    },
    {
      company: "JotForm",
      link: "https://jotform.com",
      badges: ["Remote", "Part-Time"],
      title: "Frontend Support Engineer",
      logo: JotformLogo,
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
      logo: JotformLogo,
      start: "June 2022",
      end: "September 2022",
      description:
        "Developed 'frontend-gui' (a full-stack project) where you can manage(run, stop, build, checking build size) frontend mono-repo projects in-house with a UI instead of a CLI.",
    },
    {
      company: "Upwork",
      link: "https://upwork.com",
      badges: ["Remote", "Project Based"],
      title: "Junior Software Engineer",
      logo: UpworkLogo,
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
      logo: SayprLogo,
      start: "March 2021",
      end: "October 2021",
      description:
        "Development using React.js, Next.js, CSS/SCSS, JavaScript technologies. Front-End part responsive development of Figma design using Next.js. Website development for the CabinPanda Data collection platform using React.js, Git, Bitbucket and Trello as a team. Front-end development of the promotion website for Riot Forge Games using Gatsby.js, and SCSS.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/",
    "Next.js",
    "Node.js",
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
      "title": "Sketchbook",
      "description": "Some methods, approaches, projects, and experiments that I have learned by trying/experimenting",
      "techStack": ["TypeScript", "Svelte ", "Computer Science", "Rust", "other stuff"],
      "link": {
        "label": "sketchbook.vercel.app",
        "href": "https://sketchbook-teal.vercel.app/",
      }
    },
    {
      "title": "Githubba",
      "description": "Tinder but to explore GitHub repositories",
      "techStack": ["TypeScript", "React", "Tailwind"],
      "link": {
        "label": "githubba.com",
        "href": "https://githubba.com/",
      }
    },
    {
      "title": "MonoRepo Manager",
      "techStack": ["TypeScript", "React", "Rust", "SCSS"],
      "description": "A tool that allows you to manage your JS/TS monorepo projects.",
      "link": {
        "label": "github.com",
        "href": "https://github.com/cihat/mr-manager",
      }
    },
    {
      "title": "chefim.net",
      "description": "The best idea for cooking",
      "techStack": ["TypeScript", "Vue", "SCSS", "Dockerfile", "Docker", "MongoDB", "Express.js", "Node.js", "Google Auth", "Vercel", "Render"],
      "link": {
        "label": "chefim.net",
        "href": "https://chefim.net",
      }
    },
    {
      "title": "taskcard.net",
      "description": "TaskCard is a minimalist daily planning app designed to simplify how you organize your day. Each day is represented as a card, where users can divide their time into hourly slots and plan tasks efficiently.",
      "techStack": ["TypeScript", "Vue", "SCSS", "Dockerfile", "Docker", "MongoDB", "Express.js", "Node.js", "Google Auth", "Vercel", "Render"],
      "link": {
        "label": "taskcard.net",
        "href": "https://taskcard.net",
      }
    },
    {
      "title": "Texus",
      description: "A Terminal User Interface (TUI) application for managing frontend monorepos.",
      "techStack": ["Rust", "Ratatui", "Tokio", "Tracing"],

      "link": {
        "label": "github.com",
        "href": "https://github.com/cihat/texus",
      }
    },
    {
      "title": "Contribution Notes",
      "description": "A tool to add notes to your GitHub contribution chart, making it easier to explain and remember the details behind your contributions.",
      "techStack": ["Svelte", "TypeScript", "SCSS"],
      "link": {
        "href": "https://github.com/cihat/contribution-notes",
        "label": "github.com",
      }
    },
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
      title: "kokki",
      techStack: ["JavaScript", "Vue", "TypeScript", "CSS", "Dockerfile", "HTML"],
      description: "The best idea for cooking.",
      link: {
        label: "kokki.vercel.app",
        href: "https://github.com/cihat/kokki",
        // href: "https://kokki.vercel.app/",
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
    {
      title: "graduation-frontend",
      techStack: ["University Graduation Project", "JavaScript", "Vue.js"],
      description:
        "The graduation project has frontend codes. Vue.js is used.",
      link: {
        label: "github.com",
        href: "https://github.com/firat-university-graduation-project/graduation-frontend",
      },
    },
    {
      title: "graduation-backend",
      techStack: ["University Graduation Project", "JavaScript", "Socket.io", "WebRTC", "MongoDB", "Express.js"],
      description:
        "The graduation project has backend codes. socket.io, webRTC, mongoDB, express.js were used.",
      link: {
        label: "github.com",
        href: "https://github.com/firat-university-graduation-project/graduation-backend",
      },
    },
  ],
  apps: [
    {
      title: "TaskCard",
      description: "Auto-postponing task planner with intelligent time blocking. Drag & drop tasks into time slots, set priorities, and let smart postponement system automatically reschedule missed tasks.",
      techStack: ["Swift", "SwiftUI", "iOS", "macOS"],
      link: {
        label: "App Store",
        href: "https://apps.apple.com/tr/app/taskcard/id6747799762",
      }
    },
    {
      title: "SwiftDays",
      description: "Track important dates and deadlines with beautiful countdown timers. Create unlimited countdowns with customizable widgets and timely notifications.",
      techStack: ["Swift", "SwiftUI", "WidgetKit", "iOS", "macOS"],
      link: {
        label: "App Store",
        href: "https://apps.apple.com/tr/app/swiftdays/id6747647326",
      }
    },
    {
      title: "StreakChart",
      description: "Visual habit tracking with beautiful charts. Build momentum with color-coded squares that show your progress at a glance, just like GitHub's contribution graph.",
      techStack: ["Swift", "SwiftUI", "SwiftData", "iOS", "macOS"],
      link: {
        label: "App Store",
        href: "https://apps.apple.com/tr/app/streakchart/id6747408568",
      }
    },
    {
      title: "StarType",
      description: "Fast-paced typing space adventure. Navigate through asteroid fields, battle enemy ships, and save the galaxy while improving your typing speed and accuracy.",
      techStack: ["Swift", "SwiftUI", "SpriteKit", "iOS", "macOS"],
      link: {
        label: "App Store",
        href: "https://apps.apple.com/tr/app/startype/id6747320692",
      }
    },
    {
      title: "githubba",
      description: "Swipe to discover GitHub repos. Tinder-style interface for discovering curated repositories with GitHub integration and personalized recommendations.",
      techStack: ["Swift", "SwiftUI", "GitHub API", "iOS", "macOS"],
      link: {
        label: "App Store",
        href: "https://apps.apple.com/tr/app/githubba/id6747093581",
      }
    },
    {
      title: "TrackLens",
      description: "Professional screen recording with camera overlay in stunning 4K quality. Perfect for content creators, educators, and professionals.",
      techStack: ["Swift", "SwiftUI", "AVFoundation", "macOS"],
      link: {
        label: "Mac App Store",
        href: "https://apps.apple.com/tr/app/tracklens/id6747600890",
      }
    },
    {
      title: "FluidCanvas",
      description: "Digital marbling art application using Apple's Metal Performance Shaders for real-time fluid dynamics simulation. Create stunning patterns with physics-accurate color mixing.",
      techStack: ["Swift", "SwiftUI", "Metal", "iOS", "macOS"],
      link: {
        label: "App Store",
        href: "https://apps.apple.com/tr/app/githubba/id6747934351",
      }
    },
    {
      title: "Chefim",
      description: "Smart recipe finder using AI to suggest personalized recipes based on ingredients you have at home. Transform your kitchen ingredients into delicious meals.",
      techStack: ["Swift", "SwiftUI", "AI", "iOS", "macOS"],
      link: {
        label: "App Store",
        href: "https://apps.apple.com/tr/app/chefim/id6747953986",
      }
    },
    {
      title: "PassportPro",
      description: "Passport & visa photo editor with automatic formatting for 10+ countries. Create professional photos with face detection and print-ready export layouts.",
      techStack: ["Swift", "SwiftUI", "Core Image", "iOS", "macOS"],
      link: {
        label: "App Store",
        href: "https://apps.apple.com/tr/app/passportpro/id6748263822",
      }
    },
    {
      title: "IconSizer",
      description: "Instant app icon resizer for iOS, macOS, iPadOS, and watchOS. Convert 1024x1024 icons into all required sizes for Xcode projects.",
      techStack: ["Swift", "SwiftUI", "macOS"],
      link: {
        label: "Mac App Store",
        href: "https://apps.apple.com/tr/app/iconsizer/id6748265383",
      }
    },
    {
      title: "Convertify",
      description: "All-in-one offline file converter for documents, images, audio, video, archives, and units. No internet required, all processing on-device.",
      techStack: ["Swift", "SwiftUI", "PDFKit", "AVFoundation", "CoreImage", "iOS", "macOS"],
      link: {
        label: "App Store",
        href: "https://apps.apple.com/tr/app/convertify/id6748287120",
      }
    },
    {
      title: "PhotoSizer",
      description: "Privacy-first image compressor and resizer with AI-optimized quality retention. Reduce file sizes up to 90% while maintaining image quality.",
      techStack: ["Swift", "SwiftUI", "Core Image", "iOS"],
      link: {
        label: "App Store",
        href: "https://apps.apple.com/tr/app/photosizer/id6748417488",
      }
    },
    {
      title: "WordHabit",
      description: "Offline flashcards & SRS vocabulary trainer. Import custom word lists, use spaced repetition, and track progress with detailed statistics.",
      techStack: ["Swift", "SwiftUI", "Core Data", "iOS", "macOS"],
      link: {
        label: "App Store",
        href: "https://apps.apple.com/tr/app/wordhabit/id6748560380",
      }
    },
    {
      title: "Chrono Tap",
      description: "Perfect millisecond reflex game with multiple modes. Challenge your timing precision with Classic, Precision, Blindfold, and Marathon modes.",
      techStack: ["Swift", "SwiftUI", "iOS", "macOS"],
      link: {
        label: "App Store",
        href: "https://apps.apple.com/tr/app/chrono-tap/id6748554830",
      }
    },
    {
      title: "Italian Brainrot",
      description: "Learn Italian through fun character quizzes. Over 100 unique characters with authentic pronunciation and multiple difficulty levels.",
      techStack: ["Swift", "SwiftUI", "iOS", "macOS"],
      link: {
        label: "App Store",
        href: "https://apps.apple.com/tr/app/italianbrainrot/id6748560381",
      }
    }
  ],
} as const;
