import Breadcrumbs from "../../Components/BreadCrumbs/breadcrumbs.component";
import { PhoneInput } from "react-contact-number-input";

function ViewResumeDashboard() {
  let candidates = [1, 2, 3, 4, 5];
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="alert alert-info" role="alert">
          Your resume(s) can be viewed, edited or removed below.
        </div>

        <div className="card p-0 ">
          <div className="card-body rounded-4 p-0">
            <table className="table-striped m-0 table">
              <thead className="table-dark">
                <tr>
                  <th className="py-4 text-left" scope="col">
                    Name
                  </th>
                  <th className="py-4 text-left" scope="col">
                    Title
                  </th>
                  <th className="py-4 text-left" scope="col">
                    Location
                  </th>
                  <th className="py-4 text-left" scope="col">
                    Category
                  </th>
                  <th className="py-4 text-left" scope="col">
                    Date Posted
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {candidates.map((candidate) => (
                  <tr>
                    <th className="py-4 text-left align-middle" scope="row">
                      David Moore
                    </th>
                    <td className="py-4 text-left align-middle">
                      Business Planning
                    </td>
                    <td className="py-4 text-left align-middle">Merrfield</td>
                    <td className="py-4 text-left align-middle">
                      Management & Finance
                    </td>
                    <td className="py-4 text-left align-middle">
                      October 28, 2015
                    </td>
                    <td className="d-grid gap-2 py-4 text-left">
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm"
                      >
                        Hide
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubmitResumeDashboard() {
  return (
    <>
      <form id="form_step_2" className="card bordered">
        <div className="p-4">
          <div className="row">
            <div className="col-12 col-md-6 form-group">
              <label htmlFor="first_name">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="first_name"
                id="first_name"
                placeholder={"Sedem Quame Amekpewu"}
                disabled={true}
              />
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
            <div className="col-12 col-md-6 form-group">
              <label htmlFor="last_name">Region, Country</label>
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
              <label htmlFor="email">Professional Title</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
              />
            </div>
            <div className="col-12 col-md-6 form-group">
              <label htmlFor="whatsapp_number">Location</label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                id="last_name"
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 col-md-6 form-group">
              <label htmlFor="gender">Photo (Optional)</label>
              <input
                type="file"
                className="form-control"
                name="last_name"
                id="last_name"
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="gender">Video (Optional)</label>
              <input
                type="file"
                className="form-control"
                name="last_name"
                id="last_name"
              />
            </div>
            <div className="col-12 col-md-6 form-group">
              <label htmlFor="highest_level_of_education">
                Resume Category
              </label>
              <select
                className="form-select"
                name="highest_level_of_education"
                id="highest_level_of_education"
              >
                <option selected>Choose Category</option>
                {/*todo: populate this using api.*/}
                <option value="construction">Construction Facilities</option>
                <option value="finance">Management & Finance</option>
                <option value="translations">Translations</option>
                <option value="software">Web, Software & IT</option>
                <option value="writing">Writing</option>
              </select>
            </div>
            <div className="col-12 col-md-6"></div>
            <div className="col-12 form-group">
              <label htmlFor="date_of_birth">Bio</label>
              <textarea
                style={{ height: "200px" }}
                className=""
                name="email"
                id="email"
              ></textarea>
            </div>
            <div className="col-12 form-group">
              <label htmlFor="ghana_post_address_of_residence">
                Skills (optional)
              </label>
              <input
                type="text"
                className="form-control"
                name="ghana_post_address_of_residence"
                id={"ghana_post_address_of_residence"}
                placeholder={"Comma separated"}
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 col-md-6 form-group">
              <label htmlFor="ghana_post_address_of_residence"></label>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Education</h5>
                  <div className="col-12 form-group">
                    <label htmlFor="first_name">School Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="first_name"
                      id="first_name"
                      placeholder={""}
                    />
                  </div>
                  <div className="col-12 form-group">
                    <label htmlFor="email">Qualification(s)</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      id="email"
                    />
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-6 form-group">
                        <label htmlFor="last_name">Start Date</label>
                        <input
                          type="text"
                          className="form-control"
                          name="last_name"
                          id="last_name"
                        />
                      </div>
                      <div className="col-6 form-group">
                        <label htmlFor="phone_number">End Date</label>
                        <PhoneInput countryCode="gh" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 form-group">
              <label htmlFor="ghana_post_address_of_residence"></label>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Experience</h5>
                  <div className="col-12 form-group">
                    <label htmlFor="first_name">Employer</label>
                    <input
                      type="text"
                      className="form-control"
                      name="first_name"
                      id="first_name"
                      placeholder={""}
                    />
                  </div>
                  <div className="col-12 form-group">
                    <label htmlFor="email">Job Title</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                    />
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-6 form-group">
                        <label htmlFor="last_name">Start Date</label>
                        <input
                          type="text"
                          className="form-control"
                          name="last_name"
                          id="last_name"
                        />
                      </div>
                      <div className="col-6 form-group">
                        <label htmlFor="phone_number">End Date</label>
                        <PhoneInput countryCode="gh" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer d-grid d-md-flex justify-content-md-end gap-2">
          <input type="submit" className="btn btn-primary" value="Submit" />
        </div>
      </form>
    </>
  );
}

function ManageResumeDashboard(props) {
  props.setShowNavBar(true);
  return (
    <>
      <div className="container">
        <Breadcrumbs title={"Manage Resume"} />
        <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="ex1-tab-1"
              data-mdb-toggle="tab"
              href="#ex1-tabs-1"
              role="tab"
              aria-controls="ex1-tabs-1"
              aria-selected="true"
            >
              Resumes
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="ex1-tab-2"
              data-mdb-toggle="tab"
              href="#ex1-tabs-2"
              role="tab"
              aria-controls="ex1-tabs-2"
              aria-selected="false"
            >
              Submit A Resume
            </a>
          </li>
          {/*<li className="nav-item" role="presentation">*/}
          {/*    <a*/}
          {/*        className="nav-link"*/}
          {/*        id="ex1-tab-3"*/}
          {/*        data-mdb-toggle="tab"*/}
          {/*        href="#ex1-tabs-3"*/}
          {/*        role="tab"*/}
          {/*        aria-controls="ex1-tabs-3"*/}
          {/*        aria-selected="false"*/}
          {/*    >Tab 3</a*/}
          {/*    >*/}
          {/*</li>*/}
        </ul>

        <div className="tab-content" id="ex1-content">
          <div
            className="tab-pane fade show active"
            id="ex1-tabs-1"
            role="tabpanel"
            aria-labelledby="ex1-tab-1"
          >
            <ViewResumeDashboard />
          </div>
          <div
            className="tab-pane fade"
            id="ex1-tabs-2"
            role="tabpanel"
            aria-labelledby="ex1-tab-2"
          >
            <SubmitResumeDashboard />
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageResumeDashboard;
