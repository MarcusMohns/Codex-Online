import React from "react";

const ClassAndSpec = ({ nextStep, handleChange, values }) => {
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
        backgroundColor: "white",
      }}
    >
      <h1>classAndSpec</h1>
      <label>
        Email
        <input
          type="text"
          placeholder="Class and Spec! :)"
          onChange={handleChange("classAndSpec")}
        />
      </label>
      <input onClick={next} type="button" value="Button" />
    </div>
  );
};

export default ClassAndSpec;
