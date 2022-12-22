import { Link } from "react-router-dom";
// 
import GreenSquareLogo from "./../../Assets/images/green_square_logo.png";
// 

function Faq(props) {
 
  return (
    <>
      <div className="py-3  " >
      <div className="flex gap-5 py-2 text-xl font-semibold faq-questn" style={{background:"rgb(241 245 249)" ,borderLeft: '8px solid #69C080', paddingLeft:20 ,paddingRight:5 }} ><h5 className=" text-[#69C080]">Q.</h5> <h5  className="fw-bold ">{props.title}</h5></div>

    <div className="flex gap-5 text-md faq-ans py-2 " style={{background:"rgb(248 250 252)",borderLeft: '8px solid #93A3A1', paddingLeft:20,paddingRight:5 , }} ><h5 className="font-bold">A.</h5> <h5>{props.info}</h5></div>
    </div>
    </>
  );
}

export default Faq;
