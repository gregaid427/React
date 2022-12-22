import React from "react";

const Header = (props) => {
  return (
    <div className=" flex sm:flex-col md:flex-row py-6 wrapper md:items-center justify-between bg-[#F2F2F2]">
      <div className="flex flex-col md:gap-4 sm:gap-2 md:py-8 sm:py-3  md:w-6/12 sm:w-12/12">
        <h2 className="text-4xl text-[#69C080] sm:text-left font-semibold">
          {props.title}{" "}
        </h2>
        <h2 className="text-3xl font-semibold">{props.subtitle} </h2>
      </div>
      <div className="flex  sm:mb-3 flex-col md:w-4/12 sm:w-12/12  gap-2 bg-white rounded-md py-5 px-7">
        <div className="flex items-end flex-row font-semibold gap-2">
          <h3 className="text-xl flex ">GHS</h3>
          <h3 className="text-3xl">{props.amount}</h3>
        </div>
        <div className="flex justify-between ">
          <div className="text-2xl"> Available Credit</div>
          <div className="text-2xl text-[#69C080]"> Top up</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
