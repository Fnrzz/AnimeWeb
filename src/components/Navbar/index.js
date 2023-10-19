"use client";
import Link from "next/link";
import InputSearch from "./inputSearch";
import Styles from "./navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <nav className="fixed  top-0 z-50 w-full">
      <div className="bg-slate-950  md:flex justify-between items-center py-5 md:px-10 px-5">
        <div className="flex justify-between items-center">
          <Link href="/">
            <h1 className="text-xl md:text-2xl font-bold text-white">
              Anime Web
            </h1>
          </Link>
          <div
            className={`md:invisible  ${Styles["hamburger"]} ${
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
          ${hamburger ? "visible" : "hidden"}`}
        >
          <li>
            <InputSearch />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
