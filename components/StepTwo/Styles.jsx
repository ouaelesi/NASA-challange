import React from "react";

const Styles = () => {
  return (
    <div className="w-1/2 mx-auto  border-2  border-gray-100 px-5 gap-10 py-6 rounded-xl  hover:shadow-md relative cursor-pointer">
      <div className="text-red-500 font-semibold uppercase text-center text-lg">
        Choose a style or upload one !
      </div>
      <div className="flex flex-wrap gap-8 ">
        <img
          src="/assets/imgs/content.png"
          className="mx-auto block w-28 mt-5"
        />
        <img
          src="/assets/imgs/content.png"
          className="mx-auto block w-28 mt-5"
        />
        <img
          src="/assets/imgs/content.png"
          className="mx-auto block w-28 mt-5"
        />
        <img
          src="/assets/imgs/content.png"
          className="mx-auto block w-28 mt-5"
        />
        <img
          src="/assets/imgs/content.png"
          className="mx-auto block w-28 mt-5"
        />
        <img
          src="/assets/imgs/content.png"
          className="mx-auto block w-28 mt-5"
        />
      </div>
    </div>
  );
};

export default Styles;
