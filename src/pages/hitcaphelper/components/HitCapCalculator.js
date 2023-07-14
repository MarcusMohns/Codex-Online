import React from "react";
import { useState } from "react";
import { ArenaContainer } from "../../arenapointcalculator/styles/ArenaPointCalculator.styled";

const HitCapCalculator = ({ values, multiplier, hitNeeded }) => {
  const [hit, setHit] = useState({
    rating: Math.ceil(hitNeeded * multiplier),
    percent: hitNeeded,
  });

  const missingHit = (event) => {
    const inputRating = event.target.value ? parseInt(event.target.value) : 0;
    const inputPercent = inputRating / multiplier;

    let hitRating = hitNeeded * multiplier - inputRating;
    let hitPercent = hitNeeded - inputPercent;

    setHit({
      rating: Math.ceil(hitRating),
      percent: Math.floor(hitPercent * 100) / 100,
    });
  };

  const maxLengthHandler = (event) => {
    if (event.target.value > 4) {
      event.target.value = event.target.value.substring(0, 4);
    }
  };

  return (
    <ArenaContainer>
      <h2>Hit cap calculator</h2>
      <form autoComplete="off" onChange={missingHit}>
        <table>
          <thead>
            <tr>
              <th colSpan={3} className="hitcap-th">
                <div className="hitcap-th-div">
                  <span
                    id={values.classAndSpec
                      .substring(values.classAndSpec.indexOf(" ") + 1)
                      .toLowerCase()}
                  >
                    {values.classAndSpec}
                  </span>

                  {values.raidHitBuff && (
                    <img
                      src="images/raidHitBuff_sm.webp"
                      alt="raid hit buff"
                      className="raid-hit-buff-icon"
                    />
                  )}
                  {values.draenei && (
                    <img
                      src="images/heroic_presence_sm.webp"
                      className="draenei-icon"
                      alt="draenei"
                    />
                  )}
                  <p>
                    {values.talentPoints ? `${values.talentPoints}%` : "0%"}
                  </p>
                  {values.pveOrPvp === "pve" ? (
                    <img
                      src="images/pve_sm.webp"
                      className="results-pve-icon"
                      alt="pve"
                    />
                  ) : (
                    <img
                      src="images/pvp_sm.webp"
                      className="results-pvp-icon"
                      alt="pvp"
                    />
                  )}
                </div>
              </th>
            </tr>
            <tr>
              <th>Your current Hit Rating</th>
              <th>Missing Hit %</th>
              <th>Missing Hit Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <input
                  type="number"
                  name="hitRating"
                  id="hitRating"
                  onInput={maxLengthHandler}
                  defaultValue="0"
                />
              </th>
              <td className="results" id="hitMissing">
                {hit.percent > 0
                  ? `${hit.percent}%`
                  : `${Math.abs(hit.percent)}% over cap`}
              </td>
              <td className="results" id="hitRatinghitMissing">
                {hit.rating > 0
                  ? `${hit.rating}`
                  : `${Math.abs(hit.rating)} over cap`}
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </ArenaContainer>
  );
};

export default HitCapCalculator;
