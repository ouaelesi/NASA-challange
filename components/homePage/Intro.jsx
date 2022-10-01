import React from "react";

const Intro = () => {
  return (
    <div className="px-32 py-40 text-white w-1/2 relative ">
      <div className="font-extrabold uppercase text-6xl"> Go beyond</div>
      <div className="text-2xl mt-5 font-light">
        The exploration of space will go ahead, whether we join in it or not,
        and it is one of the great adventures of all time.
      </div>
      <button className="btn mt-10 bg-red-500 text-2xl font-semibold uppercase hover:bg-red-600">
        Get Started
      </button>
      <img
        src="/assets/imgs/spaceShip.svg"
        className="absolute -bottom-20 left-10 w-64 spaceShip"
      />
    </div>
  );
};

export default Intro;
