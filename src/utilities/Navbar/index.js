import Styles from "./navbar.module.css";

const Navbar = () => {
  const hamburger = false;
  return (
    <nav className="shadow-md w-full">
      <div className="md:flex justify-between items-center bg-white py-4 px-10">
        <h1 className="text-xl font-bold">Navbar</h1>
        <div
          className={`${Styles["hamburger"]} ${hamburger ? "active" : ""}`}
          onClick={() => (hamburger = !hamburger)}
        >
          <div className={`${Styles["line"]}`}></div>
          <div className={`${Styles["line"]}`}></div>
          <div className={`${Styles["line"]}`}></div>
        </div>
        <ul className="md:flex md:hidden  gap-4">
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
