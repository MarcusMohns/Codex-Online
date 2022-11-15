import React from "react";

const TalentPoints = ({ nextStep, prevStep, handleChange, values }) => {
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };
  const previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  switch (values.classAndSpec) {
    case "Blood Death Knight":
    case "Unholy Death Knight":
    case "Frost Death Knight":
      return <div>DK - Nerves of Cold Steel</div>;

    case "Balance Druid":
      // case "Feral Druid":
      // case "Restoration Druid":
      // Doesnt have hit talents (i think)^
      return (
        <div>
          Druid
          <div>Balance - Balance of Power (0/2) 2% hit per point (spells)</div>
        </div>
      );

    case "Beast Mastery Hunter":
    case "Marksman Hunter":
    case "Survival Hunter":
      return <div>Hunter - Focused Aim (0/3) 1% hit per point </div>;

    case "Arcane Mage":
    case "Fire Mage":
    case "Frost Mage":
      return (
        <div>
          Mage - Arcane focus (0/3) 1% hit per point (spells){" "}
          <div>Precision (0/3) 1% hit per point (spells)</div>
        </div>
      );

    // case "Holy Paladin":
    // case "Protection Paladin":
    // case "Retribution Paladin":
    //   return <div>Paladin</div>;
    // No talents for hit that i can see

    // case "Discipline Priest":
    // case "Holy Priest":
    // no hit talents i think
    case "Shadow Priest":
      return (
        <div>Priest - Shadow Focus (0/3) 1% hit per point (shadow spells)</div>
      );

    case "Assassination Rogue":
    case "Combat Rogue":
    case "Subtlety Rogue":
      return <div>Rogue</div>;

    case "Elemental Shaman":
    case "Enhancement Shaman":
    case "Restoration Shaman":
      return <div>Shaman</div>;

    case "Arms Warrior":
    case "Fury Warrior":
    case "Protection Warrior":
      return <div>Warrior</div>;

    case "Affliction Warlock":
    case "Demonology Warlock":
    case "Destruction Warlock":
      return <div>Warrior</div>;

    default:
      return (
        <div>
          <h1>TalentPoints</h1>
          <input onClick={previous} type="button" value="previous" />
          <input onClick={next} type="button" value="next" />
        </div>
      );
  }
};

export default TalentPoints;
