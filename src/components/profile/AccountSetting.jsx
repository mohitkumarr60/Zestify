import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AccountSetting({ user }) {
  const [userName, setUserName] = useState();

  function handleChange(value) {
    setUserName(value);
  }

  async function handleUserUpdate() {
    try{
      const response = await axios.put(
        "http://localhost:5000/api/update-user",
        { name: userName },
        { withCredentials: true }
      );
      if (response.status === 200) {
        window.location.reload();
        toast.success("User updated successfully");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className="w-full space-y-3">
      <span className="flex flex-col w-full">
        <label htmlFor="name" className="text-stone-500 font-medium">
          Name:
        </label>
        <input
          type="text"
          defaultValue={user.name}
          id="name"
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          className="px-3 py-2 w-full bg-transparent border border-stone-700 rounded-lg focus:outline-none font-thin"
        />
      </span>
      <span className="flex flex-col w-full">
        <label htmlFor="email" className="text-stone-500 font-medium">
          Email:
        </label>
        <input
          type="text"
          defaultValue={user.email}
          id="email"
          readOnly
          className="px-3 py-2 w-full bg-transparent border border-stone-700 rounded-lg focus:outline-none font-thin"
        />
      </span>
      <button
        className="bg-gradient-to-r from-red-500 to-orange-500 px-4 py-1 rounded-lg text-white hover:to-orange-600 hover:from-red-600 hover:shadow-lg"
        onClick={handleUserUpdate}
      >
        Save
      </button>
    </div>
  );
}
