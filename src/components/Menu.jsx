import MenuItems from "./MenuItems";
import { useContext, useEffect, useState } from "react";
import Section from "./Section";
import axios from "axios";
import { AuthContext } from "@/AuthProvider";
import { BASE_URL } from "/config";
import All from "../assets/main.png";
import AllDark from "../assets/main_dark.png";
import Burger from "../assets/burger.png";
import BurgerDark from "../assets/burger_dark.png";
import Beverage from "../assets/beverage.png";
import BeverageDark from "../assets/beverage_dark.png";
import Snacks from "../assets/fries.png";
import SnacksDark from "../assets/fries_dark.png";
import "./component.css"

export default function Menu() {
  const [items, setItems] = useState();
  const [allItems, setAllItems] = useState();
  const { user } = useContext(AuthContext);

  async function fetchMenuData() {
    const response = await axios.get(`${BASE_URL}/get-all-items`, {
      withCredentials: true,
    });
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
        <menu className="border-b md:border-b-0 md:border-r md:py-5 md:w-[200px] md:space-y-1 md:block flex gap-3 py-2 flex-wrap">
          <h5 className="font-bold text-2xl mb-3 md:block hidden">
            Categories
          </h5>
          <li
            className={`${
              activeItem == "All" ? "text-white category-active" : "text-stone-600 category-button-effect"
            } cursor-pointer px-2 py-1 md:py-3 md:px-2 md:rounded-l-full md:flex items-center justify-between text-center md:text-left gap-5 relative rounded overflow-hidden border md:border-none`}
            onClick={() => {
              handleItems("All");
            }}
          >
            <span className="flex justify-end gap-5 w-full items-center text-lg p-1">
              <img src={
                activeItem == "All" ? All : AllDark
              } alt="" className="size-8" />
            All
            </span>
          </li>
          <li
            className={`${
              activeItem == "Main" ? "text-white category-active" : "text-stone-600 category-button-effect"
            } cursor-pointer px-2 py-1 md:py-3 md:px-2 md:rounded-l-full md:flex items-center justify-between text-center md:text-left gap-5 relative rounded overflow-hidden border md:border-none`}
            onClick={() => {
              handleItems("Main");
            }}
          >
           <span className="flex justify-end gap-5 w-full items-center text-lg p-1">
              <img src={
                activeItem == "Main" ? Burger : BurgerDark
              } alt="" className="size-8" />
            Burgers
            </span>
          </li>
          <li
            className={`${
              activeItem == "Beverages"
                ? "text-white category-active" : "text-stone-600 category-button-effect"
            } cursor-pointer px-2 py-1 md:py-3 md:px-2 md:rounded-l-full md:flex items-center justify-between text-center md:text-left gap-5 relative rounded overflow-hidden border md:border-none`}
            onClick={() => {
              handleItems("Beverages");
            }}
          >
          <span className="flex justify-end gap-5 w-full items-center text-lg p-1">
              <img src={
                activeItem == "Beverages" ? Beverage : BeverageDark
              } alt="" className="size-8" />
            Beverages
            </span>
          </li>
          <li
            className={`${
              activeItem == "Snacks"
                ? "text-white category-active" : "text-stone-600 category-button-effect"
            } cursor-pointer px-2 py-1 md:py-3 md:px-2 md:rounded-l-full md:flex items-center justify-between text-center md:text-left gap-5 relative rounded overflow-hidden border md:border-none`}
            onClick={() => {
              handleItems("Snacks");
            }}
          >
            <span className="flex justify-end gap-5 w-full items-center text-lg p-1">
              <img src={
                activeItem == "Snacks" ? Snacks : SnacksDark
              } alt="" className="size-8" />
            Snacks
            </span>
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
                quantity={
                  user?.cart.find((i) => i.itemId === item._id)?.quantity || 0
                }
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
