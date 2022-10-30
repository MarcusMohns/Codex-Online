import React from "react";

const Result = ({ prevStep, handleChange, values }) => {
  const previous = (e) => {
    e.preventDefault();
    prevStep();
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
      <h1>Result</h1>
      <input onClick={previous} type="button" value="previous" />
    </div>
  );
};

export default Result;
