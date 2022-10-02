import React, { useState } from "react";
import GoodiesCards from "../redbubbleSection/GoodiesCards";
import ShirtStyle from "./ShirtStyle";
import Tshirt from "./Tshirt";

const Stepfour = () => {
  const [shirtSide, setSide] = useState("Front");
  return (
    <div>
      <div className="flex gap-4 mx-48">
        <Tshirt Side={shirtSide} />
        <ShirtStyle Side={shirtSide} setSide={setSide} />
      </div>
      <GoodiesCards />
    </div>
  );
};

export default Stepfour;
