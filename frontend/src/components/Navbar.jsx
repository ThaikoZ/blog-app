import React, { useState, useEffect } from "react";
import Button from "./Button";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const navItems = [
  { title: "Articles", href: "articles/" },
  { title: "Radio", href: "radio/" },
  { title: "Podcast", href: "podcast/" },
  { title: "Be a writter", href: "beawritter/" },
  { title: "Talktous", href: "/talktous" },
];

const Navbar = () => {
  const navbarBase =
    "md:flex gap-5 items-end decoration-none transition ease-in-out ";
  const openedNavbar = `flex flex-col items-center absolute left-0 top-0 gap-9 py-10 w-full bg-white text-2xl`;
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="w-full flex items-center justify-between h-18 border-zinc-400 p-7 ">
      <div className="flex gap-10">
        <div className="flex font-extrabold text-3xl italic z-10">
          <Link to="/"> Blog Spot.</Link>
        </div>
        <ul
          className={classNames(
            navbarBase,
            { [openedNavbar]: isOpen },
            { hidden: !isOpen, block: isOpen }
          )}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className={classNames("cursor-pointer hover:underline", {
                underline: location.pathname.includes(item.href),
              })}
            >
              <Link to={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-1 items-center z-20">
        <Button filled circled>
          {<CiSearch className="w-6 h-6" />}
        </Button>
        <div
          className="border-[#242424] rounded-3xl py-2 px-4 transition-colors cursor-pointer text-center h-11 flex items-center border-2 hover:bg-[#242424] bg-white hover:text-white "
          onClick={toggleMenu}
        >
          {isOpen ? "Close" : "Menu"}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
