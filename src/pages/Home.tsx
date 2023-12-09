import { Link } from "react-router-dom";
import { globalContext } from "../StoreContext/Context";

const Home = () => {
  const { state, dispatch } = globalContext();
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images2.alphacoders.com/598/thumbbig-598673.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Anime World</h1>

            <p className="mb-5"></p>
            <Link to="/cards">
              <button className="btn btn-primary">Get Started</button>
            </Link>
            <div>{state.switch ? "mark" : "becca"}</div>
            <button
              onClick={() => dispatch({ type: "mySwitch", payload: true })}
            >
              change1
            </button>
            <button
              onClick={() => dispatch({ type: "mySwitch", payload: false })}
            >
              change2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
