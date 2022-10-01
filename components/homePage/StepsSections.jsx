import React, { useState } from "react";
import RenderStep from "./RenderStep";

const StepsSections = () => {
  const steps = [
    { id: 1, name: "choose 1" },
    { id: 2, name: "choose 2" },
    { id: 3, name: "choose 3" },
    { id: 4, name: "choose 4" },
  ];
  const [step, setStep] = useState(1);
  return (
    <div
      className="min-h-screen bg-cover px-40 py-36"
      style={{ backgroundImage: "url(/assets/imgs/whiteBg.svg)" }}
    >
      <div className=" text-5xl font-extrabold text-darkBlue w-fit">
        Unleash Your Creativity
        <div>
          <img className=" w-52 block ml-auto" src="/assets/imgs/redLine.svg" />
        </div>
      </div>
      <div className="flex gap-8 my-8 justify-between px-48">
        {steps.map((stepNum, key) => (
          <div>
            <div
              className={`px-6 py-3 w-fit mb-2 rounded-full  mx-auto cursor-pointer font-semibold   relative ${
                step == stepNum.id
                  ? "bg-gray-300 shadow-md text-2xl text-darkBlue"
                  : "bg-gray-100 text-xl text-gray-500"
              }`}
              onClick={() => setStep(stepNum.id)}
            >
              {stepNum.id}
            </div>
            {stepNum.id == step && <div>{stepNum.name}</div>}
          </div>
        ))}
      </div>
      <RenderStep step={step} />
    </div>
  );
};

export default StepsSections;
