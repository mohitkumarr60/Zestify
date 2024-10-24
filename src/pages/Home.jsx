import Footer from "../components/Footer";
import Menu from "../components/Menu";
import FAQ from "../components/FAQ";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { useEffect } from "react";

export default function Home({ active, setActive }) {
  useEffect(() => {
    setActive(0);
  }, [setActive]);

  return (
    <>
      <Navbar active={active} />
      <Hero />
      <Menu />
      <FAQ />
      <Footer />
    </>
  );
}
