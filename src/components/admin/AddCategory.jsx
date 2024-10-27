import axios from "axios";
import { BASE_URL } from "/config";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AddCategory({ categories }) {
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
        toast.success(response.data.message);
        console.log(response)
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }

  return (
    <>
      <div className="w-full flex flex-col">
        <span className="flex flex-col w-[400px] m-auto">
          <label htmlFor="category" className="text-center mb-3">
            Enter New Category:
          </label>
          <input
            type="text"
            id="category"
            className="border px-2 py-1 rounded focus:outline-none focus:border-stone-400"
            onChange={(e) => setCategory(e.target.value)}
          />
        </span>
        <button
          className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white w-[100px] px-4 py-2 rounded mt-5 m-auto"
          onClick={handleAddCategory}
        >
          Add Item
        </button>
      </div>
    </>
  );
}
