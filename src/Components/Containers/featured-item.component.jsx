import React from "react";
import { Link } from "react-router-dom";

function FeatureItem(props) {
  return (
    <>
      <div className="col-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              <span>{props.location}</span>
              <span className="card-text float-end">{props.description}</span>
            </h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link className="card-link" to={`/job-details`}>
              Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureItem;
