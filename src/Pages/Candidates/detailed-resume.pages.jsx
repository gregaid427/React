import React, { useContext } from "react";
import Footer from "../../Components/Footer/footer.component";
import Suitcase from "./../../Assets/images/suitcase.png";
import ApplicantModel from "./../../Assets/images/applicant.jpeg";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import IdealCandidateSection from "../../Components/Containers/Sections/ideal-candidate.component";
import Nav from "../../Components/NavBar/nav.component";
import SmilingWoman from "./../../Assets/images/applicant.jpeg";
import { ReactComponent as IconPack1 } from "./../../Assets/icons/Icons-06.svg";
import { ReactComponent as IconPack2 } from "./../../Assets/icons/Icons-13.svg";
import { ReactComponent as IconPack3 } from "./../../Assets/icons/Icons-13.svg";

function DetailedResume(props) {
  props.setShowNavBar(true);
  const applicant = useLocation().state;
  const navigate = useNavigate();
  const [viewDetailedCV, setViewDetailedCV] = useState(false);


  return (
    <>
      <Nav />

      <div className="wrapper bg-[#f2f2f2]  ">
        <div className="flex flex-row justify-between md:py-10 sm:py-4  gap-8">
          <div className=" sm:justify-center font-semibold gap-2 text-4xl flex">
            <h3 className="">Browse CVs</h3>
          </div>
          <div className=" sm:justify-center  justify-between font-semibold gap-2  flex">
          <button className="p-2   flex uppercase   h-fit  rounded-md bg-[#69C080] ">
          <IconPack1
            className="h-6  "
            style={{ stroke: "#ffffff", fill: "#ffffff" }}
          />   <h4 className="  text-md text-white  ">Print</h4>
            </button>
            <button className="p-2   flex uppercase   h-fit  rounded-md bg-[#69C080] ">
            <IconPack1
            className="h-6  "
            style={{ stroke: "#ffffff", fill: "#ffffff" }}
          />  <h4 className="  text-md text-white  ">Save</h4>
            </button>
            <button className="p-2  flex uppercase   h-fit  rounded-md bg-black ">
            <IconPack1
            className="h-6  "
            style={{ stroke: "#ffffff", fill: "#ffffff" }}
          /> <h4 className="  text-md text-white  ">Back</h4>
            </button>
          </div>

        </div>
      </div>

      <div className="py-9 wrapper ">
        <div className=" my-5 flex flex-row md:gap-8 sm:gap-2 py-9 sm:py-3  ">
          <img
            className="md:w-4/12 sm:w-6/12 h-[300px] rounded-xl "
            src={SmilingWoman}
          ></img>
          <div className="sm:w-6/12 md:w-8/12  flex flex-col md:justify-around sm:justify-center ">
            <h3 className="font-semibold text-4xl text-[#69C080] ">
              Christianne Mensah
            </h3>
            <h3 className="font-semibold text-xl ">ACCOUNTANT</h3>
            <h3 className="font-semibold text-xl text-slate-500 ">
              Open to: Financial Consulting, Accounting, Auditing
            </h3>
            <h3 className="text-xl  sm:hidden ">
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
          Nulla eu metus varius, porta odio eu, volutpat tortor
        </h3>
      </div>

      <div className=" justify-between border md:flex-row sm:flex-col  w-full wrapper   my-5 flex">
        <div className="flex  l items-center gap-2 py-4">
          <IconPack1
            className="h-6  "
            style={{ stroke: "#69C080", fill: "#69C080" }}
          />
          <h3 className="text-xl font-semibold">+233 (0) 244 567 890</h3>{" "}
        </div>
        <div className="flex l items-center gap-2 py-4">
          <IconPack1
            className="h-6  "
            style={{ stroke: "#69C080", fill: "#69C080" }}
          />
          <h3 className="text-xl font-semibold">cmensah@email.com</h3>
        </div>
        <div className="flex l items-center gap-2 py-4">
          <IconPack2
            className="h-6  "
            style={{ stroke: "#69C080", fill: "#69C080" }}
          />
          <h3 className="text-xl font-semibold">
            42 Green Ave, Osu, Accra, Ghana
          </h3>
        </div>
      </div>

      <div className="wrapper flex flex-col gap-3 my-7">
        <h3 className="text-3xl text-[#69C080] font-semibold ">Education</h3>
        <div className="flex flex-col gap-4">
          <div className="flex sm:flex-col md:flex-row ">
            <div className=" flex flex-col sm:w-12/12 md:w-3/12">
              <h3 className="text-xl font-semibold">University of Lorem</h3>
              <h3 className="text-xl text-slate-400 font-semibold">
                2008 - 2010
              </h3>
            </div>
            <div className=" flex flex-col md:w-9/12 sm:w-12/12">
              <h3 className="text-xl font-semibold">
                Certificate/Degree Earned
              </h3>
              <h3 className="text-xl ">
                Porttitor amet massa Done cporttitor dolor et nisl molestie ium
                feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                ollcitudin est dolor time.
              </h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex sm:flex-col md:flex-row ">
            <div className=" flex flex-col sm:w-12/12 md:w-3/12">
              <h3 className="text-xl font-semibold">University of Lorem</h3>
              <h3 className="text-xl text-slate-400 font-semibold">
                2008 - 2010
              </h3>
            </div>
            <div className=" flex flex-col md:w-9/12 sm:w-12/12">
              <h3 className="text-xl font-semibold">
                Certificate/Degree Earned
              </h3>
              <h3 className="text-xl ">
                Porttitor amet massa Done cporttitor dolor et nisl molestie ium
                feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                ollcitudin est dolor time.
              </h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex sm:flex-col md:flex-row ">
            <div className=" flex flex-col sm:w-12/12 md:w-3/12">
              <h3 className="text-xl font-semibold">University of Lorem</h3>
              <h3 className="text-xl text-slate-400 font-semibold">
                2008 - 2010
              </h3>
            </div>
            <div className=" flex flex-col md:w-9/12 sm:w-12/12">
              <h3 className="text-xl font-semibold">
                Certificate/Degree Earned
              </h3>
              <h3 className="text-xl ">
                Porttitor amet massa Done cporttitor dolor et nisl molestie ium
                feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                ollcitudin est dolor time.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className="wrapper flex flex-col gap-3 my-7">
        <h3 className="text-3xl text-[#69C080] font-semibold ">
          WORK EXPERIENCE
        </h3>
        <div className="flex flex-col gap-4">
          <div className="flex sm:flex-col md:flex-row ">
            <div className=" flex flex-col md:w-3/12 sm:w-12/12">
              <h3 className="text-xl font-semibold">Company Name</h3>
              <h3 className="text-xl text-slate-400 font-semibold">
                2008 - 2010
              </h3>
            </div>
            <div className=" flex flex-col md:w-9/12 sm:w-12/12">
              <h3 className="text-xl font-semibold">Job Title Here</h3>
              <h3 className="text-xl ">
                Porttitor amet massa Done cporttitor dolor et nisl molestie ium
                feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                ollcitudin est dolor time.
              </h3>
              <ul className="list-disc ">
                <li>
                  feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                </li>
                <li>
                  feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex sm:flex-col md:flex-row ">
            <div className=" flex flex-col md:w-3/12 sm:w-12/12">
              <h3 className="text-xl font-semibold">Company Name</h3>
              <h3 className="text-xl text-slate-400 font-semibold">
                2008 - 2010
              </h3>
            </div>
            <div className=" flex flex-col md:w-9/12 sm:w-12/12">
              <h3 className="text-xl font-semibold">Job Title Here</h3>
              <h3 className="text-xl ">
                Porttitor amet massa Done cporttitor dolor et nisl molestie ium
                feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                ollcitudin est dolor time.
              </h3>
              <ul className="list-disc ">
                <li>
                  feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                </li>
                <li>
                  feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>

      <div className="wrapper flex flex-col gap-3 my-7">
        <h3 className="text-3xl text-[#69C080] font-semibold ">
          SKILLS & ACHIEVEMENTS
        </h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col ">
            <h3 className="text-xl font-semibold ">
              Name of Skill/Achievement
            </h3>
            <h3 className="text-xl ">
              Porttitor amet massa Done cporttitor dolor et nisl molestie ium
              feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
              ollcitudin est dolor time.
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col ">
            <h3 className="text-xl font-semibold ">
              Name of Skill/Achievement
            </h3>
            <h3 className="text-xl ">
              Porttitor amet massa Done cporttitor dolor et nisl molestie ium
              feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
              ollcitudin est dolor time.
            </h3>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className="wrapper flex flex-col gap-3 my-7">
        <h3 className="text-3xl text-[#69C080] font-semibold ">
          HOBBIES & INTERESTS
        </h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col ">
            <h3 className="text-xl font-semibold ">Hobbies</h3>
            <h3 className="text-xl ">
              Porttitor amet massa Done cporttitor dolor et nisl molestie ium
              feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
              ollcitudin est dolor time.
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col ">
            <h3 className="text-xl font-semibold ">Hobbies</h3>
            <h3 className="text-xl ">
              Porttitor amet massa Done cporttitor dolor et nisl molestie ium
              feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
              ollcitudin est dolo time.
            </h3>
          </div>
        </div>
      </div>

    

      <Footer></Footer>
    </>
  );
}

export default DetailedResume;
