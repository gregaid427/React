import React, { useState, useContext, useEffect, useRef } from "react";
import Footer from "../../Components/Footer/footer.component";
import JobContainer from "./../../Components/Containers/job-container.components";
import { Link } from "react-router-dom";

import { useJobServices } from "../../Context/jobs.context";
import Header from "../../Components/header/header";
import Nav from "../../Components/NavBar/nav.component";

function JobApplications(props) {
  props.setShowNavBar(true);
  const { getAppliedJobs, appliedJobs } = useJobServices();
  let callAppliedJobs = useRef();
  callAppliedJobs = 0;

  useEffect(() => {
    if (callAppliedJobs === 0) {
      getAppliedJobs();
      callAppliedJobs++;
    }
  }, []);

  return (
    <>
      <Nav />
      <Header
        title={"Applicants Name"}
        subtitle={"Pending Responses"}
        amount={"25.0"}
      />

      <div className="flex  flex-col gap-1 my-6  wrapper">
        <h3 className="text-2xl font-semibold sm:text-center py-4">
          Python Software Engineering Associate – Credit Technology
        </h3>

        <div className="flex my-3 flex-col md:w-9/12 sm:w-12/12 p-5 bg-[#f2f2f2] justify-between rounded-xl ">
          <h3 className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </h3>
          <div className="flex gap-4 md:w-6/12 sm:w-12/12">
            <button
              className=" w-6/12   md:px-2  sm:px-1  md:py-1 sm:p-1 mt-2  bg-[#69C080] rounded-md  text-md mx-auto  text-center fw-bold  text-white"

              // onClick={(e) => set0(false)}
            >
              <Link to=" " className="">
                UPLOAD FILE
              </Link>
            </button>
            <button
              className=" w-6/12   md:px-2  sm:px-1  md:py-1 sm:p-1 mt-2  bg-slate-600 rounded-md  text-md mx-auto  text-center fw-bold  text-white"

              // onClick={(e) => set0(false)}
            >
              <Link to=" ">VIEW FILE</Link>
            </button>
          </div>
        </div>


        <div className="flex my-3 flex-col md:w-9/12 sm:w-12/12 p-5 bg-[#f2f2f2] justify-between rounded-xl ">
          <h3 className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </h3>
          <div className="flex gap-4 md:w-6/12 sm:w-12/12">
            <button
              className=" w-6/12   md:px-2  sm:px-1  md:py-1 sm:p-1 mt-2  bg-[#69C080] rounded-md  text-md mx-auto  text-center fw-bold  text-white"

              // onClick={(e) => set0(false)}
            >
              <Link to=" " className="">
                UPLOAD FILE
              </Link>
            </button>
            <button
              className=" w-6/12   md:px-2  sm:px-1  md:py-1 sm:p-1 mt-2  bg-slate-600 rounded-md  text-md mx-auto  text-center fw-bold  text-white"

              // onClick={(e) => set0(false)}
            >
              <Link to=" ">VIEW FILE</Link>
            </button>
          </div>
        </div>








        <div className="flex my-3 flex-col md:w-9/12 sm:w-12/12 p-5 bg-[#f2f2f2] justify-between rounded-xl ">
          <h3 className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </h3>
          <div className="flex gap-4 md:w-6/12 sm:w-12/12">
            <button
              className=" w-6/12   md:px-2  sm:px-1  md:py-1 sm:p-1 mt-2  bg-[#69C080] rounded-md  text-md mx-auto  text-center fw-bold  text-white"

              // onClick={(e) => set0(false)}
            >
              <Link to=" " className="">
                UPLOAD FILE
              </Link>
            </button>
            <button
              className=" w-6/12   md:px-2  sm:px-1  md:py-1 sm:p-1 mt-2  bg-slate-600 rounded-md  text-md mx-auto  text-center fw-bold  text-white"

              // onClick={(e) => set0(false)}
            >
              <Link to=" ">VIEW FILE</Link>
            </button>
          </div>
        </div>






      </div>

      <Footer></Footer>
    </>
  );
}

export default JobApplications;
