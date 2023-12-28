import React from "react";
import axios from "axios";
import "./styles.css";

const { username = "Mặc định" } = {};

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
        <h2>{username}</h2>
      </div>
    </div>
  );
};

export default Header;
