import { BASE_URL } from "/config";
import { useEffect, useState } from "react";
import ItemBox from "./ItemBox.jsx";
import axios from "axios";

export default function RemoveItem({ categories }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [items, setItems] = useState();
  const [allItems, setAllItems] = useState();
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

  useEffect(() => {
    async function fetchMenuData() {
      const response = await axios.get(`${BASE_URL}/get-all-items`, {
        withCredentials: true,
      });
      setItems(response.data);
      setAllItems(response.data);
    }
    fetchMenuData();
  }, []);

  return (
    <>
      <div className="flex gap-2">
        <button className={`${
              activeItem === 'All'
                ? "bg-stone-800 text-white"
                : "hover:bg-stone-200"
            } px-2 rounded`} onClick={() => handleItems("All")}>
          All
        </button>
        {categories?.map((category, index) => (
          <button
            key={index}
            className={`${
              activeItem === category
                ? "bg-stone-800 text-white"
                : "hover:bg-stone-200"
            } px-2 rounded`}
            onClick={() => handleItems(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <br />
      <div className="space-y-3">
        {items?.map((item, index) => (
          <ItemBox key={index} item={item} index={index} isEdit={false} />
        ))}
        <ItemBox />
      </div>
    </>
  );
}
