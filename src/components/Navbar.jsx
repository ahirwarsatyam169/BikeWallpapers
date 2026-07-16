import React from "react";
import logo from "../assets/superbikewallslogo.png";
import search from "../assets/search.png";
import hamburger from "../assets/whitehamburgermenu.webp";
import { useState } from "react";

function Navbar({banana}) {
  
  return (
    <div className="p-2 sticky z-50 top-0 h-16 w-full border-none flex justify-between bg-gradient-to-br from-blue-900 via-slate-900 to-black">
      <img className="scale-[50%] -translate-x-10" src={logo} alt="" />

      <div className="flex justify-center items-center w-[50px] -translate-x-[35px]">
        <input
          className="text-white border rounded-xl p-1 "
          type="text"
          placeholder="search"
        />
        <img
          className="scale-[60%] border rounded-[50%] p-2"
          src={search}
          alt=""
        />
      </div>

      <img
        onClick={banana}
        className="scale-[50%]"
        src={hamburger}
        alt=""
      />
    </div>
  );
}

export default Navbar;
