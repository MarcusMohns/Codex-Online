import React from "react";
import StyledNextPrevButton from "../components/StyledNextPrevButton";
import {
  MainContentContainer,
  ResultsContainer,
  ButtonContainer,
  AdditionalHitContainer,
} from "../styles/HitCapHelper.styled";
import {
  CheckCircle,
  CrossIcon,
} from "../../raidhelper/styles/RaidHelper.styled";

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

  const hitInInt = () => {
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
                src="images/pve_sm.webp"
                className="results-pve-icon"
                alt="pve"
              />
              <img
                src="images/pvp_sm.webp"
                className="results-pvp-icon"
                alt="pvp"
              />
            </span>
          </th>
          <th>
            <span>
              Draenei{" "}
              <img
                src="images/heroic_presence_sm.webp"
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
                src="images/raidHitBuff_sm.webp"
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
                PvE
                <img
                  src="images/pve_sm.webp"
                  className="results-pve-icon"
                  alt="pve"
                />
              </span>
            ) : (
              <span>
                PvP
                <img
                  src="images/pvp_sm.webp"
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

  const additionalHitTable = (
    <table className="additional-hit-table">
      <thead>
        <tr>
          <th>Race/Spec</th>
          <th>
            <span>
              Spells{" "}
              <img
                src="images/spellicons/Innervate.png"
                className="results-pve-icon"
                alt="pve"
              />
            </span>
          </th>
          <th>
            <span>
              Melee
              <img
                src="images/spellicons/Mortal_Strike.png"
                className="results-pve-icon"
                alt="pve"
              />
            </span>
          </th>
          <th>
            <span>
              Ranged{" "}
              <img
                src="images/spellicons/Aimed_Shot.png"
                className="results-pve-icon"
                alt="pve"
              />
            </span>
          </th>
          <th>
            <span>
              Nature Spells
              <img
                src="images/spellicons/Aspect_Of_The_Wild.png"
                className="results-pve-icon"
                alt="pve"
              />
            </span>
          </th>
          <th>
            <span>
              Shadow Spells{" "}
              <img
                src="images/spellicons/Shadow_Resistance_Aura.png"
                className="results-pve-icon"
                alt="pve"
              />
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="additional-hit-blood-elf">Blood Elf</td>
          <td>
            <span className="amount-of-hit">2%</span>{" "}
            <span className="specific-hit-rating">(53 hit rating)</span>
          </td>
          <td>0%</td>
          <td>0%</td>
          <td>
            <span className="amount-of-hit">2%</span>{" "}
            <span className="specific-hit-rating">(53 hit rating)</span>
          </td>
          <td>
            <span className="amount-of-hit">2%</span>
            <span className="specific-hit-rating">(53 hit rating)</span>
          </td>
        </tr>
        <tr>
          <td className="additional-hit-night-elf">Night Elf</td>
          <td>0%</td>
          <td>
            <span className="amount-of-hit">2%</span>{" "}
            <span className="specific-hit-rating">(66 hit rating)</span>
          </td>
          <td>
            <span className="amount-of-hit">2%</span>{" "}
            <span className="specific-hit-rating">(66 hit rating)</span>
          </td>
          <td>0%</td>
          <td>0%</td>
        </tr>
        <tr>
          <td className="additional-hit-retribution-paladin">
            Retribution Paladin
          </td>
          <td>
            <span className="amount-of-hit">4%</span>{" "}
            <span className="specific-hit-rating">(105 hit rating)</span>
          </td>
          <td>0%</td>
          <td>
            <span className="amount-of-hit">4%</span>{" "}
            <span className="specific-hit-rating">(132 hit rating)</span>
          </td>
          <td>
            <span className="amount-of-hit">4%</span>
            <span className="specific-hit-rating">(105 hit rating)</span>
          </td>
          <td>
            <span className="amount-of-hit">4%</span>{" "}
            <span className="specific-hit-rating">(105 hit rating)</span>
          </td>
        </tr>
        <tr>
          <td className="additional-hit-subtlety-rogue">Sublety Rogue</td>
          <td>
            <span className="amount-of-hit">4%</span>{" "}
            <span className="specific-hit-rating">(105 hit rating)</span>
          </td>
          <td>0%</td>
          <td>
            <span className="amount-of-hit">4%</span>{" "}
            <span className="specific-hit-rating">(132 hit rating)</span>
          </td>
          <td>
            <span className="amount-of-hit">4%</span>{" "}
            <span className="specific-hit-rating">(105 hit rating)</span>
          </td>
          <td>
            <span className="amount-of-hit">4%</span>{" "}
            <span className="specific-hit-rating">(105 hit rating)</span>
          </td>
        </tr>
        <tr>
          <td className="additional-hit-undead">Undead</td>
          <td>0%</td>
          <td>0%</td>
          <td>0%</td>
          <td>0%</td>
          <td>
            <span className="amount-of-hit">2%</span>{" "}
            <span className="specific-hit-rating">(53 hit rating)</span>
          </td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <MainContentContainer>
      <ResultsContainer>
        {resultTable}
        <div>
          {hit > 0 ? (
            <div className="results-text">
              You need{" "}
              <span className="bold-result">
                {hit}% hit ({hitInInt(hit)} hit rating)
              </span>{" "}
              on your character sheet
            </div>
          ) : (
            <div className="results-text">
              You are <span className="bold-result">hit capped</span> at{" "}
              {cap() + Math.abs(hit)}%
              <div className="sub-text">
                The cap is {cap()}% hit. You are {Math.abs(hit)}% (
                {Math.abs(hitInInt(hit))} hit rating) over hit cap
              </div>
            </div>
          )}
        </div>
        <img
          src="images/character_sheet.png"
          className="character-sheet-img"
          alt="character sheet"
        />
        {pveOrPvp === "pvp" && (
          <AdditionalHitContainer>
            <h2>
              Amount of additional hit needed vs some classes and
              specializations
            </h2>
            {additionalHitTable}
          </AdditionalHitContainer>
        )}
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
