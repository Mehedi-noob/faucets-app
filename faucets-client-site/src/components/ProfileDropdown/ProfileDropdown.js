import React from "react";
import { Link } from "react-router-dom";
import "./ProfileDropdown.css";

const ProfileDropdown = ({setOpenMenu, openMenu}) => {
  return (
    <div>
      <ul onClick={() => setOpenMenu(!openMenu)} className="d-flex flex-column gap-2 dropdownProfile">
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/faq">FAQ</Link>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
