import React from "react";
import StyledNextPrevButton from "./components/StyledNextPrevButton";

const Result = ({ prevStep, values, hitTalentClasses }) => {
  const previous = (e) => {
    e.preventDefault();
    hitTalentClasses.includes(values.classAndSpec) ? prevStep() : prevStep(2);
  };

  const { pveOrPvp, classAndSpec, talentPoints, raidHitBuff } = values;

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
  let cap = 0;

  switch (values) {
    case pveOrPvp === "pve" && casters.includes(classAndSpec):
      cap = pveSpellCap;
      break;
    case pveOrPvp === "pvp" && casters.includes(classAndSpec):
      cap = pvpSpellCap;
      break;
    case pveOrPvp === "pve" && !casters.includes(classAndSpec):
      cap = pvePhysCap;
      break;
    case pveOrPvp === "pvp" && !casters.includes(classAndSpec):
      cap = pvpPhysCap;
      break;
    default:
      break;
  }

  return (
    <div>
      {/* {ourValues} */}
      <h1>Result</h1>
      <StyledNextPrevButton onClick={previous}>
        Previous<span id="previous-arrow">←</span>
      </StyledNextPrevButton>
    </div>
  );
};

export default Result;
