import { toast } from "react-toastify";
import { FaLocationDot } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem.jsx";
import axios from "axios";
import { BASE_URL } from "/config.js";
import Section from "../Section.jsx";
import { AuthContext } from "@/AuthProvider.jsx";

export default function CartContent() {
  const [cart, setCart] = useState();
  const { user } = useContext(AuthContext);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState(user?.address);

  async function fetchCartData() {
    const response = await axios.get(`${BASE_URL}/get-cart`, {
      withCredentials: true,
    });
    return response.data;
  }

  useEffect(() => {
    fetchCartData().then((data) => {
      setCart(data);
    });
  }, []);

  useEffect(() => {
    // Calculate the total cost of all items
    function calculateTotal() {
      const newTotal = cart?.reduce((acc, item) => {
        return (
          acc +
          item.price *
            (user?.cart.find((i) => i.itemId === item._id)?.quantity || 0)
        );
      }, 0);
      setTotal(newTotal);
    }
    calculateTotal();
  }, [cart, user]);

  async function handleAddLocation() {
    try {
      const response = await axios({
        method: "put",
        url: `${BASE_URL}/update-address`,
      });
      if (response.status === 200) {
        toast.success("Location updated successfully");
      }
    } catch {
      toast.error("Something went wrong");
    }
  }

  return (
    <Section>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-2/3">
          <p className="font-semibold">
            {cart?.length > 0 ? cart?.length : 0} item you have selected
          </p>
          {cart?.map((item) => (
            <CartItem key={item._id} item={item} cart={user?.cart} />
          ))}
        </div>

        <div className="w-full md:w-1/3">
          <p className="font-semibold">Choose a delivery address</p>
          <div className="p-4 bg-white rounded-lg shadow border mt-4">
            <div className=" flex gap-3 items-center">
              <FaLocationDot className="size-7" />
              <div className="w-full">
                <p className="text-blue-800 text-lg font-bold">
                  SELECT LOCATION
                </p>
                <p className="text-sm pt-1 text-stone-600">
                  {address ? address : "Please select a location"}
                </p>
              </div>
            </div>
            <div className="flex justify-end w-full mt-2">
              <button
                className="border border-green-800 px-3 py-1 font-bold text-green-800 rounded-md hover:bg-green-800 hover:text-white transition-all duration-100"
                onClick={handleAddLocation}
              >
                {user?.address ? "CHANGE LOCATION" : "ADD LOCATION"}
              </button>
            </div>
          </div>

          <p className="font-semibold mt-6">Price details</p>

          <div className=" mt-4 p-4 bg-white rounded-lg border shadow">
            <div className="flex flex-col gap-4 font-medium text-gray-900 text-[15px]">
              <div className="flex justify-between">
                <p>Sub total</p>
                <p>Rs. {total}.00</p>
              </div>

              <div className="flex justify-between">
                <p>Tax & Delivery</p>
                <p>Rs.{(total * 18) / 100 + (total * 2) / 100}.00</p>
              </div>

              <div className="flex justify-between">
                <p>Total Payable Amount</p>
                <p>Rs.{total + (total * 18) / 100 + (total * 2) / 100}.00</p>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button className="border border-green-800 px-4 py-2 font-bold text-green-800 rounded-md hover:bg-green-800 hover:text-white active:scale-95 transition-all duration-100">
                ORDER & PAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
