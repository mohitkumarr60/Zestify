import pattern from "../assets/bgPattern.png";
import { BiSolidSend } from "react-icons/bi";

export default function Chatbot() {
  return (
    <>
      <div className="md:w-[50%] lg:w-[45%] bg-gradient-to-br from-red-500 to-orange-600 bg-opacity-50 rounded-2xl p-4 h-[450px] shadow-lg mt-20 md:mt-0">
        <div className="bg-white h-full rounded-lg border border-red-300 shadow-md p-3">
          <div className="border relative h-[340px] rounded-md shadow bg-orange-100">
            <img
              src={pattern}
              alt=""
              className="absolute object-cover h-full w-full opacity-20"
            />
            <span className="bg-white px-3 py-1 rounded-l-full rounded-tr-full">
              Hello
            </span>
          </div>
          <div className="bottom-0 w-full mt-[10px]">
            <div className="relative">
              <input
                className="border w-full rounded-md px-3 py-2 focus:outline-orange-500 focus:shadow-md focus:shadow-orange-100"
                type="text"
                placeholder="Enter your message"
              />
              <BiSolidSend className="absolute bottom-2 right-2 size-6 text-zinc-700 hover:text-zinc-950 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
