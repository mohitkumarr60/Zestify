import axios from "axios";
import { BASE_URL } from "/config";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AddCategory({ categories, setCategories }) {
  const [category, setCategory] = useState("");

  async function handleAddCategory() {
    try {
      //check if the entered category already exist in the categories array
      if (categories.includes(category)) {
        toast.error("Category already exists");
        return;
      }
      const response = await axios.post(
        `${BASE_URL}/add-category`,
        { category },
        { withCredentials: true }
      );
      if (response.status === 200) {
        // change the categories state
        toast.success(response.data.message);
        setCategories((prevCategories) => [...prevCategories, category]);
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }

  return (
    <>
      <div className="w-full flex p-2 border shadow rounded">
        <span className="flex flex-col w-full">
          <input
            type="text"
            id="category"
            placeholder="Enter a new category here"
            className="border px-3 py-2 rounded focus:outline-none focus:border-stone-400 w-auto"
            onChange={(e) => setCategory(e.target.value)}
          />
          <button
            className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-4 py-2 rounded mt-3"
            onClick={handleAddCategory}
          >
            Add New Category
          </button>
        </span>
      </div>
    </>
  );
}
