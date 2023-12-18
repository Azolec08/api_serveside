import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
// import Footer from "./Components/Footer";

const FrameContext = () => {
  return (
    <div>
      <div className=" z-20">
        <Nav />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default FrameContext;
