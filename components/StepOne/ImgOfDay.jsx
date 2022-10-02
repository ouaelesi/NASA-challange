import React, { useEffect, useState } from "react";

const ImgOfDay = ({ setChoice }) => {
  const [imageData, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=CoNLG3Zk6FDRoJXDXVkQnlb4ee8zuo9SYu5DFpXr&date=2022-10-02"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setImage(data);
      })
      .catch((err) => {
        alert("there is no image");
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <div className="mx-auto w-5/6 border-2 border-gray-100 px-5 gap-10 py-6 rounded-xl   hover:shadow-md relative cursor-pointer">
        <div className=" text-center w-full uppercase text-re-500 text-red-500 text-2xl font-semibold">
          Image of the day!
        </div>
        <div className="flex mt-5 gap-8">
          <div className="w-1/2">
            <div className=" text-center w-full uppercase text-re-500 text-red-500 text-lg font-normal">
              Description
            </div>
            <div className="text-sm py-2">
              {loading && (
                <img
                  src="/assets/imgs/Saturn.svg"
                  className="w-20 my-20 block mx-auto  rounded-lg animate-spin"
                />
              )}
              {imageData.explanation}
            </div>
          </div>
          <div className="w-1/2 mt-10">
            {imageData.url && (
              <img src={imageData.url} className="rounded-xl" />
            )}
            {loading && (
              <img
                src="/assets/imgs/Saturn.svg"
                className="w-20 my-20 block mx-auto  rounded-lg animate-spin"
              />
            )}
          </div>
        </div>
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

export default ImgOfDay;
