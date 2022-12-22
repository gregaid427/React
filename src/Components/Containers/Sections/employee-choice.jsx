import { Link } from "react-router-dom";

function EmployeeChoice() {
  return (
    <>


<div className="flex  flex-col py-12 items-center justify-center gap-2 bg-[#69C080]  ">
        <h3 className="text-4xl text-center font-semibold sm:font-normal sm:text-2xl py-4 text-white ">
          Your ideal candidate is just a click away
        </h3>

        <div className="flex gap-4  md:w-[400px] sm:w-full items-center sm:px-6  justify-center ">
          {" "}
          <button
            className=" w-6/12    md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2   rounded-md md:text-2xl sm:text-xl mx-auto  text-center fw-bold bg-[#000000] text-white"

            // onClick={(e) => set0(false)}
          >
            <Link     to={"/job-seeker-signup"}className="">
         REGISTER
            </Link>
          </button>
          <button
            className=" w-6/12   md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2   rounded-md md:text-2xl sm:text-xl mx-auto  text-center fw-bold bg-[#FFBE24] text-black"

            // onClick={(e) => set0(false)}
          >
            <Link   to={"/login"}>SIGN IN</Link>
          </button>
        </div>
      </div>


    </>
  );
}

export default EmployeeChoice;
