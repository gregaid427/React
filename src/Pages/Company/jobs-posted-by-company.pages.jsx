import React, { useState, useEffect, useContext } from "react";
import Footer from "../../Components/Footer/footer.component";
import { Link } from "react-router-dom";
import JobContainer from "./../../Components/Containers/job-container.components";
import IdealCandidateSection from "../../Components/Containers/Sections/ideal-candidate.component";

import Nav from "../../Components/NavBar/nav.component";
import Header from "../../Components/header/header";

function JobsPostedByCompany(props) {
  // props.setShowNavBar(true);
  // const [keyword, setKeyword] = useState("");
  // const [location, setLocation] = useState({});
  // const [jobs, setJobs] = useState([]);

  // use context
  // const { user } = useContext(UserContext);
  // let company_id = user.company.company_id;

  // let company_id = `636d024e71c76e2a8c6f9725`;

  // useEffect(() => {
  //   var requestOptions = {
  //     method: "GET",
  //     redirect: "follow",
  //   };

  //   console.log(`${process.env.REACT_APP_HOST}/jobs/company/${company_id}`);

  //   fetch(
  //     `${process.env.REACT_APP_HOST}/jobs/company/${company_id}`,
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);
  //       if (result.success) {
  //         console.log(result.jobs);
  //         setJobs(result.jobs);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       // alert(error.message);
  //     });
  // }, [company_id]);

  return (
    <>
      <Nav />
      <Header title={"Company Name"} subtitle={"Posted jobs"} amount={"25.0"} />

      {/* 
      <div className="container py-5" style={{ minHeight: "40vh" }}>
        <div className="d-flex justify-content-between row gx-4">
          {jobs && jobs.length > 0 ? (
            <>
              {jobs &&
                jobs.map((job) => (
                  <Link
                    className="text-decoration-none text-black"
                    to="/job-details"
                    state={job}
                  >
                    <JobContainer
                      job={job}
                      hasApplied={true}
                      showAdminOptions={true}
                      className="col-12 col-md-6"
                    />
                  </Link>
                ))}
            </>
          ) : (
            <>
              <p className="text-center">Found no posted jobs</p>
            </>
          )}
        </div>
      </div> */}

      <div className=" my-5 flex wrapper gap-3  flex-col justify-between ">
        <div className="py-3 px-4 w-full rounded-md  bg-[#f2f2f2] flex sm:flex-col justify-between">
          <div className="  w-[9/12] flex flex-col justify-between gap-1">
            <h3 className="text-xl ">
              Python Software Engineering Associate – Credit Technology
            </h3>
            <h4 className="text-md">London, England</h4>
            <h4 className="text-md">$100,000</h4>
            <h4 className="text-md">Full Time Role</h4>{" "}
          </div>

          <div className="w-[3/12] flex mt-2 gap-3 sm:flex-start   ">
            {" "}
            <button className="px-2 py-1  flex uppercase   h-fit  rounded-md bg-[#69C080] ">
              <h4 className="  text-md text-white  ">View</h4>
            </button>
            <button className="px-2 py-1 flex uppercase  h-fit  rounded-md bg-[#69C080] ">
              <h4 className="  text-md text-white ">Edit</h4>
            </button>
            <button className="px-2  py-1 flex uppercase   h-fit  rounded-md bg-[#69C080] ">
              <h4 className="  text-md text-white  ">Hide</h4>
            </button>
          </div>
        </div>

        <div className="py-3 px-4 w-full rounded-md  bg-[#f2f2f2] flex sm:flex-col justify-between">
          <div className="  w-[9/12] flex flex-col justify-between gap-1">
            <h3 className="text-xl ">Associate Software Engineer Java</h3>
            <h4 className="text-md">London, England</h4>
            <h4 className="text-md">$100,000</h4>
            <h4 className="text-md">Full Time Role</h4>{" "}
          </div>

          <div className="w-[3/12] flex mt-2 gap-3 sm:flex-start   ">
            {" "}
            <button className="px-2 py-1  flex uppercase   h-fit  rounded-md bg-[#69C080] ">
              <h4 className="  text-md text-white  ">View</h4>
            </button>
            <button className="px-2 py-1 flex uppercase  h-fit  rounded-md bg-[#69C080] ">
              <h4 className="  text-md text-white  ">Edit</h4>
            </button>
            <button className="px-2  py-1 flex uppercase   h-fit  rounded-md bg-[#69C080] ">
              <h4 className="  text-md text-white  ">Hide</h4>
            </button>
          </div>
        </div>
      </div>

      <IdealCandidateSection />

      <Footer></Footer>
    </>
  );
}

export default JobsPostedByCompany;
