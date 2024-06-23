import React from "react";
import { useNavigate } from "react-router-dom";

const NoPage = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center gap-5 mt-10">
      <p>This page doesn't exists</p>
      <div
        className="p-4 px-6 text-white bg-[#242424] rounded-3xl cursor-pointer hover:bg-black transition-colors"
        onClick={handleOnClick}
      >
        Back to Home
      </div>
    </div>
  );
};

export default NoPage;
