import React from "react";
import { memo } from "react";
import SpecButton from "./SpecButton";

const SpecButtons = ({ specs, handleSpecTooltip, onClick }) => {
  return (
    <div className={"spec-buttons"}>
      {specs.map((spec) => (
        <SpecButton
          spec={spec}
          handleSpecTooltip={handleSpecTooltip}
          onClick={() => onClick(spec)}
          key={spec.text}
        />
      ))}
    </div>
  );
};

export default memo(SpecButtons);
