import React from "react";

const MessagingPane = (props) => {
  return (
    <div className="d-flex align-items-center">
      <img
        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
        alt=""
        style={{ width: "60px", height: "60px" }}
        className="rounded-circle"
      />
      <div className="ms-3 border-bottom">
        <p className="m-0 p-0 fw-bold">
          John Doe <span   style={{ marginLeft:19, fontSize:15 }} >5 Octo</span>
          </p>
          <p className="m-0 p-0"> <span style={{ fontSize:16,  }}>  
         
            john.g doe@gma il. com jsdkhfsdh fkhsdj fjkdshk ggg
            </span>
        </p>
      </div>
    </div>
  );
};

export default MessagingPane;
