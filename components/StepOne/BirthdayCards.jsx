import React from "react";
import BirthdayCard from "./BirthdayCard";

const BirthdayCards = ({ bg }) => {
  const cards = [
    "/assets/imgs/birthday.png",
    "/assets/imgs/birthday2.png",
    "/assets/imgs/birthday3.png",
    "/assets/imgs/birthday4.png",
    "/assets/imgs/birthday5.png",
    "/assets/imgs/birthday6.png",
  ];
  return (
    <div className="flex flex-wrap justify-center gap-4 w-fit mx-auto mt-20">
      {cards.map((bCard, key) => (
        <BirthdayCard image={bCard} key={key} bg={bg} />
      ))}
    </div>
  );
};

export default BirthdayCards;
