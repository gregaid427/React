import React, { useState, useEffect, useContext } from "react";
import Footer from "../../Components/Footer/footer.component";
import { Link, useNavigate } from "react-router-dom";

import Nav from "../../Components/NavBar/nav.component";
import Header from "../../Components/header/header";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function PostJobsByCompany(props) {

  props.setShowNavBar(true);

  const [jobCategories, setJobCategories] = useState("");

  const [position, setPosition] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [address, setAddress] = useState("");
  const [currency, setCurrency] = useState("");
  const [salary, setSalary] = useState("");
  const [equity, setEquity] = useState("");
  const [mode, setMode] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [otherRequirements, setOtherRequirements] = useState("");
  const [category, setCategory] = useState();

  // useNavigate
  const navigate = useNavigate();
  const users = useSelector((state) => state?.myusers);

  const id = JSON.parse(localStorage.getItem("users")); 

  const handleJobSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // todo:
    // Change to get company data from context.
  
    let company_id = JSON.parse(localStorage.getItem("companyID"));

    var raw = JSON.stringify({
      position: position,
      company: company_id,
      location: {
        country: country,
        region: region,
        streetAddres: address,
      },
      salary: {
        budget: salary,
        currency: "GHS",
        equity: false,
      },
      mode: mode,
      description: description,
      requirements: requirements,
      otherRequirements: otherRequirements,
      category: category,
    });



    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${process.env.REACT_APP_HOST}/companies/${company_id}/jobs`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
       
        alert(result.message);
        if (result.success) {
          toast.success("Job Posted Successfully")
          navigate("/company-jobs");
        }
      })
      .catch((error) => console.log("error", error));
      toast.error("Error Posting Job")
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
      <Header title={id?.company?.name} subtitle={"Post a job"} amount={"25.0"} />



      <form onSubmit={(e) => handleJobSubmit(e)}>
        <div className="flex wrapper flex-col my-5 gap-4 ">
          
        <div className="  flex justify-between md:gap-3  sm:gap-3 w-full  flex-col">
            <h2 className="font-semibold w-full text-xl">
            Position
            </h2>

            <div className=" flex justify-between w-full gap-4 ">
              <input required
                type="text"
                className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
                name=""
                placeholder="Position"
                onChange={(e) => setPosition(e.target.value)}
              />
           
            </div>          
          </div>
          <hr></hr>
          <div className="  flex justify-between md:gap-3  sm:gap-3 w-full  flex-col">
            <h2 className="font-semibold w-full text-xl">Location</h2>

            <div className=" flex justify-between w-full gap-4 ">
              <input
                type="text"
                className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
                name=""
                placeholder="Country"
                onChange={(e) => setCountry(e.target.value)}
              />

              <input
                type="text"
                className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
                name=""
                placeholder="Region"
                onChange={(e) => setRegion(e.target.value)}
              />
            </div>
            <div className=" flex justify-between w-full gap-4 ">
              <input
                type="text"
                className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
                name=""
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
              />

            
            </div>
      
          </div>
          <hr></hr>

          <div className="  flex justify-between md:gap-3  sm:gap-3 w-full  flex-col">
            <h2 className="font-semibold w-full text-xl">Salary</h2>

            <div className=" flex justify-between w-full gap-4 ">
              <input
                type="text"
                className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
                name=""
                placeholder="Budget"
                onChange={(e) => setSalary(e.target.value)}
              />

              <input
                type="text"
                className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
                name=""
                placeholder="Equity"
                onChange={(e) => setEquity(e.target.value)}
              />
            </div>
        
      
          </div>
          <hr></hr>

          <div className="  flex justify-between md:gap-3  sm:gap-3 w-full  flex-col">
            <h2 className="font-semibold w-full text-xl">
             Mode
            </h2>

            <div className=" flex justify-between w-full gap-4 ">
              <input
                type="text"
                className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
                name=""
                placeholder="Mode"
                onChange={(e) => setMode(e.target.value)}
              />
           
            </div>          
          </div>
          <hr></hr>

          <div className="  flex justify-between md:gap-3  sm:gap-3 w-full  flex-col">
            <h2 className="font-semibold w-full text-xl">
            Category
            </h2>

            <div className=" flex justify-between w-full gap-4 ">
              <input
                type="text"
                className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
                name=""
                placeholder="Category"
                onChange={(e) => setCategory(e.target.value)}
              />
           
            </div>          
          </div>
          <hr></hr>


          <div className="  flex justify-between md:gap-8 md:flex-row sm:gap-3 w-full sm:flex-col" >
        <div className=" flex flex-col gap-2 w-full ">
          <h2 className="font-semibold text-xl" >Job Description</h2>
          <textarea
          rows={6}
            type="text"          
            className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
            name=""
            onChange={(e) => setDescription(e.target.value)}
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
            onChange={(e) => setRequirements(e.target.value)}
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
            onChange={(e) => setOtherRequirements(e.target.value)}
          />
        </div>
     
        </div>

          <div className="flex gap-4  mx-auto  md:w-[400px] sm:w-full items-center sm:px-6  justify-center ">
            {" "}
            <input
              className=" w-6/12    md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2  text-black rounded-md md:text-2xl sm:text-xl mx-auto  text-center fw-bold bg-[#FFBE24] "
              type="submit"
           
                
         
              value="Save Draft"
          
            />
            <input
              className=" w-6/12   md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2  bg-[#69C080] rounded-md md:text-2xl sm:text-xl mx-auto  text-center fw-bold  text-white"
              type="submit"
           
                
              value="Publish CV"
              />
          </div>
        </div>
      </form>




      <Footer></Footer>
    </>
  );
}

export default PostJobsByCompany;
