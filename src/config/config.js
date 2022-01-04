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
import codingLogo from "../assets/codinglogo.jpg";
import skydivingLogo from "../assets/skydiving.jpg";
import snowBoardingLogo from "../assets/snowboarding.jpg";
import skyiingLogo from "../assets/skyiing.jpg";

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
    id: "t0",
    name: "Coding",
    imageUrl: codingLogo,
    paragraph:
      "Coding, sometimes called computer programming, is how we communicate with computers. Code tells a computer what actions to take, and writing code is like creating a set of instructions. By learning to write code, you can tell computers what to do or how to behave in a much faster way. You can use this skill to make websites and apps, process data, and do lots of other cool things.",
    experience: "I have  1 year coding experience.",
  },
  {
    id: "t1",
    name: "HTML",
    imageUrl: htmlLogo,
    paragraph:
      "HTML is a markup language that is used to create websites. It is used on most of the websites worldwide on the internet. To make websites more dynamic and add more movement, people tend to use JavaScript or CSS. HTML could be the lowest level of front-end development. ",
    experience:
      "Graduated Frontend programming course at Acacemy of Digital Industries, Where I learned HTML and CSS.",
  },
  {
    id: "t2",
    name: "CSS",
    imageUrl: cssLogo,
    paragraph:
      "While HTML is like the foundation of the website, CSS is used for the external choices of it. To put it in simple words, HTML is the structure of a web document and with CSS you can determine the colors, the fonts, the layouts, and the overall looks you want for your website. Having some knowledge of CSS will help you create amazing templates for your WordPress website.",
    experience:
      "Graduated Frontend programming course at Acacemy of Digital Industries, Where I learned HTML and CSS.",
  },
  {
    id: "t3",
    name: "Javascript ES6",
    imageUrl: javascriptLogo,
    paragraph:
      "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries",
    experience:
      "Graduated The Complite Javascript ES6 Course 2021: From Zero to Expert. (Udemy)",
  },
  {
    id: "t4",
    name: "SASS/SCSS",
    imageUrl: sassLogo,
    level: "Basics",
    paragraph:
      "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called 'the indented syntax,' uses a syntax similar to Haml.",
    experience: "Know basics about SASS/SCSS and its quite eazy ;)",
  },
  {
    id: "t5",
    name: "Bootstrap",
    imageUrl: bootstrapLogo,
    level: "Basics",
    paragraph:
      "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
    experience: "Know basics about bootstrap.",
  },
  {
    id: "t6",
    name: "ReactJS",
    imageUrl: reactJsLogo,
    paragraph:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. ",
    experience:
      "Currently Studying React - The Complete Guide (Incl Hooks, React Router, Redux). ",
  },
  {
    id: "t7",
    name: "Git",
    imageUrl: gitLogo,
    level: "Basics",
    paragraph:
      "Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows.",
    experience: "Know basics of Git Version Control System.",
  },
  {
    id: "t8",
    name: "Python",
    imageUrl: pythonLogo,
    level: "Basics",
    paragraph:
      "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.",
    experience: "Currently Studying Python at the university ;)",
  },
  {
    id: "t9",
    name: "PHP",
    imageUrl: phpLogo,
    level: "Basics",
    paragraph:
      "PHP is a general-purpose scripting language geared towards web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994. The PHP reference implementation is now produced by The PHP Group.",
    experience: "Currently studying php intensively.",
  },
  {
    id: "t10",
    name: "Adobe Photoshop",
    imageUrl: photoshopLogo,
    paragraph:
      "Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. It was originally created in 1988 by Thomas and John Knoll. Since then, the software has become the industry standard not only in raster graphics editing, but in digital art as a whole.",
    experience:
      "I have pretty good experience in Adobe Photoshop, Because it's like a hobby for me.",
  },
];

export const DUMMY_HOBBIES = [
  {
    name: "Skydiving",
    imageUrl: skydivingLogo,
    paragraph:
      "Skydiving is the best sport for me because it brings together all the extreme sensations that make me hilarious. You feel complete freedom while jumping and there is not any feel like that.",
  },
  {
    name: "Snowboarding",
    imageUrl: snowBoardingLogo,
    paragraph:
      "Skydiving is the best sport for me because it brings together all the extreme sensations that make me hilarious. You feel complete freedom while jumping and there is not any feel like that.",
  },
  {
    name: "Skyiing",
    imageUrl: skyiingLogo,
    paragraph:
      "Skydiving is the best sport for me because it brings together all the extreme sensations that make me hilarious. You feel complete freedom while jumping and there is not any feel like that.",
  },
];
