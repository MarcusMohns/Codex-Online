import React from "react";
import { memo } from "react";
import SpecButton from "./SpecButton";

const SpecButtons = ({ specs, onClick }) => {
  return (
    <div className={"spec-buttons"}>
      {specs.map((spec) => (
        <SpecButton
          key={spec.text}
          text={spec.text}
          image={spec.image}
          onClick={() => onClick(spec)}
          color={spec.color}
        />
      ))}
    </div>
  );
};

export default memo(SpecButtons);
