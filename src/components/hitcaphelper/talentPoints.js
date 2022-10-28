import React from "react";

const TalentPoints = ({ nextStep, handleChange, values }) => {
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
      <h1>TalentPoints</h1>
      <input onClick={next} type="button" value="Button" />
    </div>
  );
};

export default TalentPoints;
