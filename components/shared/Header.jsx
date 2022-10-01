import React from "react";

const Header = () => {
  return (
    <div className="lg:px-36 flex justify-between py-5">
      <div className="nevElem">Space</div>
      <div className="flex gap-5">
        <div className="nevElem">Home</div>
        <div className="nevElem">Home</div>
        <div className="nevElem">Home</div>
        <div className="nevElem">Home</div>
        <button className="btn bg-red-500">Get Started</button>
      </div>
    </div>
  );
};

export default Header;
