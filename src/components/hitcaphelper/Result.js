import React from "react";
import StyledNextPrevButton from "./components/StyledNextPrevButton";

const Result = ({ prevStep, values, hitTalentClasses }) => {
  const previous = (e) => {
    e.preventDefault();
    hitTalentClasses.includes(values.classAndSpec) ? prevStep() : prevStep(2);
  };

  const { pveOrPvp, classAndSpec, talentPoints = 0, raidHitBuff = 0 } = values;

  // const ourValues = Object.entries(values).map(([key, value]) => {
  //   return <div key={key}>{value}</div>;
  // });

  const casters = [
    "Balance Druid",
    "Arcane Mage",
    "Fire Mage",
    "Frost Mage",
    "Shadow Priest",
    "ELemental Shaman",
    "Affliction Warlock",
    "Demonology Warlock",
    "Destruction Warlock",
    "Discipline Priest",
    "Restoration Druid",
    "Restoration Shaman",
    "Holy Priest",
  ];

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
