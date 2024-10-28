import { ImBin } from "react-icons/im";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "/config";
import Alert from "../Alert.jsx";
import { IoAlertCircleOutline } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";

export default function ItemBox({ item , setItems, setSelectedItem, setIsSelected}) {
  const [isDelete, setIsDelete] = useState(false);

  async function handleDeleteItem() {
    const response = await axios({
      method: "delete",
      url: `${BASE_URL}/delete-item/${item._id}`,
      withCredentials: true,
    });
    if (response.status === 200) {
      setIsDelete(false);
      setItems((prev) => prev.filter((i) => i._id !== item._id));
      toast.success("Item deleted successfully");
    }
  }

  function handleEditItem() {
    setIsSelected(true);
    setSelectedItem(item);
  }

  return (
    <>
      {item && (
        <div className="border shadow-sm rounded-lg overflow-hidden flex justify-between">
          <div className="flex gap-3 items-center">
            <div>
              <img
                src={item.image}
                alt=""
                className="aspect-square object-cover size-20"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold">{item.name}</span>
              <span className="text-sm">{item.description}</span>
              <span className="text-sm font-bold text-red-500">
                Rs. {item.price}/-
              </span>
            </div>
          </div>
          <div className="flex items-center p-3">
            <button className="flex flex-col gap-4">
              <MdEdit className="size-5 text-stone-400 hover:text-stone-900" onClick={handleEditItem}/>
              <ImBin
                className="size-5 text-stone-400 hover:text-stone-900"
                onClick={() => setIsDelete(true)}
              />
            </button>
          </div>
        </div>
      )}
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
              onClick={handleDeleteItem}
            >
              <span>
                <MdDone size={20} />
              </span>
              <span>Confirm</span>
            </button>
          </div>
        </Alert>
      )}
    </>
  );
}
