const handleAddToCart = () => {
  // Add your logic to handle adding the item to the cart
  console.log(`Added ${title} to cart`);
};

export default function MenuItems({ img, title, description, price }) {
  return (
    <>
      <div className="w-[350px] border bg-zinc-50 rounded-xl">
        <div className="p-2">
          <img
            src={img}
            alt={title}
            className="object-cover rounded-md h-[200px]"
          />
          <h3 className="text-lg font-bold mt-2">{title}</h3>
          <p className="text-sm text-zinc-800">{description}</p>
          <div className="flex justify-between mt-1">
            <p className="font-bold text-xl">Rs.{price}/-</p>
            <button
              className="text-xs text-white font-semibold bg-purple-600 px-2 rounded-md hover:bg-purple-700"
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
