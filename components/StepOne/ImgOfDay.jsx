import React from "react";

const ImgOfDay = () => {
  return (
    <div className="mx-auto w-1/2 border-2 border-gray-100 px-5 gap-10 py-6 rounded-xl flex  hover:shadow-md relative cursor-pointer">
      <div className=" text-center w-full uppercase text-re-500 text-red-500 text-2xl font-semibold">
        Image of the day!
      </div>
    </div>
  );
};

export default ImgOfDay;
