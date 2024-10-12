import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const content = (
    <>
      <ul className="absolute top-20 left-0 right-0 bg-slate-500 transition text-zinc-300">
        <li className="hover:text-red-500 cursor-pointer justify-center flex m-4 font-semibold ">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-red-500 cursor-pointer justify-center flex m-4 font-semibold ">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-red-500 cursor-pointer justify-center flex m-4 font-semibold ">
          <Link to="/feedback">Feedback</Link>
        </li>
        <li className="hover:text-red-500 cursor-pointer justify-center flex m-4 font-semibold ">
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
    </>
  );

  return (
    <nav className="sticky top-0 z-[999] bg-white bg-opacity-60 backdrop-blur text-zinc-950 font-medium flex items-center border-b">
      <div className="container flex justify-between h-20 m-auto md:px-12">
        <h1 className="flex font-black  text-3xl items-center bg-gradient-to-br from-red-600 to-orange-600 text-transparent bg-clip-text">
          Zestify
        </h1>
        <div className="flex">
          <ul className="hidden md:flex items-center gap-5">
            <li className="hover:text-red-500 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-red-500 cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-red-500 cursor-pointer">
              <Link to="/feedback">Feedback</Link>
            </li>
            <li className="hover:text-red-500 cursor-pointer">
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">{click && content}</div>
        <button className="block md:hidden" onClick={handleClick}>
          {!click ? (
            <CgMenu className="size-8" />
          ) : (
            <IoMdClose className="size-8" />
          )}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
