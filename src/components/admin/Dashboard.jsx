import { useEffect, useState } from "react";
import Section from "../Section";
import axios from "axios";
import { BASE_URL } from "/config";
import AddItem from "./AddItem";
import EditItem from "./EditItem";
import RemoveItem from "./RemoveItem";
import AddCategory from "./AddCategory";
import DeleteCategory from "./DeleteCategory.jsx";
function Option({ children, activeOption, setActiveOption }) {
  return (
    <li
      className={`${
        activeOption && "text-red-500"
      } hover:text-red-500 cursor-pointer`}
      onClick={() => {
        setActiveOption();
      }}
    >
      {children}
    </li>
  );
}

export default function Dashboard() {
  const [activeOption, setActiveOption] = useState(0);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await axios.get(`${BASE_URL}/get-categories`, {
          withCredentials: true,
        });
        setCategories(response.data[0].categories);
      } catch (error) {
        console.log(error);
      }
    }
    getCategories();
  }, []);

  return (
    <Section>
      <h6 className="text-3xl font-light">
        {(activeOption === 0 && (
          <>
            Dash<span className="text-4xl">board</span>
          </>
        )) ||
          (activeOption === 1 && (
            <>
              Add <span className="text-4xl">Item</span>
            </>
          )) ||
          (activeOption === 2 && (
            <>
              Edit <span className="text-4xl">Item</span>
            </>
          )) ||
          (activeOption === 3 && (
            <>
              Remove <span className="text-4xl">Item</span>
            </>
          )) ||
          (activeOption === 4 && (
            <>
              Add <span className="text-4xl">Category</span>
            </>
          )) ||
          (activeOption === 5 && (
            <>
              Delete <span className="text-4xl">Category</span>
            </>
          ))}
      </h6>
      <br />
      <br />
      <div className="flex gap-5">
        <div className="w-[200px] border-r">
          <ol className="space-y-2">
            <Option
              activeOption={activeOption === 0}
              setActiveOption={() => setActiveOption(0)}
            >
              Dashboard
            </Option>
            <Option
              activeOption={activeOption === 1}
              setActiveOption={() => setActiveOption(1)}
            >
              Add Item
            </Option>
            <Option
              activeOption={activeOption === 2}
              setActiveOption={() => setActiveOption(2)}
            >
              Edit Item
            </Option>
            <Option
              activeOption={activeOption === 3}
              setActiveOption={() => setActiveOption(3)}
            >
              Remove Item
            </Option>
            <Option
              activeOption={activeOption === 4}
              setActiveOption={() => setActiveOption(4)}
            >
              Add Category
            </Option>
            <Option
              activeOption={activeOption === 5}
              setActiveOption={() => setActiveOption(5)}
            >
              Delete Category
            </Option>
          </ol>
        </div>
        <div className="w-full">
          {activeOption === 0 && (
            <div>
              <h1>Dashboard</h1>
              <p>Welcome to the admin dashboard!</p>
            </div>
          )}
          {activeOption === 1 && <AddItem categories={categories} />}
          {activeOption === 2 && <EditItem categories={categories} />}
          {activeOption === 3 && <RemoveItem categories={categories} />}
          {activeOption === 4 && <AddCategory categories={categories} />}
          {activeOption === 5 && <DeleteCategory categories={categories} />}
        </div>
      </div>
    </Section>
  );
}
