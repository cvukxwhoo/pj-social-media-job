import React from "react";
import Options from "./Components/options";
import ContentItem from "./Components/ContentItem";

const data = [
  {
    title: "Education",
  },
  {
    title: "Project",
  },
];

const Content = () => {
  return (
    <div>
      <Options />
      {data.forEach((e, i) => {
        return <ContentItem data={e} key={i} />;
      })}
    </div>
  );
};

export default Content;
