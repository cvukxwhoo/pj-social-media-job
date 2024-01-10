import React from "react";
import Options from "./Components/options";
import ContentItem from "./Components/ContentItem";

const data = [
  { name: "Education", check: false },
  { name: "Project", check: false },
  { name: "Skills", check: false },
  { name: "Courses", check: false },
  { name: "Experience", check: false },
];

const Content = () => {
  return (
    <div>
      <Options />
      {data.map((e, i) => {
        return <ContentItem data={e} key={i} />;
      })}
    </div>
  );
};

export default Content;
