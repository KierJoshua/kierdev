import React from 'react'
import { NavLink } from 'react-router-dom'

const NavMenu = ({title, link}) => {
  return (
    <NavLink 
      to={`/${link}`} 
      className={({ isActive }) => 
        `cursor-pointer transition-all duration-300 ease-in-out 
         hover:bg-[#00A8E8] hover:text-white 
         rounded py-2 px-4 
         ${isActive ? "bg-[#00A8E8] text-white scale-105" : "text-gray-200"}`
      }>
      <li>{title}</li>
      </NavLink>
  )
}

export default NavMenu