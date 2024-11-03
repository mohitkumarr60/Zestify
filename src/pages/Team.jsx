import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OurTeam from "../components/OurTeam";
import { useEffect } from "react";

export default function Team({ active, setActive }) {
  useEffect(() => {
    setActive(7);
  }, [setActive]);

  return (
    <>
      <Navbar />
      <OurTeam />
      <Footer />
    </>
  );
}
