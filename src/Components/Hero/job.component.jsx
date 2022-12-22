import Suitcase from "../../Assets/images/suitcase.png";

function JobDetailSection(props) {
  return (
    <>
      <div className="my-4">
        <div className="d-flex gap-3">
          <div className="col-12 col-md-3">
            <img
              style={{ height: "250px", width: "100%" }}
              src={props.image ? props.image : Suitcase}
              className="img-fluid rounded-start d-flex align-items-center"
              alt="company-logo"
            />
          </div>

          <div className="col-12 col-md-9">
            <div className="d-flex flex-column py-3">
              <h2 className="job-detail-section-title display-4">
                {props.name}
              </h2>
              <small className="">{props.company}</small>
              <small className="">{props.location}</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobDetailSection;
