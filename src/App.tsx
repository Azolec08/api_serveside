import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cards from "./pages/Cards";
import FrameContext from "./FrameContext";
import Favorites from "./pages/Favorites";
import Email from "./pages/Email";

function App() {
  return (
    <Routes>
      <Route element={<FrameContext />}>
        <Route path="/" element={<Home />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorite" element={<Favorites />} />
        <Route path="/email" element={<Email />} />
      </Route>
    </Routes>
  );
}

export default App;
