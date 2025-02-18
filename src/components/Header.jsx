import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import NavMenu from './NavMenu';
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='fixed w-full z-50 flex justify-between py-8 px-8 sm:px-16 md:px-20 bg-[#173558] drop-shadow-sm'>
        <Link to="/"><h1 className='text-2xl font-bold cursor-pointer'>{"<KierDev />"}</h1></Link>
        <ul className='hidden sm:flex gap-7 font-semibold'>
            <NavMenu link={"skills"} title={"Tech Skills"}/>
            <NavMenu link={"about-me"} title={"About Me"}/>
            <NavMenu link={"experience"} title={"Experience"}/>
            <NavMenu link={"contact"} title={"Contact"}/>
        </ul>
        <h1 className='block cursor-pointer sm:hidden text-3xl'><GiHamburgerMenu /></h1>
    </div>
  )
}

export default Header