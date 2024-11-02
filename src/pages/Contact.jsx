import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact({ active, setActive }) {
  useEffect(() => {
    setActive(4);
  }, [setActive]);

  return (
    <>
      <Navbar active={active} />

      <section className="h-[600px] pt-44 bg-slate-200">
        <h4 className="text-5xl font-semibold text-center pb-6">
          Perfectly Balanced
        </h4>
        <p className="text-7xl text-red-600 text-center font-bold">
          QUALITY & TASTE
        </p>
        <div className="flex justify-center gap-14 pt-10 text-gray-900 font-semibold">
          <div className=" ">
            <div className="flex justify-center">
              <IoCall />
            </div>
            <div className="flex justify-center">
              <p>Call us</p>
            </div>
            <div className="flex justify-center">
              <p>+91-9466338524</p>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <FaLocationDot />
            </div>
            <div className="flex justify-center">
              <p>Location</p>
            </div>
            <div className="flex justify-center">
              <p>Rewari, Haryana</p>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <MdEmail />
            </div>
            <div className="flex justify-center">
              <p>Email us</p>
            </div>
            <div className="flex justify-center">
              <p>+91-9466338524</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
