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
        className="absolute w-14 left-40  opacity-80 top-40"
        src="/assets/imgs/content.png"
      />
    </div>
  );
};

export default Tshirt;
