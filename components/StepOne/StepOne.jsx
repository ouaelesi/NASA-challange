import React, { useState } from "react";
import DayImage from "./DayImage";
import CreateImage from "./CreateImage";
import ImgOfDay from "./ImgOfDay";
import GenerateImg from "./GenerateImg";

const StepOne = () => {
  const [stepOneChoice, setChoice] = useState(null);
  if (stepOneChoice === "create") return <GenerateImg setChoice={setChoice} />;
  if (stepOneChoice === "imgDay") return <ImgOfDay setChoice={setChoice} />;
  return (
    <div className="flex px-32 justify-between gap-8 mt-14">
      <DayImage setChoice={setChoice} />
      <CreateImage setChoice={setChoice} />
    </div>
  );
};

export default StepOne;
