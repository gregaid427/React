import React, { useState, useEffect } from "react";
import JobContainer from "./../../Components/Containers/job-container.components";
import { Link } from "react-router-dom";

export default function RelatedJobs(props) {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_HOST}/jobs`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(`related jobs: ${JSON.stringify(result.jobs)}`);
        if (result.success) {
          setJobs(result.jobs);
        }
      })
      .catch((error) => {
        // alert(error.message);
      });
  }, []);

  return (
    <>
      {jobs &&
        jobs.slice(0, 4).map((job) => (
          <Link
            className="text-decoration-none text-black"
            to="/job-details"
            state={job}
          >
            <JobContainer
              backgroundColor={props.backgroundColor}
              job={job}
              className="col-12 col-md-6"
            />
          </Link>
        ))}
    </>
  );
}
