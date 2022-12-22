import Footer from "../../Components/Footer/footer.component";
import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../Components/NavBar/nav.component";
import Header from "../../Components/header/header";
import { ReactComponent as IconPack1 } from "./../../Assets/icons/Icons-02.svg";
import { ReactComponent as IconPack2 } from "./../../Assets/icons/Icons-10.svg";
import { ReactComponent as IconPack3 } from "./../../Assets/icons/Icons-03.svg";

import { ReactComponent as IconPack11 } from "./../../Assets/icons/Icons-11.svg";
import { ReactComponent as IconPack12 } from "./../../Assets/icons/Icons-14.svg";
import { ReactComponent as IconPack13 } from "./../../Assets/icons/Icons-09.svg";
import { ReactComponent as IconPack14 } from "./../../Assets/icons/Icons-16.svg";
import { ReactComponent as IconPack15 } from "./../../Assets/icons/Icons-13.svg";
import { ReactComponent as IconPack16 } from "./../../Assets/icons/Icons-15.svg";
import HeaderCompany from "../../Components/header/headercompany";

function EmployeeDashboardPage(props) {
  props.setShowNavBar(true);
  return (
    <>
     <Nav />
      <HeaderCompany title={"Welcome,"} subtitle={"CompanyName"} amount={"25.0"} />

      <div className="flex gap-4 md:flex-row sm:flex-col wrapper my-8 ">
        <div className=" justify-center py-5 flex flex-col shadow-md rounded-md border-2 md:w-4/12 sm:12/12">
          <h3 className="flex justify-center font-semibold  text-2xl py-5 ">
            Account Activty
          </h3>

          <div className="flex ml-14 py-5 border-b  ">
            {" "}
            <div className="flex  justify-between items-center gap-6">
              <IconPack1
                className="w-2/12"
                style={{ stroke: "#FFBE24", fill: "#FFBE24" }}
              />{" "}
              <h3 className="text-4xl w-2/12 font-semibold">2</h3>{" "}
              <div className="flex w-8/12 font-semibold gap flex-col">
                <h3>Job Posted</h3>
                <Link to="">
                  <h3 className="text-[#69C080]">view</h3>
                </Link>
              </div>{" "}
            </div>
          </div>

          <div className="flex ml-14 py-5 border-b  ">
            {" "}
            <div className="flex  justify-between items-center gap-6">
              <IconPack2 
                className="w-2/12"
                style={{ stroke: "#FFBE24", fill: "#FFBE24" }}
              />{" "}
              <h3 className="text-4xl w-2/12 font-semibold">2</h3>{" "}
              <div className="flex w-8/12 font-semibold gap flex-col">
                <h3>Job Views</h3>
                <Link to="">
                  <h3 className="text-[#69C080]">view</h3>
                </Link>
              </div>{" "}
            </div>
          </div>

          <div className="flex ml-14 py-5 border-b  ">
            {" "}
            <div className="flex  justify-between items-center gap-6">
              <IconPack3
                className="w-2/12  "
                style={{ stroke: "#FFBE24", fill: "#FFBE24" }}
              />{" "}
              <h3 className="text-4xl w-2/12 font-semibold">2</h3>{" "}
              <div className="flex w-8/12 font-semibold gap flex-col">
                <h3>Job Applicants</h3>
                <Link to="">
                  <h3 className="text-[#69C080]">view</h3>
                </Link>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="flex md:w-8/12 flex-col sm:w-12/12  ">
          <div className="md:grid-cols-3 sm:grid-cols-2 grid  w-full gap-4 ">
            <div className="flex flex-col  text-center h-[200px] row-span-1 rounded-md p-5 bg-[#69C080]">
              {" "}
              <IconPack16
                className="w-2/12 stroke-white stroke-[7px]"
                style={{
                  // height: "100px",
                  width: "auto",
                  stroke: "#FFF",
                  fill: "#69C080",
            
                
                }}
              />{" "}
              <p className="font-semibold text-white text-xl ">Post a Job</p>{" "}
            </div>
            <div className="flex flex-col text-center h-[200px] row-span-1 rounded-md p-5 bg-[#f2f2f2]">
              {" "}
              <IconPack11
                className="w-2/12  stroke-[7px]"
                style={{
                  // height: "100px",
                  width: "auto",
                  stroke: "#94a3b8",
                  fill: "#f2f2f2",
            
                
                }}
              />{" "}
              <p className="font-semibold text-xl ">Browse CVs</p>{" "}
            </div>
            <div className="flex flex-col text-center h-[200px] row-span-1 rounded-md p-5 bg-[#f2f2f2]">
              {" "}
              <IconPack12
                className="w-2/12  stroke-[7px]"
                style={{
                  // height: "100px",
                  width: "auto",
                  stroke: "#94a3b8",
                  fill: "#f2f2f2",
            
                
                }}
              />{" "}
              <p className="font-semibold text-xl ">Edit Profile</p>{" "}
            </div>
            <div className="flex flex-col text-center h-[200px] row-span-1 rounded-md p-5 bg-[#f2f2f2]">
              {" "}
              <IconPack13
                className="w-2/12  stroke-[7px]"
                style={{
                  // height: "100px",
                  width: "auto",
                  stroke: "#94a3b8",
                  fill: "#f2f2f2",
            
                
                }}
              />{" "}
              <p className="font-semibold text-xl ">View Posted Jobs</p>{" "}
            </div>
            <div className="flex flex-col text-center h-[200px] row-span-1 rounded-md p-5 bg-[#f2f2f2]">
              {" "}
              <IconPack14
                className="w-2/12  stroke-[7px]"
                style={{
                  // height: "100px",
                  width: "auto",
                  stroke: "#94a3b8",
                  fill: "#f2f2f2",
            
                
                }}
              />{" "}
              <p className="font-semibold text-xl ">Browse Schools</p>{" "}
            </div>
            <div className="flex flex-col text-center h-[200px] row-span-1 rounded-md p-5 bg-[#f2f2f2]">
              {" "}
              <IconPack15
                className="w-2/12  stroke-[7px]"
                style={{
                  // height: "100px",
                  width: "auto",
                  stroke: "#94a3b8",
                  fill: "#f2f2f2",
            
                
                }}
              />{" "}
              <p className="font-semibold text-xl ">Messages</p>{" "}
            </div>
          </div>
        </div>
        
      </div>

      <Footer></Footer>
    </>
  );
}

export default EmployeeDashboardPage;
