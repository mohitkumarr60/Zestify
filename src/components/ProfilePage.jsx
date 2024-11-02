import { toast } from "react-toastify";
import { AuthContext } from "@/AuthProvider";
import { useContext, useState } from "react";
import Section from "./Section";
import AccountSetting from "./profile/AccountSetting";
import ChangePassword from "./profile/ChangePassword";
import MyOrders from "./profile/MyOrders";
import MyWishlist from "./profile/MyWishlist";
import { RiAdminLine } from "react-icons/ri";
import axios from "axios";
import { BASE_URL } from "/config";

// import { MdOutlineEdit } from "react-icons/md";

function ProfileMenu({ active, setActive, index, children }) {
  const { user } = useContext(AuthContext);

  function handleClick() {
    setActive(index);
  }

  return (
    <li
      className={`${
        active === index && "text-orange-500"
      } hover:text-orange-500 cursor-pointer transition-all duration-100`}
      onClick={handleClick}
    >
      {children}
    </li>
  );
}

export default function ProfilePage() {
  const { user } = useContext(AuthContext);
  const [active, setActive] = useState(0);

  async function handleLogout() {
    try {
      const response = await axios({
        method: "get",
        url: `${BASE_URL}/logout`,
        withCredentials: true,
      });

      if (response.status === 200) {
        window.location.href = "/";
        return;
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <Section>
      <div className="max-w-[1000px] m-auto">
        <h5 className="text-3xl">Hello, {user.name}</h5>
        <br />
        <div className="flex gap-5">
          <div className="flex w-full bg-stone-800 rounded-3xl p-8 text-stone-200">
            {active === 0 && <AccountSetting user={user} />}
            {active === 1 && <ChangePassword user={user} />}
            {active === 2 && <MyOrders user={user} />}
            {active === 3 && <MyWishlist user={user} />}
          </div>
          <div className="w-[300px] border-l bg-stone-800 p-8 rounded-3xl">
            <div className="flex justify-center relative">
              <span className="absolute top-[-80px] bg-white rounded-full p-2">
                {/* <span className="absolute right-3 bg-black/50 rounded-full p-1 opacity-50 hover:opacity-100 transition-opacity duration-100 cursor-pointer" onClick={handleAvatarClick}>
                <MdOutlineEdit size={25} className="text-white" />
              </span> */}
                {/* <input type="file" className="hidden" ref={fileInputRef} accept="image/*" onChange={handleFileChange} /> */}
                {user.avatar ? (
                  <img src={user.avatar} alt="" />
                ) : (
                  <div className="bg-gradient-to-tr from-red-500 to-orange-500 size-28 rounded-full flex justify-center items-center text-4xl font-bold text-white">
                    {user.isAdmin ? (
                      <RiAdminLine size={60} />
                    ) : (
                      user.name.slice(0, 2).toUpperCase()
                    )}
                  </div>
                )}
              </span>
            </div>
            <ol className="mt-20 text-stone-200 space-y-5 ">
              <ProfileMenu active={active} setActive={setActive} index={0}>
                Account Settings
              </ProfileMenu>
              <ProfileMenu active={active} setActive={setActive} index={1}>
                Change Password
              </ProfileMenu>
              {!user.isAdmin && (
                <>
                  <ProfileMenu active={active} setActive={setActive} index={2}>
                    My Orders
                  </ProfileMenu>
                  <ProfileMenu active={active} setActive={setActive} index={3}>
                    My Wishlist
                  </ProfileMenu>
                </>
              )}
              <li
                className="cursor-pointer hover:text-orange-500 transition-all duration-100"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ol>
          </div>
        </div>
      </div>
    </Section>
  );
}
