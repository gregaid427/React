import { Link } from "react-router-dom";

function TakeControlComponent(props) {
  return (
    <>
      <div
        className="bg-success d-flex align-items-center justify-content-center p-5 text-center"
       
      >
        <div className="d-grid gap-3">
          <h3 className="display-5 text-white">
          Take control of your future today.
          </h3>
          <div className=" mx-auto d-flex">
            <Link
              to={props.register}
              className="btn btn-dark btn-lg"
              style={{ width: "200px", marginRight: "5px" }}
            >
                 REGISTER
            </Link>

            <Link
              to={props.signin}
              className="btn btn-warning btn-lg"
              style={{ width: "200px", marginLeft: "5px" }}
            >
               SIGN IN
            </Link>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default TakeControlComponent;
