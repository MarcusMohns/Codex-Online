import React from "react";
import { memo } from "react";
import SpecButton from "./SpecButton";
import SpecArray from "../../../data/SpecArray";

const SpecButtons = ({ handleSpecTooltip, onClick }) => {
  return (
    <div className={"spec-buttons"}>
      {SpecArray.map((spec) => (
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
