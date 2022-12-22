import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/footer.component";
import Suitcase from "./../../Assets/images/suitcase.png";

import { Link } from "react-router-dom";
import IdealCandidateSection from "../../Components/Containers/Sections/ideal-candidate.component";
import img1 from "../../Assets/images/feature2.png";
import img2 from "../../Assets/images/feature4.png";
import img3 from "../../Assets/images/feature1.png";
import Nav from "../../Components/NavBar/nav.component";
import { ReactComponent as IconPack1 } from "./../../Assets/icons/Icons-18.svg";
import { ReactComponent as IconPack2 } from "./../../Assets/icons/Icons-19.svg";

function SchoolsList(props) {
  props.setShowNavBar(true);
  // filters
  // const [keyword, setKeyword] = useState("");
  // const [location, setLocation] = useState("");
  const [schools, setSchools] = useState([]);

  // use context
  // const { user } = useContext(UserContext);
  // let user_id = user.user.userId;d

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      // todo: Get api for fetching schools
      `${process.env.REACT_APP_HOST}/schools`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setSchools(result.schools);
      })
      .catch((error) => {
        console.log("Unable to fetch company data.");
      });
  }, []);

  return (
    <>
      <Nav></Nav>
      <div className="wrapper bg-[#f2f2f2]  ">
        <div className="flex flex-col md:py-10 sm:py-4  gap-8">
          <div className=" sm:justify-center font-semibold gap-2 text-4xl flex">
            <h3 className="">Browse </h3>
            <h3 className=" text-[#69C080]">Schools</h3>{" "}
          </div>
        </div>

        <div className="flex  md:gap-2 sm:gap-1 w-full sm:flex-col md:flex-row   justify-between ">
          {" "}
          <input
            required
            type="text"
            name="emailAddress"
            id="emailAddress"
            placeholder="School title or keyword"
            className="form-control border-0 sm:rounded-sm  md:w-3/12 sm:w-12/12 md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2  text-xl text-center"
            onChange={(e) => {
              // setEmail(e.target.value);
            }}
          />
          <input
            required
            type="text"
            name="emailAddress"
            id="emailAddress"
            placeholder="Location"
            className="form-control border-0 sm:rounded-sm mx-5 md:w-3/12 sm:w-12/12  md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2  text-xl text-center"
            onChange={(e) => {
              // setEmail(e.target.value);
            }}
          />
          <input
            required
            type="text"
            name="emailAddress"
            id="emailAddress"
            placeholder="Graduation Year"
            className="form-control border-0 sm:rounded-sm mx-5 md:w-3/12 sm:w-12/12  md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2  text-xl text-center"
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
            <h3 className="">Need more search options? {" "}
            <Link to="/advanced-search">
              {" "}
              <span className=" text-[#69C080]">Advanced Search</span>{" "}
            </Link>{" "}</h3>
          </div>
      </div>

      <div className="wrapper my-6 md:grid-cols-3 sm:grid-cols-1 gap-12 grid">
        <div className=" row-span-1 rounded-md flex flex-col shadow-md relative ">
          <img className="rounded-md h-[270px]  " src={img2}></img>
          <div style={{ height: "50px", width: "50px" }} className=" top-3 absolute right-3 ">
                {" "}
                <IconPack1 fill="#ffc107" />
              </div>
          <div className=" flex p-3  bg-[#f2f2f2] flex-col gap-3 ">
            <h3 className="font-semibold">School Name Here</h3>
            <h3 className="text-slate-400">24 Applicants from this school</h3>
            <button className=" bg-[#69C080] w-fit rounded-md p-1 px-2 ">
              <Link to={"/company-details"} className="text-white">
                {" "}
                VIEW PROFILES{" "}
              </Link>
            </button>
          </div>
        </div>

        <div className=" row-span-1 rounded-md flex flex-col shadow-md relative ">
        <img className="rounded-md h-[270px]  " src={img3}></img>
          <div style={{ height: "50px", width: "50px" }} className=" top-3 absolute right-3 ">
                {" "}
                <IconPack2 fill="#ffc107" />
              </div>
          <div className=" flex p-3  bg-[#f2f2f2] flex-col gap-3 ">
            <h3 className="font-semibold">School Name Here</h3>
            <h3 className="text-slate-400">24 Applicants from this school</h3>
            <button className=" bg-[#69C080] w-fit rounded-md p-1 px-2 ">
              <Link to={"/company-details"} className="text-white">
                {" "}
                VIEW PROFILES{" "}
              </Link>
            </button>
          </div>
        </div>

        <div className=" row-span-1 rounded-md flex flex-col shadow-md relative ">
        <img className="rounded-md h-[270px]  " src={img1}></img>
          <div style={{ height: "50px", width: "50px" }} className=" top-3 absolute right-3 ">
                {" "}
                <IconPack1 fill="rgb(148,162,184)" />
              </div>
          <div className=" flex p-3  bg-[#f2f2f2] flex-col gap-3 ">
            <h3 className="font-semibold">School Name Here</h3>
            <h3 className="text-slate-400">4 Applicants from this school</h3>
            <button className=" bg-[#69C080] w-fit rounded-md p-1 px-2 ">
              <Link to={"/company-details"} className="text-white">
                {" "}
                VIEW PROFILES{" "}
              </Link>
            </button>
          </div>
        </div>
        <div className=" row-span-1 rounded-md flex flex-col shadow-md relative ">
        <img className="rounded-md h-[270px]  " src={img3}></img>
          <div style={{ height: "50px", width: "50px" }} className=" top-3 absolute right-3 ">
                {" "}
                <IconPack1 fill="#ffc107" />
              </div>
          <div className=" flex p-3  bg-[#f2f2f2] flex-col gap-3 ">
            <h3 className="font-semibold">School Name Here</h3>
            <h3 className="text-slate-400">24 Applicants from this school</h3>
            <button className=" bg-[#69C080] w-fit rounded-md p-1 px-2 ">
              <Link to={"/company-details"} className="text-white">
                {" "}
                VIEW PROFILES{" "}
              </Link>
            </button>
          </div>
        </div>
      </div>

      <IdealCandidateSection />

      <Footer></Footer>
    </>
  );
}

export default SchoolsList;
