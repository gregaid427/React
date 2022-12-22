import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/footer.component";
import { Link } from "react-router-dom";
// import applicant from "./../../Assets/images/applicant.jpeg";
import IdealCandidateSection from "../../Components/Containers/Sections/ideal-candidate.component";
import Nav from "../../Components/NavBar/nav.component";
import Header from "../../Components/header/header";

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
      <Nav></Nav>
      <Header
        title={"Company Name"}
        subtitle={"Applicant Responses"}
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
          <div className="flex  md:w-6/12 sm:w-12/12">
            <button
              className=" w-6/12   md:px-2  sm:px-1  md:py-1 sm:p-1 mt-2  bg-[#69C080] rounded-md  text-md   text-center fw-bold  text-white"

              // onClick={(e) => set0(false)}
            >
              <Link to=" " className="">
             VIEW FILE
              </Link>
            </button>
          
          </div>
        </div>

        <div className="flex my-3 flex-col md:w-9/12 sm:w-12/12 p-5 bg-[#f2f2f2] justify-between rounded-xl ">
          <h3 className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </h3>
          <div className="flex  md:w-6/12 sm:w-12/12">
            <button
              className=" w-6/12   md:px-2  sm:px-1  md:py-1 sm:p-1 mt-2  bg-[#69C080] rounded-md  text-md   text-center fw-bold  text-white"

              // onClick={(e) => set0(false)}
            >
              <Link to=" " className="">
             VIEW FILE
              </Link>
            </button>
          
          </div>
        </div>

        <div className="flex my-3 flex-col md:w-9/12 sm:w-12/12 p-5 bg-[#f2f2f2] justify-between rounded-xl ">
          <h3 className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </h3>
          <div className="flex  md:w-6/12 sm:w-12/12">
            <button
              className=" w-6/12   md:px-2  sm:px-1  md:py-1 sm:p-1 mt-2  bg-[#69C080] rounded-md  text-md   text-center fw-bold  text-white"

              // onClick={(e) => set0(false)}
            >
              <Link to=" " className="">
             VIEW FILE
              </Link>
            </button>
          
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default BrowseSchoolApplicantCVs;
