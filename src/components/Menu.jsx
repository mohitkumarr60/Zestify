import MenuItems from "./MenuItems";
import image1 from "../assets/002.jpeg";
import image2 from "../assets/002.jpeg";
import image3 from "../assets/002.jpeg";
import image4 from "../assets/002.jpeg";
import image5 from "../assets/002.jpeg";
import image6 from "../assets/002.jpeg";
import { useState } from "react";

const Items = [
  {
    id: 1,
    img: image1,
    title: "Burger",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 99,
    category: "Main",
  },
  {
    id: 2,
    img: image2,
    title: "Pepsi",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 59,
    category: "Beverages",
  },
  {
    id: 3,
    img: image3,
    title: "Onion Rings",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 60,
    category: "Snacks",
  },
  {
    id: 4,
    img: image4,
    title: "Fries",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 50,
    category: "Snacks",
  },
  {
    id: 5,
    img: image5,
    title: "Aloo Tikki Burger",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 89,
    category: "Main",
  },
  {
    id: 6,
    img: image6,
    title: "Coke",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 49,
    category: "Beverages",
  },
];

export default function Menu() {
  const [items, SetItems] = useState(
    Items.filter((e) => e.category === "Main")
  );

  const [activeItem, setActiveItem] = useState("Main");

  function handleItems(e) {
    SetItems(Items.filter((item) => item.category === e));
    setActiveItem(e);
  }

  return (
    <section className="container px-10 m-auto flex items-center">
      <div className="w-full py-20">
        <h1 className="text-3xl font-black text-center">OUR MENU</h1>
        <br />
        <br />
        <br />
        <div className="flex w-full gap-5">
          <menu className="border-r p-10 w-[300px] space-y-2">
            <h5 className="font-bold text-xl mb-5">Categories</h5>
            <li
              className={`${
                activeItem == "Main"
                  ? "text-purple-600 font-semibold"
                  : "text-zinc-800"
              } cursor-pointer hover:text-purple-600 transition-all duration-200`}
              onClick={() => {
                handleItems("Main");
              }}
            >
              Main Items
            </li>
            <li
              className={`${
                activeItem == "Beverages"
                  ? "text-purple-600 font-semibold"
                  : "text-zinc-800"
              } cursor-pointer hover:text-purple-600 transition-all duration-200`}
              onClick={() => {
                handleItems("Beverages");
              }}
            >
              Beverages
            </li>
            <li
              className={`${
                activeItem == "Snacks"
                  ? "text-purple-600 font-semibold"
                  : "text-zinc-800"
              } cursor-pointer hover:text-purple-600 transition-all duration-200`}
              onClick={() => {
                handleItems("Snacks");
              }}
            >
              Snacks
            </li>
          </menu>
          <div className="flex flex-wrap gap-5">
            {items ? (
              items.map((item) => (
                <MenuItems
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                />
              ))
            ) : (
              <MenuItems />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
