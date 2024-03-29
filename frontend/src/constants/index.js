import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  // {
  //   id: "1",
  //   title: "Pricing",
  //   url: "#pricing",
  // },
  {
    id: "2",
    title: "Innovations",
    url: "#collaboration",
  },
  {
    id: "3",
    title: "Schedule",
    url: "#timeline",
  },
  {
    id: "4",
    title: "Speakers",
    url: "#speakers",
  },
  // {
  //   id: "5",
  //   title: "Contact Us",
  //   url: "#roadmap",
  // },
  {
    id: "6",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "7",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
  
  

];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const domainLogos = [yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

// export const pricing = [
//   {
//     id: "0",
//     title: "Basic",
//     description: "AI chatbot, personalized recommendations",
//     price: "0",
//     features: [
//       "An AI chatbot that can understand your queries",
//       "Personalized recommendations based on your preferences",
//       "Ability to explore the app and its features without any cost",
//     ],
//   },
//   {
//     id: "1",
//     title: "Premium",
//     description: "Advanced AI chatbot, priority support, analytics dashboard",
//     price: "9.99",
//     features: [
//       "An advanced AI chatbot that can understand complex queries",
//       "An analytics dashboard to track your conversations",
//       "Priority support to solve issues quickly",
//     ],
//   },
//   {
//     id: "2",
//     title: "Enterprise",
//     description: "Custom AI chatbot, advanced analytics, dedicated account",
//     price: null,
//     features: [
//       "An AI chatbot that can understand your queries",
//       "Personalized recommendations based on your preferences",
//       "Ability to explore the app and its features without any cost",
//     ],
//   },
// ];

export const benefits = [
  {
    id: "0",
    title: "Artificial Intelligence",
    text: "Pioneering intelligence mimicking human-like decision-making for solving complex problems.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Algorithms",
    text: "Efficiently solving computational problems by designing precise sets of instructions for machines.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Machine Learning",
    text: "Empowering machines to learn from data and make predictions without explicit programming.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Development",
    text: "Crafting immersive digital experiences through innovative web technologies and design.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Blockchain",
    text: "Revolutionizing trust and transparency by enabling secure and decentralized transactions across networks.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Deep Learning",
    text: "Unleashing the power of neural networks to extract patterns and make sense of vast amounts of data.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const timeline = [
  {
    id: "0",
    title: "Artificial Intelligence",
    period:"2000-2002",
    text: "Pioneering intelligence mimicking human-like decision-making for solving complex problems.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
  },
  {
    id: "1",
    title: "Algorithms",
    period:"2002-2004",
    text: "Efficiently solving computational problems by designing precise sets of instructions for machines.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    light: true,
  },
  {
    id: "2",
    title: "Machine Learning",
    period:"2004-2006",
    text: "Empowering machines to learn from data and make predictions without explicit programming.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
  },
  {
    id: "3",
    title: "Development",
    period:"2006-2008",
    text: "Crafting immersive digital experiences through innovative web technologies and design.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    light: true,
  },
  {
    id: "4",
    title: "Blockchain",
    period:"2008-2010",
    text: "Revolutionizing trust and transparency by enabling secure and decentralized transactions across networks.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
  },
  {
    id: "5",
    title: "Deep Learning",
    period:"2010-2012",
    text: "Unleashing the power of neural networks to extract patterns and make sense of vast amounts of data.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",

  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const speakers = [
  {
    id: "0",
    name: "Sophie Johnson",
    role: "Software Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, recusandae.",
    socials: [
      {
        id: "0",
        title: "Facebook",
        icon:  facebook,
        url: "#",
      },
      {
        id: "1",
        title: "Twitter",
        icon: twitter,
        url: "#",
      },
      {
        id: "2",
        title: "Instagram",
        icon: instagram,
        url: "#",
      },
    ],
  },
  {
    id: "1",
    name: "Lucy Sanchez",
    role: "FrontEnd Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, recusandae.",
    socials: [
      {
        id: "0",
        title: "Facebook",
        icon:  facebook,
        url: "#",
      },
      {
        id: "1",
        title: "Twitter",
        icon: twitter,
        url: "#",
      },
      {
        id: "2",
        title: "Instagram",
        icon: instagram,
        url: "#",
      },
    ],
  },

  {
    id: "2",
    name: "Sophie Johnson",
    role: "Software Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, recusandae.",
    socials: [
      {
        id: "0",
        title: "Facebook",
        icon:  facebook,
        url: "#",
      },
      {
        id: "1",
        title: "Twitter",
        icon: twitter,
        url: "#",
      },
      {
        id: "2",
        title: "Instagram",
        icon: instagram,
        url: "#",
      },
    ],
  },
  {
    id: "3",
    name: "Lucy Sanchez",
    role: "FrontEnd Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1592023031338-ee30ef94abbc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8aHVtYW4lMjBtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, recusandae.",
    socials: [
      {
        id: "0",
        title: "Facebook",
        icon:  facebook,
        url: "#",
      },
      {
        id: "1",
        title: "Twitter",
        icon: twitter,
        url: "#",
      },
      {
        id: "2",
        title: "Instagram",
        icon: instagram,
        url: "#",
      },
    ],
  },
];