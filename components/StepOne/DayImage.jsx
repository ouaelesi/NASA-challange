import React from "react";

const DayImage = ({ setChoice }) => {
  return (
    <div
      onClick={() => setChoice("imgDay")}
      className="mx-auto w-1/2 border-2 border-gray-100 px-5 gap-10 py-6 rounded-xl flex justify-between hover:shadow-md relative cursor-pointer"
    >
      <div>
        <div className="uppercase text-re-500 text-red-500 text-2xl font-semibold">
          Image of the day!
        </div>
        <p className="text-gray-500 text-sm mt-5">
          Enter a word and let our API choose an image for you according to the
          word you entered
        </p>
      </div>
      <div>
        <img src="/assets/imgs/imgsgroup.png" className="w-92 mt-8" />
        <div className="text-sm text-center text-gray-400 mt-4">
          oct 28th 2012
        </div>
      </div>
    </div>
  );
};

export default DayImage;
