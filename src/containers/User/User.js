import React from "react";
import "./User.css";
import store from "../../store/Store";
import { setActiveUserId } from "../../actions/Action";

const handleUserClick = ({ user_id }) => {
  store.dispatch(setActiveUserId(user_id));
};

const User = ({ user }) => {
  const { name, profile_pic, status } = user;

  return (
    <div className="User" onClick={handleUserClick(user)}>
      <img src={profile_pic} alt={name} className="User_pic" />
      <div className="User_details">
        <p className="User_details-name"> {name} </p>
        <p className="User_details-status"> {status} </p>
      </div>
    </div>
  );
};

export default User;
