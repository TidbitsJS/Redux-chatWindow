import React from "react";
import User from "../../containers/User/User";
import "./Slidebar.css";

const Slidebar = ({ contacts }) => {
  return (
    <aside className="Slidebar">
      {contacts.map((contact) => (
        <User user={contact} key={contact.user_id} />
      ))}
    </aside>
  );
};

export default Slidebar;
