import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/footer.component";
import { Link } from "react-router-dom";
// import applicant from "./../../Assets/images/applicant.jpeg";
import IdealCandidateSection from "../../Components/Containers/Sections/ideal-candidate.component";
import Nav from "../../Components/NavBar/nav.component";

function BrowseSchoolGradYears(props) {
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
            <h3 className=" text-[#69C080]">Graduation Years</h3>{" "}
          </div>

          <div className="flex  md:gap-2 sm:gap-1 w-full sm:flex-col md:flex-row   justify-between ">
            {" "}
            <input
              required
              type="text"
              name="emailAddress"
              id="emailAddress"
              placeholder="School Name or keyword"
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
              placeholder="Graduation Year "
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
        <h3 className="my-8 font-semibold text-2xl">School Name Here</h3>
        <div className=" gap-3 my-9   md:grid-cols-3 sm:grid-cols-1  grid">
          <div className="flex flex-col row-span-1 bg-[#f2f2f2] rounded-xl p-3 gap-4 ">
            <h3 className="text-xl font-semibold  ">
              Graguating Class of 2022
            </h3>

            <button
              className=" w-6/12 py-1  rounded-md md:text-md sm:text-md  text-center fw-bold bg-[#69C080] text-white"

              // onClick={(e) => set0(false)}
            >
              <Link to={"/post-a-job"} className="">
                VIEW PROFILES
              </Link>
            </button>
          </div>
          <div className="flex flex-col row-span-1 bg-[#f2f2f2] rounded-xl p-3 gap-4 ">
            <h3 className="text-xl font-semibold  ">
              Graguating Class of 2022
            </h3>

            <button
              className=" w-6/12 py-1  rounded-md md:text-md sm:text-md  text-center fw-bold bg-[#69C080] text-white"

              // onClick={(e) => set0(false)}
            >
              <Link to={"/post-a-job"} className="">
                VIEW PROFILES
              </Link>
            </button>
          </div>

          <div className="flex flex-col row-span-1 bg-[#f2f2f2] rounded-xl p-3 gap-4 ">
            <h3 className="text-xl font-semibold  ">
              Graguating Class of 2022
            </h3>

            <button
              className=" w-6/12 py-1  rounded-md md:text-md sm:text-md  text-center fw-bold bg-[#69C080] text-white"

              // onClick={(e) => set0(false)}
            >
              <Link to={"/post-a-job"} className="">
                VIEW PROFILES
              </Link>
            </button>
          </div>

          <div className="flex flex-col row-span-1 bg-[#f2f2f2] rounded-xl p-3 gap-4 ">
            <h3 className="text-xl font-semibold  ">
              Graguating Class of 2022
            </h3>

            <button
              className=" w-6/12 py-1  rounded-md md:text-md sm:text-md  text-center fw-bold bg-[#69C080] text-white"

              // onClick={(e) => set0(false)}
            >
              <Link to={"/post-a-job"} className="">
                VIEW PROFILES
              </Link>
            </button>
          </div>

          <div className="flex flex-col row-span-1 bg-[#f2f2f2] rounded-xl p-3 gap-4 ">
            <h3 className="text-xl font-semibold  ">
              Graguating Class of 2022
            </h3>

            <button
              className=" w-6/12 py-1  rounded-md md:text-md sm:text-md  text-center fw-bold bg-[#69C080] text-white"

              // onClick={(e) => set0(false)}
            >
              <Link to={"/post-a-job"} className="">
                VIEW PROFILES
              </Link>
            </button>
          </div>

          <div className="flex flex-col row-span-1 bg-[#f2f2f2] rounded-xl p-3 gap-4 ">
            <h3 className="text-xl font-semibold  ">
              Graguating Class of 2022
            </h3>

            <button
              className=" w-6/12 py-1  rounded-md md:text-md sm:text-md  text-center fw-bold bg-[#69C080] text-white"

              // onClick={(e) => set0(false)}
            >
              <Link to={"/post-a-job"} className="">
                VIEW PROFILES
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

export default BrowseSchoolGradYears;
