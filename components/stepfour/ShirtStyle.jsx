import React from "react";

const ShirtStyle = ({ setSide, Side }) => {
  const colors = [
    "bg-red-500",
    "bg-blue-300",
    "bg-orange-300",
    "bg-gray-900",
    "bg-green-300",
    "bg-red-500",
    "bg-blue-500",
    "bg-red-500",
    "bg-green-500",
    "bg-red-500",
    "bg-red-100",
    "bg-pink-500",
    "bg-gray-500",
    "bg-pink-700",
    "bg-yellow-500",
    "bg-yellow-700",
    "bg-red-500",
  ];
  return (
    <div className="w-full shadow-md rounded-xl border border-gray-100 py-5">
      <div className="flex w-fit mx-auto text-center">
        <div
          className="relative cursor-pointer"
          onClick={() => setSide("Back")}
        >
          <div>Back</div>
          <div
            className={`w-24 h-2  ${
              Side === "Back" ? "bg-red-500" : "bg-gray-200"
            }`}
          >
            {" "}
          </div>
        </div>
        <div
          className="relative cursor-pointer"
          onClick={() => setSide("Front")}
        >
          <div>Front</div>
          <div
            className={`w-24 h-2  ${
              Side === "Front" ? "bg-red-500" : "bg-gray-200"
            }`}
          >
            {" "}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap p-5 gap-2 mt-10">
        {colors.map((elem, key) => (
          <div className={`w-7 h-7 ${elem}`} key={key}></div>
        ))}
        <div className={`w-7 h-7 text-center text-2xl`}>+</div>
      </div>
      <div className="flex gap-8 px-5 mt-5">
        <div className="w-full">
          <img src="/assets/imgs/content.png" />
        </div>
        <div className="w-full bg-gray-100 rounded-xl text-xs text-center py-10">
          {" "}
          Select image +
        </div>
      </div>
    </div>
  );
};

export default ShirtStyle;
