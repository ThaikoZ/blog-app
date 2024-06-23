import React from "react";

const Header = () => {
  return (
    <div className="flex md:items-end gap-3 mb-16 flex-col md:flex-row text-center md:text-start ">
      <h1 className="font-bold text-7xl">Best of the week</h1>
      <p>See all posts {"->"}</p>
    </div>
  );
};

export default Header;
