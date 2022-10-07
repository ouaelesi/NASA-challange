import React from "react";

const Planets = () => {
  return (
    <div className="bg-red-500 w-1/2  absolute lg:block -right-96 hidden">
      <img
        src="/assets/imgs/sun.svg"
        className="absolute left-0  top-24 animate-spin-slow duration-25 hover:scale-105 "
      />

      <img
        src="/assets/imgs/earth.svg"
        className="absolute   top-96 -left-16  lg:w-36  animate-spin-slow duration-25 hover:scale-150 "
      />
      <img
        src="/assets/imgs/Saturn.svg"
        className="absolute   mt-20  lg:w-32  earth duration-25 hover:scale-150 "
      />
      <img
        src="/assets/imgs/jupyter.svg"
        className="absolute   top-28  -left-40 mt-20  w-36  duration-25 hover:scale-150 "
      />
      <img
        src="/assets/imgs/moon.svg"
        className="absolute   top-64  -left-5 mt-20  w-20 duration-25 hover:scale-150 "
      />
      <img
        src="/assets/imgs/mercury.svg"
        className="absolute    top-0  -left-52 mt-20  w-28 animate-spin-slow duration-25 hover:scale-150 "
      />
      <img
        src="/assets/imgs/mars.svg"
        className="absolute   top-64  left-32 mt-20  w-20 animate-spin-slow duration-25 hover:scale-150 "
      />
      <img
        src="/assets/imgs/venus.svg"
        className="absolute   top-96  left-10 mt-20  w-32 animate-spin-slow duration-25 hover:scale-150 "
      />
      <img
        src="/assets/imgs/uranus.svg"
        className="absolute   top-96 uranus -left-96 mt-20  w-32  duration-25 uranus hover:scale-150 "
      />
      <img
        src="/assets/imgs/neptune.svg"
        className="absolute   -top-10  -left-96 mt-20  w-32 animate-spin-slow duration-25 hover:scale-150 "
      />
    </div>
  );
};

export default Planets;
