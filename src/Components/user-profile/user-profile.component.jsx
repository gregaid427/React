import React, { useState } from "react";
import { user_id, user_object } from "../../app-constants/urls";
import ClickAwayListener from "./../ClickAwayListener/click-away-listener.componenet";

export default function UserProfile() {
  const [showInfo, setSHowInfo] = useState(false);
  const userName = user_object()?.name;
  return (
    <div style={{ marginRight: 20 }} className="d-flex">
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: 30,
          marginRight: 10,
          cursor: "pointer",
        }}
        className=" bg-white d-flex justify-content-center align-items-center"
      >
        <i
          className="fa-solid fa-user"
          style={{ fontSize: "100%", color: "#68c07f" }}
        ></i>
      </div>
      <div className=" position-relative">
        {showInfo ? (
          <i
            onClick={() => setSHowInfo(false)}
            className="fa-solid fa-chevron-up"
            style={{ fontSize: "100%", color: "white", cursor: "pointer" }}
          ></i>
        ) : (
          <i
            onClick={() => setSHowInfo(true)}
            className="fa-solid fa-chevron-down"
            style={{ fontSize: "100%", color: "white", cursor: "pointer" }}
          ></i>
        )}
        {showInfo && (
          <ClickAwayListener
            handleClickAway={() => {
              setSHowInfo(false);
            }}
          >
            <div
              style={{
                top: 40,
                left: -100,
                height: 100,
                borderRadius: 5,
                padding: 20,
              }}
              className="bg-white rise-anime position-absolute d-flex flex-column justify-items-center align-items-center"
            >
              <div
                style={{
                  top: 50,
                  width: "98%",
                  maxHeight: 236,
                  marginBottom: 10,
                }}
                className="absolute d-flex flex-column justify-items-center align-items-center"
              >
                <span style={{ whiteSpace: "nowrap" }}>
                  {userName !== undefined ? userName : "User name"}
                </span>
              </div>
              <button type="button" className="btn btn-success btn-sm">
                Logout
              </button>
            </div>
          </ClickAwayListener>
        )}
      </div>
    </div>
  );
}
