import React from "react";

const Header = () => {
  return (
    <div className="2xl:px-32 px-20 flex justify-between py-6">
      <div className="nevElem">
        <img src="/assets/imgs/LogoNasa.png" />
      </div>
      <div className="flex gap-8">
        <div className="nevElem">
          <div>Home</div>
          <img src="assets/imgs/redLine.svg" className="w-16 -mt-2 " />
        </div>
        <div className="nevElem">Services</div>
        <div className="nevElem">Contact Us</div>
        <div className="nevElem">About Us</div>
        <button className="btn bg-red-500">Get Started</button>
      </div>
    </div>
  );
};

export default Header;
