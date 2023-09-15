const settings = {
  isSplash: true,
  useCustomCursor: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Alan's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Alan Binu Portfolio",
    type: "website",
    url: "www.alanbinu.com",
  },
};

//Home Page
const greeting = {
  title: "Hello World",
  title2: "Alan",
  logo_name: "Alan Binu",
  nickname: "",
  full_name: "Alan Binu",
  subTitle: "I am a Full Stack Engineer",
  resumeLink: "",
  mail: "mailto:alanbinu5@gmail.com",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/alan-binu-95025015a/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Github",
    link: "https://github.com/alanbinu007",
    fontAwesomeIcon: "fab fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#464545", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gmail",
    link: "mailto:alanbinu5@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/AlanBinuTeacher",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Blogger",
    link: "https://hashnode.com/@alanbinu",
    fontAwesomeIcon: "fa-blogger", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=twitter
  },
];

const skills = {
  data: [
    {
      title: "Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficient in Backend Develpment using Spring Boot",

        "⚡ Experience in Full Stack Spring Developent",

        "⚡ Building responsive website front end using ReactJS",

        "⚡ Advanced Understanding of OOP Concepts",
        "⚡ Well-Versed in Testing and Debugging Methods",
        "⚡ Capable Problem Solver with Strong Logical Aptitude",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#979dbf",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#0db84b",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "postgresql",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#5a7196",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "ExpressJs",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "MongoDb",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#0db84b",
          },
        },
        {
          skillName: "MySql",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#5a7196",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience of working with Computer Vision and NLP projects in personal projects",
        "⚡ Certifications from deeplearning.ai, IBM Data Science and Google Data Engineering using Google Cloud",
        "⚡ Skilled in Tableau, MS Excel and other Data Analysis tools",
        "⚡ Good Knoweldge in SQL and NoSQL",
        "⚡ Good in Problem Solving",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Apache Spark",
          fontAwesomeClassname: "logos-spark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Limited Hands-on Experience with Cloud Services from Different Providers",
        "⚡ Experience in hosting and managing websites",
        "⚡ Experience with Continuous Integration and DevOps",
        "⚡ Understanding the Linux OS",
        "⚡ Divine Knowledge in Web Services and APIs",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "BlockChain and Web 3.0",
      fileName: "CryptoCry",
      skills: [
        "⚡ Enthusiastic about exploring and collaborating with Web3.0 and blockchain technologies",
        "⚡ Limited Hands-on Experience with Web3.0 and BlockChain Development",
        "⚡ Basic familiarity with Smart Contracts",
      ],
      softwareSkills: [
        {
          skillName: "BitCoin",
          fontAwesomeClassname: "logos:bitcoin",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Web 3.0",
          fontAwesomeClassname: "simple-icons:web3dotjs",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Etherium",
          fontAwesomeClassname: "majesticons:etherium-circle",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Solidity",
          fontAwesomeClassname: "skill-icons:solidity",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Metamask",
          fontAwesomeClassname: "logos:metamask-icon",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "BlockChain",
          fontAwesomeClassname: "eos-icons:blockchain",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Truffle",
          fontAwesomeClassname: "logos:truffle",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Doge Coin",
          fontAwesomeClassname: "cryptocurrency:edoge",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Alchemy",
          fontAwesomeClassname: "simple-icons:alchemy",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Hardhat",
          fontAwesomeClassname: "devicon:hardhat",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Bachelor's degree in Computer Science",
      logo_path: "mg.png",
      alt_name: "MG_Uni",
      duration: "2017 - 2020",
      descriptions: [
        "⚡ BCA includes various subjects such as Programming in C, Java, php, Python etc (Basic and Advanced)",
        "⚡ Database Management, Mathematics, Software Engineering are the core of BCA",
        "⚡ Networking, World-Wide-Web, Data Structure, Advanced in software requirement specification and Software Development Life Cycle",
        "⚡ Final Year Project : Realtime Student Management System",
      ],
      website_link: "https://www.mgu.ac.in/",
      title1: "Master's degree in Computer Science",
      logo_path1: "ignou.png",
      alt_name1: "MCA",
      duration1: "2021 - 2023",
      descriptions1: [
        "⚡ This master's degree Specialized in Data Science, Machine Learning and Artificial intelligence",
        "⚡ Hand-on experience using Cloud and Data mining",
        "⚡ Final Year Project : AI Face Detection Attendance Marking System ",
      ],
      website_link1: "http://ignou.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Deep Learning Specialization",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/verify/specialization/T273PNB7TMQV",
      alt_name: "deeplearning.ai",
      color_code: "#47A048",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - PRESENT",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description: "Happy To Hear From You",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://alanbinu.hashnode.dev/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Thodupuzha, Idukki, Kerala - 685588, India",
    avatar_image_path: "address_image.svg",
    location_map_link: "http://github.com/AlanBinu007",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8111940551",
  },
};

const projects = {
  data: [
    {
      id: "1",
      name: "Spring Boot Advanced Projects",
      live: "",
      image:"https://raw.githubusercontent.com/DanMathew7/images/main/Github_Project1.png",
      url: "https://github.com/AlanBinu007/Spring-Boot-Advanced-Projects",
      tech: "Technologies Used : Thymeleaf, Spring Cloud, Spring Security,  PostgreSql, MySql, MongoDb, Junit, H2-Database, Logging, Logging and Logout, Swagger 2, API Calls, REST API, SLF4J, LOG4J2, Jersey, ActiveMQ",
      description:
        "💖💖Here we are maked almost all types of Spring Boot Applications that you suggested via linkedin/Gmail, If you are looking something that is out of the box then just ping me in linkedin or mail with your required project i will make the template/full project for you for free",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "Spring Boot",
          iconifyClass: "logos-spring",
        },
      ],
    },
    {
      id: "2",
      name: "ReactJs & Spring Boot Full Stack Development",
      live: "",
      image:"https://raw.githubusercontent.com/DanMathew7/images/main/Github_Project2.png",
      url: "https://github.com/AlanBinu007/ReactJs-SpringBoot-Full-Stack-Development",
      tech: "Technologies Used : ReactJs, Spring Boot, Spring Security, PostgreSql, MySql, REST API",
      description:
        "💥💥Full Stack Development using ReactJs and Spring Boot. Here we are used MySql, MongoDb and PostgreSql database to store the data. We also implemented the Spring Security. Here we can understand add, view, edit and delete operations. This is the template/project that we are given to our junior colleagues in our college knowledge workshop",
      languages: [
        {
          name: "ReactJs",
          iconifyClass: "logos-react",
        },
        {
          name: "Redux",
          iconifyClass: "logos-redux",
        },
        {
          name: "Spring Boot",
          iconifyClass: "logos-spring",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "CSS",
          iconifyClass: "logos-css-3",
        },
        {
          name: "HTML",
          iconifyClass: "logos-html-5",
        },
        {
          name: "SASS",
          iconifyClass: "logos-sass",
        },
        {
          name: "NODEJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "EXPRESSJS",
          iconifyClass: "logos-express",
        },
      ],
    },

    {
      id: "3",
      name: "Real Time Chat Application",
      image:"https://raw.githubusercontent.com/DanMathew7/images/main/Github_Project3.png",
      url: "https://github.com/AlanBinu007/Realtime-Chat-Application-ReactJs",
      live: "https://alanbinu-mychat.firebaseapp.com/",
      tech: "Technologies Used : ReactJs, HTML, CSS, BootStrap, Material UI, Javacript",
      description:
        "🍾🥂This is a real time chat application created using ReactJs. The main theme is how to use chatengine. Here we can able to create group, send message to group as well as individual and we also implemented Google Auth",
      languages: [
        {
          name: "ReactJs",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "CSS",
          iconifyClass: "logos-css-3",
        },
        {
          name: "HTML",
          iconifyClass: "logos-html-5",
        },
      ],
    },
    // {
    //   id: "0",
    //   name: "Live Interview Video Conference Application with Facecam and Mic",
    //   url: "https://github.com/AlanBinu007/Online-Live-Video-Chat-Application-for-Interview-purposes",
    //   live: "https://alanbinu-video-conference.web.app/",
    //   tech: "Technologies Used : ReactJs, HTML, CSS, BootStrap, Material UI, Javacript, NodeJs, ExpressJs and SASS",
    //   description:
    //     "A clean and full functional live video conference app for one to one interview.It have live chat, Notes and Live Editor facility",
    //   languages: [
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "CSS",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "HTML",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "SASS",
    //       iconifyClass: "logos-sass",
    //     },
    //     {
    //       name: "NODEJS",
    //       iconifyClass: "logos-nodejs",
    //     },
    //     {
    //       name: "EXPRESSJS",
    //       iconifyClass: "logos-express",
    //     },
    //   ],
    // },
    {
      id: "4",
      name: "Covid-19 Tracker",
      url: "https://github.com/AlanBinu007/React-Covid19-Tracker",
      image:"https://raw.githubusercontent.com/DanMathew7/images/main/Github_Project4.png",
      live: "https://alanbinu-covid19-tracker.web.app/",
      tech: "Technologies Used : ReactJs, HTML, CSS, BootStrap, Material UI, Javacript, NodeJs, ExpressJs and SASS",
      description:
        "New updated Covid -19 tracker with neat and clean UI. Here we can able to sort and search by different country. Here we used ReactJs and basic HTML5 and CSS.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "CSS",
          iconifyClass: "logos-css-3",
        },
        {
          name: "HTML",
          iconifyClass: "logos-html-5",
        },
      ],
    },
    // {
    //   id: "0",
    //   name: "Spotify Clone",
    //   url: "https://github.com/AlanBinu007/spotify-clone",
    //   live: "https://alanbinu-spotify.web.app/",
    //   tech: "Technologies Used : ReactJs, HTML, CSS, BootStrap, Material UI, Javacript",
    //   description: "Simple Clone for Spotify using React",
    //   languages: [
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "CSS",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "HTML",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "Tailwind CSS",
    //       iconifyClass: "tailwindcss-icon",
    //     },
    //   ],
    // },
    {
      id: "5",
      name: "Netflix Clone",
      url: "https://github.com/AlanBinu007/netflix_clone",
      live: "https://alanbinu-netflix.web.app/",
      image:"https://raw.githubusercontent.com/DanMathew7/images/main/Github_Project5.png",
      tech: "Technologies Used : ReactJs, HTML, CSS, BootStrap, Material UI, Javacript",
      description:
        "A clean and full customizable clean Netflix Clone using React and tmdb API.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "CSS",
          iconifyClass: "logos-css-3",
        },
        {
          name: "HTML",
          iconifyClass: "logos-html-5",
        },
      ],
    },
    // {
    //   id: "0",
    //   name: "LinkedIn Clone",
    //   url: "https://github.com/AlanBinu007/Linkedin-Clone-React",
    //   live: "https://alanbinu-linkedin.web.app/",
    //   tech: "Technologies Used : ReactJs, HTML, CSS, BootStrap, Material UI, Javacript",
    //   description:
    //     "A clean and clean LinkedIn Clone using React with Login and Add post Feature.",
    //   languages: [
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "CSS",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "HTML",
    //       iconifyClass: "logos-html-5",
    //     },
    //   ],
    // },

    {
      id: "6",
      name: "Amazon Clone",
      url: "https://github.com/AlanBinu007/amazone_clone_react",
      live: "https://alanbinu-ecommerce.web.app/",
      image:"https://raw.githubusercontent.com/DanMathew7/images/main/Github_Project6.png",
      tech: "Technologies Used : ReactJs, HTML, CSS, BootStrap, Material UI, Javacript",
      description:
        "Here i created an full functional Amazon clone application using React",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "HTML",
          iconifyClass: "logos-html-5",
        },
      ],
    },
    {
      id: "7",
      name: "Covid-19 tracker Using Spring Boot",
      url: "https://github.com/AlanBinu007/Covid-19-Spring",
      live: "",
      image:"https://raw.githubusercontent.com/DanMathew7/images/main/Github_Project7.png",
      tech: "Technologies Used : SpringBoot, HTML, CSS, BootStrap, Javacript",
      description: "Simple Covid-19tracking software using spring boot",
      languages: [
        {
          name: "SpringBoot",
          iconifyClass: "logos-spring",
        },
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
      ],
    },
    {
      id: "7",
      name: "Spring Employee CURD Application",
      url: "https://github.com/AlanBinu007/Spring-Employee-CURD",
      live: "",
      image:"https://raw.githubusercontent.com/DanMathew7/images/main/Github_Project8.png",
      tech: "Technologies Used : SpringBoot, HTML, CSS, BootStrap, Material UI",
      description:
        "Here we used spring boot as back-end and thymeleaf as  web site template. The app contain creation, Deletion, Ediiting and fetching the employee details",
      languages: [
        {
          name: "SpringBoot",
          iconifyClass: "logos-spring",
        },
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "HTML",
          iconifyClass: "logos-html-5",
        },
      ],
    },
  ],
};
const reactnative = {
  data: [
    {
      id: "8",
      name: "Live Interview Video Conference Application with Facecam and Mic",
      url: "https://github.com/AlanBinu007/Online-Live-Video-Chat-Application-for-Interview-purposes",
      live: "https://alanbinu-video-conference.web.app/",
      tech: "Technologies Used : ReactJs, HTML, CSS, BootStrap, Material UI, Javacript, NodeJs, ExpressJs and SASS",
      description:
        "A clean and full functional live video conference app for one to one interview.It have live chat, Notes and Live Editor facility",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "CSS",
          iconifyClass: "logos-css-3",
        },
        {
          name: "HTML",
          iconifyClass: "logos-html-5",
        },
        {
          name: "SASS",
          iconifyClass: "logos-sass",
        },
        {
          name: "NODEJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "EXPRESSJS",
          iconifyClass: "logos-express",
        },
      ],
    },
  ],
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
  reactnative,
};
