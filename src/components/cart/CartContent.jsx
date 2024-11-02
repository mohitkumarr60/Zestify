import { toast } from "react-toastify";
import { FaLocationDot } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem.jsx";
import axios from "axios";
import { BASE_URL } from "/config.js";
import Section from "../Section.jsx";
import { AuthContext } from "@/AuthProvider.jsx";
import Alert from "../Alert.jsx";

export default function CartContent() {
  const [cart, setCart] = useState();
  const { user } = useContext(AuthContext);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState(user?.address);
  const [activeLocation, setActiveLocation] = useState(false);
  const [houseNumber, setHouseNumber] = useState();
  const [floor, setFloor] = useState(null);
  const [street, setStreet] = useState(null);
  const [landmark, setLandmark] = useState(null);
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [pincode, setPincode] = useState(null);

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
    if (!houseNumber || !street || !country || !city || !state || !pincode) {
      toast.error("Please fill all the required fields");
      return;
    }
    //combine the address
    const fullAddress = `${houseNumber}, ${
      floor ? `${floor}, ` : ""
    }${street}, ${
      landmark ? `${landmark}, ` : ""
    } ${city}, ${state}, ${country}, ${pincode}`;

    setAddress(fullAddress);

    try {
      const response = await axios({
        method: "post",
        url: `${BASE_URL}/add-address`,
        data: {
          address: fullAddress,
        },
        withCredentials: true,
      });
      if (response.status === 200) {
        toast.success("Address added successfully");
        setActiveLocation(false);
        setHouseNumber(null);
        setFloor(null);
        setStreet(null);
        setLandmark(null);
        setCity(null);
        setState(null);
        setCountry(null);
        setPincode(null);
      }
    } catch (error) {
      toast.error(error.response.data.message);
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
                onClick={() => setActiveLocation(true)}
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
      {activeLocation && (
        <Alert>
          <div className="flex flex-col gap-4 max-w-[600px] p-3">
            <p className="font-medium text-2xl text-center text-stone-200">
              Add Location
            </p>
            <span className="flex gap-5 w-full">
              <input
                type="text"
                placeholder="House Number *"
                name="houseNumber"
                required
                className="px-2 py-2 relative bg-transparent border-b requiredField focus:outline-none border-stone-600 focus:border-stone-300 placeholder:text-stone-500 w-1/2"
                onChange={(e) => setHouseNumber(e.target.value)}
              />
              <input
                type="text"
                placeholder="Floor"
                name="floor"
                className="px-2 py-2 relative bg-transparent border-b requiredField focus:outline-none border-stone-600 focus:border-stone-300 placeholder:text-stone-500 w-1/2"
                onChange={(e) => setFloor(e.target.value)}
              />
            </span>
            <input
              type="text"
              placeholder="Street *"
              name="street"
              required
              className="px-2 py-2 relative bg-transparent border-b requiredField focus:outline-none border-stone-600 focus:border-stone-300 placeholder:text-stone-500"
              onChange={(e) => setStreet(e.target.value)}
            />
            <input
              type="text"
              placeholder="Landmark"
              name="landmark"
              className="px-2 py-2 relative bg-transparent border-b requiredField focus:outline-none border-stone-600 focus:border-stone-300 placeholder:text-stone-500"
              onChange={(e) => setLandmark(e.target.value)}
            />
            <span className="md:flex gap-5 w-full">
              <span className="flex gap-5">
                <input
                  type="text"
                  placeholder="Country *"
                  name="country"
                  required
                  className="px-2 py-2 relative bg-transparent border-b requiredField focus:outline-none border-stone-600 focus:border-stone-300 placeholder:text-stone-500 w-1/2"
                  onChange={(e) => setCountry(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="State *"
                  name="state"
                  required
                  className="px-2 py-2 relative bg-transparent border-b requiredField focus:outline-none border-stone-600 focus:border-stone-300 placeholder:text-stone-500 w-1/2"
                  onChange={(e) => setState(e.target.value)}
                />
              </span>
              <span className="flex gap-5 mt-4 md:mt-0">
                <input
                  type="text"
                  placeholder="City *"
                  name="city"
                  required
                  className="px-2 py-2 relative bg-transparent border-b requiredField focus:outline-none border-stone-600 focus:border-stone-300 placeholder:text-stone-500 w-1/2"
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="PIN Code *"
                  name="pinCode"
                  required
                  className="px-2 py-2 relative bg-transparent border-b requiredField focus:outline-none border-stone-600 focus:border-stone-300 placeholder:text-stone-500 w-1/2"
                  onChange={(e) => setPincode(e.target.value)}
                />
              </span>
            </span>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 font-bold rounded-md bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-stone-100 active:scale-95 transition-all duration-100"
                onClick={() => setActiveLocation(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 font-bold rounded-md bg-green-900 hover:bg-green-800 active:scale-95 transition-all duration-100 text-stone-300 hover:text-stone-100"
                onClick={handleAddLocation}
              >
                Add
              </button>
            </div>
          </div>
        </Alert>
      )}
    </Section>
  );
}
