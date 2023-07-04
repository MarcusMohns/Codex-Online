import React from "react";
import { ArenaContainer } from "../../arenapointcalculator/styles/ArenaPointCalculator.styled";

const HitCapCalculator = ({ isCaster }) => {
  return (
    <ArenaContainer>
      <h2>Hit cap calculator</h2>
      <form autoComplete="off">
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
                <input type="number" name="twos" id="twos" />
              </th>
              <td className="results">Result</td>
              <td className="results" id="twosResults">
                Hey
              </td>
            </tr>

            <tr>
              <th className="bracket-col">
                <input type="number" name="twos" id="twos" />
              </th>
              <td className="results">Result</td>
              <td className="results" id="threesResults">
                Hey
              </td>
            </tr>

            <tr>
              <th className="bracket-col">
                <input type="number" name="twos" id="twos" />
              </th>
              <td className="results">Result</td>
              <td className="results" id="fivesResults">
                Hey
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </ArenaContainer>
  );
};

export default HitCapCalculator;
