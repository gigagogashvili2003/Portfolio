import htmlLogo from "../assets/htmllogo.png";
import cssLogo from "../assets/csslogo.png";
import javascriptLogo from "../assets/javascriptlogo.png";
import sassLogo from "../assets/sasslogo1.png";
import bootstrapLogo from "../assets/bootstraplogo.png";
import gitLogo from "../assets/gitlogo.png";
import reactJsLogo from "../assets/reactjslogo1.png";
import pythonLogo from "../assets/pythonlogo.png";
import phpLogo from "../assets/phplogo.png";
import photoshopLogo from "../assets/photoshoplogo.png";
import skydivingLogo from "../assets/skydiving.jpg";
import snowBoardingLogo from "../assets/snowboarding.jpg";
import skyiingLogo from "../assets/skyiing.jpg";
import laptopLightblue from "../assets/laptop_lightblue.png";
import laptopPurple from "../assets/laptop_purple.png";
import laptopBlue from "../assets/laptop_blue.png";
import laptopGrey from "../assets/laptop_grey.png";
import laptopOrange from "../assets/laptop_orange.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const MESSAGE_URL =
  "https://portfolio-42f27-default-rtdb.firebaseio.com/messages.json";

export const DUMMY_SOCIAL_LINKS = [
  {
    id: "l1",
    name: "Instagram",
    link: "https://www.instagram.com/gogashviligiga/",
  },
  {
    id: "l2",
    name: "Facebook",
    link: "https://www.facebook.com/giga.gogashvili.33",
  },
  {
    id: "l3",
    name: "Twitter",
    link: "https://twitter.com/TheGogashvili",
  },
  {
    id: "l4",
    name: "Linkedin",
    link: "https://www.linkedin.com/in/giga-gogashvili-3989a3208/",
  },
  {
    id: "l5",
    name: "Github",
    link: "https://github.com/gigagogashvili2003",
  },
];

export const DUMMY_PROJECTS_TITLES = [
  {
    id: "p1",
    name: "Weather App",
    link: "ss",
  },
  {
    id: "p2",
    name: "Recipe App",
    link: "ss",
  },
  {
    id: "p3",
    name: "Map Project",
    link: "ss",
  },
  {
    id: "p4",
    name: "Calculator",
    link: "ss",
  },
  {
    id: "p5",
    name: "Covid19 Stats",
    link: "ss",
  },
];

export const DUMMY_TECH_SKILLS = [
  {
    id: "t1",
    name: "HTML",
    imageUrl: htmlLogo,
    experience:
      "Graduated Frontend course at Acacemy of Digital Industries, Where I learned HTML and CSS.",
  },
  {
    id: "t2",
    name: "CSS",
    imageUrl: cssLogo,
    experience:
      "Graduated Frontend course at Acacemy of Digital Industries, Where I learned HTML and CSS.",
  },
  {
    id: "t3",
    name: "Javascript ES6",
    imageUrl: javascriptLogo,
    experience:
      "Graduated The Complite Javascript ES6 Course 2021: From Zero to Expert. (Udemy)",
  },
  {
    id: "t4",
    name: "SASS/SCSS",
    imageUrl: sassLogo,
    level: "Basics",
    experience: "Know basics about SASS/SCSS",
  },
  {
    id: "t5",
    name: "Bootstrap",
    imageUrl: bootstrapLogo,
    level: "Basics",
    experience: "Know basics about Bootstrap.",
  },
  {
    id: "t6",
    name: "ReactJS",
    imageUrl: reactJsLogo,
    experience:
      "Currently Studying React - The Complete Guide (Incl Hooks, React Router, Redux). ",
  },
  {
    id: "t7",
    name: "Git",
    imageUrl: gitLogo,
    level: "Basics",
    experience: "Know basics of Git Version Control System.",
  },
  {
    id: "t8",
    name: "Python",
    imageUrl: pythonLogo,
    level: "Basics",
    experience: "Currently Studying Python at the university",
  },
  {
    id: "t9",
    name: "PHP",
    imageUrl: phpLogo,
    level: "Basics",
    experience: "Currently studying Php intensively.",
  },
  {
    id: "t10",
    name: "Adobe Photoshop",
    imageUrl: photoshopLogo,
    experience:
      "I have pretty good experience in Adobe Photoshop, Cuz it's like a hobby for me.",
  },
];

export const DUMMY_HOBBIES = [
  {
    name: "Skydiving",
    imageUrl: skydivingLogo,
  },
  {
    name: "Snowboarding",
    imageUrl: snowBoardingLogo,
  },
  {
    name: "Skyiing",
    imageUrl: skyiingLogo,
  },
];

export const DUMMY_SOCIALS = [
  {
    name: "Github",
    link: "https://github.com/gigagogashvili2003",
    imageUrl: laptopGrey,
    icon: <GitHubIcon />,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/giga-gogashvili-3989a3208/",
    imageUrl: laptopOrange,
    icon: <LinkedInIcon />,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/giga.gogashvili.33",
    imageUrl: laptopBlue,
    icon: <FacebookIcon />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/thegogashvili/",
    imageUrl: laptopPurple,
    icon: <InstagramIcon />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/TheGogashvili",
    imageUrl: laptopLightblue,
    icon: <TwitterIcon />,
  },
];
