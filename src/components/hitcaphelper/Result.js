import React from "react";
import StyledNextPrevButton from "./components/StyledNextPrevButton";
import {
  MainContentContainer,
  ResultsContainer,
  StyledCapHeader,
} from "./components/ContentContainers";

const Result = ({ prevStep, values, hitTalentClasses, casters }) => {
  const previous = (e) => {
    e.preventDefault();

    if (hitTalentClasses.includes(values.classAndSpec)) {
      prevStep(1);
    } else {
      casters.includes(values.classAndSpec) ? prevStep(2) : prevStep(3);
    }
  };
  const {
    pveOrPvp,
    classAndSpec,
    talentPoints = 0,
    raidHitBuff = 0,
    draenei = 0,
  } = values;
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

    if (!pveOrPvp || !classAndSpec) {
      return;
    }

    if (casters.includes(classAndSpec)) {
      return target - talentPoints - raidHitBuff - draenei;
    } else {
      return target - talentPoints - draenei;
    }
  };

  const hit = result();
  const hitInInt = casters.includes(classAndSpec)
    ? Math.ceil(hit * 26.23)
    : Math.ceil(hit * 32.79);

  return (
    <MainContentContainer>
      <StyledCapHeader>Result:</StyledCapHeader>
      <ResultsContainer>
        {hit >= 0
          ? `You need ${hit}% hit (${hitInInt} hit rating) on your character sheet`
          : "You are capped"}
      </ResultsContainer>

      <img
        src="images/character_sheet.png"
        className="character-sheet-img"
        alt="character sheet"
      />
      <StyledNextPrevButton onClick={previous}>
        Previous<span id="previous-arrow">←</span>
      </StyledNextPrevButton>
    </MainContentContainer>
  );
};

export default Result;
