import React from "react";
import { Link, useLocation } from "react-router-dom";
import JobContainer from "./job-container.components";
import PaginationBar from "../Paginated/paginated.components";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function JobCategory(props) {
  let query = useQuery();
  return (
    <>
      <div>
        {props.name === "" ? (
          <h4 className={"mb-2 text-capitalize"}>{props.name} Jobs</h4>
        ) : query.get("type") !== "" ? (
          <h5 className={"mb-2 text-capitalize"}>{query.get("type")} Jobs</h5>
        ) : null}
        {props.jobs.map((job) => (
          <Link
            className="text-decoration-none text-black"
            to="/job-details"
            state={job}
          >
            <JobContainer job={job} className="col-12 col-md-6" />
          </Link>
        ))}

        <nav aria-label="Page navigation example">
          <ul className="pagination gap-2">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default JobCategory;
