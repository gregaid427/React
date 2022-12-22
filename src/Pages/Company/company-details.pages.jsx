import React from "react";
import { useLocation } from "react-router-dom";

import smilingWoman from "../../Assets/images/smiling_woman.jpeg";
import Footer from "../../Components/Footer/footer.component";
import Skyline from "../../Assets/images/skyline.jpeg";
import { Link } from "react-router-dom";
import SmilingWomanWithLaptop from "../../Assets/images/side-view-smiley-woman-working-with-laptop-office.jpeg";
import comp1 from "../../Assets/images/morgan-stanley.jpeg";
import RelatedJobs from "../Jobs/job-list.component";

import Nav from "../../Components/NavBar/nav.component";
import { ReactComponent as IconPack11 } from "./../../Assets/icons/Icons-05.svg";
import { ReactComponent as IconPack12 } from "./../../Assets/icons/Icons-06.svg";
import { ReactComponent as IconPack13 } from "./../../Assets/icons/Icons-07.svg";
import { ReactComponent as IconPack14 } from "./../../Assets/icons/Icons-08.svg";
import { ReactComponent as IconPack15 } from "./../../Assets/icons/Icons-09.svg";

import { ReactComponent as IconPack2 } from "./../../Assets/icons/Icons-02.svg";
import { ReactComponent as IconPack3 } from "./../../Assets/icons/Icons-09.svg";
import { ReactComponent as IconPack4 } from "./../../Assets/icons/Icons-01.svg";
import { useState } from "react";

function CompanyDetails(props) {
  props.setShowNavBar(true);
  // filters
  // const [keyword, setKeyword] = useState("");
  // const [location, setLocation] = useState("");
  const [optionState, setoptionState] = useState("value");
  const company = useLocation().state;
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <>
      <Nav />
      <div className="bg-light rounded-3">
        <img
          src={Skyline}
          className=" w-full md:h-auto sm:h-[300px] "
          alt="company_background"
        />
      </div>

      <div className="wrapper mt-[-160px]">
        <div className="flex md:flex-row sm:flex-col gap-9 ">
          <img
            src={comp1}
            className="rounded-xl object-cover h-[300px] md:w-4/12  sm:w-8/12 sm:mx-auto"
          ></img>
          <div className=" justify-end pb-8 gap-3 md:w-8/12 sm:w-12/12 flex-col flex md:text-left sm:text-center ">
            {" "}
            <h3 className="text-4xl font-semibold">Company Name</h3>
            <div className="flex sm:justify-center md:text-left gap-4">
              <IconPack2 fill="#69C080" className="h-5 my-auto" />
              <h3 className="text-xl">24 Open Positions </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper my-6">
        {" "}
        <h3 className="font-semibold sm:text-center md:text-left text-[#69C080] text-4xl pb-2">
          Job Listings
        </h3>
        <div className=" flex   shadow-md p-8  w-full flex-col  ">
          <h3 className="font-semibold text-3xl">Filters</h3>
          <div className="flex   gap-2  md:gap-2 sm:gap-1 w-full sm:flex-col md:flex-row    justify-between ">
            {" "}
            <div className="bg-slate-50 md:w-3/12 sm:w-12/12 md:px-4 justify-center sm:px-2 w-full sm:rounded-sm flex gap-1  md:py-2 sm:p-2 mt-2">
              <IconPack11 fill="#69C080" className="h-5 my-auto" />
              <select
                value={optionState}
                className="form-control text-black border-0   bg-slate-50  text-center"
              >
                <option value="A">Posted Anytime</option>
                <option value="B">Banana</option>
                <option value="C">Cranberry</option>
                onChange=
                {(e) => {
                  // setEmail(e.target.value);
                }}
              </select>
            </div>
            <div className="bg-slate-50 md:w-3/12 sm:w-12/12 md:px-4 justify-center  sm:px-2 w-full sm:rounded-sm flex gap-1  md:py-2 sm:p-2 mt-2">
              <IconPack12 fill="#69C080" className="h-5 my-auto" />
              <select
                value={optionState}
                className="form-control text-black border-0   bg-slate-50  text-center"
              >
                <option value="A">Location</option>
                <option value="B">Banana</option>
                <option value="C">Cranberry</option>
                onChange=
                {(e) => {
                  // setEmail(e.target.value);
                }}
              </select>
            </div>
            <div className="bg-slate-50 md:w-3/12 sm:w-12/12 md:px-4  justify-center sm:px-2 w-full sm:rounded-sm flex gap-1  md:py-2 sm:p-2 mt-2">
              <IconPack13 fill="#69C080" className="h-5 my-auto" />
              <select
                value={optionState}
                className="form-control text-black border-0   bg-slate-50  text-center"
              >
                <option value="A">Company</option>
                <option value="B">Banana</option>
                <option value="C">Cranberry</option>
                onChange=
                {(e) => {
                  // setEmail(e.target.value);
                }}
              </select>
            </div>
            <div className="bg-slate-50 md:w-3/12 sm:w-12/12 md:px-4  justify-center sm:px-2 w-full sm:rounded-sm flex gap-1  md:py-2 sm:p-2 mt-2">
              <IconPack14 fill="#69C080" className="h-5 my-auto" />
              <select
                value={optionState}
                className="form-control text-black border-0  bg-slate-50   text-center"
              >
                <option value="A">Salary</option>
                <option value="B">Banana</option>
                <option value="C">Cranberry</option>
                onChange=
                {(e) => {
                  // setEmail(e.target.value);
                }}
              </select>
            </div>
            <div className="bg-slate-50 md:w-3/12 sm:w-12/12 md:px-4  justify-center w-full sm:px-2 sm:rounded-sm flex gap-1  md:py-2 sm:p-2 mt-2">
              <IconPack15 fill="#69C080" className="h-5 my-auto" />
              <select
                value={optionState}
                className="form-control text-black border-0 bg-slate-50    text-center"
              >
                <option value="A">Employment Type</option>
                <option value="B">Banana</option>
                <option value="C">Cranberry</option>
                onChange=
                {(e) => {
                  // setEmail(e.target.value);
                }}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper my-7 flex flex-col gap-4 ">
        <div className="w-full  sm:py-2   px-4 bg-[#f2f2f2]  flex flex-col gap-5 md:my-auto ">
          <h3 className="text-xl ">Associate Software Engineer Java</h3>
          <h4 className="text-md">London, England</h4>
          <h4 className="text-md">$100,000</h4>
          <h4 className="text-md">Full Time Role</h4>{" "}
          <div className=" flex md:flex-row sm:w-3/12  relative sm:flex-col md:justify-between ">
            {" "}
            <div className="p-2 mb-2 flex md:absolute bottom-5 right-0  gap-2 rounded-md float-right bg-[#FFBE24] ">
              <IconPack4 fill="#000000" className="h-5 my-auto" />
              <h4 className=" text-md  "> PRO</h4>{" "}
            </div>
          </div>
        </div>

        <div className="w-full  sm:py-2  bg-[#f2f2f2] px-4  flex flex-col gap-5 md:my-auto ">
          <h3 className="text-xl ">
            Python Software Engineering Associate – Credit Technology
          </h3>
          <h4 className="text-md">London, England</h4>
          <h4 className="text-md">$100,000</h4>
          <h4 className="text-md">Full Time Role</h4>{" "}
          <div className=" flex md:flex-row relative sm:flex-col  md:justify-between sm:items-start">
            {" "}
            <div className="p-2 mb-2 flex gap-2 md:absolute  sm:mx-auto bottom-5 right-0   rounded-md bg-[#69C080] ">
              <h4 className="  text-md text-white  ">APPLY FOR THIS JOB </h4>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full flex md:flex-row  bg-[#69C080] sm:flex-col">
        <div className="md:w-6/12 flex my-auto sm:text-center sm:justify-center sm:py-7  sm:12/12">
          <div className="flex md:pl-[134px] sm:pl-0 sm:justify-center flex-col gap-4  ">
            <h3 className="text-5xl font-semibold text-white">
              Join the best <br></br>
              companies.
            </h3>
            <h3 className="text-2xl font-semibold">
              {" "}
              View our list of the top <br />
              20 companies to work for.{" "}
            </h3>
            <button className=" sm:mx-auto md:mx-0 bg-[#FFBE24] font-semibold w-fit rounded-md p-2 px-3 ">
              <Link to="">LEARN MORE</Link>
            </button>
          </div>
        </div>
        <img className="md:w-6/12 sm:12/12" src={SmilingWomanWithLaptop}></img>
      </div>
      <Footer></Footer>
    </>
  );
}

export default CompanyDetails;
