import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className="hero h-[70vh] bg-cover"
        style={{
          backgroundImage:
            "url('https://wallpaperaccess.com/full/1799795.jpg')",
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Anime World</h1>

            <p className="mb-5"></p>
          </div>
        </div>
      </div>
      <div className="w-full px-2 py-3 flex items-center justify-around bg-hero-second bg-cover">
        <img src="./images/image1.png" alt="img" className="w-40 md" />
        <p className="text-xl text-center text-white font-semibold">
          Explore Anime World
        </p>
      </div>
      <div className="w-full px-2 py-3 flex items-center justify-around bg-music-texture bg-start bg-cover">
        <div className="flex flex-col items-center gap-y-2">
          <p className="text-xl text-white text-center font-semibold">
            Explore Trailers And Music
          </p>
          <Link to="/cards">
            <div className="btn p-2 text-sm btn-primary">Get Started</div>
          </Link>
        </div>
        <img src="./images/image2.png" alt="img2" className="w-40" />
      </div>
    </div>
  );
};

export default Home;
