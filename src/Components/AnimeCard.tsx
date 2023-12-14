import { cardType } from "../types";
import { AnimeInfo } from "./AnimeInfo";
import ModalCard from "./ModalCard";

interface CardProps {
  allData: cardType;
}

export default function AnimeCard({ allData }: CardProps) {
  const { title, img, text, year } = allData;
  return (
    <div>
      <div className="card w-[150px] bg-base-100 shadow-xl m-4 md:w-72">
        <a href={img}>
          <img className="w-full h-28 md:h-40" src={img} alt="Shoes" />
        </a>
        <div className="card-body p-4 w-full ">
          <div className="h-10 mb-2 text-center flex flex-col items-center justify-center w-full">
            <div className="relative">
              <h2 className="text-sm font-semibold md:text-xl">{title}</h2>
            </div>
            <p className="text-xs my-1 md:text-lg">{year}</p>
          </div>
          <p className="text-center text-xs md:text-lg">{text}</p>
          <div className="card-actions justify-center mt-2">
            <ModalCard allData={allData} />
          </div>
          <div className="">
            <AnimeInfo myData={allData} />
          </div>
        </div>
      </div>
    </div>
  );
}
