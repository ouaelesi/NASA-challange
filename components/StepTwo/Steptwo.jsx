import React, { useState } from "react";
import ContentImg from "./ContentImg";
import ResultsImg from "./ResultsImg";
import Styles from "./Styles";

const Steptwo = () => {
  const [imgStyle, setStyle] = useState(4);
  return (
    <div className="px-28 mt-10">
      <div className="flex gap-5">
        <div className="w-1/2">
          <ContentImg />
          <ResultsImg imgStyle={imgStyle} />
        </div>
        <Styles setStyle={setStyle} />
      </div>
      <div className="flex w-1/4 mx-auto p-5 justify-between  ">
        <div className="py-2 underline">Back</div>
        <button className="bg-red-500 text-white rounded-md px-5 py-2">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Steptwo;
