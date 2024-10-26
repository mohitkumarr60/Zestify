import pattern from "../assets/bgPattern.png";
import { BiSolidSend } from "react-icons/bi";

export default function Chatbot() {
  return (
    <>
      <div className="md:w-[50%] lg:w-[45%] bg-gradient-to-br from-red-500 to-orange-600 bg-opacity-50 rounded-2xl p-4 h-[450px] shadow-lg mt-20 md:mt-0">
        <div className="bg-white h-full rounded-lg border border-red-300 shadow-md p-3">
          <div className="border h-[340px] rounded-md shadow bg-orange-100">
            <div className="p-2 overflow-y-scroll text-sm md:text-base">
              <div className="flex justify-end mt-2">
                <span className="bg-white px-3 py-1 rounded-l-full rounded-tr-full z-10 shadow">
                  Query
                </span>
                <div className="bg-black text-white size-7 md:size-8 flex items-center justify-center rounded-full ml-1">
                  U
                </div>
              </div>
              <div className="flex justify-start mt-2">
                <div className="bg-black text-white size-7 md:size-8 flex items-center justify-center rounded-full mr-1">
                  AI
                </div>
                <span className="bg-gradient-to-br from-red-600 to-orange-600 text-white px-3 py-1 rounded-r-full rounded-tl-full z-10 shadow">
                  Response
                </span>
              </div>
            </div>
          </div>
          <div className="bottom-0 w-full mt-[10px]">
            <div className="relative">
              <input
                className="border w-full rounded-md px-3 py-[10px] focus:shadow-md focus:shadow-orange-200 focus:outline-none text-sm shadow placeholder:text-zinc-500"
                type="text"
                placeholder="Chat with AI..."
              />
              <BiSolidSend className="absolute bottom-2 right-2 size-6 text-orange-600 hover:text-orange-700 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
