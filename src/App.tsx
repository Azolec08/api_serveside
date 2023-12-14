import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cards from "./pages/Cards";
import FrameContext from "./FrameContext";

function App() {
  return (
    <Routes>
      <Route element={<FrameContext />}>
        <Route path="/" element={<Home />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
