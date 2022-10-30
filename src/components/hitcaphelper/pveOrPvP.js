import React from "react";

const PveOrPvp = ({ nextStep, handleChange, values }) => {
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <div>
      <label htmlFor={"pvp"} key={"pvp"}>
        <input
          type="radio"
          onChange={handleChange("pveOrPvp")}
          id={"pvp"}
          name="pveOrPvp"
          value={"pvp"}
        />
        {/* <img src={spec.image} alt="spec" /> */}
      </label>
      <label htmlFor={"pve"} key={"pve"}>
        <input
          type="radio"
          onChange={handleChange("pveOrPvp")}
          id={"pve"}
          name="pveOrPvp"
          value={"pve"}
        />
        {/* <img src={spec.image} alt="spec" /> */}
      </label>
      <input onClick={next} type="button" value="Button" />
    </div>
  );
};

export default PveOrPvp;
