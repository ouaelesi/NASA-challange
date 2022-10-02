import React from "react";

const Footer = () => {
  return (
    <div className="relative h-60 overflow-hidden">
      <img
        src="/assets/imgs/starsBg.svg"
        className="absolute animate-ping-slow"
      ></img>
      <img
        src="/assets/imgs/starsBg.svg"
        className="absolute animate-ping-slowest"
      ></img>
      <img
        src="/assets/imgs/starsBg.svg"
        className="absolute animate-ping-normal"
      ></img>
      <div className="text-center text-white mt-14 text-3xl">Let's Chat !</div>
      <div className="flex gap-8 w-fit mx-auto mt-5">
        <img src="/assets/imgs/linkedin.png" />
        <img src="/assets/imgs/twitterLogo.png" />
        <img src="/assets/imgs/gmail.png" />
      </div>
      <div className="text-center text-white mt-7 text-xl font-light">
        Copyright 2022
      </div>
      <img
        src="/assets/imgs/rocket.png"
        className="absolute left-10 top-28 w-16"
      />
      <img
        src="/assets/imgs/neptune.svg"
        className="absolute right-10 top-28 w-32 animate-spin-slow"
      />
      <img
        src="/assets/imgs/mars.svg"
        className="absolute left-64 -bottom-12 w-32 animate-spin-slow"
      />
      <img
        src="/assets/imgs/venus.svg"
        className="absolute right-96 -top-12 w-32 animate-spin-slow"
      />
      <img
        src="/assets/imgs/uranus.svg"
        className="absolute left-96 -top-2 w-20 "
      />
    </div>
  );
};

export default Footer;
