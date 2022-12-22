import { Link } from "react-router-dom";

import GreenSquareLogo from "./../../Assets/images/green_square_logo.png";


function FaqStepsAlt(props) {
 
  return (
    <>
      <div className=" my-2 faq-space">
        <div className=" flex relative md:flex-row-reverse  items-center justify-center mx-auto">
        <img
            className="  faq-text-pad-img md:rounded-[40px] sm:rounded-[20px] md:w-6/12 sm:w-12/12  p-0  "
     
            src={props.image}
          ></img>
        <div
            className=" flex  faq-text-pad-alt sm:my-auto md:py-10  sm:mx-auto md:rounded-[40px] sm:rounded-[20px] md:w-6/12 sm:w-11/12 p-0"
            style={{
              background: "#fff",
              marginRight: -100,
              borderRadius: 20,
              boxShadow: " 2px 5px rgb(241,245,249)",
              zIndex:1
            }}
          >
           {" "}
            <div className="text-[#69C080]  md:px-4 sm:px-2 ">
              <h3 className="md:text-3xl sm:text-2xl   font-semibold faq-text-pad-number ">{props.number}</h3>
            </div>{" "}
            <div className="flex items-center justify-center" >
              <p className="font-semibold text-xl faq-text-pad-text py-auto ">
               {props.text}
              </p>
            </div>{" "}
          </div>
         

          
         
        </div>


        
      </div>
      
    </>
  );
}

export default FaqStepsAlt;
