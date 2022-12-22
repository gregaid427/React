import { Link } from "react-router-dom";

function Category(props) {
  return (
    <>
      <Link
        className="col-12 col-md-6 col-lg-3 mt-4 d-flex justify-content-center"
        to={`/browse-jobs?category=${props.title}`}
      >
        <div
          className={`${props.cardBackground} rounded-4 d-grid align-content-center gap-2 text-center d-flex flex-column justify-between`}
          style={{ height: 200, width: 200, padding: "20px" }}
        >
          <i
            className={`text-success ${props.iconPack}`}
            style={{ fontSize: "70px", marginBottom: 20 }}
          ></i>
          <p className="fw-semibold text-black">{props.title}</p>
        </div>
      </Link>
    </>
  );
}

export default function PopularCategory(props) {
  return (
    <>
      <div className={`${props.background} rounded-3 p-3 text-center`}>
        <div className="d-grid container gap-4 py-3">
          <h4 className="display-5 fw-semibold">Popular Categories</h4>
          <div
            style={{ paddingLeft: "10%", paddingRight: "10%" }}
            className="row pl-30"
          >
            <Category
              cardBackground={props.cardBackground}
              iconPack={"fa-solid fa-code"}
              title={"Developer"}
            />

            <Category
              cardBackground={props.cardBackground}
              iconPack={"fa-light fa-dollar-sign"}
              title={"Accounting & Finance"}
            />

            <Category
              cardBackground={props.cardBackground}
              iconPack={"fa-solid fa-briefcase-medical"}
              title={"Healthcare"}
            />

            <Category
              cardBackground={props.cardBackground}
              iconPack={"fa-solid fa-bullhorn"}
              title={"Sales & Marketing"}
            />
          </div>
          <div>
            <Link
              to={"/browse-jobs"}
              type="button"
              className="btn btn-warning fw-bold btn-md text-black mt-4"
            >
              BROWSE JOBS
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
