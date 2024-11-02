import { FiPlus, FiMinus } from "react-icons/fi";
import { ImBin } from "react-icons/im";

export default function CartItem({ item, cart }) {
  return (
    <div className="my-4 border shadow flex gap-2 rounded-lg overflow-hidden p-3">
      <img
        className="aspect-square size-20 sm:size-24 rounded-md hidden sm:block"
        src={item.image}
        alt="img"
      />
      <div className="w-full flex flex-col justify-between">
        <div className="w-full flex">
          <img
            className="aspect-square size-[83px] sm:size-24 rounded-md sm:hidden mr-2"
            src={item.image}
            alt="img"
          />
          <div className="w-full">
            <span className="flex justify-between">
              <p className="font-bold text-lg">{item.name}</p>
              <p className="text-stone-500 text-lg font-semibold hidden sm:block">
                Rs. {item.price}
                /-
              </p>
            </span>
            <p className="text-sm text-stone-600 font-medium pt-1">
              {item.description}
            </p>
          </div>
        </div>
        <div className="flex w-full justify-between text-stone-950 items-center mt-2 sm:mt-0">
          <span className="flex font-semibold">
            <button className="size-7 sm:size-8 bg-stone-200 hover:bg-stone-300 rounded-md flex justify-center items-center">
              <FiMinus className="size-5" />
            </button>
            <button className="size-7 sm:size-8 text-lg flex justify-center items-center">
              {cart.find((i) => i.itemId === item._id)?.quantity || 0}
            </button>
            <button className="size-7 sm:size-8 bg-stone-200 hover:bg-stone-300 rounded-md  flex justify-center items-center">
              <FiPlus className="size-5" />
            </button>
            <span className="ml-4 text-base sm:text-lg font-bold flex items-center text-red-600">
              Total: Rs.{" "}
              {item.price * cart.find((i) => i.itemId === item._id)?.quantity ||
                0}
              /-
            </span>
          </span>
          <span>
            <ImBin
              size={20}
              className="text-stone-400 hover:text-red-600 cursor-pointer"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
