import { IoMdClose } from "react-icons/io";

export default function DeleteCategory({ categories }) {
  return (
    <div className="flex flex-col max-w-[500px] m-auto gap-3">
      {categories.map((item, index) => (
        <div key={index} className="border rounded px-4 py-2 flex justify-between items-center">
          <span>{item}</span>
          <span><IoMdClose className="size-6 text-stone-400 hover:text-stone-900 cursor-pointer"/></span>
        </div>
      ))}
    </div>
  );
}
