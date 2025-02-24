
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import KRoot from './Root'
import Experience from './pages/experience/Experience'
import Projects from './pages/projects/Projects'
import AboutMe from './pages/AboutMe'
import Skills from './pages/Skills/Skills'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once
    });
  }, []);

  const router = createBrowserRouter([{
    path:"/",
    element:<KRoot />,
    children:[
      {path:"/",element:<Home />},
      {path:"/about-me",element:<AboutMe />},
      {path:"/experience",element:<Experience />},
      {path:"/skills",element:<Skills />},
      {path:"/projects",element:<Projects />},
    ]
  }])


  return (
    <RouterProvider router={router}/>
  )
}

export default App
