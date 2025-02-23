import javascript from '../../assets/images/javascript.png';
import html from '../../assets/images/html.png';
import github from '../../assets/images/github.png';
import git from '../../assets/images/git.png';
import expo from '../../assets/images/expo.png';
import bootstrap from '../../assets/images/bootstrap.png';
import css from '../../assets/images/css.png';
import react from '../../assets/images/react.png';
import tailwind from '../../assets/images/tailwind.png';
import wordpress from '../../assets/images/wordpress.png';
import nodeJs from '../../assets/images/node-js.png';
import mongodb from '../../assets/images/mongodb.png';
import expressJs from '../../assets/images/express-js.png';
import reactnote from '../../assets/images/reactnote.png';
import poccopy from '../../assets/images/poccopy.png';
import portfolio1 from '../../assets/images/portfolio1.png';
import netflixcopy from '../../assets/images/netflixcopy.png';
import poc from '../../assets/images/poc-login.png';
const projects = [
    {
        name: "React Note",
        description: "A simple note-taking application built using React. This project helped me reinforce my understanding of React fundamentals while improving my ability to manage state and component interactions.",
        image: reactnote,
        madeWith:[tailwind, react],
        link: "https://note-app-delta-six.vercel.app/"
        
    },
    {
        name: "Capstone Project Copy (Front End)",
        description: "A front-end copy of our capstone project, allowing users to freely explore its features. I developed this using React and its hooks to strengthen my front-end skills and enhance my problem-solving abilities. In the future, I plan to implement the full project, including the back-end, once I have completed my back-end development studies.",
        image: poccopy,
        madeWith: [tailwind, react, javascript],
        link: "https://clinic-management-system-bx4e.vercel.app/"
    },
    {
        name: "Netflix Copy",
        description: "A Netflix-inspired web application designed to enhance my skills in working with APIs and managing dynamic content. This project helped me deepen my understanding of React hooks, API integration, and problem-solving in a real-world application context.",
        image: netflixcopy,
        madeWith: [tailwind, react, javascript],
        link: "https://netflix-zeta-opal.vercel.app/"
    },
    {
        name: "Capstone Project (Front End Developer)",
        description: "The Clinic Management System is designed for optical clinics to help manage inventory and billing efficiently. It allows users to track eyeglasses, frames, accessories, and other products with ease. The system also includes an automated billing feature that helps monitor clients' monthly payments, reducing the chances of overdue balances and missed deadlines. With automation and real-time tracking, it improves overall operations and client management.",
        image: poc,
        madeWith: [html, css, bootstrap ,javascript],
        link: "https://clinic-management-system-bx4e.vercel.app/"
    },
    {
        name: "First Portfolio",
        description: "This is my first portfolio",
        image:portfolio1,
        madeWith: [tailwind, react],
        link: "https://kier-portfolio.vercel.app/"
    },
];


export default projects;