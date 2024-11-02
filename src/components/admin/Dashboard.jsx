import { useEffect, useState } from "react";
import Section from "../Section";
import axios from "axios";
import { BASE_URL } from "/config";
import AddItem from "./AddItem";
import EditItem from "./EditItem";
import EditCategories from "./EditCategories.jsx";
import { RiArrowRightSFill } from "react-icons/ri";

function Option({ children, activeOption, setActiveOption }) {
  return (
    <li
      className={`${
        activeOption && "text-stone-50"
      } hover:text-stone-50 cursor-pointer flex items-center justify-between`}
      onClick={() => {
        setActiveOption();
      }}
    >
      <span>{children}</span>
      <span>{activeOption && <RiArrowRightSFill size={20}/>}</span>
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
      <div className="text-3xl font-light">
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
      </div>
      <br />
      <br />
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="w-full md:w-[300px] ">
          <ol className="space-y-2 text-center md:text-left rounded-xl p-8 h-full bg-stone-800 text-stone-400">
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
        <div className="w-full bg-stone-800 text-stone-400 p-8 rounded-xl">
          {activeOption === 0 && (
            <div>
              <p className="text-3xl">Welcome to the admin dashboard!</p>
            </div>
          )}
          {activeOption === 1 && (
            <AddItem categories={categories} isEdit={false} />
          )}
          {activeOption === 2 && <EditItem categories={categories} />}
          {activeOption === 3 && <EditCategories categories={categories} />}
        </div>
      </div>
    </Section>
  );
}
