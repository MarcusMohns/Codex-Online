import React from "react";
import { useState } from "react";
import { ArenaContainer } from "../../arenapointcalculator/styles/ArenaPointCalculator.styled";

const HitCapCalculator = ({ values, isCaster, target, natHit }) => {
  const [hit, setHit] = useState({
    rating: "0",
    percent: "0",
  });

  const missingHit = (event) => {
    const input = parseInt(event.target.value);
    let output = 0;

    if (isCaster) {
      if (values.pveOrPvp === "pve") {
        const currentHit = natHit * 26.23;
        const targetInRating = target * 26.23;
        console.log(input);
        console.log(targetInRating - (currentHit + input));

        output = targetInRating - (currentHit + input);
        setHit({ rating: Math.floor(output), percent: input });

        console.log();
      }
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
                <input type="number" name="hitRating" id="hitRating" />
              </th>
              <td className="results" id="hitMissing">
                {hit.rating}
              </td>
              <td className="results" id="hitRatinghitMissing">
                {hit.percent}
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </ArenaContainer>
  );
};

export default HitCapCalculator;
