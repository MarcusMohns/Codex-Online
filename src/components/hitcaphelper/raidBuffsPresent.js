import React from "react";

const RaidBuffsPresent = ({ nextStep, handleChange, values }) => {
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "500px",
      }}
    >
      <h1>RaidBuffsPresent</h1>
      <input onClick={next} type="button" value="Button" />
    </div>
  );
};

export default RaidBuffsPresent;
