import React from "react";

const ResultsImg = ({ imgStyle }) => {
  const results = [
    "/assets/imgs/1.png",
    "/assets/imgs/2.png",
    "/assets/imgs/3.png",
    "/assets/imgs/5.png",
    "/assets/imgs/6.png",
  ];
  return (
    <div className="mx-auto w-full border-2 mt-5 border-gray-100 px-5 gap-10 py-6 rounded-xl  hover:shadow-md relative cursor-pointer">
      <div className="text-red-500 font-semibold uppercase text-center text-lg">
        Your Result!
      </div>
      <img src={results[imgStyle]} className="mx-auto block w-1/2 mt-5" />
    </div>
  );
};

export default ResultsImg;
