import MenuItems from "./MenuItems";
import image1 from "../assets/002.jpeg";
import image2 from "../assets/002.jpeg";
import image3 from "../assets/002.jpeg";
import image4 from "../assets/002.jpeg";
import image5 from "../assets/002.jpeg";
import image6 from "../assets/002.jpeg";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";
import Section from "./Section";

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
  const [items, SetItems] = useState(Items);

  const [activeItem, setActiveItem] = useState("All");

  function handleItems(e) {
    if (e === "All") {
      SetItems(Items);
      setActiveItem(e);
    } else {
      SetItems(Items.filter((item) => item.category === e));
      setActiveItem(e);
    }
  }

  return (
    <Section>
      <h1 className="text-3xl font-black text-center">OUR MENU</h1>
      <br />
      <br />
      <br />
      <div className="md:flex w-full gap-5">
        <menu className="border-b md:border-b-0 md:border-r md:py-5 md:w-[200px] md:space-y-1 md:block flex gap-3 py-2 ">
          <h5 className="font-bold text-xl mb-3 md:block hidden">Categories</h5>
          <li
            className={`${
              activeItem == "All" ? "text-red-500 font-bold" : "text-stone-600"
            } cursor-pointer hover:font-bold transition-all duration-200 px-2 py-1 md:py-1 md:px-2 rounded-l-full md:flex items-center justify-between text-center md:text-left`}
            onClick={() => {
              handleItems("All");
            }}
          >
            All
            {activeItem == "All" && (
              <span className="w-full flex justify-center mt-1 md:w-auto">
                <GoDotFill size={18} className="text-red-500" />
              </span>
            )}
          </li>
          <li
            className={`${
              activeItem == "Main" ? "text-red-500 font-bold" : "text-stone-600"
            } cursor-pointer hover:font-bold transition-all duration-200 px-2 py-1 md:py-1 md:px-2 rounded-l-full md:flex items-center justify-between text-center md:text-left`}
            onClick={() => {
              handleItems("Main");
            }}
          >
            Main
            {activeItem == "Main" && (
              <span className="w-full flex justify-center mt-1 md:w-auto">
                <GoDotFill size={18} className="text-red-500" />
              </span>
            )}
          </li>
          <li
            className={`${
              activeItem == "Beverages"
                ? "text-red-500 font-bold"
                : "text-stone-600"
            } cursor-pointer hover:font-bold transition-all duration-200 px-2 py-1 md:py-1 md:px-2 rounded-l-full md:flex items-center justify-between text-center md:text-left`}
            onClick={() => {
              handleItems("Beverages");
            }}
          >
            Beverages
            {activeItem == "Beverages" && (
              <span className="w-full flex justify-center mt-1 md:w-auto">
                <GoDotFill size={18} className="text-red-500" />
              </span>
            )}
          </li>
          <li
            className={`${
              activeItem == "Snacks"
                ? "text-red-500 font-bold"
                : "text-stone-600"
            } cursor-pointer hover:font-bold transition-all duration-200 px-2 py-1 md:py-1 md:px-2 rounded-l-full md:flex items-center justify-between text-center md:text-left`}
            onClick={() => {
              handleItems("Snacks");
            }}
          >
            Snacks
            {activeItem == "Snacks" && (
              <span className="w-full flex justify-center mt-1 md:w-auto">
                <GoDotFill size={18} className="text-red-500" />
              </span>
            )}
          </li>
        </menu>
        <div className="flex flex-1 flex-wrap gap-5 mt-3 md:mt-0">
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
    </Section>
  );
}
