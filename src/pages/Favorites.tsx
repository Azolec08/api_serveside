import { globalContext } from "../StoreContext/Context";
import FavoriteContainer from "../Components/FavoriteContainer";
import AllData from "../api/allData.json";

const Favorites = () => {
  const { data, state } = globalContext();
  return (
    <div>
      {state.num === 0 ? (
        <h1 className="h-[90vh] w-full flex items-center justify-center text-3xl font-semibold  ">
          No Favorite Data
        </h1>
      ) : (
        <div className=" grid grid-cols-2 md:grid-cols-3 ">
          {AllData.map((api) => {
            if (data[api.id] !== 0) {
              return (
                <div key={api.id}>
                  <FavoriteContainer allData={api} />
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default Favorites;
