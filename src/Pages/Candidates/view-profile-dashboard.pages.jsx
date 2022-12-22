import React, { useContext } from "react";
import Footer from "../../Components/Footer/footer.component";
import Suitcase from "./../../Assets/images/suitcase.png";
import ApplicantModel from "./../../Assets/images/applicant.jpeg";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import IdealCandidateSection from "../../Components/Containers/Sections/ideal-candidate.component";
import Nav from "../../Components/NavBar/nav.component";
import SmilingWoman from "./../../Assets/images/applicant.jpeg";
import { ReactComponent as IconPack1 } from "./../../Assets/icons/Icons-11.svg";
import { ReactComponent as IconPack2 } from "./../../Assets/icons/Icons-17.svg";
import { ReactComponent as IconPack3 } from "./../../Assets/icons/Icons-13.svg";

function ViewProfileDashboard(props) {
  props.setShowNavBar(true);
  const applicant = useLocation().state;
  const navigate = useNavigate();
  const [viewDetailedCV, setViewDetailedCV] = useState(false);


  return (
    <>
      <Nav />
      <div className="py-9 wrapper bg-[#f2f2f2]">
        <div className=" my-5 flex flex-row md:gap-8 sm:gap-2 py-9 sm:py-3  ">
          <img
            className="md:w-4/12 sm:w-6/12 h-[300px] rounded-xl "
            src={SmilingWoman}
          ></img>
          <div className="sm:w-6/12 md:w-8/12  flex flex-col md:justify-around sm:justify-center ">
            <h3 className="font-semibold text-3xl  ">Applicant Name</h3>
            <h3 className="font-semibold text-xl text-slate-500 ">
              Accra, Ghana
            </h3>
            <h3 className="font-semibold text-xl sm:hidden ">
              Bio statement goes here. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed quis viverra diam. Nullam mauris eros,
              lacinia id nunc et, malesuada scelerisque urna. Mauris eget erat
              eu neque auctor Ă¡ÒÖÈĜŉ;ºÈ¡ŉ¡y´ŉÇÖy´ĝŉ®¡µŉá¡Òyŉº¡ºŉÌ¡Òŉy´ÒĝŉÖ¡Ì´ºŉ
              pellentesque elit. Nulla eu metus varius, porta odio eu, volutpat
              tortor
            </h3>
          </div>
        </div>
        <h3 className="font- text-md md:hidden pb-3 ">
          Bio statement goes here. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed quis viverra diam. Nullam mauris eros, lacinia id
          nunc et, malesuada scelerisque urna. Mauris eget erat eu neque auctor
          Ă¡ÒÖÈĜŉ;ºÈ¡ŉ¡y´ŉÇÖy´ĝŉ®¡µŉá¡Òyŉº¡ºŉÌ¡Òŉy´ÒĝŉÖ¡Ì´ºŉ pellentesque elit.
          Nulla eu metus varius, porta odio eu, volutpat tortor
        </h3>
      </div>

      <div className="flex md:w-12/12 flex-col sm:w-12/12 wrapper mt-5 my-10 ">
        <div className="md:grid-cols-3 sm:grid-cols-2 grid  w-full gap-4 ">
          <div className="flex flex-col  text-center h-[200px] row-span-1 rounded-md p-5 bg-[#69C080]">
            {" "}
            <IconPack1
              className="w-2/12 stroke-white stroke-[7px]"
              style={{
                // height: "100px",
                width: "auto",
                stroke: "#FFF",
                fill: "#69C080",
              }}
            />{" "}
            <p className="font-semibold text-white text-xl ">Download CV</p>{" "}
          </div>
          <div className="flex flex-col text-center h-[200px] row-span-1 rounded-md p-5 bg-[#f2f2f2]">
            {" "}
            <IconPack2
              className="w-2/12  stroke-[7px]"
              style={{
                // height: "100px",
                width: "auto",
                stroke: "#94a3b8",
                fill: "#f2f2f2",
              }}
            />{" "}
            <p className="font-semibold text-xl ">Watch Profile Video</p>{" "}
          </div>
          <div className="flex flex-col text-center h-[200px] row-span-1 rounded-md p-5 bg-[#f2f2f2]">
            {" "}
            <IconPack3
              className="w-2/12  stroke-[7px]"
              style={{
                // height: "100px",
                width: "auto",
                stroke: "#94a3b8",
                fill: "#f2f2f2",
              }}
            />{" "}
            <p className="font-semibold text-xl ">Send Message</p>{" "}
          </div>
        </div>
      </div>

      <IdealCandidateSection />

      <Footer></Footer>
    </>
  );
}

export default ViewProfileDashboard;
