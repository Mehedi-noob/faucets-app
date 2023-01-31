import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import "./ProfileDropdown.css";

const ProfileDropdown = ({ setOpenMenu, openMenu }) => {
  const { user, logOut } = useContext(AuthContext);


  return (
    <div>
      <ul onClick={() => setOpenMenu(!openMenu)} className="d-flex flex-column gap-2 dropdownProfile">
        {
          !user &&
          <div className="d-flex flex-column gap-2">
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>

        }
        {
          user && <Link onClick={logOut}>Log Out</Link>
        }
        <Link to="/faq">FAQ</Link>
        <Link to="/admin">
          
            Admin Panel
         
        </Link>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
