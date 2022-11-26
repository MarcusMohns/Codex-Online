import React from "react";

const Result = ({ prevStep, handleChange, values }) => {
  console.log(values);
  const previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <div>
      <h1>Result</h1>
      <input onClick={previous} type="button" value="previous" />
    </div>
  );
};

export default Result;
