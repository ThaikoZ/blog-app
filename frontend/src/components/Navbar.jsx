import React from "react";
import Button from "./Button";
import { CiSearch } from "react-icons/ci";

const navItems = [
  { title: "Articles", href: "" },
  { title: "Radio", href: "" },
  { title: "Podcast", href: "" },
  { title: "Be a writter", href: "" },
  { title: "Talktous", href: "" },
];

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between h-18 border-zinc-400 p-7 ">
      <div className="flex gap-10">
        <div className="flex font-extrabold  text-3xl italic">Blog Spot.</div>
        <ul className="gap-5 items-end decoration-none hidden md:flex">
          {/* TODO: underline if is active */}
          {navItems.map((item, index) => (
            <li key={index} className="cursor-pointer hover:underline">
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-1 items-center">
        <Button filled circled>
          {<CiSearch className="w-6 h-6" />}
        </Button>
        {/* TODO: rollup navbar after click */}
        <Button>Menu</Button>
      </div>
    </div>
  );
};

export default Navbar;
