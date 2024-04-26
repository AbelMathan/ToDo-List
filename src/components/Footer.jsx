import React from "react";
import AddItem from "./AddItem";

const Footer = ({ items, setItems }) => {
  const noOfItems = items.length;

  const clearList = () => {
    setItems([]);
    localStorage.setItem("todo_list", JSON.stringify([]));
  };
  return (
    <footer className=" flex justify-center relative bg-gray-800 h-10 p-2  ">
      <div className="text-white">
        {noOfItems === 1 ? <p>{noOfItems} Task</p> : <p>{noOfItems} Tasks</p>}
      </div>
      <button
        type="submit"
        onClick={clearList}
        className="bg-red-700 hover:bg-red-800 text-white rounded-full pr-2 pl-2  ml-5"
      >
        Clear All
      </button>
    </footer>
  );
};

export default Footer;
