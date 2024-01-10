import React from "react";
import "./styles.css";
const ContentItem = ({ data }) => {
  const itemdata = [
    {
      title: "A",
      info: "B",
      description: "Mô tả",
      time: "2023-2024",
      skills: "Node",
    },
  ];
  return (
    <div className="contentItem">
      {itemdata.map((e) => {
        return (
          <div className="smallItem">
            <h2>{data.name}</h2>
            <div className="small title">
              <div className="title">{e.title}</div>
              <div className="info">{e.info}</div>
              <div className="time">{e.time}</div>
            </div>
            <div className="description">{e.description}</div>
            <div className="skills">{e.skills}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentItem;
