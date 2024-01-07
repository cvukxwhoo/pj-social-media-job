import React, { useState } from "react";

const Option_Item = ({ nameOptions, check, onFinish }) => {
  const [ncheck, setncheck] = useState(check);
  const handledata = async () => {
    await setncheck(!ncheck);
    onFinish({ nameOptions, check: !ncheck });
  };
  return (
    <div>
      <input
        type="checkbox"
        id={nameOptions}
        name="subscribe"
        checked={ncheck}
        onChange={handledata}
      />
      <label htmlFor={nameOptions}>{nameOptions}</label>
    </div>
  );
};

export default Option_Item;
