import React from "react";
import classNames from "classnames";

const Button = ({ children, filled, circled, href }) => {
  const baseClasses =
    " border-[#242424] rounded-3xl py-2 px-4 transition-colors cursor-pointer text-center h-11 flex items-center";
  const filledClasses = "hover:bg-black bg-[#242424]  text-white";
  const unfilledClasses =
    "border-2 hover:bg-[#242424] bg-white hover:text-white";
  const circledClasses = "flex justify-center px-0 py-0 w-11 rounded-all";

  return (
    <div
      className={classNames(baseClasses, {
        [filledClasses]: filled,
        [unfilledClasses]: !filled,
        [circledClasses]: circled,
      })}
    >
      {children}
    </div>
  );
};

export default Button;
