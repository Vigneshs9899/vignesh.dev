/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vignesh S",
  title: "Hi all, I'm Vignesh",
  subTitle: emoji(
    "Python Backend Developer 🚀 Passionate about building scalable backend solutions and continuously improving software development skills."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1zp0pFutom_qd9e3gDSPD9omnMe2HZfjc/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Vigneshs9899",
  linkedin: "https://www.linkedin.com/in/vigneshs9899/",
  outlook: "vigneshsaravanan.dev@outlook.com",
  // gitlab: "https://gitlab.com/Vigneshs9899",
  // facebook: "https://www.facebook.com/vignesh.s.9899",
  // medium: "https://medium.com/@vigneshs9899",
  // stackoverflow: "https://stackoverflow.com/users/10422806/vignesh-s",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Python Backend Developer focused on API development, database systems, backend architecture, and cloud deployment.",
  skills: [
    emoji(
      "⚡ Build REST APIs and backend applications using Python and Flask"
    ),
    emoji("⚡ Design and manage PostgreSQL databases with efficient SQL queries and database schemas"),
    emoji(
      "⚡ Implement authentication, authorization, JWT security, and role-based access control"
    ),
    emoji(
      "⚡ Containerize applications using Docker and deploy solutions on Azure Cloud"
    ),
       emoji(
      "⚡ Work with Git, Linux, and modern development workflows"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
    {
    skillName: "GitHub",
    fontAwesomeClassname: "fab fa-github"
  },
    {
    skillName: "Flask",
    fontAwesomeClassname: "fas fa-server"
  }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Scott Christian College",
      logo: require("./assets/images/scott-logo.webp"),
      subHeader: "Master of Science in Computer Science",
      duration: "June 2020 - April 2022"
    },
    {
      schoolName: "Kongunadu Arts and Science College",
      logo: require("./assets/images/kongunadu-logo.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "June 2017 - April 2020"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Database Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Python Programming",
      progressPercentage: "80%"
    },
      {
      Stack: "Cloud & Deployment",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "SQL Developer",
      company: "Balbhas Business Sysnomics LLC",
      companylogo: require("./assets/images/logo-balbhas.png"),
      date: "January 2026 – Present",
      desc: "Developed SQL queries for data extraction, transformation, reporting, and business requirements.",
      descBullets: [
        "Created and maintained stored procedures in Microsoft SQL Server.",
        "Generated operational and business reports using SQL-based solutions.",
        "Investigated and resolved database-related issues through ticketing systems.",
        "Collaborated with application teams to support database operations and improve query performance.",
        "Assisted in troubleshooting data quality and reporting issues."
      ]
    },
    {
      role: "Web & Database Developer ",
      company: "Cloud Hawk",
      companylogo: require("./assets/images/logo-cloudhawk.png"),
      date: "January 2024 – February 2025",
      desc: "Developed and maintained web applications and websites for business clients.",
      descBullets: [
        "Worked with databases, SQL queries, data retrieval, and application support activities.",
        "Assisted in website customization using HTML, CSS, JavaScript, and CMS platforms.",
        "Collaborated with team members to troubleshoot technical issues and implement enhancements.",
        "Participated in deployment, maintenance, and support of client applications.",
        "Utilized Git for version control and project collaboration."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/python-logo.png"),
      projectName: "Workforce Management System",
      projectDesc: "A workforce management platform designed to manage employees, jobs, timesheets, and role-based access control.Features include JWT authentication, employee management, job tracking, timesheet management, PostgreSQL database integration, and Docker-based deployment.",
      footerLink: [
        {
          name: "View Project",
          url: "#"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/python-logo.png"),
      projectName: "Doctor Appointment Management System",
      projectDesc: "A web-based appointment management system that enables patients to schedule appointments and manage doctor consultations.Implemented authentication, CRUD operations, PostgreSQL integration, and Docker support.",
      footerLink: [
        {
          name: "View Project",
          url: "#"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft Azure Fundamentals (AZ-900)",
      subtitle:
        "Cloud fundamentals, Azure services, deployment models, security, and governance.",
      image: require("./assets/images/azure-logo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "#"
        }
      ]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle:
        "loud concepts, AWS services, pricing models, architecture, and security fundamentals.",
      image: require("./assets/images/aws-logo.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "#"
        }
      ]
    },

    {
      title: "Python & SQL",
      subtitle: "Completed Certifcation for Web App Development",
      image: require("./assets/images/python-sql-logo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "#"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 89250 62513",
  email_address: "vigneshsaravanan.dev@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  // blogSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
