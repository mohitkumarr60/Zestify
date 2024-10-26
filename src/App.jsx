import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import Team from "./pages/Team";
import Profile from "./pages/Profile";
import NoPage from "./pages/NoPage/NoPage";
import { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./AuthProvider";

function App() {
  const [active, setActive] = useState(0);
  const { user } = useContext(AuthContext);
  return (
    <div className="font-Manrope">
      <ToastContainer
        position="top-center"
        theme="light"
        style={{ zIndex: 99999999999 }}
      />
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<Home active={active} setActive={setActive} />}
          />
          <Route
            path="/home"
            element={<Home active={active} setActive={setActive} />}
          />
          <Route
            path="/feedback"
            element={<Feedback active={active} setActive={setActive} />}
          />
          <Route
            path="/team"
            element={<Team active={active} setActive={setActive} />}
          />
          <Route
            path="/profile"
            element={<Profile active={active} setActive={setActive} />}
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
