import React from "react";

const CreateImage = ({ setChoice }) => {
  return (
    <div
      onClick={() => setChoice("create")}
      className=" mx-auto w-1/2 border-2 border-gray-100 px-5 gap-10 py-6 rounded-xl flex justify-between hover:shadow-md relative cursor-pointer"
    >
      <div>
        <div className="text-red-500 text-2xl font-semibold uppercase ">
          Create an Image!
        </div>
        <p className="text-gray-500 text-sm mt-5">
          Enter a word and let our API choose an image for you according to the
          word you entered
        </p>
      </div>
      <div>
        <img src="/assets/imgs/telescop.png" className="w-64" />
      </div>
    </div>
  );
};

export default CreateImage;
