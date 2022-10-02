import React, { useState } from "react";
import RenderStep from "./RenderStep";

const StepsSections = () => {
  const steps = [
    { id: 1, name: "Choose an image!", bg: "/assets/imgs/venus.svg" },
    { id: 2, name: "Style it!", bg: "/assets/imgs/neptune.svg" },
    { id: 3, name: "Design your item!", bg: "/assets/imgs/earth.svg" },
    { id: 4, name: "Share it!", bg: "/assets/imgs/Saturn.svg" },
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
          <div key={key}>
            <div
              className={`w-14 h-14 text-2xl px-5 py-3 mb-2 bg-no-repeat rounded-full bg-center mx-auto cursor-pointer font-semibold   relative ${
                step == stepNum.id ? "   text-darkBlue" : "  text-white"
              }`}
              onClick={() => setStep(stepNum.id)}
              style={{ backgroundImage: `url(${stepNum.bg})` }}
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
