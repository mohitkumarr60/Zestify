import Footer from "../components/Footer";
import Menu from "../components/Menu";
import FAQ from "../components/FAQ";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <FAQ />
      <Footer />
    </>
  );
}
