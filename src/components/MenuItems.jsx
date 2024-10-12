const handleAddToCart = () => {};

export default function MenuItems({ img, title, description, price }) {
  return (
    <>
      <div className="w-full md:w-auto lg:w-[48%] xl:w-[31%] border bg-white bg-opacity-35 backdrop-blur rounded-xl">
        <div className="p-2">
          <img src={img} alt={title} className="object-cover rounded-md" />
          <h3 className="text-lg font-bold mt-2">{title}</h3>
          <p className="text-sm text-stone-800">{description}</p>
          <div className="flex justify-between mt-1">
            <p className="font-bold text-xl">Rs.{price}/-</p>
            <button
              className="text-xs text-stone-800 font-semibold bg-yellow-400 px-2 rounded-md hover:bg-yellow-500"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
