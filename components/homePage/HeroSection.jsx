import React from "react";
import Planets from "./Planets";

const HeroSection = () => {
  return (
    <div className="h-screen relative">
      <img src="/assets/imgs/starsBg.svg" className="absolute"></img>
      <img src="/assets/imgs/Star.svg" className="absolute  flyingStar"></img>
      <img
        src="/assets/imgs/eclips.svg"
        className="absolute -top-20 right-0 w-2/3 "
      ></img>

      <Planets />
    </div>
  );
};

export default HeroSection;
