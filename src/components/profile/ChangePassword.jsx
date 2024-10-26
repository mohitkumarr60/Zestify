import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
export default function ChangePassword({ user }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handlePasswordClick() {
    if (currentPassword === "") {
      toast.error("Please enter your current password");
      return;
    }
    if (newPassword === "") {
      toast.error("Please enter a new password");
      return;
    }
    if (confirmPassword === "") {
      toast.error("Please confirm your new password");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (currentPassword === newPassword) {
      toast.error("New password cannot be the same as the current password");
      return;
    }
    try {
      const response = await axios.put("http://localhost:5000/api/update-user-password", {
        oldPassword: currentPassword,
        newPassword: newPassword,
      }, {withCredentials:true});
      if (response.status === 200) {
        toast.success("Password updated successfully");
        return;
      }
    } catch (error) {
      toast.error(error.response.data.message);
      return;
    }
  }

  return (
    <div className="w-full space-y-3">
      <span className="flex flex-col w-full">
        <label htmlFor="current" className="text-stone-500 font-medium">
          Current Password:
        </label>
        <input
          type="password"
          id="current"
          onChange={(e) => {
            setCurrentPassword(e.target.value);
          }}
          className="px-3 py-2 w-full bg-transparent border border-stone-700 rounded-lg focus:outline-none font-thin"
        />
      </span>
      <span className="flex flex-col w-full">
        <label htmlFor="new" className="text-stone-500 font-medium">
          New Password:
        </label>
        <input
          type="password"
          id="new"
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
          className="px-3 py-2 w-full bg-transparent border border-stone-700 rounded-lg focus:outline-none font-thin"
        />
      </span>
      <span className="flex flex-col w-full">
        <label htmlFor="confirm" className="text-stone-500 font-medium">
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirm"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          className="px-3 py-2 w-full bg-transparent border border-stone-700 rounded-lg focus:outline-none font-thin"
        />
      </span>
      <button
        className="bg-gradient-to-r from-red-500 to-orange-500 px-4 py-1 rounded-lg text-white hover:to-orange-600 hover:from-red-600 hover:shadow-lg"
        onClick={handlePasswordClick}
      >
        Save
      </button>
    </div>
  );
}
