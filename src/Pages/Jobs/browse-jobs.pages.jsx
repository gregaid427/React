import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JobContainer from "./../../Components/Containers/job-container.components";
import Footer from "../../Components/Footer/footer.component";
import SmilingManWithLaptop from "./../../Assets/images/african-american-man-working-laptop-writing-notebook-man-with-beard-sitting-cafe.jpeg";
import PopularCategory from "../../Components/Containers/Sections/popular-categories.component";
import Nav from "../../Components/NavBar/nav.component";
import { ReactComponent as IconPack11 } from "./../../Assets/icons/Icons-05.svg";
import { ReactComponent as IconPack12 } from "./../../Assets/icons/Icons-06.svg";
import { ReactComponent as IconPack13 } from "./../../Assets/icons/Icons-07.svg";
import { ReactComponent as IconPack14 } from "./../../Assets/icons/Icons-08.svg";
import { ReactComponent as IconPack15 } from "./../../Assets/icons/Icons-09.svg";
import feature1 from "./../../Assets/images/feature1.png";
import feature2 from "./../../Assets/images/feature2.png";
import feature3 from "./../../Assets/images/feature5.png";
import feature4 from "./../../Assets/images/feature4.png";
import { ReactComponent as IconPack4 } from "./../../Assets/icons/Icons-01.svg";

export default function BrowseJobs(props) {
  // const search = useLocation().search;
  // const searchQueryCategory = new URLSearchParams(search).get("category");

  props.setShowNavBar(true);
  // filters
  // const [keyword, setKeyword] = useState("");
  // const [location, setLocation] = useState({});
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_HOST}/jobs`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          console.log(result.jobs);
          setJobs(result.jobs);
        }
      })
      .catch((error) => {
        console.log(error);
        // alert(error.message);
      });
  }, []);
  const [optionState, setoptionState] = useState("value");

  return (
    <>
      <Nav></Nav>
      <div className="bg-[#f2f2f2] ">
        <div className="mb-6  wrapper  flex flex-col gap-6">
          <div className="pt-8 flex flex-col gap-6">
            <div className=" sm:justify-center font-semibold gap-2 text-4xl flex">
              <h3 className="">Browse </h3>
              <h3 className=" text-[#69C080]">Jobs</h3>{" "}
            </div>
          </div>

          <div className="flex  md:gap-2 sm:gap-1 w-full sm:flex-col md:flex-row   justify-between ">
            {" "}
            <input
              required
              type="text"
              name="emailAddress"
              id="emailAddress"
              placeholder="Job title or keyword"
              className="form-control bg-white border-0 sm:rounded-sm md:w-3/12 sm:w-12/12 md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2  text-xl text-center"
              onChange={(e) => {
                // setEmail(e.target.value);
              }}
            />
            <input
              required
              type="text"
              name="emailAddress"
              id="emailAddress"
              placeholder="Location "
              className="form-control border-0 sm:rounded-sm md:w-3/12 sm:w-12/12  md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2  text-xl text-center"
              onChange={(e) => {
                // setEmail(e.target.value);
              }}
            />
            <input
              required
              type="text"
              name="emailAddress"
              id="emailAddress"
              placeholder="[variable goes here] "
              className="form-control border-0 sm:rounded-sm md:w-3/12 sm:w-12/12  md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2  text-xl text-center"
              onChange={(e) => {
                // setEmail(e.target.value);
              }}
            />
            <button
              className=" sm:rounded-sm  md:w-3/12 sm:w-12/12   md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2    rounded-md text-2xl mx-auto  text-center fw-bold bg-[#69C080] text-white"

              // onClick={(e) => set0(false)}
            >
              <Link to="/employee-guide w-6/12 " className="text-white">
                SEARCH JOBS
              </Link>
            </button>
          </div>

          <div className=" text-xl flex gap-2 font-semibold  ">
            <h3 className="">
              Need more search options?{" "}
              <Link to="/advanced-search">
                {" "}
                <span className=" text-[#69C080]">Advanced Search</span>{" "}
              </Link>{" "}
            </h3>
          </div>
        </div>
      </div>
      <div className="wrapper my-5">
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
      <div className="wrapper flex w-12/12 gap-3 flex-col my-20 ">
        <div className="md:w-12/12 sm:w-12/12 flex sm:flex-col  bg-white ">
          <img
            src={feature4}
            className="md:w-2/12 sm:w-12/12 h-[150px] object-contain "
          ></img>

          <div className="md:w-10/12 sm:w-12/12 sm:py-2   px-4 py-2  flex flex-col gap-2 md:my-auto bg-[#f2f2f2] ">
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
        </div>
      </div>{" "}
      <div className="my-6 bg-[#f2f2f2]">
        <div className=" wrapper  ">
          <h3 className="text-3xl font-semibold text-center py-4">
            Popular Categories
          </h3>
          carouselgoes here
        </div>
      </div>
      <div className=" w-full flex md:flex-row  bg-[#69C080] sm:flex-col">
        <div className="md:w-6/12 flex my-auto sm:text-center sm:justify-center sm:py-7  sm:12/12">
          <div className="flex md:pl-[134px] sm:pl-0 sm:justify-center flex-col gap-4  ">
            <h3 className="text-5xl font-semibold text-white">
              Put your best <br></br>
              foot forward.
            </h3>
            <h3 className="text-2xl font-semibold">
              Best practices and advice <br></br>
              for creating the perfect CV.
            </h3>
            <button className=" sm:mx-auto md:mx-0 bg-[#FFBE24] font-semibold w-fit rounded-md p-2 px-3 ">
              <Link to="">LEARN MORE</Link>
            </button>
          </div>
        </div>
        <img className="md:w-6/12 sm:12/12" src={SmilingManWithLaptop}></img>
      </div>
      <Footer></Footer>
    </>
  );
}
