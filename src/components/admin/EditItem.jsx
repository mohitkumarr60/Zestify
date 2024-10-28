import { BASE_URL } from "/config";
import { useEffect, useState } from "react";
import ItemBox from "./ItemBox.jsx";
import axios from "axios";
import AddItem from "./AddItem.jsx";

export default function EditItem({ categories }) {
  const [items, setItems] = useState();
  const [allItems, setAllItems] = useState();
  const [activeItem, setActiveItem] = useState("All");
  const [isSelected, setIsSelected] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

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
      {!isSelected ? (
        <>
          <div className="flex gap-2">
            <button
              className={`${
                activeItem === "All"
                  ? "bg-stone-800 text-white"
                  : "hover:bg-stone-200"
              } px-2 rounded`}
              onClick={() => handleItems("All")}
            >
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
              <div key={index}>
                <ItemBox
                  item={item}
                  setItems={setItems}
                  setSelectedItem={setSelectedItem}
                  setIsSelected={setIsSelected}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <AddItem
            categories={categories}
            isEdit={true}
            setIsSelected={setIsSelected}
            selectedItem={selectedItem}
          />
        </>
      )}
    </>
  );
}
