import axios from "axios";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";

function SignupForm({ setLogin, setSignup }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleClickLogin() {
    setSignup(false);
    setLogin(true);
  }

  async function handleClickSignup(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (name.length < 1 || email.length < 1 || password.length < 1) {
      toast.error("Please fill all the fields");
      return;
    }
    // validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address");
      return;
    }
    // validate password
    if (password.length < 8) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        name: name,
        email: email,
        password: password,
      });

      if (response.status === 201) {
        toast.success("User created successfully");
        setSignup(false);
        setLogin(true);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="fixed w-full h-full bg-white bg-opacity-20 backdrop-blur-xl z-[99999]">
      <div className="flex justify-center items-center h-full w-full">
        <div className="bg-white px-8 py-10 border rounded-xl w-[400px] relative">
          <IoMdClose
            className="text-3xl p-1 text-zinc-300 hover:text-zinc-500 cursor-pointer absolute top-3 right-3"
            onClick={() => {
              setSignup(false);
            }}
          />
          <h1 className="text-center text-3xl font-bold">Signup</h1>
          <br />
          <form>
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                className="border px-4 py-3 w-full rounded"
              />
            </div>
            <br />
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="border px-4 py-3 w-full rounded"
              />
            </div>
            <br />
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="border px-4 py-3 w-full rounded"
              />
            </div>
            <br />
            <div className="flex flex-col">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border px-4 py-3 w-full rounded"
              />
            </div>
            <br />
            <button
              type="button"
              className="bg-gradient-to-br from-red-600 to-orange-600 hover:bg-gradient-to-br hover:from-orange-600 hover:to-red-600 text-white font-semibold px-6 py-3 rounded"
              onClick={handleClickSignup}
            >
              Create Account
            </button>
            <br />
            <br />
            <div className="text-center">
              <p className="text-zinc-950 hover:underline cursor-pointer">
                Forgot Password?
              </p>
            </div>
            <div className="text-center mt-2 cursor-pointer">
              <p
                className="text-zinc-950 hover:underline"
                onClick={handleClickLogin}
              >
                Go Back to Login
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
