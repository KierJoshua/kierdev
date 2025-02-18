
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import KRoot from './Root'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import AboutMe from './pages/AboutMe'
import Skills from './pages/Skills/Skills'

function App() {

  const router = createBrowserRouter([{
    path:"/",
    element:<KRoot />,
    children:[
      {path:"/",element:<Home />},
      {path:"/about-me",element:<AboutMe />},
      {path:"/experience",element:<Experience />},
      {path:"/skills",element:<Skills />},
      {path:"/contact",element:<Contact />},
    ]
  }])


  return (
    <RouterProvider router={router}/>
  )
}

export default App
