import React from "react";
import "./styles.css";
import Option_Item from "./Option_Item/Option_Item";

const Options = () => {
  const OptionsMap = [
    { name: "Education", check: false },
    { name: "Project", check: false },
    { name: "Skills", check: false },
    { name: "Courses", check: false },
    { name: "Experience", check: false },
  ];
  const getData = (value) => {
    OptionsMap.forEach((e) => {
      if (e.name == value.nameOptions) e.check = value.check;
    });
  };
  const onFinish = (e) => {
    e.preventDefault();
    console.log(OptionsMap);
  };
  return (
    <div className="options">
      <div>Add profile section</div>
      <form onSubmit={onFinish}>
        <div>
          {OptionsMap.map((e, i) => {
            return (
              <Option_Item
                nameOptions={e.name}
                check={e.check}
                key={i}
                onFinish={getData}
              />
            );
          })}
        </div>
        <button type="submit">OK</button>
      </form>
    </div>
  );
};

export default Options;
