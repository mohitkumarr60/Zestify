import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProfilePage from "../components/ProfilePage";
import { useEffect } from "react";

export default function Profile({ active, setActive }) {
  useEffect(() => {
    setActive(0);
  }, [setActive]);

  return (
    <>
      <Navbar active={active} />
      <ProfilePage />
      <Footer />
    </>
  );
}
