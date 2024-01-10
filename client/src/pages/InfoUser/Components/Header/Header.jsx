import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { decoded } from "../../../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../../../context/AuthContext";
const Header = () => {
  const { user = {}, islogin, login } = useAuth();
  const [isAuth, setisAuth] = useState(false);
  const [userinfo, setUserinfo] = useState({});
  const { id } = useParams();
  const getid = decoded(id);

  useEffect(() => {
    if (user && user._id == getid) setisAuth(true);
  }, [user]);
  useEffect(() => {
    const value = {
      id: getid,
    };
    const getdata = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3001/infouser",
          value
        );
        setUserinfo(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, []);
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
        {isAuth && (
          <FontAwesomeIcon icon={faPenToSquare} className="editicon" />
        )}
      </div>
      <div className="info-intro">
        <div className="intro-left">
          <h2>{userinfo.Name}</h2>
          <h3 className="headline">{userinfo.headline}</h3>
          <div className="location">Location: {userinfo.city}</div>
          <div className="Contact">ContactInfo: {userinfo.email}</div>
        </div>
        <div className="intro-right">
          <div className="intro-right-item">
            <div>Current position: </div>
            <div className="current">{userinfo.current}</div>
          </div>
          <div className="intro-right-item">
            <div>Year of birth: </div>
            <div className="current">{userinfo.birthday}</div>
          </div>
          {isAuth && (
            <FontAwesomeIcon icon={faPenToSquare} className="editicon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
