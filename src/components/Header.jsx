import React from "react";
import Image from "../assets/headerHalf.png";

const Header = () => {
  return (
    <article className="bg-gradient-to-r from-purple-500 to-pink-500 h-60 ">
      <header className=" ">
        <div className=" ">
          <img
            src={Image}
            alt="img"
            className="h-80 w-auto object-cover opacity-20 pb-20 "
          />
          <h1 className="text-5xl absolute top-28 left-20 sm:left-1/4 text-white font-bold drop-shadow-md ">
            ToDo List
          </h1>
        </div>
      </header>
    </article>
  );
};

export default Header;
