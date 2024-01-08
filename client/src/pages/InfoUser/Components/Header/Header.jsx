import React from "react";
import axios from "axios";
import "./styles.css";

const {
  username = "Mặc định",
  headline = "Backend Developer",
  current = "Hanoi University of Science and Technology",
  city = "Hanoi Capital Region",
} = {};

const Header = () => {
  return (
    <div className="header-info">
      <div className="photo">
        <img
          src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/06/tai-hinh-nen-dep-nhat-the-gioi-57.jpg"
          alt="Back Ground"
          className="background"
        />
        <img
          src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"
          alt="Avatar"
          className="avatar"
        />
      </div>
      <div className="info-intro">
        <div className="intro-left">
          <h2>{username}</h2>
          <h3>{headline}</h3>
          <div className="location">{city}</div>
        </div>
        <div className="Contact">ContactInfo</div>
        <div className="intro-right">
          <div>Current position:</div>
          <div className="current">{current}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
