import Breadcrumbs from "../../Components/BreadCrumbs/breadcrumbs.component";
import { PhoneInput } from "react-contact-number-input";
import Avatar from "./../../Assets/images/avatar.jpeg";
import { Link } from "react-router-dom";


function MyProfilePage(props) {
  props.setShowNavBar(true);
  return (
    <>
      <div className="container">
        <div className="mb-4">
          <Breadcrumbs title={"My Profile"} />
        </div>
        <div className="row">
          <div className="col-12">
            <div style={{ height: "80vh" }} className="card">
              <div className="card-header">
                <h5 className="card-title">Profile Details</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="col-12 form-group">
                      <label htmlFor="first_name">Avatar</label>
                      <img
                        style={{ height: "110px", width: "110px" }}
                        src={Avatar}
                        className="img-fluid hover-shadow rounded-1"
                        alt="Los Angeles Skyscrapers"
                      />
                    </div>
                    <div className="col-12 col-md-6 form-group">
                      <label htmlFor="first_name">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="first_name"
                        id="first_name"
                      />
                    </div>
                    <div className="col-12 col-md-6 form-group">
                      <label htmlFor="last_name">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="last_name"
                        id="last_name"
                      />
                    </div>
                    <div className="col-12 col-md-6 form-group">
                      <label htmlFor="phone_number">Phone Number</label>
                      <PhoneInput countryCode="gh" />
                    </div>
                    <div className="col-12 col-md-6 form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                      />
                    </div>

                    <div className="col-12 form-group">
                      <label htmlFor="email">About me</label>
                      <textarea
                        style={{ height: "200px" }}
                        className=""
                        name="email"
                        id="email"
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-footer text-muted">
                <Link to="" className="btn btn-success">
                  Save Changes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfilePage;
