import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Dashboard from "@/components/admin/Dashboard.jsx";
import { useEffect } from "react";

export default function AdminDashboard({active, setActive}) {
  useEffect(() => {
    setActive(4);
  }, [setActive]);
  return (
    <>
      <Navbar active={active} />
      <Dashboard/>
      <Footer />
    </>
  );
}
