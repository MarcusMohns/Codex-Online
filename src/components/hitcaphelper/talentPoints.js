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

  let content;

  switch (values.classAndSpec) {
    case "Blood Death Knight":
    case "Unholy Death Knight":
    case "Frost Death Knight":
      content = (
        <div>DK - Nerves of Cold Steel (0/3) 1% per point (dual wield)</div>
      );
      break;

    case "Balance Druid":
      content = (
        <div>
          Druid Balance - Balance of Power (0/2) 2% hit per point (spells)
        </div>
      );
      break;

    case "Beast Mastery Hunter":
    case "Marksman Hunter":
    case "Survival Hunter":
      content = <div>Hunter - Focused Aim (0/3) 1% hit per point </div>;
      break;

    case "Arcane Mage":
    case "Fire Mage":
    case "Frost Mage":
      content = (
        <div>
          <p> Mage - Arcane focus (0/3) 1% hit per point (spells)</p>
          <p>Precision (0/3) 1% hit per point (spells)</p>
        </div>
      );
      break;

    case "Shadow Priest":
      content = (
        <div>Priest - Shadow Focus (0/3) 1% hit per point (shadow spells)</div>
      );
      break;

    case "Assassination Rogue":
    case "Combat Rogue":
    case "Subtlety Rogue":
      content = <div>Rogue - Precision (0/5) - 1% hit poison and attacks</div>;
      break;

    case "Elemental Shaman":
    case "Enhancement Shaman":
    case "Restoration Shaman":
      content = (
        <div>
          <p>
            Elemental Shaman - Elemental Precision (0/3) 1% hit nature fire and
            frost spells
          </p>
          <p>
            Enhancement - Dual Wield Spec - (0/3) - 2% chance to hit with dual
            wield
          </p>
        </div>
      );
      break;

    case "Affliction Warlock":
    case "Demonology Warlock":
    case "Destruction Warlock":
      content = (
        <div>Warlock - Suppression (0/3) - 1% chance to hit with spells</div>
      );
      break;

    case "Arms Warrior":
    case "Fury Warrior":
    case "Protection Warrior":
      content = (
        <div>
          Warrior - Precision (0/3) - 1% chance to hit with melee weapons
        </div>
      );
      break;
    default:
      content = <div>No class picked</div>;
  }

  return (
    <div>
      {content}
      <input onClick={previous} type="button" value="previous" />
      <input onClick={next} type="button" value="next" />
    </div>
  );
};

export default TalentPoints;
