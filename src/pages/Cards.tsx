import axios from "axios";
import { useState, useEffect } from "react";
import AnimeCard from "../Components/AnimeCard";

const Cards = () => {
  const [get, setGet] = useState(null);

  useEffect(() => {
    async function api() {
      try {
        const apiData = await axios.get(process.env.REACT_APP_API_URL);
        setGet(apiData.data);
      } catch (error) {
        console.log("something is wrong");
      }
    }

    api();
  }, [get]);
  return (
    <main>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3">
        {get.map((item: any) => {
          return (
            <div key={item.id}>
              <AnimeCard allData={item} />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Cards;
