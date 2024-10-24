import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";

const Navbar = ({ active = 0 }) => {
  const [click, setClick] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-[999] bg-white bg-opacity-80 backdrop-blur text-zinc-950 font-medium flex items-center border-b">
        <div className="container flex justify-between h-20 m-auto px-5 md:px-12">
          <h1 className="flex font-black  text-3xl items-center bg-gradient-to-br from-red-600 to-orange-600 text-transparent bg-clip-text">
            <Link to={"/"}>Zestify</Link>
          </h1>
          <div className="flex">
            <ul className="hidden md:flex items-center gap-5">
              <li
                className={`${
                  active === 0 ? "text-red-500" : ""
                } hover:text-red-500 cursor-pointer`}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={`${
                  active === 1 ? "text-red-500" : ""
                } hover:text-red-500 cursor-pointer`}
              >
                <Link to="/about">About</Link>
              </li>
              <li
                className={`${
                  active === 2 ? "text-red-500" : ""
                } hover:text-red-500 cursor-pointer`}
              >
                <Link to="/feedback">Feedback</Link>
              </li>
              <li
                className={`${
                  active === 3 ? "text-red-500" : ""
                } hover:text-red-500 cursor-pointer`}
              >
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </div>

          <button className="block md:hidden" onClick={() => setClick(!click)}>
            {!click ? (
              <CgMenu className="size-8" />
            ) : (
              <IoMdClose className="size-8" />
            )}
          </button>
        </div>
      </nav>
      <ul
        className={`${
          click
            ? "w-[300px] h-screen transition-all duration-200 bg-white border"
            : "w-0 overflow-hidden transition-all duration-200 h-screen"
        } fixed top-20 right-0 md:hidden bg-opacity-80 backdrop-blur bg-white z-[99999999]`}
      >
        <li
          className={`${
            active === 0 ? "text-red-500" : ""
          } hover:text-red-500 cursor-pointer p-5 font-semibold`}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={`${
            active === 1 ? "text-red-500" : ""
          } hover:text-red-500 cursor-pointer p-5 font-semibold`}
        >
          <Link to="/about">About</Link>
        </li>
        <li
          className={`${
            active === 2 ? "text-red-500" : ""
          } hover:text-red-500 cursor-pointer p-5 font-semibold`}
        >
          <Link to="/feedback">Feedback</Link>
        </li>
        <li
          className={`${
            active === 3 ? "text-red-500" : ""
          } hover:text-red-500 cursor-pointer p-5 font-semibold`}
        >
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
    </>
  );
};
export default Navbar;

//props validation
Navbar.propTypes = {
  active: PropTypes.number,
};
