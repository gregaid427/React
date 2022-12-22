import {ReactComponent as IconPack1} from "../../../Assets/icons/Icons-04.svg";
import {ReactComponent as IconPack2}from "../../../Assets/icons/Icons-02.svg";
import {ReactComponent as IconPack3} from "../../../Assets/icons/Icons-03.svg";


function OurTrackRecord() {
  return (
    <>
      <div className=" p-5 text-center " style={{  backgroundcolor: "#ffc107" }}>
        <div className="d-grid container gap-3">
          <h3 className="display-5 mb-6">Our Track Record Speaks for Itself</h3>
          <div className="row">
            <div className="d-grid col-12 col-md-4 gap-2">
      
              <div style={{ height: "70px",width: "70px" }} className="m-auto" > <IconPack2    fill="#ffc107" /></div>
             
              <h2 className="display-4 fw-semibold text-success">913,415</h2>
              <h5 className="fw-bold">JOBS POSTED</h5>
            </div>

            <div className="d-grid col-12 col-md-4 gap-2">
             
               <div style={{ height: "70px",width: "70px" }} className="m-auto" > <IconPack3    fill="#ffc107" /></div>
              <h2 className="display-4 fw-semibold text-success">43,415</h2>
              <h5 className="fw-bold">CANDIDATES HIRED</h5>
            </div>

            <div className="d-grid col-12 col-md-4 gap-2">
        
                  <div style={{ height: "70px",width: "70px" }} className="m-auto" > <IconPack1    fill="#ffc107" /></div>
              <h2 className="display-4 fw-semibold text-success">3,415</h2>
              <h5 className="fw-bold ">COMPANIES HIRED</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}





export default OurTrackRecord;
