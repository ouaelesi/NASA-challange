import React from "react";
import StepOne from "../StepOne/StepOne";
import Steptwo from "../StepTwo/Steptwo";
import GoodiesCards from "../redbubbleSection/GoodiesCards";
import StepThree from "../stepThree/StepThree";
import Stepfour from "../stepfour/Stepfour";

const RenderStep = ({ step }) => {
  if (step === 1) return <StepOne />;
  if (step === 2) return <Steptwo />;
  if (step === 3) return <Stepfour />;
  if (step === 4) return <StepThree />;
};

export default RenderStep;
