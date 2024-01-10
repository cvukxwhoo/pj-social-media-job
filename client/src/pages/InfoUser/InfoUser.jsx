import React, { useEffect } from "react";
import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import LayoutAside from "./Components/LayoutAside/LayoutAside";
import "./style.css";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const InfoUser = () => {
  const { islogin, user, login } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const fecthtoken = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
      } else {
        try {
          const response = await axios.get("http://localhost:3001/token", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          await login(response.data.data, response.data.token);
          console.log(user);
        } catch (error) {
          console.log(error);
          navigate("/login");
        }
      }
    };
    fecthtoken();
  }, []);
  return (
    <div className="infoUser">
      <div className="infoUserLeft">
        <Header />
        <Content />
      </div>
      <div className="infoUserRight">
        <LayoutAside />
      </div>
    </div>
  );
};

export default InfoUser;
