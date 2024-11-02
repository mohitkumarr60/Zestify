import axios from "axios";
import { BASE_URL } from "/config";
import { toast } from "react-toastify";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
export default function MenuItems({
  id,
  img,
  title,
  description,
  price,
  user,
}) {
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    setQuantity(user?.cart?.find((item) => item.itemId === id)?.quantity || 0);
  }, [id]);

  async function handleAddItem() {
    const response = await axios({
      method: "post",
      url: `${BASE_URL}/add-to-cart`,
      data: {
        itemId: id,
      },
      withCredentials: true,
    });
    if (response.status === 200) {
      setQuantity((prev) => prev + 1);
    }
  }

  async function handleRemoveItem() {
    try {
      const response = await axios({
        method: "post",
        url: `${BASE_URL}/remove-from-cart`,
        data: {
          itemId: id,
        },
        withCredentials: true,
      });
      if (response.status === 200) {
        setQuantity((prev) => prev - 1);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <>
      <div className="w-full lg:w-[46%] xl:w-[30%] aspect-square border bg-white bg-opacity-35 backdrop-blur rounded-xl relative overflow-hidden">
        <img
          src={img}
          alt={title}
          className="object-cover aspect-square w-full absolute top-0 left-0 z-0"
        />
        <div className="absolute bottom-0 z-10 bg-gradient-to-t from-black to-transparent w-full h-[80%] flex items-end text-stone-100 p-3">
          <div className="w-full">
            <h3 className="text-[24px] mt-2">{title}</h3>
            <p className="text-px] text-stone-200">{description}</p>
            <div className="flex justify-between w-full items-center">
              <p className="font-bold text-[24px] text-yellow-500">
                Rs.{price}/-
              </p>

              {quantity !== 0 ? (
                <span className="flex font-semibold">
                  <button
                    className="size-7 sm:size-8 bg-red-600 hover:bg-red-700 rounded-md flex justify-center items-center"
                    onClick={handleRemoveItem}
                  >
                    <FiMinus className="size-5" />
                  </button>
                  <button className="size-7 sm:size-8 text-lg flex justify-center items-center">
                    {quantity || 0}
                  </button>
                  <button
                    className="size-7 sm:size-8 bg-red-600 hover:bg-red-700 rounded-md  flex justify-center items-center"
                    onClick={handleAddItem}
                  >
                    <FiPlus className="size-5" />
                  </button>
                </span>
              ) : (
                <button className="flex items-center gap-1 bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md" onClick={handleAddItem}>
                  Add
                  <span className="text-lg"><FiPlus /></span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
