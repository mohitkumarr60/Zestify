import { HiPhone, HiLocationMarker, HiClock, HiMail } from "react-icons/hi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-tl from-stone-950 to-stone-800 w-full py-20 text-stone-200 flex items-center">
        <div className="container m-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-10">
          <div className="col-span-1">
            <h1 className="text-3xl font-bold">Zestify</h1>
            <p className="text-sm mt-4">Order Food Seamlessly</p>
          </div>
          <div className="col-span-1">
            <h5 className="text-lg font-bold">CONTACT US</h5>
            <br />
            <ul className="space-y-1 text-stone-300">
              <li className="hover:text-red-500 transition-all duration-100 flex gap-2 items-center">
                <span>
                  <HiPhone />
                </span>
                +1 123 456 789
              </li>
              <li className="hover:text-red-500 transition-all duration-100 flex gap-2 items-center">
                <span>
                  <HiMail />
                </span>
                abcd@xyz.com
              </li>
              <li className="hover:text-red-500 transition-all duration-100 flex gap-2 items-center">
                <span>
                  <HiLocationMarker />
                </span>
                1234 Street Name, City, Country
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h5 className="text-lg font-bold">HOURS</h5>
            <br />
            <ul className="space-y-1 text-stone-300">
              <li className="hover:text-red-500 transition-all duration-100 flex gap-2 items-center">
                <span>
                  <HiClock />
                </span>
                Mon-Fri: 9:00 AM - 5:00 PM
              </li>
              <li className="hover:text-red-500 transition-all duration-100 flex gap-2 items-center">
                <span>
                  <HiClock />
                </span>
                Sat-Sun: 10:00 AM - 2:00 PM
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h5 className="text-lg font-bold">SOCIAL LINKS</h5>
            <br />
            <ul className="space-y-1 text-stone-300">
              <li className="hover:text-red-500 transition-all duration-100 flex gap-2 items-center cursor-pointer">
                <a href="https://www.facebook.com/">
                  <FaFacebookF />
                </a>
                Facebook
              </li>
              <li className="hover:text-red-500 transition-all duration-100 flex gap-2 items-center cursor-pointer">
                <a href="https://x.com/">
                  <FaXTwitter />
                </a>
                Twitter
              </li>
              <li className="hover:text-red-500 transition-all duration-100 flex gap-2 items-center cursor-pointer">
                <a href="https://www.instagram.com/">
                  <AiFillInstagram />
                </a>
                Instagram
              </li>
              <li className="hover:text-red-500 transition-all duration-100 flex gap-2 items-center cursor-pointer">
                <a href="https://www.linkedin.com/">
                  <FaLinkedinIn />
                </a>
                LinkedIn
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="bg-stone-900 text-stone-400 text-center py-2 border-t border-stone-800 text-sm md:flex justify-between px-10">
        <p>&copy; 2024 Zestify. All rights reserved.</p>
        <p>
          Made with ❤️ by{" "}
          <span className="hover:text-stone-200">
            <a href="/team">Our Team</a>
          </span>
        </p>
      </div>
    </>
  );
}
