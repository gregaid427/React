import React, { useState, useContext } from "react";
import Footer from "../../Components/Footer/footer.component";
import { Link } from "react-router-dom";

import Header from "../../Components/header/header";
import Nav from "../../Components/NavBar/nav.component";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  UploadResumeAction,
  deleteResume,
} from "../../redux/slices/resumeSlice";

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
  const [date, setdate] = useState("");
  const [position, setposition] = useState("");
  const [currentPosition, setcurrentPosition] = useState("");
  const [refence1, setrefence1] = useState("");
  const [refence1Contact, setrefence1Contact] = useState("");
  const [refence2, setrefence2] = useState("");
  const [refence2Contact, setrefence2Contact] = useState("");

  const users = useSelector((state) => state?.myusers);

  const dispatch = useDispatch();

  const handleJobSubmit = (e) => {
    e.preventDefault();

    console.log("poooooossssstteeeedddd");
    console.log(raw);

    var raw = {
      userId: users?.user_id,
      resume: {
        education: {
          highestLevelOfEeducation: "Degree",
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
              "start-date": date,
              "end-date": "",
            },
          ],
        },
        profession: {
          currentRole: currentRole,
          company: company,
          positions: [
            {
              position: currentPosition,
            },
          ],
          references: [
            {
              name: refence1,
              contact: refence1Contact,
            },
            {
              name: refence2,
              contact: refence2Contact,
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
              company: "",
              isCurrentEmployer: true,
            },
          ],
        },
        lifestyle: {
          hobbies: lifestyle.split(","),
        },
      },
    };

    dispatch(UploadResumeAction(raw));
  };

const handleDelete = (e) =>
{
  e.preventDefault()
  var data ={
    "userId": users?.user_id
  }
  dispatch(deleteResume(data))
}

 



  const info = JSON.parse(localStorage.getItem("users"));

  return (
    <>
      <Nav />
      <Header
        title={info?.user?.name}
        subtitle={"Upload A CV"}
        amount={"25.0"}
      />
      <form onSubmit={(e) => handleJobSubmit(e)}>
        <div className="flex wrapper flex-col my-5 gap-4 ">
          <div className="  flex justify-between md:gap-3  sm:gap-3 w-full  flex-col">
            <h2 className="font-semibold w-full text-xl">Education</h2>

            <div className=" flex justify-between w-full gap-4 ">
              <input
                type="text"
                className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
                // defaultValue={}
                placeholder="Highest Level Of Eeducation"
                onChange={(e) => setHighestLevelOfEducation(e.target.value)}
              />

              <input
                type="text"
                className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
                name=""
                placeholder="Country"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className=" flex justify-between w-full gap-4 ">
              <input
                type="text"
                className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
                name=""
                placeholder="Region"
                onChange={(e) => setRegion(e.target.value)}
              />

              <input
                type="text"
                className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
                name=""
                placeholder="School"
                onChange={(e) => setSchool(e.target.value)}
              />
            </div>
            <div className=" flex justify-between w-full gap-4 ">
              <input
                type="text"
                className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
                name=""
                placeholder="Leadership Position"
                onChange={(e) => setposition(e.target.value)}
              />

              <input
                type="text"
                className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
                name=""
                placeholder="Date"
                onChange={(e) => setdate(e.target.value)}
              />
            </div>
          </div>
          <hr></hr>

          <div className="  flex justify-between md:gap-3  sm:gap-3 w-full  flex-col">
            <h2 className="font-semibold w-full text-xl">
              Professional Details
            </h2>

            <div className=" flex justify-between w-full gap-4 ">
              <input
                type="text"
                className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
                name=""
                placeholder="Role"
                onChange={(e) => setCurrentRole(e.target.value)}
              />
              <input
                type="text"
                className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
                name=""
                placeholder="Current Position"
                onChange={(e) => setcurrentPosition(e.target.value)}
              />
            </div>
            <div className=" flex justify-between w-full gap-4 ">
              <input
                type="text"
                className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
                name=""
                placeholder="Company"
                onChange={(e) => setCompany(e.target.value)}
              />

              <input
                type="text"
                className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
                name=""
                placeholder="Company Location"
                onChange={(e) => setHighestLevelOfEducation(e.target.value)}
              />
            </div>
            <div className=" flex justify-between w-full gap-4 ">
              <input
                type="text"
                className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
                name=""
                placeholder="Referee"
                // onChange={(e) => setPosition(e.target.value)}
              />

              <input
                type="text"
                className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
                name=""
                placeholder="Referee Contact"
                // onChange={(e) => setPosition(e.target.value)}
              />
            </div>

            <div className=" flex justify-between w-full gap-4 ">
              <input
                type="text"
                className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
                name=""
                placeholder="Referee"
                // onChange={(e) => setPosition(e.target.value)}
              />

              <input
                type="text"
                className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
                name=""
                placeholder="Referee Contact"
                // onChange={(e) => setPosition(e.target.value)}
              />
            </div>

            <div className=" flex justify-between w-full gap-4 ">
              <input
                type="text"
                className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
                name=""
                placeholder="Certificate"
                // onChange={(e) => setPosition(e.target.value)}
              />

              <input
                type="text"
                className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
                name=""
                placeholder="Certificate"
                onChange={(e) => setHighestLevelOfEducation(e.target.value)}
              />
            </div>
          </div>
          <hr></hr>
          <div className="  flex justify-between md:gap-3  sm:gap-3 w-full  flex-col">
            <h2 className="font-semibold w-full text-xl">Lifestyle</h2>

            <div className=" flex justify-between w-full gap-4 ">
              <input
                type="text"
                className="w-full px-2 py-2 text-xl   bg-[#f2f2f2]  "
                name=""
                placeholder="Hobbies"
                onChange={(e) => setLifeStyle(e.target.value)}
              />
            </div>
          </div>
          <hr></hr>

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
            <button
              className=" w-6/12   md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2  bg-[#ff7301] rounded-md md:text-2xl sm:text-xl mx-auto  text-center fw-bold  text-white"
              onClick={(e) => handleDelete() }
              value="Publish CV"
            >
              Delete
            </button>
          </div>
        </div>
      </form>
      <Footer></Footer>
    </>
  );
}

export default UploadCV;
