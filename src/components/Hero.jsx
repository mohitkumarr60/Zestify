import { useContext } from "react";
import Chatbot from "./Chatbot.jsx";
import { AuthContext } from "../AuthProvider.jsx";
import bg from "../assets/background.jpg";
export default function Hero() {
  const { signIn } = useContext(AuthContext);
  const { setLogin } = useContext(AuthContext);

  const handleOrderClick = () => {
    if (signIn === false) {
      setLogin(true);
      return;
    }
    if (window.innerWidth < 768) {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: window.innerHeight - 68,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute top-0 left-0 z-[-1] w-full h-[92vh] bg-black">
        <img
          src={bg}
          alt=""
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Content Section */}
      <div className="container px-5 md:px-10 m-auto flex items-center md:py-0 md:pb-0 border-b md:h-[92vh] text-white py-40">
        <div className="w-full md:h-[92vh] flex items-center flex-col md:flex-row gap-20">
          {/* Text Section */}
          <div className="md:w-[50%] lg:w-[55%] md:h-auto flex flex-col md:block justify-center bg-black-gr">
            <h3 className="font-black text-5xl lg:text-6xl mb-4 lg:leading-tight">
              Order Delicious Food with AI Assistance
            </h3>
            <p className="text-lg md:text-xl mb-6">
              Use our AI-powered chatbot for a convenient ordering experience
            </p>
            <button
              className="bg-gradient-to-br from-red-600 to-orange-600 hover:bg-gradient-to-br hover:from-orange-600 hover:to-red-600 px-6 py-3 rounded-md text-white text-lg max-w-max"
              onClick={handleOrderClick}
            >
              Order Now
            </button>
          </div>

          {/* Chatbot Section */}
          <div className="h-auto w-full md:w-[50%] lg:w-[45%] flex items-center">
            <Chatbot />
          </div>
          <div className="md:hidden">
            <p className="text-stone-950 text-xl font-light">Powered by AI</p>
          </div>
        </div>
      </div>
    </div>
  );
}
