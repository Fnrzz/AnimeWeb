"use client";
import Styles from "./navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <nav className="shadow-md sticky top-0 z-50 w-full">
      <div className="md:flex justify-between items-center bg-white py-5 md:px-10 px-5">
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">Anime Web</h1>
          <div
            className={`md:invisible ${Styles["hamburger"]} ${
              hamburger ? Styles["active"] : ""
            }`}
            onClick={() => setHamburger(!hamburger)}
          >
            <div className={`${Styles["line"]}`}></div>
            <div className={`${Styles["line"]}`}></div>
            <div className={`${Styles["line"]}`}></div>
          </div>
        </div>
        <ul
          className={`md:flex gap-4 
          ${hamburger ? "visible duration-500 transition-all" : "hidden"}`}
        >
          <li>
            <input
              type="text"
              placeholder="Search"
              className="rounded-lg border border-gray-300 w-full md:mt-0 mt-4 shadow px-4 py-2"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
