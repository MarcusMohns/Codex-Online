import React from "react";

const Result = ({ prevStep, values }) => {
  console.log(values);
  const previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  const ourValues = Object.entries(values).map(([key, value]) => {
    return <div key={key}>{value}</div>;
  });

  return (
    <div>
      {ourValues}
      <h1>Result</h1>
      <input onClick={previous} type="button" value="previous" />
    </div>
  );
};

export default Result;
