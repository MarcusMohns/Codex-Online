import React from "react";
import StyledNextPrevButton from "../components/StyledNextPrevButton";
import {
  MainContentContainer,
  ResultsContainer,
  ButtonContainer,
  AdditionalHitContainer,
} from "../styles/HitCapHelper.styled";
import AdditionalHitTable from "../components/AdditionalHitTable";
import ResultTable from "../components/ResultTable";
import HitCapCalculator from "../components/HitCapCalculator";

const Result = ({ prevStep, resetStep, values, hitTalentClasses, casters }) => {
  const isCaster = casters.includes(values.classAndSpec) ? true : false;

  const previous = (e) => {
    e.preventDefault();

    if (hitTalentClasses.includes(values.classAndSpec)) {
      prevStep(1);
    } else {
      isCaster ? prevStep(2) : prevStep(3);
    }
  };
  const {
    pveOrPvp,
    classAndSpec,
    talentPoints = 0,
    raidHitBuff = 0,
    draenei = 0,
  } = values;

  const caps = {
    pveSpellCap: 17,
    pvpSpellCap: 4,
    pvePhysCap: 8,
    pvpPhysCap: 5,
  };

  const cap = () => {
    if (isCaster) {
      if (pveOrPvp === "pve") {
        // if the selected class is a caster in PvE
        return caps.pveSpellCap;
      }
      if (pveOrPvp === "pvp") {
        // if the selected class is a caster in PvP

        return caps.pvpSpellCap;
      }
    }
    if (!isCaster) {
      if (pveOrPvp === "pve") {
        // if the selected class is a melee in PvE

        return caps.pvePhysCap;
      }
      if (pveOrPvp === "pvp") {
        // if the selected class is a melee in PvP
        return caps.pvpPhysCap;
      }
    }
    return 0;
  };
  const target = cap();

  const result = () => {
    if (!pveOrPvp || !classAndSpec) {
      return;
    }

    if (isCaster) {
      return target - talentPoints - raidHitBuff - draenei;
    } else {
      return target - talentPoints - draenei;
    }
  };
  const hit = result();

  const hitInInt = () => {
    return isCaster ? Math.ceil(hit * 26.23) : Math.ceil(hit * 32.79);
  };

  return (
    <MainContentContainer>
      <ResultsContainer>
        <ResultTable values={values} />

        <div className="results-main-container">
          {hit > 0 ? (
            <div className="results-text">
              You need{" "}
              <span className="bold-result">
                {hit}% hit ({hitInInt(hit)} hit rating)
              </span>{" "}
              on your character sheet to be hit capped
              {isCaster ? (
                <div className="hit-text">
                  For <span className="hit-result">1% spell hit</span> you need{" "}
                  <span className="hit-result">26.23 hit</span>
                </div>
              ) : (
                <div className="hit-text">
                  For <span className="hit-result">1% melee hit</span> you need{" "}
                  <span className="hit-result">32.79 hit</span>
                </div>
              )}
            </div>
          ) : (
            <div className="results-text">
              You are <span className="bold-result">hit capped</span> at{" "}
              {cap() + Math.abs(hit)}%
              <div className="sub-text">
                The cap is {cap()}% hit. You are {Math.abs(hit)}% (
                {Math.abs(hitInInt(hit))} hit rating) over hit cap
              </div>
              {isCaster ? (
                <div className="hit-text">
                  For <span className="hit-result">1% spell hit</span> you need{" "}
                  <span className="hit-result">26.23 hit</span>
                </div>
              ) : (
                <div className="hit-text">
                  For <span className="hit-result">1% melee hit</span> you need{" "}
                  <span className="hit-result">32.79 hit</span>
                </div>
              )}
            </div>
          )}

          <img
            src="images/character_sheet.png"
            className="character-sheet-img"
            alt="character sheet"
          />
        </div>

        {pveOrPvp === "pvp" && (
          <AdditionalHitContainer>
            <h2>
              Amount of additional hit needed vs some classes and
              specializations
            </h2>
            <AdditionalHitTable />
          </AdditionalHitContainer>
        )}
      </ResultsContainer>
      <HitCapCalculator
        values={values}
        multiplier={isCaster ? 26.23 : 32.79}
        hitNeeded={hit}
      />

      <ButtonContainer>
        <StyledNextPrevButton onClick={previous}>
          Previous<span id="previous-arrow">←</span>
        </StyledNextPrevButton>
        <StyledNextPrevButton onClick={resetStep}>
          Reset <span id="next-arrow">&#8635;</span>
        </StyledNextPrevButton>
      </ButtonContainer>
    </MainContentContainer>
  );
};

export default Result;
