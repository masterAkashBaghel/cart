import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import img from "../asset/output-onlinepngtools.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" flex flex-row justify-between h-20 max-w-6xl mx-auto">
      <NavLink to="/">
        <div className=" ml-5">
          <img className=" h-[70px] bg-white border-2 rounded-lg m-1" src={img} alt="logo"></img>
        </div>
      </NavLink>

      <div className=" flex items-center font-medium text-slate-300  mr-5 space-x-6">
        <NavLink to="/">
          <p className=" font-semibold border-2  p-2 rounded-md shadow-md hover:bg-slate-400">Home</p>
        </NavLink>
        <NavLink to="/cart">
         <div>
         <FaShoppingCart className=" text-2xl"></FaShoppingCart>
         </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
