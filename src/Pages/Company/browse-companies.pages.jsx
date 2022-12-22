import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/footer.component";
import Suitcase from "./../../Assets/images/suitcase.png";
import { Link } from "react-router-dom";
import SmilingWomanWithLaptop from "../../Assets/images/side-view-smiley-woman-working-with-laptop-office.jpeg";
import img1 from "../../Assets/images/morgan-stanley.jpeg";
import img2 from "../../Assets/images/feature4.png";
import img3 from "../../Assets/images/feature5.png";
import Nav from "../../Components/NavBar/nav.component";
// import { Category } from "@mui/icons-material";

function CompanyList(props) {
  props.setShowNavBar(true);
  const [companies, setCompanies] = useState([]);

  // filters
  // const [keyword, setKeyword] = useState("");
  // const [location, setLocation] = useState({});
  // const [category, setCategory] = useState("");

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `${process.env.REACT_APP_HOST}/companies?limit=40&page=1`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        setCompanies(result.data);
      })
      .catch((error) => {
        console.log("Unable to fetch company data.");
      });
  }, []);

  return (
    <>
      <Nav />
      <div className="wrapper bg-[#f2f2f2]  ">
        <div className="flex flex-col md:py-10 sm:py-4  gap-8">
          <div className=" sm:justify-center font-semibold gap-2 text-4xl flex">
            <h3 className="">Browse </h3>
            <h3 className=" text-[#69C080]">Companies</h3>{" "}
          </div>

          <div className="flex  md:gap-2 sm:gap-1 w-full sm:flex-col md:flex-row   justify-between ">
            {" "}
            <input
              required
              type="text"
              name="emailAddress"
              id="emailAddress"
              placeholder="Job title or keyword"
              className="form-control border-0 rounded-md  md:w-3/12 sm:w-12/12 md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2  text-xl text-center"
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
              className="form-control border-0 rounded-md md:w-3/12 sm:w-12/12  md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2  text-xl text-center"
              onChange={(e) => {
                // setEmail(e.target.value);
              }}
            />
            <input
              required
              type="text"
              name="emailAddress"
              placeholder="[variable goes here] "
              className="bg-white form-control border-0 sm:rounded-sm  md:w-3/12 sm:w-12/12  md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2  text-xl text-center"
              onChange={(e) => {
                // setEmail(e.target.value);
              }}
            />
            <button
              className="  md:w-3/12 sm:w-12/12   md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2    rounded-md text-2xl mx-auto  text-center fw-bold bg-[#69C080] text-white"

              // onClick={(e) => set0(false)}
            >
              <Link to="/employee-guide w-6/12 " className="text-white">
                SEARCH JOBS
              </Link>
            </button>
          </div>
          <div className=" text-xl flex gap-2 font-semibold  ">
            <h3 className="">Need more search options? {" "}
            <Link to="/advanced-search">
              {" "}
              <span className=" text-[#69C080]">Advanced Search</span>{" "}
            </Link>{" "}</h3>
          </div>
        </div>
      </div>

      
      <div className="wrapper my-6 md:grid-cols-3 sm:grid-cols-1 gap-5 grid">
        <div className=" row-span-1 rounded-md flex flex-col shadow-md ">
          <img className="rounded-md h-[300px]  " src={img1}></img>
          <div className=" flex p-3  bg-[#f2f2f2] flex-col gap-3 ">
            <h3 className="font-semibold">Company Name Here</h3>
            <h3 className="text-slate-400">Company Name Here</h3>
            <button className=" bg-[#69C080] w-fit rounded-md p-1 px-2 ">
              <Link to={"/company-details"} className="text-white">
                {" "}
                VIEW JOBS{" "}
              </Link>
            </button>
          </div>
        </div>

        <div className=" row-span-1 rounded-md flex flex-col shadow-md ">
          <img className="rounded-md h-[300px]" src={img2}></img>
          <div className=" flex p-3  bg-[#f2f2f2] flex-col gap-3 ">
            <h3 className="font-semibold">Company Name Here</h3>
            <h3 className="text-slate-400">Company Name Here</h3>
            <button className=" bg-[#69C080] w-fit rounded-md p-1 px-2 ">
              <Link to={"/company-details"} className="text-white">
                {" "}
                VIEW JOBS{" "}
              </Link>
            </button>
          </div>
        </div>

        <div className=" row-span-1 rounded-md flex flex-col shadow-md ">
          <img className="rounded-md h-[300px]" src={img3}></img>
          <div className=" flex p-3  bg-[#f2f2f2] flex-col gap-3 ">
            <h3 className="font-semibold">Company Name Here</h3>
            <h3 className="text-slate-400">Company Name Here</h3>
            <button className=" bg-[#69C080] w-fit rounded-md p-1 px-2 ">
              <Link to={"/company-details"} className="text-white">
                {" "}
                VIEW JOBS{" "}
              </Link>
            </button>
          </div>
        </div>

        <div className=" row-span-1 rounded-md flex flex-col shadow-md ">
          <img className="rounded-md h-[300px] " src={img1}></img>
          <div className=" flex p-3  bg-[#f2f2f2] flex-col gap-3 ">
            <h3 className="font-semibold">Company Name Here</h3>
            <h3 className="text-slate-400">Company Name Here</h3>
            <button className=" bg-[#69C080] w-fit rounded-md p-1 px-2 ">
              <Link to={"/company-details"} className="text-white">
                {" "}
                VIEW JOBS{" "}
              </Link>
            </button>
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

export default CompanyList;
