import Footer from "../components/Footer";
import FeedbackForm from "../components/FeedbackForm";
import botImage from "../assets/005.jpeg";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

export default function Feedback({ active, setActive }) {
  useEffect(() => {
    setActive(2);
  }, [setActive]);

  return (
    <>
      <Navbar active={active} />
      <section className="md:flex">
        <div className="md:w-[50%] lg:w-[60%] ">
          <img src={botImage} alt="image" className="object-cover h-[660px]" />
        </div>
        <div className="md:w-[50%] lg:w-[40%]">
          <FeedbackForm />
        </div>
      </section>
      <Footer />
    </>
  );
}
