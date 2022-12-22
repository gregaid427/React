import { Link } from "react-router-dom";

import GreenSquareLogo from "./../../Assets/images/green_square_logo.png";


function Footer() {
  // const { 0 } = useContext(UserContext);

  return (
    <>
            <div className="wrapper bg-black ">
        <div className=" flex md:flex-row  sm:flex-col sm:text-center py-12 text-white ">
          <div className=" flex flex-col md:w-3/12  sm:w-12/12 ">
            {" "}
            <img
              src={GreenSquareLogo}
              alt="Green Square Logo"
              className="w-5/12 sm:mx-auto "
            />{" "}
            <p className="text-xl">
              35 Green Street,
              <p className="text-md"></p>
              Accra, Ghana
              <p className="text-md"> </p>
              +233 (0) 302 345 678
              <p className="text-md"> </p>
              info@greensquare.com
            </p>
          </div>
          <div className="flex md:flex-col sm:mt-5 md:w-9/12 sm:w-12/12 flex-wrap ">
            <div className="flex md:flex-row sm:flex-col sm:justify-center sm:mx-auto sm:items-center sm:gap-5">
           
            {0 ? (
              
              <div className="flex flex-col gap-2 md:w-4/12 sm:mx-auto sm:w-12/12 ">
                {" "}
             
                <h5 className="text-xl text-[#69C080] font-bold ">Companies</h5>
                <p className="text-xl">
                  <Link to="/" className="text-reset">
                    Search Resumes
                  </Link>
                </p>
                <p className="text-xl">
                  <Link to="/company-faq" className="text-reset">
                    How it Works
                  </Link>
                </p>
                <p className="text-xl">
                  <Link to="/" className="text-reset">
                    Support
                  </Link>
                </p>
              </div>
                    ) : (
              <div className="flex flex-col gap-2 sm:w-12/12 md:w-4/12">
                <h5 className="text-xl text-[#69C080] font-bold ">
                  Job Seekers
                </h5>
                <p className="text-xl">
                  <Link to="/" className="text-reset">
                    Search Jobs
                  </Link>
                </p>
                <p className="text-xl">
                  <Link to="/browse-jobs" className="text-reset">
                    Browse Jobs
                  </Link>
                </p>
                <p className="text-xl">
                  <Link to="/" className="text-reset">
                    Find a Job
                  </Link>
                </p>
                <p className="text-xl">
                  <Link to="/job-seeker-faq" className="text-reset">
                    FAQs
                  </Link>
                </p>
              </div>
                   )}
              <div className="flex flex-col gap-2 md:w-4/12 sm:w-12/12">
                {" "}
                <h5 className="text-xl text-[#69C080] font-bold ">Company</h5>
                <p className="text-xl">
                  <Link to="/" className="text-reset">
                    About Us
                  </Link>
                </p>
                <p className="text-xl">
                  <Link to="/" className="text-reset">
                    Careers
                  </Link>
                </p>
                <p className="text-xl">
                  <Link to="/" className="text-reset">
                    Contact Us
                  </Link>
                </p>
                <p className="text-xl">
                  <Link to="/" className="text-reset">
                    Partner with Us
                  </Link>
                </p>
              </div>
            </div>
            <div className=" flex sm:text-center sm:mx-auto sm:mt-5">
              {" "}
              <p>Privacy Policy | Green Square © 2022 All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
