import React from "react";
import Talent from "../components/Talent";
import StyledNextPrevButton from "../components/StyledNextPrevButton";
import {
  MainContentContainer,
  StyledCapHeader,
  ButtonContainer,
} from "../styles/HitCapHelper.styled";

const TalentPoints = ({
  nextStep,
  prevStep,
  handleChange,
  values,
  casters,
}) => {
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };
  const previous = (e) => {
    e.preventDefault();
    casters.includes(values.classAndSpec)
      ? prevStep(1, "talentPoints")
      : prevStep(2, "talentPoints");
  };

  const { talentPoints } = values;
  let content;
  let name;

  switch (values.classAndSpec) {
    case "Blood Death Knight":
    case "Unholy Death Knight":
    case "Frost Death Knight":
      content = (
        <Talent
          text="Nerves of Cold Steel"
          image="images/nerves_of_cold_steel.webp"
          srcSet="images/nerves_of_cold_steel.webp 1x"
          max="3"
          handleChange={handleChange}
          talentPoints={talentPoints}
          multiplier="1"
        />
        // DK - Nerves of Cold Steel (0/3) 1% per point (dual wield)
      );

      name = "Nerves of Cold Steel";
      break;

    case "Balance Druid":
      content = (
        <Talent
          text="Balance of Power"
          image="images/balance_of_power.webp"
          srcSet="images/balance_of_power.webp 1x"
          max="2"
          handleChange={handleChange}
          talentPoints={talentPoints}
          multiplier="2"
        />
        // Druid Balance - Balance of Power (0/2) 2% hit per point (spells)
      );

      name = "Balance of Power";
      break;

    case "Beast Mastery Hunter":
    case "Marksman Hunter":
    case "Survival Hunter":
      content = (
        <Talent
          text="Focused Aim"
          image="images/focused_aim.webp"
          srcSet="images/focused_aim.webp 1x"
          max="3"
          handleChange={handleChange}
          talentPoints={talentPoints}
          multiplier="1"
        />
      );
      name = "Focused Aim";
      break;
    // Hunter - Focused Aim (0/3) 1% hit per point;

    case "Arcane Mage":
    case "Fire Mage":
    case "Frost Mage":
      content = (
        <Talent
          text="Arcane Focus+Precision"
          image="images/arcane_focus_precision.webp"
          srcSet="images/arcane_focus_precision.webp 1x"
          max="6"
          handleChange={handleChange}
          talentPoints={talentPoints}
          multiplier="1"
          imgSize={{ width: "115px", height: "58px" }}
        />
      );
      //    Mage - Arcane focus (0/3) 1% hit per point (spells)
      //   Precision (0/3) 1% hit per point (spells)
      name = "Arcane Focus+Precision";
      break;

    case "Shadow Priest":
      content = (
        <Talent
          text="Shadow Focus"
          image="images/shadow_focus.webp"
          srcSet="images/shadow_focus.webp 1x"
          max="3"
          handleChange={handleChange}
          talentPoints={talentPoints}
          multiplier="1"
        />
      );
      // Priest - Shadow Focus (0/3) 1% hit per point (shadow spells)
      name = "Shadow Focus";
      break;

    case "Assassination Rogue":
    case "Combat Rogue":
    case "Subtlety Rogue":
      content = (
        <Talent
          text="Precision"
          image="images/precision.webp"
          srcSet="images/precision.webp 1x"
          max="5"
          handleChange={handleChange}
          talentPoints={talentPoints}
          multiplier="1"
        />
      );
      name = "Precision";
      break;
    // Rogue - Precision (0/5) - 1% hit poison and attacks;

    case "Elemental Shaman":
    case "Restoration Shaman":
      content = (
        <Talent
          text="Elemental Precision"
          image="images/elemental_precision.webp"
          srcSet="images/elemental_precision.webp 1x"
          max="3"
          handleChange={handleChange}
          talentPoints={talentPoints}
          multiplier="1"
        />
      );
      //     Elemental Shaman - Elemental Precision (0/3) 1% hit nature fire and frost spells
      name = "Elemental Precision";
      break;
    case "Enhancement Shaman":
      content = (
        <Talent
          text="Dual Wield Specialization"
          image="images/dual_wield_specialization.webp"
          srcSet="images/dual_wield_specialization.webp 1x"
          max="3"
          handleChange={handleChange}
          talentPoints={talentPoints}
          multiplier="2"
        />
      );
      //     Enhancement - Dual Wield Spec - (0/3) - 2% chance to hit with dual wield
      name = "Dual Wield Specialization";
      break;

    case "Affliction Warlock":
    case "Demonology Warlock":
    case "Destruction Warlock":
      content = (
        <Talent
          text="Suppression"
          image="images/suppression.webp"
          srcSet="images/suppression.webp 1x"
          max="3"
          handleChange={handleChange}
          talentPoints={talentPoints}
          multiplier="1"
        />
      );
      name = "Suppression";
      break;
    //  Warlock - Suppression (0/3) - 1% chance to hit with spells

    case "Arms Warrior":
    case "Fury Warrior":
    case "Protection Warrior":
      content = (
        <Talent
          text="Precision"
          image="images/precision.webp"
          srcSet="images/precision.webp 1x"
          max="3"
          handleChange={handleChange}
          talentPoints={talentPoints}
          multiplier="1"
        />
      );
      //   Warrior - Precision (0/3) - 1% chance to hit with melee weapons
      name = "Precision";
      break;
    default:
      content = 0;
  }

  return (
    <MainContentContainer>
      <StyledCapHeader>
        How many talent points do you have in {name}?
      </StyledCapHeader>
      {content}
      <ButtonContainer>
        <StyledNextPrevButton onClick={previous}>
          Previous<span id="previous-arrow">←</span>
        </StyledNextPrevButton>
        <StyledNextPrevButton onClick={next}>
          Next <span id="next-arrow">→</span>
        </StyledNextPrevButton>
      </ButtonContainer>
    </MainContentContainer>
  );
};
export default TalentPoints;
