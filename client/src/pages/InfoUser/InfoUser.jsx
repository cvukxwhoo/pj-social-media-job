import React from "react";
import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import LayoutAside from "./Components/LayoutAside/LayoutAside";
import "./style.css";
const InfoUser = () => {
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
