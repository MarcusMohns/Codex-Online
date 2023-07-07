import React from "react";
import { useState } from "react";
import { ArenaContainer } from "../../arenapointcalculator/styles/ArenaPointCalculator.styled";

const HitCapCalculator = ({ values, isCaster, target }) => {
  const [hit, setHit] = useState({
    rating: "0",
    percent: "0",
  });

  const missingHit = (event) => {
    const input = event.target.value;
    setHit({ rating: input, percent: input });
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
