import { Link } from "react-router-dom";
// import { globalContext } from "../StoreContext/Context";

const Home = () => {
  // const { state, dispatch } = globalContext();
  return (
    <div>
      <div
        className="hero min-h-screen bg-contain"
        style={{
          backgroundImage:
            "url('https://rare-gallery.com/thumbnail/1377037-solo-leveling-manhwa-sung-jinwoo-shadows-4k-pc.jpg')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Anime World</h1>

            <p className="mb-5"></p>
          </div>
        </div>
      </div>
      <div className="w-full px-2 py-3 flex items-center justify-around">
        <img src="./images/image1.png" alt="img" className="w-40 md" />
        <p className="text-xl text-center font-semibold">Explore Anime World</p>
      </div>
      <div className="w-full px-2 py-3 flex items-center justify-around">
        <div className="flex flex-col items-center gap-y-2">
          <p className="text-xl text-center font-semibold">
            Explore Trailers And Music
          </p>
          <Link to="/cards">
            <button className="btn p-2 text-sm btn-primary">Get Started</button>
          </Link>
        </div>
        <img src="./images/image2.png" alt="img2" className="w-40" />
      </div>
    </div>
  );
};

export default Home;
