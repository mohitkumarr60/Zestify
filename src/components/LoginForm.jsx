import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { toast } from "react-toastify";

function LoginForm({ setSignIn, setLogin, setSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClickSignup() {
    setLogin(false);
    setSignup(true);
  }

  async function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill all the fields");
      return;
    }
    // validate email format
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      if (response.status === 200) {
        setSignIn(true);
        setLogin(false);
        toast.success("Login successful!");
        window.location.reload();
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      // Handle server errors or network issues
      toast.error("Login failed, please try again later.");
      console.error(error);
    }
  }

  return (
    <div className="fixed w-full h-full bg-white bg-opacity-20 backdrop-blur-xl z-[99999]">
      <div className="flex justify-center items-center h-full w-full">
        <div className="bg-white p-10 border rounded-xl w-[400px] relative">
          <IoMdClose
            className="text-3xl p-1 text-zinc-300 hover:text-zinc-500 cursor-pointer absolute top-3 right-3"
            onClick={() => {
              setLogin(false);
            }}
          />
          <h1 className="text-center text-3xl font-bold">Login Page</h1>
          <br />
          <form>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                className="border px-4 py-3 w-full rounded"
                placeholder="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="border px-4 py-3 w-full rounded"
                placeholder="**********"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />
            <button
              type="submit"
              className="bg-gradient-to-br from-red-600 to-orange-600 hover:bg-gradient-to-br hover:from-orange-600 hover:to-red-600 text-white font-semibold px-6 py-3 rounded "
              onClick={handleLogin}
            >
              Login
            </button>
            <br />
            <br />
            <div className="text-center">
              <p className="text-zinc-950 hover:underline cursor-pointer">
                Forgot Password?
              </p>
            </div>
            <div className="text-center mt-2">
              <p
                className="text-zinc-950 hover:underline cursor-pointer"
                onClick={handleClickSignup}
              >
                Don't have an account? Signup
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
