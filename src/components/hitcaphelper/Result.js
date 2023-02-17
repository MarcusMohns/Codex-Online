import React from "react";
import StyledNextPrevButton from "./components/StyledNextPrevButton";
import {
  MainContentContainer,
  ResultsContainer,
  StyledCapHeader,
  ButtonContainer,
} from "./components/ContentContainers";
import { CheckCircle, CrossIcon } from "../styles/RaidAssembler.styled";

const Result = ({ prevStep, resetStep, values, hitTalentClasses, casters }) => {
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

  const hitInInt = (hitInput) => {
    return casters.includes(classAndSpec)
      ? Math.ceil(hit * 26.23)
      : Math.ceil(hit * 32.79);
  };

  const resultTable = (
    <table>
      <thead>
        <tr>
          <th>
            <span>Class and Spec</span>
          </th>
          <th>
            <span>
              PvE or PvP{" "}
              <img
                src="images/pve.webp"
                className="results-pve-icon"
                alt="pve"
              />
              <img
                src="images/pvp.webp"
                className="results-pvp-icon"
                alt="pvp"
              />
            </span>
          </th>
          <th>
            <span>
              Draenei{" "}
              <img
                src="images/heroic_presence.webp"
                className="draenei-icon"
                alt="draenei"
              />
            </span>
          </th>
          <th>
            <span>Talent Points</span>
          </th>
          <th>
            <span>
              Raid Spell Hit Buff{" "}
              <img
                src="images/raidHitBuff.webp"
                alt="raid hit buff"
                className="raid-hit-buff-icon"
              />
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            id={classAndSpec
              .substring(classAndSpec.indexOf(" ") + 1)
              .toLowerCase()}
          >
            {classAndSpec}
          </td>
          <td>
            {pveOrPvp === "pve" ? (
              <span>
                PvE{" "}
                <img
                  src="images/pve.webp"
                  className="results-pve-icon"
                  alt="pve"
                />
              </span>
            ) : (
              <span>
                PvP{" "}
                <img
                  src="images/pvp.webp"
                  className="results-pvp-icon"
                  alt="pvp"
                />
              </span>
            )}
          </td>
          <td>
            {draenei ? (
              <span>
                Yes <CheckCircle />
              </span>
            ) : (
              <span>
                No <CrossIcon />
              </span>
            )}
          </td>
          <td>{talentPoints ? `${talentPoints}%` : "0%"}</td>
          <td>
            {raidHitBuff ? (
              <span>
                Yes <CheckCircle />
              </span>
            ) : (
              <span>
                No <CrossIcon />
              </span>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <MainContentContainer>
      <StyledCapHeader>Result</StyledCapHeader>
      <ResultsContainer>
        {resultTable}
        <div>
          {hit > 0 ? (
            <div className="results-text">
              You need <span className="bold-result">{hit}% hit</span> (
              <span className="bold-result">{hitInInt(hit)} hit rating</span>)
              on your character sheet
            </div>
          ) : (
            <div className="results-text">
              You are <span className="bold-result">hit capped</span> at{" "}
              {cap() + Math.abs(hit)}%
              <div>
                Your cap is {cap()}% hit - You are {Math.abs(hit)}% (
                {Math.abs(hitInInt(hit))} rating) over hit cap
              </div>
            </div>
          )}
        </div>
        <img
          src="images/character_sheet.png"
          className="character-sheet-img"
          alt="character sheet"
        />
      </ResultsContainer>

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
