import { Link } from "react-scroll";
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
        <li className="hover:text-red-800 cursor-pointer justify-center flex m-4 font-semibold ">
          <Link to="/src/Components/Project.jsx">Home</Link>
        </li>
        <li className="hover:text-red-800 cursor-pointer justify-center flex m-4 font-semibold ">
          <Link to="About">About</Link>
        </li>
        <li className="hover:text-red-800 cursor-pointer justify-center flex m-4 font-semibold ">
          <Link to="Contact">Contact us</Link>
        </li>
      </ul>
    </>
  );
  return (
    <nav className="bg-gradient-to-tl from-zinc-950 to-zinc-800 text-zinc-200 flex items-center">
      <div className="container flex justify-between h-20 m-auto md:px-12">
        <div className="flex font-bold text-3xl items-center">
          <h1>LOGO</h1>
        </div>
        <div className="flex">
          <ul className="hidden md:flex items-center gap-5">
            <li className="hover:text-red-800 cursor-pointer">
              <Link to="Home">Home</Link>
            </li>
            <li className="hover:text-red-800 cursor-pointer">
              <Link to="About">About</Link>
            </li>
            <li className="hover:text-red-800 cursor-pointer">
              <Link to="Contact">Contact us</Link>
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
