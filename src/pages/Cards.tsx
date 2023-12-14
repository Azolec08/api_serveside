import AnimeCard from "../Components/AnimeCard";
import allData from "../api/allData.json";
import { useState, Fragment } from "react";
import { Combobox } from "@headlessui/react";
import PulseLoader from "react-spinners/PulseLoader";
import PuffLoader from "react-spinners/PuffLoader";
import { globalContext } from "../StoreContext/Context";

const Cards = () => {
  const [selectedPerson, setSelectedPerson] = useState(allData);
  const [animeData, setAnimeData] = useState(allData);
  const [query, setQuery] = useState("");

  const { state, dispatch } = globalContext();

  const handleOnCLikSwitch = () => {
    dispatch({ type: "mySwitch", payload: true });
    setTimeout(() => {
      dispatch({ type: "mySwitch", payload: false });
    }, 3000);
  };

  const handleClickData = () => {
    const data = allData.filter((anime) =>
      anime.title.toLowerCase().includes(query.toLowerCase())
    );

    setAnimeData(data);
    handleOnCLikSwitch();
  };

  const filteredPeople =
    query === ""
      ? allData
      : allData.filter((person) => {
          return person.title.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <main className="">
      <div className="p-5 flex flex-row justify-center">
        <Combobox value={selectedPerson} onChange={setSelectedPerson}>
          <div className="relative">
            <Combobox.Input
              className="p-2 w-72 "
              placeholder="Search"
              onChange={(event) => setQuery(event.target.value)}
              displayValue={(person: any) => person.title}
            />
            <button
              className="absolute right-0 p-2 bg-blue-500 text-white"
              onClick={handleClickData}
            >
              {state.switch ? (
                <PulseLoader
                  color="white"
                  size={10}
                  className=""
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                "Search"
              )}
            </button>
          </div>
          <Combobox.Options className="absolute h-[195px] z-10 overflow-hidden w-72 top-[135px]">
            {filteredPeople.map((person) => (
              <Combobox.Option key={person.id} value={person} as={Fragment}>
                {({ active }) => (
                  <li
                    className={`${
                      active
                        ? "bg-blue-500 text-white p-1 cursor-pointer"
                        : "bg-white text-black p-1 "
                    }`}
                    onClick={handleClickData}
                  >
                    <div className="flex items-center gap-x-2">
                      <img src={person.img} className="w-10 h-10" alt="" />
                      {person.title}
                    </div>
                  </li>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>
      </div>
      {state.switch ? (
        <div className="w-full h-screen flex items-center justify-center">
          <PuffLoader
            color="blue"
            size={150}
            className=""
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 place-items-center bg-trailer-texture bg-contain py-5 lg:grid-cols-3">
          {animeData.map((item: any) => {
            return (
              <div key={item.id}>
                <AnimeCard allData={item} />
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default Cards;
