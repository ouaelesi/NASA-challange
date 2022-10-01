import React from "react";

const GoodiesCard = ({ id, image, name, isActive }) => {
  return (
    <div className="">
      <div
        className={`${
          isActive
            ? "w-44  h-44  border-red-100 pt-2 -mt-2 shadow-red-100 bg-opacity-40"
            : "pt-1 w-40 h-40 "
        } cursor-pointer  relative shadow-md   rounded-lg border-2 border-50`}
      >
        <img src={image} className="w-1/2 block mx-auto mt-5" alt="de" />
        <div className="mt-2 text-center">{name}</div>
      </div>
    </div>
  );
};

export default GoodiesCard;
