import React from "react";
import { MdOutlineTimer } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const BentoCard = ({
  tags,
  title,
  publishedAt,
  author,
  readingTime,
  shortDescription,
  onClick,
}) => {
  return (
    <div
      className="rounded-3xl p-7  bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:bg-blend-darken"
      onClick={onClick}
    >
      <div className=" flex flex-col gap-3 ">
        <div className="flex gap-2 ">
          {tags.map((tag) => (
            <div className="px-5 py-1 border-2 border-white w-max rounded-3xl font-bold text-white">
              {tag}
            </div>
          ))}
        </div>
        <h1 className="py-2 rounded-3xl font-bold text-5xl text-white">
          {title}
        </h1>
        <div className=" border-white  font text-white flex gap-7 italic">
          <div className="flex items-center gap-2">
            <MdDateRange /> {publishedAt}
          </div>
          <div className="flex items-center gap-2">
            <FaUserAlt /> {author}
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineTimer /> {readingTime}
          </div>
        </div>
        <p className="text-white text-lg">{shortDescription}</p>
      </div>
    </div>
  );
};

export default BentoCard;
