import React from "react";
import Talent from "./components/Talent";

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
  let value = 0;

  switch (values.classAndSpec) {
    case "Blood Death Knight":
    case "Unholy Death Knight":
    case "Frost Death Knight":
      content = (
        <Talent text="Nerves of Cold Steel" image="" />
        // DK - Nerves of Cold Steel (0/3) 1% per point (dual wield)
      );
      break;

    case "Balance Druid":
      content = (
        <Talent text="Balance of Power" image="" />
        // Druid Balance - Balance of Power (0/2) 2% hit per point (spells)
      );
      break;

    case "Beast Mastery Hunter":
    case "Marksman Hunter":
    case "Survival Hunter":
      <Talent text="Focused Aim" image="" />;
      break;
    // Hunter - Focused Aim (0/3) 1% hit per point;

    case "Arcane Mage":
    case "Fire Mage":
    case "Frost Mage":
      content = (
        <div>
          <Talent text="Arcane Focus" image="" />
          <Talent text="Precision" image="" />
        </div>
      );
      //   <p> Mage - Arcane focus (0/3) 1% hit per point (spells)</p>
      //   <p>Precision (0/3) 1% hit per point (spells)</p>
      break;

    case "Shadow Priest":
      content = <Talent text="Shadow Focus" image="" />;
      // <div>Priest - Shadow Focus (0/3) 1% hit per point (shadow spells)</div>
      break;

    case "Assassination Rogue":
    case "Combat Rogue":
    case "Subtlety Rogue":
      content = <Talent text="Precision" image="" />;
      break;
    // Rogue - Precision (0/5) - 1% hit poison and attacks;

    case "Elemental Shaman":
    case "Enhancement Shaman":
    case "Restoration Shaman":
      content = (
        <div>
          <Talent text="Elemental Precision" image="" />
          <Talent text="Dual Wield Specialization" image="" />
        </div>
      );
      // <div>
      //   <p>
      //     Elemental Shaman - Elemental Precision (0/3) 1% hit nature fire and
      //     frost spells
      //   </p>
      //   <p>
      //     Enhancement - Dual Wield Spec - (0/3) - 2% chance to hit with dual
      //     wield
      //   </p>
      // </div>
      break;

    case "Affliction Warlock":
    case "Demonology Warlock":
    case "Destruction Warlock":
      content = <Talent text="Suppression" image="" />;
      break;
    // content = (
    //   <div>Warlock - Suppression (0/3) - 1% chance to hit with spells</div>
    // );

    case "Arms Warrior":
    case "Fury Warrior":
    case "Protection Warrior":
      content = content = <Talent text="Precision" image="" />;
      // <div>
      //   Warrior - Precision (0/3) - 1% chance to hit with melee weapons
      // </div>
      break;
    default:
      content = <div>No class picked</div>;
  }
  console.log(content);
  return (
    <div>
      {content}
      <input onClick={previous} type="button" value="previous" />
      <input onClick={next} type="button" value="next" />
    </div>
  );
};
export default TalentPoints;
