import React from "react";

const contentImg = () => {
  return (
    <div className="mx-auto w-full border-2 border-gray-100 px-5 gap-10 py-6 rounded-xl  hover:shadow-md relative cursor-pointer">
      <div className="text-red-500 font-semibold uppercase text-center text-lg">
        Your Image!
      </div>
      <img
        src="/assets/imgs/content.png"
        className="mx-auto block w-1/2 mt-5"
      />
    </div>
  );
};

export default contentImg;
