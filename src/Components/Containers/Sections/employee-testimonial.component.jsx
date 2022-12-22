import SmilingWoman from "../../../Assets/images/smiling_woman.jpeg";
import SmilingMan from "../../../Assets/images/smiling_man.jpg";

function EmployeeTestimonialComponent() {
  return (
    <>
      <div className="row ">
        <div className=" d-flex homebox" >
      
        <img src={SmilingWoman} className="col-12 col-md-6"  style={{maxHeight: "410px" }} /> 
      

        <div
          className="col-12 col-md-6 bg-success testimonial-padding d-flex align-items-center p-5 text-center"
          // style={{ height: "50vh", maxHeight: "200px" }}
        >
          <div className="col-12 text-center">
            <i
              className="fa-sharp fa-solid  fa-quote-left"
              style={{ fontSize: "64px", color: "white !important" }}
            ></i>
            <figure>
              <p className="fw-bold display-6" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="fw-semibold" title="Source Title">
                <strong>Employee Name</strong>
              </p>
            </figure>
          </div>
        </div>
        </div>

        <div className=" d-flex homebox" >
      
        
      

        <div
          className="col-12 col-md-6 bg-warning testimonial-padding d-flex align-items-center p-5 text-center"
          // style={{ height: "50vh", maxHeight: "200px" }}
        >
          <div className="col-12 text-center">
            <i
              className="fa-sharp fa-solid  fa-quote-left"
              style={{ fontSize: "64px", color: "white !important" }}
            ></i>
            <figure>
              <p className="fw-bold display-6" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="fw-semibold" title="Source Title">
                <strong>Employee Name</strong>
              </p>
            </figure>
          </div>
        </div>
        <img src={SmilingMan} className="col-12 col-md-6"  style={{ maxHeight: "410px"  }} /> 
        </div>

        

    
      </div>
    </>
  );
}

export default EmployeeTestimonialComponent;
