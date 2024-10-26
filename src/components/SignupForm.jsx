import { IoMdClose } from "react-icons/io";

function SignupForm({ setLogin, setSignup }) {
  function handleClickLogin() {
    setSignup(false);
    setLogin(true);
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
                className="border px-4 py-3 w-full rounded"
              />
            </div>
            <br />
            <div className="flex flex-col">
              <label htmlFor="username">Email</label>
              <input
                type="text"
                id="username"
                className="border px-4 py-3 w-full rounded"
              />
            </div>
            <br />
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="border px-4 py-3 w-full rounded"
              />
            </div>
            <br />
            <div className="flex flex-col">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="border px-4 py-3 w-full rounded"
              />
            </div>
            <br />
            <button
              type="submit"
              className="bg-gradient-to-br from-red-600 to-orange-600 hover:bg-gradient-to-br hover:from-orange-600 hover:to-red-600 text-white font-semibold px-6 py-3 rounded"
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
