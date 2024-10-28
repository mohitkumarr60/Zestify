import axios from "axios";
import { BASE_URL } from "/config";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function AddItem({
  categories,
  isEdit,
  selectedItem,
  setIsSelected = () => {},
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    if (isEdit && selectedItem) {
      setTitle(selectedItem.name);
      setDescription(selectedItem.description);
      setPrice(selectedItem.price);
      setCategory(selectedItem.category);
      setImage(selectedItem.image);
    }
  }, [isEdit, selectedItem]);

  // Check for changes
  useEffect(() => {
    if (isEdit && selectedItem) {
      setHasChanges(
        title !== selectedItem.name ||
          description !== selectedItem.description ||
          price !== selectedItem.price ||
          category !== selectedItem.category ||
          image !== selectedItem.image
      );
    }
  }, [title, description, price, category, image, isEdit, selectedItem]);

  async function handleAddItem() {
    try {
      if (!title || !description || !price || !category || !image) {
        toast.error("Please fill all the fields");
        return;
      }
      if (price < 0) {
        toast.error("Price cannot be negative");
        return;
      }

      const response = await axios.post(
        `${BASE_URL}/add-new-item`,
        { name: title, description, price, category, image },
        { withCredentials: true }
      );
      if (response.status === 201) {
        toast.success("Item added successfully");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  async function handleUpdateItem() {
    try {
      if (!title || !description || !price || !category || !image) {
        toast.error("Please fill all the fields");
        return;
      }
      if (price < 0) {
        toast.error("Price cannot be negative");
        return;
      }

      const response = await axios.put(
        `${BASE_URL}/update-item/${selectedItem._id}`,
        { name: title, description, price, category, image },
        { withCredentials: true }
      );

      if (response.status === 200) {
        toast.success("Item updated successfully");
        await new Promise((resolve) => setTimeout(resolve, 2000));
        window.location.reload();
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <>
      <div className="w-full flex gap-5">
        <span className="flex flex-col w-1/2">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            className="border px-2 py-1 rounded focus:outline-none focus:border-stone-400"
            onChange={(e) => setTitle(e.target.value)}
          />
        </span>
        <span className="flex flex-col w-1/2">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            className="border px-2 py-1 rounded focus:outline-none focus:border-stone-400"
            onChange={(e) => setDescription(e.target.value)}
          />
        </span>
      </div>
      <div className="w-full flex gap-5 mt-3">
        <span className="flex flex-col w-1/2">
          <label htmlFor="price">Price (in INR):</label>
          <input
            type="number"
            min={0}
            id="price"
            value={price}
            className="border px-2 py-1 rounded focus:outline-none focus:border-stone-400"
            onChange={(e) => setPrice(parseInt(e.target.value))}
          />
        </span>
        <span className="flex flex-col w-1/2">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            className="border px-2 py-1 rounded focus:outline-none focus:border-stone-400"
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories?.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </span>
      </div>
      <span className="flex flex-col w-full mt-3">
        <label htmlFor="image">Image Link:</label>
        <input
          type="text"
          id="image"
          value={image}
          className="border px-2 py-1 rounded focus:outline-none focus:border-stone-400"
          onChange={(e) => setImage(e.target.value)}
        />
      </span>
      {isEdit ? (
        <div className="flex justify-between">
          <button
            className="bg-stone-700 hover:bg-stone-800 text-white px-4 py-2 rounded mt-5"
            onClick={() => setIsSelected(false)}
          >
            Cancel
          </button>
          <button
            className={`${
              hasChanges
                ? "bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                : "bg-stone-400 cursor-not-allowed"
            } text-white px-4 py-2 rounded mt-5`}
            onClick={handleUpdateItem}
            disabled={!hasChanges}
          >
            Update Item
          </button>
        </div>
      ) : (
        <button
          className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-4 py-2 rounded mt-5"
          onClick={handleAddItem}
        >
          Add Item
        </button>
      )}
    </>
  );
}
