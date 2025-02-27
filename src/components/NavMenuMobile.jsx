import React from "react";
import { NavLink } from "react-router-dom";

const NavMenuMobile = ({ title, link, handleclick }) => {
  return (
    <NavLink to={`/${link}`} className="w-full" onClick={handleclick}>
      {({ isActive }) => (
        <li
          className={`cursor-pointer rounded py-2 px-1 w-full text-center ${
            isActive ? "bg-[#00A8E8] text-white" : "bg-transparent text-gray-200"
          }`}
        >
          {title}
        </li>
      )}
    </NavLink>
  );
};

export default NavMenuMobile;
