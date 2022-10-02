import React from "react";

const Styles = ({ setStyle }) => {
  const Styles = [
    "/assets/imgs/st5.png",
    "/assets/imgs/st1.png",
    "/assets/imgs/st2.png",

    "/assets/imgs/st3.png",
    "/assets/imgs/st4.png",
  ];
  return (
    <div className="w-1/2 mx-auto  border-2  border-gray-100 px-5 gap-10 py-6 rounded-xl  hover:shadow-md relative cursor-pointer">
      <div className="text-red-500 font-semibold uppercase text-center text-lg">
        Choose a style or upload one !
      </div>
      <div className="flex flex-wrap gap-8 mt-10">
        {Styles.map((im, key) => (
          <img
            key={key}
            src={im}
            className="mx-auto block w-28 mt-5"
            onClick={() => setStyle(key)}
          />
        ))}

        <div className="mx-auto block w-28 mt-5 bg-gray-100 rounded-lg text-xs text-center pt-12">
          ADD Style +
        </div>
      </div>
    </div>
  );
};

export default Styles;
