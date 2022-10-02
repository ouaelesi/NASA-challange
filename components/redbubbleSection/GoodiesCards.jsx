import React, { useState } from "react";
import GoodiesCard from "./GoodiesCard";
const GoodiesCards = () => {
  const goodies = [
    {
      id: 1,
      image: "/assets/imgs/hoodie.png",
      name: "Hoodie",
    },
    {
      id: 2,
      image: "/assets/imgs/hat.png",
      name: "Cap",
    },
    {
      id: 3,
      image: "/assets/imgs/t9achr.png",
      name: "Socks",
    },
    {
      id: 4,
      image: "/assets/imgs/bowl.png",
      name: "Drinkware",
    },
  ];
  const [activeElem, setActive] = useState(2);
  const nextEleme = (value) => {
    let newValue = activeElem + value;

    if (newValue == 0) {
      newValue = 4;
    }
    if (newValue == 5) {
      newValue = 1;
    }
    setActive(newValue);
  };
  return (
    <div className="flex gap-8 px-10 w-fit mx-auto mt-20">
      <div onClick={() => nextEleme(-1)} className="relative">
        <img
          src="/assets/imgs/previous.svg"
          className="mt-14 w-7 cursor-pointer"
        />
      </div>
      {goodies.map((good, key) => (
        <GoodiesCard
          id={good.id}
          image={good.image}
          name={good.name}
          isActive={activeElem === good.id}
          key={key}
        />
      ))}
      <div onClick={() => nextEleme(1)} className="relative">
        <img src="/assets/imgs/next.svg" className="mt-14 w-7 cursor-pointer" />
      </div>
    </div>
  );
};

export default GoodiesCards;
