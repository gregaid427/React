import React, { useState, useEffect, useContext } from "react";
import Footer from "../../Components/Footer/footer.component";
import { Link, useNavigate } from "react-router-dom";

import Nav from "../../Components/NavBar/nav.component";
import Header from "../../Components/header/header";

function PostJobsByCompany(props) {

  props.setShowNavBar(true);

  const [jobCategories, setJobCategories] = useState("");

  const [position, setPosition] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [currency, setCurrency] = useState("");
  const [salary, setSalary] = useState("");
  const [mode, setMode] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [otherRequirements, setOtherRequirements] = useState("");
  const [category, setCategory] = useState();

  // useNavigate
  const navigate = useNavigate();

  const handleJobSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // todo:
    // Change to get company data from context.
    // let company_id = user.company.company_id;

    var raw = JSON.stringify({
      positon: position,
      // company: company_id,
      location: {
        country: country,
        region: region,
        streetAddres: "",
      },
      salary: {
        budget: salary,
        currency: currency,
        equity: false,
      },
      mode: mode,
      description: description,
      requirements: requirements,
      otherRequirements: otherRequirements,
      category: category,
    });

    console.log(raw);

  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch(
  //     `${process.env.REACT_APP_HOST}/companies/${company_id}/jobs`,
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);
  //       alert(result.message);
  //       if (result.success) {
  //         navigate("/company-jobs");
  //       }
  //     })
  //     .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `${process.env.REACT_APP_HOST}/jobs/categories/get-all-categories`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setJobCategories(result.categories);
        }
      })
      .catch((error) => {
        console.log("Unable to fetch company data.");
      });
  }, []);

  return (
    <>
      <Nav />
      <Header title={"Company Name"} subtitle={"Post a job"} amount={"25.0"} />

      <div className="flex wrapper flex-col my-5 gap-4 ">
        <div className="  flex justify-between md:gap-8 md:flex-row sm:gap-3 w-full  sm:flex-col" >
        <div className=" flex flex-col gap-2 w-full ">
          <h2 className="font-semibold text-xl" >Job Title</h2>
          <input
            type="text"          
            className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
            name=""
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <div className=" flex flex-col gap-2 w-full ">
          <h2 className="font-semibold text-xl" >Location</h2>
          <input
            type="text"          
            className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
            name=""
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        </div>
        <div className="  flex justify-between md:gap-8 md:flex-row sm:gap-3 w-full sm:flex-col" >
        <div className=" flex flex-col gap-2 w-full ">
          <h2 className="font-semibold text-xl" >Work Mode</h2>
          <input
            type="text"          
            className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
            name=""
            onChange={(e) => setMode(e.target.value)}
          />
        </div>
        <div className=" flex flex-col gap-2 w-full ">
          <h2 className="font-semibold text-xl" >Cartegory</h2>
          <input
            type="text"          
            className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
            name=""
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        </div>

        <div className="  flex justify-between md:gap-8 md:flex-row sm:gap-3 w-full sm:flex-col" >
        <div className=" flex flex-col gap-2 w-full ">
          <h2 className="font-semibold text-xl" >Job Description</h2>
          <textarea
          rows={6}
            type="text"          
            className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
            name=""
            onChange={(e) => setRegion(e.target.value)}
          />
        </div>
     
        </div>

        <div className="  flex justify-between md:gap-8 md:flex-row sm:gap-3 w-full sm:flex-col" >
        <div className=" flex flex-col gap-2 w-full ">
          <h2 className="font-semibold text-xl" >Job Requirements</h2>
          <textarea
          rows={6}
            type="text"          
            className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
            name=""
            onChange={(e) => setRegion(e.target.value)}
          />
        </div>
     
        </div>

        <div className="  flex justify-between md:gap-8 md:flex-row sm:gap-3 w-full sm:flex-col" >
        <div className=" flex flex-col gap-2 w-full ">
          <h2 className="font-semibold text-xl" >Other Requirements</h2>
          <textarea
          rows={6}
            type="text"          
            className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
            name=""
            onChange={(e) => setRegion(e.target.value)}
          />
        </div>
     
        </div>
        <div className="flex gap-4  mx-auto  md:w-[400px] sm:w-full items-center sm:px-6  justify-center ">
          {" "}
          <button
            className=" w-6/12    md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2  text-black rounded-md md:text-2xl sm:text-xl mx-auto  text-center fw-bold bg-[#FFBE24] "

            // onClick={(e) => set0(false)}
          >
            <Link to=" " className="">
          Save Draft
            </Link>
          </button>
          <button
            className=" w-6/12   md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2  bg-[#69C080] rounded-md md:text-2xl sm:text-xl mx-auto  text-center fw-bold  text-white"

            // onClick={(e) => set0(false)}
          >
            <Link to=" ">Post Job</Link>
          </button>
        </div>
        
       
      </div>
      <Footer></Footer>
    </>
  );
}

export default PostJobsByCompany;
