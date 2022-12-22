import { useJobServices } from "../../Context/jobs.context";
import TagsBar from "../Tags/tag.component";
import Default from "./../../Assets/images/suitcase.png";
import { ReactComponent as IconPack4 } from "./../../Assets/icons/Icons-01.svg";
import feature1 from "./../../Assets/images/morgan-stanley.jpeg";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function JobContainer(props) {
  // const { appliedJobs, getAppliedJobs } = useJobServices();
  // useEffect(() => {
  //   !appliedJobs.length && getAppliedJobs();
  // }, []);
  // const disableApply = !!appliedJobs.find((job) => job._id === props.job._id);
  return (
    <>
      {" "}
      <div className="md:w-12/12 sm:w-12/12 items-center flex sm:flex-col  bg-white ">
        <img
          src={feature1}
          className="md:w-2/12 sm:w-12/12 h-[150px] object-contain "
        ></img>

        <div className="md:w-10/12 sm:w-12/12  py-3  px-4  flex flex-col gap-2 md:my-auto ">
          <h3 className="text-xl ">{props.job.position}</h3>
          <h4 className="text-md">{props.job.location.region}</h4>
          <h4 className="text-md">
            {props.job.salary.currency + props.job.salary.budget}
          </h4>
          <h4 className="text-md">{props.job.mode}</h4>{" "}
          <div className=" flex md:flex-row relative sm:flex-col  md:justify-between sm:items-start">
            {" "}
            { props.job.isProJob ? (  <div className="p-2  flex md:absolute bottom-5 right-0  gap-2 rounded-md float-right bg-[#FFBE24] ">
                  <IconPack4 fill="#000000" className="h-5 my-auto" />
                  <h4 className=" text-md  "> PRO</h4>{" "}
                </div>
            ) : <div className="p-2  flex gap-2 md:absolute  sm:mx-auto bottom-5 right-0   rounded-md bg-[#69C080] ">
          <Link to={'/job-details/'+props.job._id+'/'+props.job.company }> <h4 className="  text-md text-white  ">APPLY FOR THIS JOB </h4>{" "}</Link> 
          </div>

            
                }
          </div>
        </div>
      </div>
    </>
  );
}
// mmmmmm
export default JobContainer;
