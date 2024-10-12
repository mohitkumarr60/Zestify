import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import Team from "./pages/Team";
import NoPage from "./pages/NoPage/NoPage";

function App() {
  return (
    <div className="font-Manrope">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
