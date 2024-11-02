import { PropTypes } from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import LoginForm from "./LoginForm.jsx";
import SignupForm from "./SignupForm.jsx";
import { useContext, useState } from "react";
import { AuthContext } from "@/AuthProvider.jsx";
import { IoCartOutline } from "react-icons/io5";
import { RiAdminLine } from "react-icons/ri";

const Navbar = ({ active = 0 }) => {
  const { user } = useContext(AuthContext);
  const { signIn, setSignIn } = useContext(AuthContext);
  const { signup, setSignup } = useContext(AuthContext);
  const { login, setLogin } = useContext(AuthContext);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate(`/profile?id=${user._id}`);
  };

  return (
    <>
      <div className="">
        {login && (
          <LoginForm
            setSignIn={setSignIn}
            setLogin={setLogin}
            setSignup={setSignup}
          />
        )}
        {signup && <SignupForm setLogin={setLogin} setSignup={setSignup} />}
      </div>
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

              {!user?.isAdmin && (
                <>
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
                </>
              )}
              {signIn && (
                <>
                  <li
                    className={`${
                      active === 5 ? "text-red-500" : ""
                    } hover:text-red-500 cursor-pointer`}
                  >
                    <Link to={`/cart?=${user._id}`}>
                      <span className="flex gap-1 items-center">
                        <IoCartOutline className="size-5 hover:text-red-500 cursor-pointer" />
                        Cart
                        </span>
                    </Link>
                  </li>
                  {user.isAdmin && (
                    <button
                      className={`${
                        active === 4
                          ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                          : "border border-red-300 text-stone-800"
                      } px-3 py-1 rounded-lg hover:bg-gradient-to-r hover:text-white hover:from-red-600 hover:bg-orange-600 transition-all duration-100`}
                    >
                      <Link to={"/admin_dashboard"}>Admin Dashboard</Link>
                    </button>
                  )}

                  <div
                    className="bg-orange-600 p-2 rounded-full size-10 flex justify-center items-center text-white hover:shadow-lg cursor-pointer transition-all duration-150"
                    onClick={goToProfile}
                  >
                    {user && user.isAdmin ? (
                      <>
                        {user.avatar ? (
                          <span>{user.avatar}</span>
                        ) : (
                          <RiAdminLine size={25} />
                        )}
                      </>
                    ) : (
                      <>
                        {user.avatar ? (
                          <span>{user.avatar}</span>
                        ) : (
                          <span className="">
                            {user.name.slice(0, 2).toUpperCase()}
                          </span>
                        )}
                      </>
                    )}
                  </div>
                </>
              )}
              {!signIn && (
                <>
                  <li className="" onClick={() => setLogin(true)}>
                    <button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:bg-orange-600 text-white rounded px-6 py-[10px]">
                      Login
                    </button>
                  </li>
                  <li
                    className="border-2 border-orange-600 text-orange-600 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 hover:text-white transition-all duration-150 rounded px-6 py-[10px]"
                    onClick={() => setSignup(true)}
                  >
                    <button>Signup</button>
                  </li>
                </>
              )}
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
        } fixed top-20 right-0 md:hidden bg-opacity-80 backdrop-blur bg-white z-[9999]`}
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
        <br />
        {!signIn && (
          <div className="pl-5">
            <div onClick={() => setLogin(true)}>
              <button className="bg-orange-600 hover:bg-orange-700 transition-all duration-150 text-white rounded px-6 py-[10px]">
                Login
              </button>
            </div>
            <br />
            <div onClick={() => setSignup(true)}>
              <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-150 rounded px-6 py-[10px]">
                Signup
              </button>
            </div>
          </div>
        )}
      </ul>
    </>
  );
};
export default Navbar;

//props validation
Navbar.propTypes = {
  active: PropTypes.number,
};
