function EmailList() {
  return (
    <div className="p-5 rounded-3 text-center bg-light">
      <h1 className="text-capitalize">Don't Miss Any New Jobs.</h1>
      <p className="lead">Join thousands of professionals worldwide</p>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span
              className="input-group-text text-capitalize"
              id="basic-addon2"
            >
              Join Free
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailList;
