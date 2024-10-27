import MenuItems from "./MenuItems";
import { GoDotFill } from "react-icons/go";
import { useContext, useEffect, useState } from "react";
import Section from "./Section";
import axios from "axios";
import { AuthContext } from "@/AuthProvider";
import { BASE_URL } from "/config";

export default function Menu() {
  const [items, setItems] = useState();
  const [allItems, setAllItems] = useState();
  const { user } = useContext(AuthContext);

  async function fetchMenuData() {
    const response = await axios.get(
      `${BASE_URL}/get-all-items`,
      {
        withCredentials: true,
      }
    );
    console.log(response);
    return response.data;
  }
  useEffect(() => {
    fetchMenuData().then((data) => {
      setItems(data);
      setAllItems(data);
    });
  }, []);

  const [activeItem, setActiveItem] = useState("All");

  function handleItems(e) {
    if (e === "All") {
      setItems(allItems);
      setActiveItem(e);
    } else {
      if (allItems) {
        setItems(allItems.filter((item) => item.category === e));
      } else {
        setItems(null);
      }
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
                key={item._id}
                id={item._id}
                img={item.image}
                title={item.name}
                description={item.description}
                price={item.price}
                quantity={user?.cart.find((i) => i._id === item._id)?.quantity || 0}
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
