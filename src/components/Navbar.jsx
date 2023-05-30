import React from "react";
import { SiBloglovin } from "react-icons/si";
import { MdManageSearch } from "react-icons/md";
import { GoArrowSmallDown } from "react-icons/go";

function Navbar() {
  return (
    <div className="bg shadow-lg">
      <div className="container  max-w-[1240px] mx-auto">
        <div className="nav-i flex justify-between h-[80px] items-center">
          <div className="nav-l flex items-center">
            <a className="flex items-center" href="#">
              <h1>
                <SiBloglovin className="text-cyan-600" size={19} />
              </h1>
              <h1 className="font-bold text-xl text-cyan-600">loging</h1>
            </a>
          </div>
          <div className="nav-r flex items-center ">
            <a className="px-4 text-gray-800 transition-all hover:text-cyan-400 hover:duration-200 hover:ease-in-out" href="#">Home</a>
            <a className="flex items-center px-4 text-gray-800 transition-all hover:text-cyan-400 hover:duration-200 hover:ease-in-out" href="#">Categories <GoArrowSmallDown className="text-cyan-400" size={18} /></a>
            <a className="flex items-center px-4 text-gray-800 transition-all hover:text-cyan-400 hover:duration-200 hover:ease-in-out" href="#">Blog <GoArrowSmallDown className="text-cyan-400" size={18} /></a>
            <a className="flex items-center px-4 text-gray-800 transition-all hover:text-cyan-400 hover:duration-200 hover:ease-in-out" href="#">More <GoArrowSmallDown className="text-cyan-400" size={18} /></a>
            <a className="px-4 text-gray-800 transition-all hover:text-cyan-400 hover:duration-200 hover:ease-in-out" href="#">Contact</a>
           <a className="px-4 text-gray-800 transition-all hover:text-cyan-400 hover:duration-200 hover:ease-in-out pl-16" href="#"><MdManageSearch className="text-cyan-400" size={30} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
