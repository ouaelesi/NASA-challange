import React, { useEffect, useState } from "react";
import BirthdayCards from "./BirthdayCards";

const GenerateImg = ({ setChoice }) => {
  const [imagesData, setData] = useState([]);
  const [imagesData2, setData2] = useState([]);
  const [Keyword, setKeyWord] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchOption, setOption] = useState("word");
  const [date, setDate] = useState("");
  const [imageUrl, setImgurl] = useState(null);

  const getData2 = () => {
    setLoading(true);
    try {
      fetch(
        "https://api.nasa.gov/planetary/apod?api_key=CoNLG3Zk6FDRoJXDXVkQnlb4ee8zuo9SYu5DFpXr&date=" +
          date
      )
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          console.log(data);
          setData2(data);
          setImgurl(data.url);
        })
        .catch((err) => {
          alert("there is no image");
          setLoading(false);
        });
    } catch (err) {
      alert("there is no available image");
    }
  };

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
        setImgurl(data.collection.items[0].links[0].href);
      })
      .catch((err) => {
        alert("there is no image");
        setLoading(false);
      });
  };
  return (
    <div>
      {searchOption == "word" && (
        <div className="mx-auto w-1/2 border-2 border-gray-100 px-5 gap-10 py-6 rounded-xl  hover:shadow-md relative cursor-pointer">
          <div className=" text-center w-full uppercase text-re-500 text-red-500 text-2xl font-semibold">
            Genrate Image!
          </div>
          <div className="flex mt-5">
            <select
              onChange={(e) => setOption(e.target.value)}
              className="px-3
            py-2
            bg-gray-50
            outline-none
            border
            rounded-md
            mr-3
            w-fitmr-2"
            >
              <option value="word">Word</option>
              <option value="date">Date</option>
            </select>
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
          {imagesData.collection && !loading && (
            <img
              src={imagesData.collection.items[0].links[0].href}
              className="w-4/5 block mx-auto mt-5 rounded-lg"
            />
          )}
        </div>
      )}

      {searchOption == "date" && (
        <div className="mx-auto w-1/2 border-2 border-gray-100 px-5 gap-10 py-6 rounded-xl  hover:shadow-md relative cursor-pointer">
          <div className=" text-center w-full uppercase text-re-500 text-red-500 text-2xl font-semibold">
            Genrate Image!
          </div>
          <div className="flex mt-5">
            <select
              onChange={(e) => setOption(e.target.value)}
              className="px-3
            py-2
            bg-gray-50
            outline-none
            border
            rounded-md
            mr-3
            w-fitmr-2"
            >
              <option value="date">Date</option>
              <option value="word">Word</option>
            </select>
            <input
              type="date"
              className="  px-5 py-2 bg-gray-50 outline-none border rounded-md mr-5 w-full"
              placeholder="write your keyword here"
              onChange={(e) => setDate(e.target.value)}
            />
            <button
              onClick={() => getData2()}
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
          {!imagesData2.date && !loading && (
            <div className="w-4/5 h-64 bg-gray-100 block mx-auto mt-5 rounded-lg text-center pt-28 text-gray-400">
              Your Image Here
            </div>
          )}
          {imagesData2.date && !loading && (
            <img
              src={imagesData2.url}
              className="w-4/5 block mx-auto mt-5 rounded-lg"
            />
          )}
        </div>
      )}
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
      {<BirthdayCards bg={imageUrl} />}
    </div>
  );
};

export default GenerateImg;
