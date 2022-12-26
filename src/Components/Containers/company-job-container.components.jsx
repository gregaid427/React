import { useJobServices } from "../../Context/jobs.context";
import TagsBar from "../Tags/tag.component";
import Default from "./../../Assets/images/suitcase.png";
import { ReactComponent as IconPack4 } from "./../../Assets/icons/Icons-01.svg";
import feature1 from "./../../Assets/images/morgan-stanley.jpeg";
import { useEffect } from "react";
import { Link } from "react-router-dom";



function CompanyJobContainer(props) {
  // const { appliedJobs, getAppliedJobs } = useJobServices();
  // useEffect(() => {
  //   !appliedJobs.length && getAppliedJobs();
  // }, []);
  // const disableApply = !!appliedJobs.find((job) => job._id === props.job._id);
  return (
    <>
      {" "}
     
      <div className="w-full  sm:py-2  md:py-2  px-4 bg-[#f2f2f2]  flex flex-col gap-2 md:my-auto ">
      <h3 className="text-xl ">{props.job.position}</h3>
      <h4 className="text-md">{props.job.location.region}</h4>
          <h4 className="text-md">{props.job.salary.currency + props.job.salary.budget}</h4>
          <h4 className="text-md">{props.job.mode}</h4>{" "}
          <div className=" flex md:flex-row sm:w-3/12  relative sm:flex-col md:justify-between ">
            {" "}
            { props.job.isProJob ? (  <div className="p-2 mb-2 flex md:absolute bottom-5 right-0  gap-2 rounded-md float-right bg-[#FFBE24] ">
              <IconPack4 fill="#000000" className="h-5 my-auto" />
              <h4 className=" text-md  "> PRO</h4>{" "}
            </div> ) : <div className="p-2  flex gap-2 md:absolute  sm:mx-auto bottom-5 right-0   rounded-md bg-[#69C080] ">
          <Link to={'/job-details/'+props.job._id+'/'+props.job.company }> <h4 className="  text-md text-white  ">APPLY FOR THIS JOB </h4>{" "}</Link> 
          </div>

            
                }
          </div>
        </div>

      

   
     
    </>
  );
}
// mmmmmm
export default CompanyJobContainer;
