import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

export default function ItemBox({ item, index, isEdit }) {
  return (
    <>
      {item && (
        <div className="border shadow-sm rounded-lg overflow-hidden flex justify-between">
          <div className="flex gap-3 items-center">
            <div>
              <img
                src={item.image}
                alt=""
                className="aspect-square object-cover size-20"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold">{item.name}</span>
              <span className="text-sm">{item.description}</span>
              <span className="text-sm font-bold text-red-500">
                Rs. {item.price}/-
              </span>
            </div>
          </div>
          <div className="flex items-center p-5">
            <button>
              {isEdit ? (
                <FiEdit className="size-6 text-stone-400 hover:text-stone-900" />
              ) : (
                <AiOutlineDelete className="size-7 text-stone-400 hover:text-stone-900" />
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
