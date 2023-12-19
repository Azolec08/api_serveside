import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
// import Footer from "./Components/Footer";

const FrameContext = () => {
  return (
    <div className="scroll-smooth">
      <div className=" z-20" id="upper-nav">
        <Nav />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default FrameContext;
