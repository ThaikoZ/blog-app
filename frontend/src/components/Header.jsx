import React from "react";

const Header = ({ text, subtitle }) => {
  return (
    <div className="flex md:items-end gap-3 mb-16 flex-col md:flex-row text-center md:text-start ">
      <h1 className="font-bold text-7xl">{text}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Header;
