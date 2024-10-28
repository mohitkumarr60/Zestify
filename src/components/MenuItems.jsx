import axios from "axios";
import { toast } from "react-toastify";
export default function MenuItems({
  id,
  img,
  title,
  description,
  price,
  quantity,
}) {
  async function handleAddToCart() {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/add-to-cart",
        { itemId: id },
        { withCredentials: true }
      );
      if (response.status === 200) {
        toast.success("Item added to cart");
      }
    } catch {
      toast.error("Failed to add item to cart");
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
              <p className="font-bold text-[24px] text-yellow-500">Rs.{price}/-</p>
              <button
                className="text-stone-200 font-semibold bg-red-600 px-3 py-1 rounded hover:bg-red-500"
                onClick={handleAddToCart}
              >
                {quantity > 0 ? (
                  <span>{quantity}</span>
                ) : (
                  <span className="flex items-center gap-1">
                    Add
                    <span className="text-lg">+</span>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
