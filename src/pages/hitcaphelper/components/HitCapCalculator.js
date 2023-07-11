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
              <th>Your current Hit Rating</th>
              <th>Missing Hit %</th>
              <th>Missing Hit Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="bracket-col">
                <input
                  type="number"
                  name="hitRating"
                  id="hitRating"
                  onInput={maxLengthHandler}
                />
              </th>
              <td className="results" id="hitMissing">
                {hit.percent}
              </td>
              <td className="results" id="hitRatinghitMissing">
                {hit.rating}
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </ArenaContainer>
  );
};

export default HitCapCalculator;
