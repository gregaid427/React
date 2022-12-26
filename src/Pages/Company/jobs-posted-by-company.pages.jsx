import React, { useState, useEffect, useContext } from "react";
import Footer from "../../Components/Footer/footer.component";
import { Link } from "react-router-dom";
import JobContainer from "./../../Components/Containers/job-container.components";
import IdealCandidateSection from "../../Components/Containers/Sections/ideal-candidate.component";

import Nav from "../../Components/NavBar/nav.component";
import Header from "../../Components/header/header";
import { useSelector } from "react-redux";

function JobsPostedByCompany(props) {
  // props.setShowNavBar(true);
  // const [keyword, setKeyword] = useState("");
  // const [location, setLocation] = useState({});
  const [jobs, setJobs] = useState([]);

  const users = useSelector((state) => state?.myusers);

  let company_id = JSON.parse(localStorage.getItem("companyID"));

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `${process.env.REACT_APP_HOST}/companies/${company_id}/jobs`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          console.log(result.companyJobs);
          setJobs(result.companyJobs);
        }
      })
      .catch((error) => {
        console.log(error);
        // alert(error.message);
      });
  }, [company_id]);

  
  const id = JSON.parse(localStorage.getItem("users")); 

  return (
    <>
























      <Nav />
      <Header title={id?.company?.name} subtitle={"Post a job"} amount={"25.0"} />

      <div className=" my-5 flex wrapper gap-3 w-full  flex-col justify-between ">
       
          {jobs && jobs.length > 0 ? (
            <>
              {jobs &&
                jobs.map((job) => (<>
                <div className="py-3 px-4 w-full rounded-md  bg-[#f2f2f2] flex sm:flex-col justify-between">
                    <div  state={job} className="  w-[9/12] flex flex-col justify-between gap-1">
                      <h3 className="text-xl ">
                        {job?.position}
                      </h3>
                      <h4 className="text-md">{job?.location?.region+", "+job?.location?.country}</h4>
                      <h4 className="text-md">{job?.salary?.currency + job?.salary?.budget}</h4>
                      <h4 className="text-md">{job?.mode}</h4>{" "}
                    </div>

                    <div className="w-[3/12] flex mt-2 gap-3 sm:flex-start   ">
                      {" "}
                      <Link    to={'/job-details/'+job?._id+'/'+job?.company }>  <button className="px-2 py-1  flex uppercase   h-fit  rounded-md bg-[#69C080] ">
                    <h4 className="  text-md text-white  ">View</h4>
                      </button></Link>
                      <Link>  <button className="px-2 py-1 flex uppercase  h-fit  rounded-md bg-[#69C080] ">
                        <h4 className="  text-md text-white ">Edit</h4>
                      </button></Link>
                      <Link>  <button className="px-2  py-1 flex uppercase   h-fit  rounded-md bg-[#69C080] ">
                        <h4 className="  text-md text-white  ">Hide</h4>
                      </button></Link>
                    </div>
                    </div>
                    </>
                    
                ))}
            </>
          ) : (   
            <>
              <p className="text-center">Found no posted jobs</p>
            </>
          )}
     
      </div>

      <IdealCandidateSection />

      <Footer></Footer>
    </>
  );
}

export default JobsPostedByCompany;
