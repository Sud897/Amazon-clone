import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../store/AuthProvider";
import styles from './Navbar.module.css';

const UserList = () => {
  const {user , signout} = useAuth();


  const handleSignOut = async() => await signout();
  
  return (
    <ul className={styles["user-list"]}>
      {
         user ?
          <>
              <li>
                <Link to="/">Profile</Link>
              </li>
              <li>
                <Link to="/" onClick={handleSignOut}>Sign-Out</Link>
              </li>
          </>
         :
          <li>
            <Link to="/signin">Sign In</Link>
          </li>   
      }
      
      <li>
        <Link to="/">Watch Anywhere</Link>
      </li>
      <li>
        <Link to="/">Help</Link>
      </li>
    </ul>
  );
};

export default UserList;
