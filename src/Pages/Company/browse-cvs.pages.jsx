import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/footer.component";
import { Link } from "react-router-dom";
import IdealCandidateSection from "../../Components/Containers/Sections/ideal-candidate.component";
import Nav from "../../Components/NavBar/nav.component";
import SmilingWoman from "./../../Assets/images/applicant.jpeg";
import { ReactComponent as IconPack1 } from "./../../Assets/icons/Icons-11.svg";
import { ReactComponent as IconPack2 } from "./../../Assets/icons/Icons-17.svg";
import { ReactComponent as IconPack3 } from "./../../Assets/icons/Icons-13.svg";

// function ApplicantProfile({ applicant }) {
//   // todo: use the applicant information received to
//   // 1. Route to the view profile page for the applicant.
//   // 2. Download CV.
//   // 3. Send messages to the client.
//   return (
//     <>
//       <div className="rounded-5 col-12 col-md-6 px-4 pt-4">
//         <div className="row bg-light p-4">
//           {applicant.resume ? (
//             <>
//               <div className="col-7">
//                 <h4 className="fw-bold text-capitalize">{applicant.name}</h4>
//                 <p className="m-0">
//                   {applicant.resume.profession
//                     ? applicant.resume.profession.positions[0].position
//                     : "N/A"}
//                 </p>
//                 <p className="m-0">
//                   {applicant.resume.education.highestLevelOfEeducation}
//                 </p>
//                 <p className="m-0">{`${applicant.residential_address.streetAddress}, ${applicant.residential_address.streetAddress}`}</p>
//               </div>
//             </>
//           ) : (
//             <>
//               <div className="col-7">
//                 <h4 className="fw-bold text-capitalize">{applicant.name}</h4>
//                 <p className="m-0">N/A</p>
//                 <p className="m-0">N/A</p>
//                 {/* <p className="m-0">{`${applicant.residential_address.streetAddress}, ${applicant.residential_address.streetAddress}`}</p> */}
//               </div>
//             </>
//           )}

//           <div className="col-5 d-grid gap-2">
//             <Link
//               to={"/view-profile"}
//               className="btn btn-sm btn-success text-uppercase"
//               state={applicant}
//             >
//               View Profile
//             </Link>
//             <button className="btn btn-sm btn-success text-uppercase">
//               Download CV
//             </button>
//             <Link
//               to="/messages"
//               className="btn btn-sm btn-success text-uppercase"
//             >
//               Send Message
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

function BrowseCVs(props) {
  props.setShowNavBar(true);
  // let navigate = useNavigate([]);

  // filters
  // const [keyword, setKeyword] = useState("");
  // const [location, setLocation] = useState({});
  // const [graduationYear, setGraduationYear] = useState("");
  const [applicants, setApplicants] = useState();

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
            <h3 className=" text-[#69C080]">CVs</h3>{" "}
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

      <div className="wrapper  ">
        <div className=" gap-3 my-9   md:grid-cols-1 sm:grid-cols-1  grid">
          <div className="flex row-span-1 md:flex-row sm:flex-col sm:gap-2 bg-[#f2f2f2] rounded-xl p-3  ">
          <div className="flex flex-col gap-2 md:w-6/12 sm:w-12/12 sm:text-center ">
              <h3 className="text-xl font-semibold  ">C. Mensah</h3>
              <h3 className="text-xl   "> Accountant</h3>
              <h3 className="text-xl   "> Accountant East Legon, Accra</h3>
              <h3 className="text-xl">Master’s Degree holder </h3>
            </div>
            <div className="  flex  gap-2 md:w-6/12 sm:md:w-12/12 md:items-end md:flex-row sm:flex-col ">
              <button
                className=" w-10/12 py-1 h-fit  rounded-md md:text-md sm:text-md mx-auto  text-center fw-bold bg-[#69C080] text-white"

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

        <div className=" gap-3 my-9   md:grid-cols-1 sm:grid-cols-1  grid">
          <div className="flex row-span-1 md:flex-row sm:flex-col sm:gap-2 bg-[#f2f2f2] rounded-xl p-3  ">
            <div className="flex flex-col gap-2 md:w-6/12 sm:w-12/12 sm:text-center">
              <h3 className="text-xl font-semibold  ">C. Mensah</h3>
              <h3 className="text-xl   "> Accountant</h3>
              <h3 className="text-xl   "> Accountant East Legon, Accra</h3>
              <h3 className="text-xl">Master’s Degree holder </h3>
            </div>
            <div className="  flex  gap-2 md:w-6/12 sm:md:w-12/12 md:items-end md:flex-row sm:flex-col ">
              <button
                className=" w-10/12 py-1 h-fit  rounded-md md:text-md sm:text-md mx-auto  text-center fw-bold bg-[#69C080] text-white"

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

export default BrowseCVs;
