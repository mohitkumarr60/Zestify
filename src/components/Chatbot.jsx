import { IoMdArrowRoundForward } from "react-icons/io";

export default function Chatbot() {
  return (
    <>
      <div className="bg-stone-100 h-full rounded-[34px] shadow-md p-3 w-full flex flex-col gap-3 bg-opacity-60 backdrop-blur">
        <div className="h-[450px] rounded-[26px] bg-stone-200 relative overflow-hidden shadow shadow-stone-400">
          <div className="p-2 text-base overflow-y-scroll h-[385px]">
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
        <span className="relative">
          <input
            className="w-full rounded-full px-4 py-3 focus:shadow-md focus:outline-none placeholder:text-zinc-500 text-stone-950 shadow shadow-stone-400"
            type="text"
            placeholder="Chat with AI..."
          />
          <span className="absolute right-[6px] top-[6px] bg-stone-950 hover:bg-stone-700 p-[6px] rounded-full cursor-pointer active:bg-orange-600 transition-all duration-100">
            <IoMdArrowRoundForward className="text-2xl cursor-pointer" />
          </span>
        </span>
      </div>
    </>
  );
}
