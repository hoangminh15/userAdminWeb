import React from "react";
import "./UserDetail.css";

function UserDetail({ show, onClose, userDetail }) {
  if (!show) {
    return null;
  }

  if (userDetail === undefined) {
    return null;
  }

  return (
    <div className="user__detail">
      <div className="content">
        <div className="header">
          <h4 className="title">USER DETAIL</h4>
        </div>
        <div className="body">
          <p>ID: {userDetail.id}</p>
          <p>Name: {userDetail.name}</p>
          <p>Date of birth: {userDetail.dob}</p>
          <p>Gender: {userDetail.gender}</p>
        </div>
        <div className="footer">
          <button className="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
