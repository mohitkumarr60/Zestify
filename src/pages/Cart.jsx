import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../components/Footer";


import CartContent from "../components/cart/CartContent";
export default function Cart({active, setActive}) {
  useEffect(() => {
    setActive(5); 
    
  }, [setActive]);

  return (
    <>
      <Navbar active={active}/>
      <CartContent />   
      <Footer />
    </>
  );
}
