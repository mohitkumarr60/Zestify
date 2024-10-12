import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(0);

  return (
    <div className="border-b">
      <nav className="container m-auto px-10 py-4 relative">
        <div className="hidden md:flex justify-between items-center">
          <h1 className="font-bold text-3xl">Zestify</h1>
          <ul className="flex items-center gap-8 font-medium">
            <li
              className={`${
                active == 0 ? "text-red-600" : "text-stone-950"
              } cursor-pointer hover:text-red-600 transition-all duration-200`}
              onClick={() => setActive(0)}
            >
              Home
            </li>
            <li
              className={`${
                active == 1 ? "text-red-600" : "text-stone-950"
              } cursor-pointer hover:text-red-600 transition-all duration-200`}
              onClick={() => setActive(1)}
            >
              About
            </li>
            <li
              className={`${
                active == 2 ? "text-red-600" : "text-stone-950"
              } cursor-pointer hover:text-red-600 transition-all duration-200`}
              onClick={() => setActive(2)}
            >
              Contact
            </li>
          </ul>
        </div>
        <div className="md:hidden fixed h-screen bg-white w-[300px] left-0 top-0 z-50 shadow border-r">
          <ul className="space-y-3 font-medium">
            <li
              className={`${
                active == 0 ? "text-red-600" : "text-stone-950"
              } cursor-pointer hover:text-red-600 transition-all duration-200`}
              onClick={() => setActive(0)}
            >
              Home
            </li>
            <li
              className={`${
                active == 1 ? "text-red-600" : "text-stone-950"
              } cursor-pointer hover:text-red-600 transition-all duration-200`}
              onClick={() => setActive(1)}
            >
              About
            </li>
            <li
              className={`${
                active == 2 ? "text-red-600" : "text-stone-950"
              } cursor-pointer hover:text-red-600 transition-all duration-200`}
              onClick={() => setActive(2)}
            >
              Contact
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
