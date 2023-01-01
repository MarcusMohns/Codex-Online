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
    return 0;
  };
  const result = () => {
    const target = cap();

    if (!pveOrPvp) {
      return <div>Please select PvE or PvP</div>;
    }
    if (!classAndSpec) {
      return <div>Please select a class and specialization</div>;
    }

    if (casters.includes(classAndSpec)) {
      return <div>{target - talentPoints - raidHitBuff} </div>;
    } else {
      return <div>{target - talentPoints} </div>;
    }
  };

  const content = result();

  return (
    <div>
      {content}
      <h1>Result</h1>
      <StyledNextPrevButton onClick={previous}>
        Previous<span id="previous-arrow">←</span>
      </StyledNextPrevButton>
    </div>
  );
};

export default Result;
