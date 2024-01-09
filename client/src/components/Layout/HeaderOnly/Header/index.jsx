import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import { useState } from "react";
const Header = () => {
  const [loginhover, setloginhover] = useState(false);
  const nagivate = useNavigate();
  const { user, islogin, logout } = useAuth();
  const signout = () => {
    logout();
    navigate("/login");
  };
  const splitname = (fullName) => {
    const words = fullName.split(" ");
    let nameshow = "Username";
    if (words.length > 1) {
      nameshow = words[0] + " " + words[words.length - 1];
    } else {
      nameshow = words[0];
    }
    return nameshow;
  };
  return (
    <header className="header">
      <nav className="navbar fixed-top shrink">
        <div className="header-container">
          {/* LEFT_SIDE */}
          <div className="left-side">
            {/* NAV BRAND */}
            <div className="nav-brand">
              <Link to="/">
                <img
                  src="https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png"
                  alt=""
                />
              </Link>
            </div>

            {/* SEARCH BAR */}
            <label className="nav-search">
              <input type="search" placeholder="Type keywords.." />
              <span>
                <FontAwesomeIcon icon={faSearch} className="fa-light" />
              </span>
            </label>
          </div>

          <ul className="right-side">
            <li>
              <Link to="/employer/details">For Employers</Link>
            </li>
            {islogin ? (
              <li
                className="login-button"
                onMouseOver={() => {
                  setloginhover(true);
                }}
                onMouseOut={() => {
                  setloginhover(false);
                }}
              >
                <Link to="/personal-info" className="relative">
                  {splitname(user.userName)}
                  <span> </span>
                  <FontAwesomeIcon icon={faAngleDown} className="icon" />
                </Link>
                <div className={loginhover ? "layoutmore" : "layoutmore none"}>
                  <Link onClick={signout}>Sign Out</Link>
                </div>
              </li>
            ) : (
              <li>
                <Link to="/login">Sign in/Sign up</Link>
              </li>
            )}
            <li>
              <FontAwesomeIcon icon={faBell} className="fa-regular" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
