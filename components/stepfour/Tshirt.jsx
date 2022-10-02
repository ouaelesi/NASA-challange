import React from "react";

const Tshirt = ({ Side }) => {
  return (
    <div className="w-full shadow-md rounded-xl border border-gray-100 relative">
      <img
        src={
          Side == "Front"
            ? "/assets/imgs/shirt.png"
            : "/assets/imgs/backShirt.png"
        }
        className="w-1/2 block mx-auto"
      />
      <img
        className="absolute w-14 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  opacity-80 "
        src="/assets/imgs/content.png"
      />
    </div>
  );
};

export default Tshirt;
