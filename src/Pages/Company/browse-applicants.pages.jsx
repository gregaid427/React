import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/footer.component";
import { Link } from "react-router-dom";
// import applicant from "./../../Assets/images/applicant.jpeg";
import IdealCandidateSection from "../../Components/Containers/Sections/ideal-candidate.component";
import Nav from "../../Components/NavBar/nav.component";

function BrowseSchoolApplicantCVs(props) {
  props.setShowNavBar(true);
  // let navigate = useNavigate([]);

  // filters
  // const [keyword, setKeyword] = useState("");
  // const [location, setLocation] = useState({});
  // const [graduationYear, setGraduationYear] = useState({});
  const [applicants, setApplicants] = useState();

  // todo: Change this to use company details stored in company context.
  // let company_id = `634d792004ad673bec8daa40`;

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_HOST}/users`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          console.log(result.users);
          setApplicants(result.users);
        }
      })
      .catch((error) => {
        // console.log(error);
        // alert(error.message);
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

      <div className="wrapper ">
        <div className=" gap-3 my-9   md:grid-cols-2 sm:grid-cols-1  grid">
          <div className="flex row-span-1 bg-[#f2f2f2] rounded-xl p-3  ">
            <div className="flex flex-col gap-2 w-8/12 ">
              <h3 className="text-xl font-semibold  ">C. Mensah</h3>
              <h3 className="text-xl   "> Accountant</h3>
              <h3 className="text-xl   "> Accountant East Legon, Accra</h3>
              <h3 className="text-xl">Master’s Degree holder </h3>
            </div>
            <div className="flex flex-col gap-2 w-4/12 justify-around">
              <button
                className=" w-10/12 py-1  rounded-md md:text-md sm:text-md mx-auto  text-center fw-bold bg-[#69C080] text-white"

                // onClick={(e) => set0(false)}
              >
                <Link to={"/post-a-job"} className="">
                  VIEW PROFILE
                </Link>
              </button>
              <button
                className=" w-10/12 py-1  rounded-md md:text-md sm:text-md mx-auto  text-center fw-bold bg-[#69C080] text-white"

                // onClick={(e) => set0(false)}
              >
                <Link to={"/post-a-job"} className="">
                  DOWNLOAD CV
                </Link>
              </button>
              <button
                className=" w-10/12 py-1  rounded-md md:text-md sm:text-md mx-auto  text-center fw-bold bg-[#69C080] text-white"

                // onClick={(e) => set0(false)}
              >
                <Link to={"/post-a-job"} className="">
                  SEND MESSAGE
                </Link>
              </button>
            </div>
          </div>

          <div className="flex row-span-1 bg-[#f2f2f2] rounded-xl p-3 ">
            <div className="flex flex-col gap-2 w-8/12 ">
              <h3 className="text-xl font-semibold  ">C. Mensah</h3>
              <h3 className="text-xl   "> Accountant</h3>
              <h3 className="text-xl   "> Accountant East Legon, Accra</h3>
              <h3 className="text-xl">Master’s Degree holder </h3>
            </div>
            <div className="flex flex-col gap-2 w-4/12 justify-around">
              <button
                className=" w-10/12 py-1  rounded-md md:text-md sm:text-md mx-auto  text-center fw-bold bg-[#69C080] text-white"

                // onClick={(e) => set0(false)}
              >
                <Link to={"/post-a-job"} className="">
                  VIEW PROFILE
                </Link>
              </button>
              <button
                className=" w-10/12 py-1  rounded-md md:text-md sm:text-md mx-auto  text-center fw-bold bg-[#69C080] text-white"

                // onClick={(e) => set0(false)}
              >
                <Link to={"/post-a-job"} className="">
                  DOWNLOAD CV
                </Link>
              </button>
              <button
                className=" w-10/12 py-1  rounded-md md:text-md sm:text-md mx-auto  text-center fw-bold bg-[#69C080] text-white"

                // onClick={(e) => set0(false)}
              >
                <Link to={"/post-a-job"} className="">
                  SEND MESSAGE
                </Link>
              </button>
            </div>
          </div>




          <div className="flex row-span-1 bg-[#f2f2f2] rounded-xl p-3 ">
            <div className="flex flex-col gap-2 w-8/12 ">
              <h3 className="text-xl font-semibold  ">C. Mensah</h3>
              <h3 className="text-xl   "> Accountant</h3>
              <h3 className="text-xl   "> Accountant East Legon, Accra</h3>
              <h3 className="text-xl">Master’s Degree holder </h3>
            </div>
            <div className="flex flex-col gap-2 w-4/12 justify-around">
              <button
                className=" w-10/12 py-1  rounded-md md:text-md sm:text-md mx-auto  text-center fw-bold bg-[#69C080] text-white"

                // onClick={(e) => set0(false)}
              >
                <Link to={"/post-a-job"} className="">
                  VIEW PROFILE
                </Link>
              </button>
              <button
                className=" w-10/12 py-1  rounded-md md:text-md sm:text-md mx-auto  text-center fw-bold bg-[#69C080] text-white"

                // onClick={(e) => set0(false)}
              >
                <Link to={"/post-a-job"} className="">
                  DOWNLOAD CV
                </Link>
              </button>
              <button
                className=" w-10/12 py-1  rounded-md md:text-md sm:text-md mx-auto  text-center fw-bold bg-[#69C080] text-white"

                // onClick={(e) => set0(false)}
              >
                <Link to={"/post-a-job"} className="">
                  SEND MESSAGE
                </Link>
              </button>
            </div>
          </div>

        </div>
      </div>

      <IdealCandidateSection />
      <Footer></Footer>
    </>
  );
}

export default BrowseSchoolApplicantCVs;
