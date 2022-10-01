import React, { useEffect, useState } from "react";

const GenerateImg = ({ setChoice }) => {
  const [imagesData, setData] = useState([]);
  const [Keyword, setKeyWord] = useState("");
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    fetch(
      "https://images-api.nasa.gov/search?q=" +
        Keyword +
        "%20landing&media_type=image"
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
        setData(data);
      });
  };
  return (
    <div>
      <div className="mx-auto w-1/2 border-2 border-gray-100 px-5 gap-10 py-6 rounded-xl  hover:shadow-md relative cursor-pointer">
        <div className=" text-center w-full uppercase text-re-500 text-red-500 text-2xl font-semibold">
          Genrate Image!
        </div>
        <div className="flex mt-5">
          <input
            className="  px-5 py-2 bg-gray-50 outline-none border rounded-md mr-5 w-full"
            placeholder="write your keyword here"
            onChange={(e) => setKeyWord(e.target.value)}
          />
          <button
            onClick={() => getData()}
            className="bg-red-500 text-white rounded-md px-5 "
          >
            submit
          </button>
        </div>
        {loading && (
          <img
            src="/assets/imgs/Saturn.svg"
            className="w-20 my-40 block mx-auto  rounded-lg animate-spin"
          />
        )}
        {!imagesData.collection && !loading && (
          <div className="w-4/5 h-64 bg-gray-100 block mx-auto mt-5 rounded-lg text-center pt-28 text-gray-400">
            Your Image Here
          </div>
        )}
        {imagesData.collection && (
          <img
            src={imagesData.collection.items[0].links[0].href}
            className="w-4/5 block mx-auto mt-5 rounded-lg"
          />
        )}
      </div>
      <div className="flex w-1/2 mx-auto justify-between p-5">
        <div
          className="underline cursor-pointer relative"
          onClick={() => setChoice(null)}
        >
          Back
        </div>
        <button className="bg-red-500 text-white px-4 rounded-md py-2">
          Choose
        </button>
      </div>
    </div>
  );
};

export default GenerateImg;
