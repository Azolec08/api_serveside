import { useState, Fragment } from "react";
import { Combobox } from "@headlessui/react";
import allData from "../api/allData.json";

export function Searchbar() {
  const [selectedPerson, setSelectedPerson] = useState(allData);
  const [animeData, setAnimeData] = useState(allData);
  const [query, setQuery] = useState("");

  const handleClickData = () => {
    const data = allData.filter((anime) =>
      anime.title.toLowerCase().includes(query.toLowerCase())
    );

    setAnimeData(data);
  };

  const filteredPeople =
    query === ""
      ? allData
      : allData.filter((person) => {
          return person.title.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <>
      <Combobox value={selectedPerson} onChange={setSelectedPerson}>
        <Combobox.Input
          className="p-2 w-72 relative"
          placeholder="Search"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(person: any) => person.title}
        />
        <button onClick={handleClickData}>Click</button>
        <Combobox.Options className="absolute h-[200px] z-10 overflow-y-scroll w-72 top-[135px]">
          {filteredPeople.map((person) => (
            <Combobox.Option key={person.id} value={person} as={Fragment}>
              {({ active }) => (
                <li
                  className={`${
                    active
                      ? "bg-blue-500 text-white p-1 cursor-pointer"
                      : "bg-white text-black p-1 "
                  }`}
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
      <div>
        {animeData.map((data) => {
          return <div key={data.id}>{data.title}</div>;
        })}
      </div>
    </>
  );
}
