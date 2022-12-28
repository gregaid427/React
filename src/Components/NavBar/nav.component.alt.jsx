import React, { useState, useContext, useEffect } from "react";

import { Outlet, Link, Navigate } from "react-router-dom";
import GreenSquareLogo from "./../../Assets/images/green_square_logo.png";

import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaMailBulk,
  FaLinkedinIn,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  logoutAction,
  reset,
  setUserInfo,
} from "../../redux/slices/UsersSlice";

export const NavAlt = () => {
  const dispatch = useDispatch();
  const myuser = useSelector((state) => state?.myusers);

  const id = JSON.parse(localStorage.getItem("users"));

  var companydata = {
    user_id: id?.company?.company_id,
    email: id?.company?.email,
    role: "",
    name: id?.company?.name,
    isAdmin: id?.isAdmin,
    expiresIn: id?.expiresIn,
    isLoggedIn: id?.isLoggedIn,
    isCompany: id?.isCompany,
    message: id?.message,
    success: id?.success,
    token: id?.token,
  };

  var userdata = {
    user_id: id?.user?.user_id,
    email: id?.user?.email,
    role: id?.user?.role,
    name: id?.user?.name,
    isAdmin: id?.isAdmin,
    expiresIn: id?.expiresIn,
    isLoggedIn: id?.isLoggedIn,
    isCompany: id?.isCompany,
    message: id?.message,
    success: id?.success,
    token: id?.token,
  };

  var user = myuser;
  const earner = JSON.parse(localStorage.getItem("usersID"));
  const companyy = JSON.parse(localStorage.getItem("companyID"));

  useEffect(() => {
 

    if (companyy !== false && myuser?.token === "") {
   
     
      dispatch(setUserInfo(companydata));
    }
    if (earner !== false && myuser?.token === "") {
    
      
    
      dispatch(setUserInfo(userdata));
    } else {
    }
  }, []);

  function logout() {
    const id = JSON.parse(localStorage.getItem("users"));

    dispatch(logoutAction(id?.user?.user_id));
    dispatch(reset());
    localStorage.removeItem("users");
    localStorage.removeItem("company");
    localStorage.removeItem("companyID");
    localStorage.removeItem("user");
    localStorage.removeItem("usersID");
  }
  useEffect(() => {}, [user?.success]);

  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="navPadding absolute w-full  high-z flex items-center   text-white">
      <div className="wrapper sm:hidden flex w-full items-center  justify-between  ">
        <Link className="w-2/12 sm:hidden " to="/">
          {" "}
          <img src={GreenSquareLogo}></img>
        </Link>
        <div className="w-10/12 flex   justify-end gap-20  ">
          <div className={!user?.isLoggedIn ? "sm:hidden md:flex " : "hidden "}>
            <ul
              className={myuser?.isCompany ? "sm:hidden md:flex " : "hidden "}
            >
              <Link to="/company-faq">
                <li>
                  <p className="text-2xl">How It Works</p>
                </li>
              </Link>
            </ul>

            <ul
              className={!myuser?.isCompany ? "sm:hidden md:flex " : "hidden "}
            >
              <Link to="/job-seeker-faq">
                <li>
                  <p className="text-2xl">How It Works</p>
                </li>
              </Link>
            </ul>
          </div>

          <ul className={myuser?.isCompany ? "sm:hidden md:flex " : "hidden "}>
            <Link to="/cvs">
              <li>
                <p className="text-2xl"> Browse CVs</p>
              </li>
            </Link>
          </ul>

          <ul className={!myuser?.isCompany ? "sm:hidden md:flex " : "hidden "}>
            <Link to="/browse-jobs">
              <li>
                <p className="text-2xl"> Browse Jobs</p>
              </li>
            </Link>
          </ul>

          <ul className={myuser?.isCompany ? "sm:hidden md:flex " : "hidden "}>
            <Link to="/post-a-job">
              <li>
                <p className="text-2xl"> Post a Job</p>
              </li>
            </Link>
          </ul>

          <ul className={user?.isLoggedIn ? "sm:hidden md:flex " : "hidden "}>
              <Link to={myuser?.isCompany ? "/company-dashboard" : "/employee-dashboard"}>
                <li>
                  <p className="text-2xl"> Dashboard</p>
                </li>
              </Link>
            </ul>

          {/* <ul className= {!0 ? user ? "sm:hidden md:flex " : "hidden " }>
            <Link to="/employee-dashboard">
              <li>
                <p className="text-2xl"> Dashboard</p>
              </li>
            </Link>
          </ul> */}

          {/* { 0 ? ( 
          <ul className="sm:hidden md:flex ">
            <Link to="/plans-and-pricing-companies">
              <li>
                <p className="text-2xl">Plans and pricing</p>
              </li>
            </Link>
          </ul>
             ): ( 
          <ul className="sm:hidden md:flex ">
            <Link to="/plans-and-pricing">
              <li>
                <p className="text-2xl">Plans and pricing</p>
              </li>
            </Link>
          </ul>
            )} */}
          <div
            className={!myuser?.isCompany ? "sm:hidden md:flex " : "hidden "}
          >
            <ul className={user?.isLoggedIn ? "sm:hidden md:flex " : "hidden "}>
              <Link to="/browse-companies">
                <li>
                  <p className="text-2xl">Browse Companies</p>
                </li>
              </Link>
            </ul>

            <ul
              className={!user?.isLoggedIn ? "sm:hidden md:flex " : "hidden "}
            >
              <Link to="/browse-jobs">
                <li>
                  <p className="text-2xl">Apply For Jobs</p>
                </li>
              </Link>
            </ul>
          </div>

          <div className={user?.isLoggedIn ? "sm:hidden md:flex " : "hidden "}>
            <ul className="sm:hidden md:flex ">
              <Link
                to="/"
                onClick={() => {
                  logout();
                }}
              >
                <li>
                  <p className="text-2xl">Sign Out</p>
                </li>
              </Link>
            </ul>
          </div>

          <div className={!user?.isLoggedIn ? "sm:hidden md:flex " : "hidden "}>
            <ul className="sm:hidden md:flex ">
              <Link to="/login">
                <li>
                  <p className="text-2xl">Sign In</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      {/* Hamburger */}
      <div className=" h-auto w-auto relative  ">
        <div
          onClick={handleClick}
          className="md:hidden z-1000  flex justify-between w-full  items-center px-7"
        >
          <img src={GreenSquareLogo} className="w-4/12"></img>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}

        <ul
          className={
            !nav
              ? "hidden"
              : "absolute  right-0  z-10  left-0 w-user/12 mx-auto rounded-sm  text-[#69C080] bg-slate-200 flex flex-col   justify-center px-5"
          }
        >
          {" "}
          <div className="py-1">
            <Link to="/employee-guide">
              <li>
                <p className="text-xl">How It Works</p>
              </li>
            </Link>

            <Link to="/browse-jobs">
              <li>
                <p className="text-xl"> Browse Jobs</p>
              </li>
            </Link>

            <Link to="/browse-jobs">
              <li>
                <p className="text-xl"> Dashboard</p>
              </li>
            </Link>

            <Link to="/browse-jobs">
              <li>
                <p className="text-xl">Plans and pricing</p>
              </li>
            </Link>

            <Link to="/browse-jobs">
              <li>
                <p className="text-xl"> Browse Jobs</p>
              </li>
            </Link>
          </div>
        </ul>

        {/* ends here */}
      </div>
    </div>
  );
};

export default NavAlt;
