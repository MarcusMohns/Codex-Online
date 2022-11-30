import React from "react";

const Result = ({ prevStep, values, hitTalentClasses }) => {
  const previous = (e) => {
    e.preventDefault();
    hitTalentClasses.includes(values.classAndSpec) ? prevStep() : prevStep(2);
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
