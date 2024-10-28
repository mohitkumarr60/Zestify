import { useEffect, useState } from "react";
import Section from "../Section";
import axios from "axios";
import { BASE_URL } from "/config";
import AddItem from "./AddItem";
import EditItem from "./EditItem";
import EditCategories from "./EditCategories.jsx";
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
              Edit <span className="text-4xl">Categories</span>
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
              Edit Categories
            </Option>
          </ol>
        </div>
        <div className="w-full">
          {activeOption === 0 && (
            <div>
              <p className="text-3xl">Welcome to the admin dashboard!</p>
            </div>
          )}
          {activeOption === 1 && <AddItem categories={categories} isEdit={false}/>}
          {activeOption === 2 && <EditItem categories={categories} />}
          {activeOption === 3 && <EditCategories categories={categories} />}
        </div>
      </div>
    </Section>
  );
}
