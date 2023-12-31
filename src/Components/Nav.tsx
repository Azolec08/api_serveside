import { Link } from "react-router-dom";
import DropDown from "./dropDown";
import { globalContext } from "../StoreContext/Context";

export default function Nav() {
  const { state } = globalContext();
  return (
    <div>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="mr-2 lg:hidden">
            <DropDown />
          </div>
          <img
            className="w-12 h-10 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt67HTPJXUhvnDbJChS2CcHBY7jeIOAkV3jA&usqp=CAU"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to="/">
              <li>
                <a>Home</a>
              </li>
            </Link>
            <Link to="/cards">
              <li>
                <a>Anime List</a>
              </li>
            </Link>
            <Link to="/favorite">
              <li className="relative">
                {state.num === 0 ? (
                  <span className="absolute  p-2 right-2"></span>
                ) : (
                  <span className="w-[0] absolute top-[-1px] p-2 right-2 bg-red-500" />
                )}
                <a>Favorite </a>
              </li>
            </Link>
            <Link to="/About">
              <li>
                <a>About</a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex justify-end w-2/3 ">
          <Link to="/email">
            <button className="font-semibold text-white p-2 rounded-md bg-button-texture bg-cover">
              Message Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
