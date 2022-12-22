function HeroSection(props) {
  return (
    <>
      <div className="bg-light text-left intro-banner">
        <div className="container p-5">
          <h3 className="text-capitalize">Find Job</h3>
          <p className="lead banner-headline-alt">
            Hire Experts or be hired in sales & marketing!
          </p>
          <div className="d-none d-md-block d-lg-block">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Job Title, Skill, Industry"
                aria-label="Username"
              />
              <input
                type="text"
                className="form-control search-input"
                placeholder="City, State or Zip"
                aria-label="Username"
              />
              <select
                className="form-select search-input"
                aria-label="Default select example"
              >
                <option selected>All Categories</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <button type="button" className=" search-input btn btn-success">
                Search
              </button>
            </div>
          </div>
          <div className="d-sm-block d-md-none d-lg-none">
            <div className="d-grid gap-3">
              <input
                type="text"
                className="form-control"
                placeholder="Job Title, Skill, Industry"
                aria-label="Username"
              />
              <input
                type="text"
                className="form-control"
                placeholder="City, State or Zip"
                aria-label="Username"
              />
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>All Categories</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <button type="button" className=" btn btn-success">
                Search
              </button>
            </div>
          </div>
          <div className=" text-xl flex gap-2 font-semibold  ">
            <h3 className="">Need more search options? {" "}
            <Link to="/advanced-search">
              {" "}
              <span className=" text-[#69C080]">Advanced Search</span>{" "}
            </Link>{" "}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
