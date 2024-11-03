import Navbar from "../Components/Navbar";
import Footer from "../components/Footer";
import OurTeam from "../Components/OurTeam";
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
