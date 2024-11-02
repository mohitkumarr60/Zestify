import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function About({ active, setActive }) {
  useEffect(() => {
    setActive(1);
  }, [setActive]);

  return (
    <>
      <Navbar active={active} />
      <section className="h-[600px] md:pt-32 ezy__about11 light py-14 md:py-24 bg-slate-200 dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div className="container px-4">
          <div className="grid grid-cols-12 gap-3 justify-center items-center">
            <div className="col-span-12 lg:col-span-6">
              <div className="text-center lg:px-20">
                <p className="opacity-75 uppercase">
                  Revolutionizing the Way You Order Food
                </p>
                <h1 className="text-4xl md:text-6xl leading-tight font-light uppercase tracking-wide md:pt-6">
                  Future of <span className="font-medium">Food Ordering</span>
                  <span className="inline-flex w-3 h-3 rounded-full bg-red-600 ml-2"></span>
                </h1>
                <p className="text-xl md:mt-8  mt-4 mb-6">
                  Simply chat with our bot, tell us your cravings, and we'll
                  handle the rest.
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="lg:ml-12">
                <p className="opacity-75 mb-4">
                  <span className="text-[40px] text-blue-600 font-bold">S</span>
                  imply chat with our AI-powered bot about your cravings,
                  dietary preferences, or specific requests. Our intelligent
                  system analyzes your input and suggests the perfect dishes
                  from a variety of restaurants. Placing your order is as easy
                  as a few clicks, and you can track your delivery in real-time.
                </p>
                <p className="opacity-75 mb-4">
                  Experience the future of food ordering with Zestify. Our
                  AI-powered platform offers personalized recommendations, a
                  diverse range of cuisines from top-rated restaurants, speedy
                  delivery, and exceptional customer service. Join the Zestify
                  community today and revolutionize your food ordering
                  experience.
                </p>
                <p className="opacity-75">
                  Zestify is more than just a food delivery service. We're a
                  culinary experience, powered by AI. Our mission is to make
                  food ordering a delightful experience, every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
