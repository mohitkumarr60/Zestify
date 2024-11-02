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
        <div className="w-full flex gap-5">
          <input
            type="text"
            id="category"
            placeholder="Enter a new category here"
            className="px-3 py-2 rounded bg-stone-700 focus:outline-none flex-1 text-stone-100 placeholder:text-stone-400"
            onChange={(e) => setCategory(e.target.value)}
          />
          <button
            className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-4 py-2 rounded w-[80px]"
            onClick={handleAddCategory}
          >
            Add +
          </button>
        </div>
    </>
  );
}
