import { cardType } from "../types";
import ModalCard from "./ModalCard";

interface CardProps {
  allData: cardType;
}

export default function AnimeCard({ allData }: CardProps) {
  const { title, img, text, year } = allData;
  return (
    <div>
      <div className="card w-60 bg-base-100 shadow-xl m-4">
        <figure>
          <img className="w-full h-40" src={img} alt="Shoes" />
        </figure>
        <div className="card-body w-full ">
          <div className="h-10 mb-2 text-center flex flex-col items-center justify-center w-full">
            <div className="relative">
              <h2 className="card-title">{title}</h2>
            </div>
            <p>{year}</p>
          </div>
          <p className="text-center ">{text}</p>
          <div className="card-actions justify-center mt-2">
            <ModalCard allData={allData} />
          </div>
        </div>
      </div>
    </div>
  );
}
