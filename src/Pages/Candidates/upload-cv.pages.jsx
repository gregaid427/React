import React, { useState, useContext } from "react";
import Footer from "../../Components/Footer/footer.component";
import { Link } from "react-router-dom";

import Header from "../../Components/header/header";
import Nav from "../../Components/NavBar/nav.component";

function UploadCV(props) {
  props.setShowNavBar(true);

  // use state form data.
  const [highestLevelOfEeducation, setHighestLevelOfEducation] = useState("");
  const [school, setSchool] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [extraCurricularActivities, setExtraCurricularActivities] =
    useState("");

  const [currentRole, setCurrentRole] = useState("");
  const [company, setCompany] = useState("");
  const [lifestyle, setLifeStyle] = useState("");

  // use context

  // let user_id = "";
  // if (user) {
  //   user_id = user.user.userId;
  // }

  const handleJobSubmit = (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      // userId: user_id,
      resume: {
        education: {
          highestLevelOfEeducation: highestLevelOfEeducation,
          school: school,
          address: {
            country: country,
            region: region,
            streetAddress: streetAddress,
          },
          extraCurricularActivities: extraCurricularActivities.split(","),
          positions: [
            {
              position: "Code Master",
              "start-date": "2020-07-10",
              "end-date": "2022-07-10",
            },
          ],
        },
        profession: {
          currentRole: currentRole,
          company: company,
          positions: [
            {
              position: "Project Lead",
            },
          ],
          references: [
            {
              name: "Sam MoorHouse",
              contact: "sammoorhouse@turntabl.com",
            },
            {
              name: "Ibrahim Inusa",
              contact: "ibrahiminusa@turntabl.com",
            },
          ],
          certificates: [
            {
              imageUrl: "image_url",
              certificateLink: "certificate_link",
            },
          ],
          history: [
            {
              company: "Turntabl",
              isCurrentEmployer: true,
            },
          ],
        },
        lifestyle: {
          hobbies: lifestyle.split(","),
        },
      },
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_HOST}/resume/update`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.message);
        alert(result.message);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Nav />
      <Header
        title={"Applicants Name"}
        subtitle={"Upload A CV"}
        amount={"25.0"}
      />

      <div className="flex wrapper flex-col my-5 gap-4 ">
        <div className="  flex justify-between md:gap-8 md:flex-row sm:gap-3 w-full  sm:flex-col">
          <div className=" flex flex-col gap-2 w-full ">
            <h2 className="font-semibold text-xl">Field Name</h2>
            <input
              type="text"
              className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
              name=""
              // onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div className=" flex flex-col gap-2 w-full ">
            <h2 className="font-semibold text-xl">Field Name</h2>
            <input
              type="text"
              className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
              name=""
              // onChange={(e) => setPosition(e.target.value)}
            />
          </div>
        </div>
        <div className="  flex justify-between md:gap-8 md:flex-row sm:gap-3 w-full sm:flex-col">
          <div className=" flex flex-col gap-2 w-full ">
            <h2 className="font-semibold text-xl">Field Name</h2>
            <input
              type="text"
              className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
              name=""
              // onChange={(e) => setMode(e.target.value)}
            />
          </div>
          <div className=" flex flex-col gap-2 w-full ">
            <h2 className="font-semibold text-xl">Field Name</h2>
            <input
              type="text"
              className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
              name=""
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </div>

        <div className="  flex justify-between md:gap-8 md:flex-row sm:gap-3 w-full sm:flex-col">
          <div className=" flex flex-col gap-2 w-full ">
            <h2 className="font-semibold text-xl">Field Name</h2>
            <textarea
              rows={6}
              type="text"
              className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
              name=""
              onChange={(e) => setRegion(e.target.value)}
            />
          </div>
        </div>

        <div className="  flex justify-between md:gap-8 md:flex-row sm:gap-3 w-full sm:flex-col">
          <div className=" flex flex-col gap-2 w-full ">
            <h2 className="font-semibold text-xl">Field Name</h2>
            <textarea
              rows={6}
              type="text"
              className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
              name=""
              onChange={(e) => setRegion(e.target.value)}
            />
          </div>
        </div>

        <div className="  flex justify-between md:gap-8 md:flex-row sm:gap-3 w-full sm:flex-col">
          <div className=" flex flex-col gap-2 w-full ">
            <h2 className="font-semibold text-xl">Field Name</h2>
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
            <Link to=" ">Publish CV</Link>
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default UploadCV;
