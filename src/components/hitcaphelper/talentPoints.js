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
      return <div>Death Knight</div>;

    case "Balance Druid":
    case "Feral Druid":
    case "Restoration Druid":
      return <div>Druid</div>;

    case "Beast Mastery Hunter":
    case "Marksman Hunter":
    case "Survival Hunter":
      return <div>Hunter</div>;

    case "Arcane Mage":
    case "Fire Mage":
    case "Frost Mage":
      return <div>Mage</div>;

    case "Holy Paladin":
    case "Protection Paladin":
    case "Retribution Paladin":
      return <div>Paladin</div>;

    case "Discipline Priest":
    case "Holy Priest":
    case "Shadow Priest":
      return <div>Priest</div>;

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
