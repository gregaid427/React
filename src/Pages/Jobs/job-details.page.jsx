import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import JobDetailSection from "../../Components/Hero/job.component";
import Footer from "../../Components/Footer/footer.component";
import SmilingManWithLaptop from "../../Assets/images/african-american-man-working-laptop-writing-notebook-man-with-beard-sitting-cafe.jpeg";

import comp1 from "../../Assets/images/morgan-stanley.jpeg";

import { Link } from "react-router-dom";
import RelatedJobs from "./job-list.component";
import Nav from "../../Components/NavBar/nav.component";
import feature1 from "./../../Assets/images/feature1.png";
import feature2 from "./../../Assets/images/feature2.png";
import feature3 from "./../../Assets/images/feature5.png";
import feature4 from "./../../Assets/images/feature4.png";
import { ReactComponent as IconPack4 } from "./../../Assets/icons/Icons-01.svg";
import { ReactComponent as IconPack6 } from "./../../Assets/icons/Icons-02.svg";

function JobDetails(props) {
  const [showModal, setShowModal] = React.useState(false);

  let { jobId, companyId } = useParams();
  console.log(companyId);
  const [jobs, setJobs] = useState([]);
  const [company, setCompany] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_HOST}/jobs/${jobId} `, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        if (result.success) {
          console.log(result.job);
          setJobs(result.job);
        }
      })
      .catch((error) => {
        console.log(error);
        // alert(error.message);
      });

    ///////////////////////////////////////////////////////////
  }, [jobId]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      `${process.env.REACT_APP_HOST}/companies/638284f4c5a64a66a83318b5`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        if (result?._id) {
          console.log("entered");
          console.log(result);
          setCompany(result);
        }
      })
      .catch((error) => {
        console.log(error);
        // alert(error.message);
      }); /////////////////////////////////////////
    console.log(companyId);
  }, [companyId]);

  const money = jobs?.salary;
  const area = jobs?.location;

  console.log(company);

  return (
    <>
      <Nav></Nav>

      <div className=" wrapper bg-[#f2f2f2]">
        <div className=" py-5 flex md:flex-row sm:flex-col gap-7 ">
          <img
            src={comp1}
            className="rounded-xl object-cover  md:w-3/12  sm:w-12/12 sm:mx-auto"
          ></img>
          <div className="flex flex-col justify-center gap-3">
            <h2 className="text-4xl sm:text-center md:text-left ">
              {jobs?.position}
            </h2>
            <h3 className="text-2xl text-slate-500 sm:text-center md:text-left ">
              Company Name
            </h3>
          </div>
        </div>
      </div>

      <div className="wrapper flex md:flex-row sm:flex-col gap-5 p-3 my-10 ">
        <div className=" md:w-8/12 sm:w-12/12">
          <h3 className="text-xl font-semibold py-8">{jobs.description}</h3>
          <hr></hr>
          <div className="my-3">
            <h3 className="text-xl font-semibold my-3 ">
              Experience Required/More Information
            </h3>
            <h3 className="text-xl   ">
              Hardcoded text because api doesnt return any info below ,,,it
              returns description above <br></br>
              Porttitor amet massa Done cporttitor dolor et nisl molestie ium
              feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
              ollcitudin est dolor time.
            </h3>
            <ul style={{ listStyleType: "square" }} className="pl-5">
              <li>
                feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                ollcitudin
              </li>
              <li>
                feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                ollcitudin
              </li>
              <li>
                feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                ollcitudin
              </li>
              <li>
                feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                ollcitudin
              </li>
              <li>
                feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                ollcitudin
              </li>
              <li>
                feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                ollcitudin
              </li>
            </ul>
          </div>

          <div className="my-3">
            <h3 className="text-xl font-semibold my-3 ">
              Experience Required/More Information
            </h3>
            <h3 className="text-xl   ">
              Porttitor amet massa Done cporttitor dolor et nisl molestie ium
              feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
              ollcitudin est dolor time.
            </h3>
            <ul style={{ listStyleType: "square" }} className="pl-5">
              <li>
                feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                ollcitudin
              </li>
              <li>
                feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                ollcitudin
              </li>
              <li>
                feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                ollcitudin
              </li>
              <li>
                feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                ollcitudin
              </li>
              <li>
                feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                ollcitudin
              </li>
              <li>
                feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                ollcitudin
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-4/12 flex flex-col sm:w-12/12 ">
          <div className=" flex shadow-2xl p-4 rounded-xl h-fit flex-col gap-3  text-center">
            <h3 className="text-4xl font-semibold py-3">Jobs Details</h3>
            <h3 className="text-xl font-semibold text-slate-400 ">
              {area?.region + ", " + area?.country}
            </h3>
            <h3 className="text-xl font-semibold text-slate-400 ">
              {money?.currency + money?.budget}
            </h3>
            <h3 className="text-xl font-semibold text-slate-400 ">
              {jobs.mode}
            </h3>
            <hr></hr>
            <div className="justify-center items-center px-2 flex gap-3">
              <IconPack6
                className="w-2/12  stroke-[7px]"
                style={{
                  height: "auto",
                  width: "auto",

                  fill: "#69C080",
                }}
              ></IconPack6>
              <div className="  flex flex-col text-start justify-between gap-3">
                <h3 className="text-md  font-semibold text-slate-400 ">
                  24 Open positions at this company
                </h3>
                <h3 className="text-xl font-semibold text-[#69C080] ">
                  view Profile
                </h3>
              </div>
            </div>
          </div>

          <button
            onClick={(e) => setShowModal(true)}
            className=" my-3 p-4 text-white text-3xl fon bg-[#69C080] font-bold w-full rounded-md "
          >
            <Link to="">APPLY NOW</Link>
          </button>
        </div>
      </div>

      <div className="flex  wrapper flex-col w-full  bg-[#F2F2F2]">
        <h3 className="text-4xl  mt-5 mb-8 text-center ">Related Jobs</h3>
        <div className="flex py-7  w-12/12 gap-3 flex-col ">
          <div className="md:w-12/12 sm:w-12/12 flex sm:flex-col  bg-white ">
            <img
              src={feature1}
              className="md:w-3/12 sm:w-12/12 h-[170px] object-contain "
            ></img>

            <div className="md:w-9/12 sm:w-12/12 sm:py-2   px-4  flex flex-col gap-3 md:my-auto ">
              <h3 className="text-xl ">
                Python Software Engineering Associate – Credit Technology
              </h3>
              <h4 className="text-md">London, England</h4>
              <h4 className="text-md">$100,000</h4>
              <h4 className="text-md">Full Time Role</h4>{" "}
              <div className=" flex md:flex-row relative sm:flex-col  md:justify-between sm:items-start">
                {" "}
                <div className="p-2 mb-2 flex gap-2 md:absolute  sm:mx-auto bottom-5 right-0   rounded-md bg-[#69C080] ">
                  <h4 className="  text-md text-white  ">
                    APPLY FOR THIS JOB{" "}
                  </h4>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-12/12 sm:w-12/12 flex sm:flex-col  bg-white ">
            <img
              src={feature2}
              className="md:w-3/12 sm:w-12/12 h-[170px] object-contain "
            ></img>

            <div className="md:w-9/12 sm:w-12/12 sm:py-2   px-4  flex flex-col gap-3 md:my-auto ">
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

          <div className="md:w-12/12 sm:w-12/12 flex sm:flex-col  bg-white ">
            <img
              src={feature3}
              className="md:w-3/12 sm:w-12/12 h-[170px] object-contain "
            ></img>

            <div className="md:w-9/12 sm:w-12/12 sm:py-2   px-4  flex flex-col gap-3 md:my-auto ">
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

          <div className="md:w-12/12 sm:w-12/12 flex sm:flex-col  bg-white ">
            <img
              src={feature4}
              className="md:w-3/12 sm:w-12/12 h-[170px] object-contain "
            ></img>

            <div className="md:w-9/12 sm:w-12/12 sm:py-2   px-4  flex flex-col gap-3 md:my-auto ">
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

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex   justify-between p-5 flex-col rounded-t">
                  <h3 className="text-2xl text-[#69C080] text-center font-semibold">
                    Apply Now
                  </h3>
                  <h3 className="text-md text-center ">
                    To complete your application, please answer the following
                    optional prompt from "company name"
                  </h3>
                  <h3 className="text-md text-center font-semibold">
                    optional question prompt goes here
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>

                  {/*body*/}

                  <textarea
                    className="w-full bg-[#f2f2f2] rounded-xl p-2 "
                    rows={6}
                  ></textarea>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center gap-5 p-3 ">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Apply Now
                  </button>
                  <button
                    className="bg-[#f2f2f2] text-black font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <Footer></Footer>
    </>
  );
}

export default JobDetails;
