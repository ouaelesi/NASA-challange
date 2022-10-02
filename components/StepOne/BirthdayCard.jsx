import React, { useEffect } from "react";

const BirthdayCard = ({ image, bg }) => {
  return (
    <div className="w-64 relative">
      <img src={image} className="w-64" />
      <div
        className="w-48 h-48 left-8 rounded-full absolute top-6 bg-cover bg-center border-4 bg-gray-100"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
    </div>
  );
};

export default BirthdayCard;
