import React from "react";
import GoodiesCards from "./GoodiesCards";
const Redbubble = () => {
  return (
    <div
      className="h-screen bg-cover px-32 py-36"
      style={{ backgroundImage: "url(/assets/imgs/whiteBg.svg)" }}
    >
      <div className=" text-5xl font-extrabold text-darkBlue w-fit">
        Unleash Your Creativity
        <div>
          <img className=" w-52 block ml-auto" src="/assets/imgs/redLine.svg" />
        </div>
      </div>
      <GoodiesCards />
    </div>
  );
};

export default Redbubble;
