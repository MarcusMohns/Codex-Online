import React from "react";
import Talent from "./components/Talent";
import StyledNextPrevButton from "./components/StyledNextPrevButton";

const TalentPoints = ({ nextStep, prevStep, handleChange, values }) => {
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };
  const previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const { talentPoints } = values;
  let content;

  switch (values.classAndSpec) {
    case "Blood Death Knight":
    case "Unholy Death Knight":
    case "Frost Death Knight":
      content = (
        <Talent
          text="Nerves of Cold Steel"
          image=""
          max="3"
          handleChange={handleChange}
          talentPoints={talentPoints}
        />
        // DK - Nerves of Cold Steel (0/3) 1% per point (dual wield)
      );
      break;

    case "Balance Druid":
      content = (
        <Talent
          text="Balance of Power"
          image=""
          max="2"
          handleChange={handleChange}
          talentPoints={talentPoints}
        />
        // Druid Balance - Balance of Power (0/2) 2% hit per point (spells)
      );
      break;

    case "Beast Mastery Hunter":
    case "Marksman Hunter":
    case "Survival Hunter":
      content = (
        <Talent
          text="Focused Aim"
          image=""
          max="5"
          handleChange={handleChange}
          talentPoints={talentPoints}
        />
      );
      break;
    // Hunter - Focused Aim (0/3) 1% hit per point;

    case "Arcane Mage":
    case "Fire Mage":
    case "Frost Mage":
      content = (
        <div>
          <Talent
            text="Arcane Focus/Precision"
            image=""
            max="6"
            handleChange={handleChange}
            talentPoints={talentPoints}
          />
        </div>
      );
      //   <p> Mage - Arcane focus (0/3) 1% hit per point (spells)</p>
      //   <p>Precision (0/3) 1% hit per point (spells)</p>
      break;

    case "Shadow Priest":
      content = (
        <Talent
          text="Shadow Focus"
          image=""
          max="3"
          handleChange={handleChange}
          talentPoints={talentPoints}
        />
      );
      // Priest - Shadow Focus (0/3) 1% hit per point (shadow spells)
      break;

    case "Assassination Rogue":
    case "Combat Rogue":
    case "Subtlety Rogue":
      content = (
        <Talent
          text="Precision"
          image=""
          max="5"
          handleChange={handleChange}
          talentPoints={talentPoints}
        />
      );
      break;
    // Rogue - Precision (0/5) - 1% hit poison and attacks;

    case "Elemental Shaman":
    case "Restoration Shaman":
      content = (
        <div>
          <Talent
            text="Elemental Precision"
            image=""
            max="3"
            handleChange={handleChange}
            talentPoints={talentPoints}
          />
        </div>
      );
      //     Elemental Shaman - Elemental Precision (0/3) 1% hit nature fire and frost spells
      break;
    case "Enhancement Shaman":
      content = (
        <div>
          <Talent
            text="Dual Wield Specialization"
            image=""
            max="3"
            handleChange={handleChange}
            talentPoints={talentPoints}
          />
        </div>
      );
      //     Enhancement - Dual Wield Spec - (0/3) - 2% chance to hit with dual wield
      break;

    case "Affliction Warlock":
    case "Demonology Warlock":
    case "Destruction Warlock":
      content = (
        <Talent
          text="Suppression"
          image=""
          max="3"
          handleChange={handleChange}
          talentPoints={talentPoints}
        />
      );
      break;
    //  Warlock - Suppression (0/3) - 1% chance to hit with spells

    case "Arms Warrior":
    case "Fury Warrior":
    case "Protection Warrior":
      content = (
        <Talent
          text="Precision"
          image=""
          max="3"
          handleChange={handleChange}
          talentPoints={talentPoints}
        />
      );
      //   Warrior - Precision (0/3) - 1% chance to hit with melee weapons
      break;
    default:
      content = 0;
  }

  return (
    <div>
      {content}
      <StyledNextPrevButton onClick={previous}>
        Previous<span id="previous-arrow">←</span>
      </StyledNextPrevButton>
      <StyledNextPrevButton onClick={next}>
        Next <span id="next-arrow">→</span>
      </StyledNextPrevButton>
    </div>
  );
};
export default TalentPoints;
