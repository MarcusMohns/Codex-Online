import React from "react";
import { useReducer } from "react";
import { ArenaContainer } from "../../arenapointcalculator/styles/ArenaPointCalculator.styled";

const HitCapCalculator = ({ values, isCaster }) => {
  const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };
  const [formData, setFormData] = useReducer(formReducer, {});

  const ratingChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const missingHitRating = () => {};

  console.log(formData);
  return (
    <ArenaContainer>
      <h2>Hit cap calculator</h2>
      <form autoComplete="off" onChange={ratingChange}>
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
                {formData.hitRating}
              </td>
              <td className="results" id="hitRatinghitMissing">
                {formData.hitRating}
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </ArenaContainer>
  );
};

export default HitCapCalculator;
