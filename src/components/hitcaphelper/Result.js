import React from "react";
import StyledNextPrevButton from "./components/StyledNextPrevButton";

const Result = ({ prevStep, values, hitTalentClasses, casters }) => {
  const previous = (e) => {
    e.preventDefault();

    if (hitTalentClasses.includes(values.classAndSpec)) {
      prevStep(1);
    } else {
      casters.includes(values.classAndSpec) ? prevStep(2) : prevStep(3);
    }
  };

  const { pveOrPvp, classAndSpec, talentPoints = 0, raidHitBuff = 0 } = values;

  const pveSpellCap = 17;
  const pvpSpellCap = 4;
  const pvePhysCap = 8;
  const pvpPhysCap = 5;

  const cap = () => {
    if (casters.includes(classAndSpec)) {
      if (pveOrPvp === "pve") {
        // if the selected class is a caster in PvE
        return pveSpellCap;
      }
      if (pveOrPvp === "pvp") {
        // if the selected class is a caster in PvP
        return pvpSpellCap;
      }
    }
    if (!casters.includes(classAndSpec)) {
      if (pveOrPvp === "pve") {
        // if the selected class is a melee in PvE
        return pvePhysCap;
      }
      if (pveOrPvp === "pvp") {
        // if the selected class is a melee in PvP
        return pvpPhysCap;
      }
    }
  };
  const target = cap();

  const result = casters.includes(classAndSpec) ? (
    <div>{target - talentPoints - raidHitBuff} </div>
  ) : (
    <div>{target - talentPoints} </div>
  );

  return (
    <div>
      {result}
      <h1>Result</h1>
      <StyledNextPrevButton onClick={previous}>
        Previous<span id="previous-arrow">←</span>
      </StyledNextPrevButton>
    </div>
  );
};

export default Result;
