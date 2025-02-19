import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";
import NavMenuMobile from "./NavMenuMobile";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => setIsClicked(!isClicked);

  return (
    <div className="fixed w-full z-50 flex justify-between py-5 sm:py-6 lg:py-8 px-8 sm:px-14 md:px-20 bg-[#173558] drop-shadow-sm">
      <Link to="/">
        <h1 className="text-2xl font-bold cursor-pointer">{"<KierDev />"}</h1>
      </Link>
      <ul className="hidden sm:flex gap-2 md:gap-5 lg:gap-7 font-semibold">
        <NavMenu link={"skills"} title={"Tech Skills"} />
        <NavMenu link={"about-me"} title={"About Me"} />
        <NavMenu link={"experience"} title={"Experience"} />
        <NavMenu link={"contact"} title={"Contact"} />
      </ul>

      {isClicked && (
        <ul className="absolute right-4 top-[120%] rounded px-10 py-5 bg-[#173558] gap-7 font-semibold">
          <NavMenuMobile link={"skills"} title={"Tech Skills"} />
          <NavMenuMobile link={"about-me"} title={"About Me"} />
          <NavMenuMobile link={"experience"} title={"Experience"} />
          <NavMenuMobile link={"contact"} title={"Contact"} />
        </ul>
      )}

      <button
        className="block cursor-pointer sm:hidden text-3xl"
        onClick={handleClick}
      >
        <GiHamburgerMenu />
      </button>
    </div>
  );
};

export default Header;
