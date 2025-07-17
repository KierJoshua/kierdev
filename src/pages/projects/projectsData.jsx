import javascript from "../../assets/images/javascript.png";
import html from "../../assets/images/html.png";
import github from "../../assets/images/github.png";
import git from "../../assets/images/git.png";
import expo from "../../assets/images/expo.png";
import bootstrap from "../../assets/images/bootstrap.png";
import css from "../../assets/images/css.png";
import react from "../../assets/images/react.png";
import tailwind from "../../assets/images/tailwind.png";
import wordpress from "../../assets/images/wordpress.png";
import nodeJs from "../../assets/images/node-js.png";
import mongodb from "../../assets/images/mongodb.png";
import expressJs from "../../assets/images/express-js.png";
import reactnote from "../../assets/images/reactnote.png";
import poccopy from "../../assets/images/poccopy.png";
import portfolio1 from "../../assets/images/portfolio1.png";
import netflix from "../../assets/images/netflix.png";
import poc from "../../assets/images/poc-login.png";
import gradeCal from "../../assets/images/grade-calcu.png";
import tictactoe from "../../assets/images/tictactoe.png";
const projects = [
  {
    name: "First Portfolio",
    description: "This is my first portfolio",
    image: portfolio1,
    madeWith: [tailwind, react],
    link: "https://kier-portfolio.vercel.app/",
  },

  {
    name: "React Note",
    description:
      "A simple note-taking application that started as a front-end project built with React and has since been improved into a full-stack app. This project reinforced my understanding of React fundamentals and allowed me to deepen my skills in backend development using Express.js, Node.js, and MongoDB. It showcases effective state management, component interactions, and full CRUD operations through a connected API.",
    image: reactnote,
    madeWith: [tailwind, react, expressJs, nodeJs, mongodb],
    link: "https://note-app-2-11xf.onrender.com/",
  },
  {
    name: "Netflix Copy",
    description:
      "Originally a frontend-only project, this Netflix-inspired web application has been upgraded to a full-stack MERN app. It now features account creation, and a password recovery system. This upgrade allowed me to deepen my experience with backend development, API security, and managing user data across the entire stack.",
    image: netflix,
    madeWith: [tailwind, react, javascript, nodeJs, expressJs, mongodb],
    link: "https://netflix-wfjl.vercel.app",
  },
  {
    name: "Grade Calculator",
    description:
      " Developed a dynamic grade calculator app in React with a twist, allowing users to customize grading formulas and add new categories. This project strengthened my grasp of React fundamentals, state management, and component interactions.",
    image: gradeCal,
    madeWith: [tailwind, react, javascript],
    link: "https://grade-calculator-snowy.vercel.app/",
  },
    {
    name: "Tic Tac Toe",
    description:
      "A classic Tic Tac Toe game built with React. It allows two players to take turns marking X and O on a 3x3 grid. This project helped me practice component structuring and basic game logic using React hooks.",
    image: tictactoe,
    madeWith: [tailwind, react, javascript],
    link: "https://tic-tac-toe-eight-gilt-46.vercel.app/",
  },
  {
    name: "Capstone Project Copy (Front End)",
    description:
      "A front-end copy of our capstone project, allowing users to freely explore its features. I developed this using React and its hooks to strengthen my front-end skills and enhance my problem-solving abilities. In the future, I plan to implement the full project, including the back-end, once I have completed my back-end development studies.",
    image: poccopy,
    madeWith: [tailwind, react, javascript],
    link: "https://clinic-management-system-bx4e.vercel.app/",
  },
  {
    name: "Capstone Project (Front End Developer)",
    description:
      "The Clinic Management System is designed for optical clinics to help manage inventory and billing efficiently. It allows users to track eyeglasses, frames, accessories, and other products with ease. The system also includes an automated billing feature that helps monitor clients' monthly payments, reducing the chances of overdue balances and missed deadlines. With automation and real-time tracking, it improves overall operations and client management.",
    image: poc,
    madeWith: [html, css, bootstrap, javascript],
    link: "https://clinic-management-system-bx4e.vercel.app/",
  },
];

export default projects;
