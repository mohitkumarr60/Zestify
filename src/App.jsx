import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import Team from "./pages/Team";
import NoPage from "./pages/NoPage/NoPage";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(0);

  return (
    <div className="font-Manrope">
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
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
