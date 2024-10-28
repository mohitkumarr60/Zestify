import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "/config";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";
import AddCategory from "./AddCategory";
import Alert from "../Alert";
import { IoAlertCircleOutline } from "react-icons/io5";
import { MdDone } from "react-icons/md";

export default function EditCategories({ categories: initialCategories }) {
  const [categories, setCategories] = useState(initialCategories);
  const [isDelete, setIsDelete] = useState(false);
  const [category, setCategory] = useState("");

  async function handleDeleteCategory(item) {
    try {
      const response = await axios({
        method: "delete",
        url: `${BASE_URL}/delete-category`,
        data: { category: item },
        withCredentials: true,
      });
      if (response.status === 200) {
        setCategories((prevCategories) =>
          prevCategories.filter((category) => category !== item)
        );
        toast.success(response.data.message);
        setIsDelete(false);
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "An error occurred");
    }
  }

  function handleDeleteClick(item) {
    setIsDelete(true);
    setCategory(item);
  }

  return (
    <div className="flex flex-col max-w-[500px] m-auto">
      <AddCategory categories={categories} setCategories={setCategories}/>
      <div className="flex flex-col gap-3 mt-5">
        {categories.map((item, index) => (
          <div
            key={index}
            className="border rounded px-4 py-2 flex justify-between items-center"
          >
            <span>{item}</span>
            <span
              onClick={()=>handleDeleteClick(item)}
            >
              <IoMdClose className="size-6 text-stone-400 hover:text-stone-900 cursor-pointer" />
            </span>
          </div>
        ))}
      </div>
      {isDelete && (
        <Alert>
          <IoAlertCircleOutline className="text-4xl text-red-600 m-auto" />
          <h6 className="text-stone-200 mt-2">
            Are you sure you want to permanently delete this item?
          </h6>
          <br />
          <div className="flex gap-2 justify-center">
            <button
              className="bg-stone-800 hover:bg-stone-700 px-3 py-1 rounded flex items-center gap-1"
              onClick={() => setIsDelete(false)}
            >
              <span>
                <IoMdClose size={20} />
              </span>
              <span>Cancel</span>
            </button>
            <button
              className="bg-red-600 hover:bg-red-500 px-3 py-1 rounded flex items-center gap-1"
              onClick={() => {
                handleDeleteCategory(category);
              }}            
              >
              <span>
                <MdDone size={20} />
              </span>
              <span>Confirm</span>
            </button>
          </div>
        </Alert>
      )}
    </div>
  );
}
