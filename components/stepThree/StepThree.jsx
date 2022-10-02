import React from "react";

const StepThree = () => {
  const socialMedia = [
    {
      img: "/assets/imgs/span.png",
      name: "Share on Snapchat",
      color: "hover:bg-yellow-500",
    },
    {
      img: "/assets/imgs/instagram.png",
      name: "Share on Snapchat",
      color: "hover:bg-purple-700",
    },
    {
      img: "/assets/imgs/facebook.png",
      name: "Share on Snapchat",
      color: "hover:bg-blue-500",
    },
    {
      img: "/assets/imgs/twitter.png",
      name: "Share on Snapchat",
      color: "hover:bg-blue-900",
    },
    {
      img: "/assets/imgs/pinttrest.png",
      name: "Share on Snapchat",
      color: "hover:bg-red-500",
    },
  ];
  return (
    <div className="w-2/3 mx-auto">
      <div className="flex flex-wrap gap-8 justify-center">
        {socialMedia.map((social, key) => (
          <div
            key={key}
            className={`flex gap-4 my-2 shadow-md rounded-lg hover:bg-opacity-10 px-5 py-2 w-5/12 cursor-pointer relative hover:scale-105 hover:shadow-xl bg-white ${social.color}`}
          >
            <img src={social.img} className="w-14" />
            <div className="py-4">{social.name}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-16  w-fit mx-auto mt-10">
        <div className="py-2">Share with friend</div>
        <button className="bg-red-500 px-5  rounded-lg py-2 text-white">
          Try Again
        </button>
      </div>
    </div>
  );
};

export default StepThree;
