import Chatbot from "./Chatbot.jsx";
export default function Hero() {
  return (
    <div className="container px-5 md:px-10 m-auto flex items-center py-20 md:py-0 md:pb-0 border-b ">
      <div className="w-full md:h-[80vh] md:flex gap-5 items-center">
        <div className="md:w-[50%] lg:w-[55%]">
          <h3 className="font-black text-5xl lg:text-6xl mb-4 leading-tight">
            Order Delicious Food with AI Assistance
          </h3>
          <p className="text-lg md:text-xl mb-6">
            Use our AI-powered chatbot for a convenient ordering experience
          </p>
          <button className="bg-gradient-to-br from-red-600 to-orange-600 hover:bg-gradient-to-br hover:from-orange-600 hover:to-red-600  px-4 py-2 rounded-md text-white text-lg">
            Order Now
          </button>
        </div>
        <Chatbot />
      </div>
    </div>
  );
}
