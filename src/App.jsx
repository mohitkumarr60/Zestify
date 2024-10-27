import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import Team from "./pages/Team";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import NoPage from "./pages/NoPage/NoPage";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";

function App() {
  const [active, setActive] = useState(0);
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
            element={
              <UserRoute>
                <Profile active={active} setActive={setActive} />
              </UserRoute>
            }
          />
          <Route
            path="/admin_dashboard"
            element={
              <AdminRoute>
                <AdminDashboard active={active} setActive={setActive} />
              </AdminRoute>
            }
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
