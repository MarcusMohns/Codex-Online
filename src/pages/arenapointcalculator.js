import {
  ArenaContainer,
  Main,
} from "../components/styles/ArenaPointCalculator.styled";
import React, { useReducer } from "react";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

const handleSelect = (event) => {
  event.target.select();
};

const ratingRequried = (pointsNeeded, percentage) => {
  let theRatingRequired = 0;
  if (
    // in 3.3.5 you are rewarded a baseline amount of points if you are 1500 or below
    (pointsNeeded <= 261 && percentage === 0.76) ||
    // 261 is the min points recieved in 2v2
    (pointsNeeded <= 302 && percentage === 0.88) ||
    // 302 is the min points recieved in 3v3
    (pointsNeeded <= 344 && percentage === 1)
    // 344 is the min points recieved in 5v5
  )
    return theRatingRequired;
  else
    theRatingRequired = Math.ceil(
      Math.log(
        1511.26 / ((1639.28 * pointsNeeded) / percentage) - 1 / 1639.28
      ) / -0.00412
    );

  return theRatingRequired ? theRatingRequired : "Not possible";
};

const pointsRewarded = (bracketName, rating) => {
  let points = 0;
  if (bracketName === "twos") {
    if (rating > 1500)
      points =
        0.76 * (1511.26 / (1 + 1639.29 * Math.pow(2.71828, -0.00412 * rating)));
    else points = 261;
  } else if (bracketName === "threes") {
    if (rating > 1500)
      points =
        0.88 * (1511.26 / (1 + 1639.29 * Math.pow(2.71828, -0.00412 * rating)));
    else points = 302;
  } else if (bracketName === "fives") {
    if (rating > 1500)
      points = 1511.26 / (1 + 1639.29 * Math.pow(2.71828, -0.00412 * rating));
    else points = 344;
  } else console.error("Unexpected bracket name");

  return Math.floor(points);
};

function Arenapointcalculator() {
  const [formData, setFormData] = useReducer(formReducer, {});

  const ratingChange = (event) => {
    // set state to target inputs name and set value to the result of pointsRewarded.
    setFormData({
      name: event.target.name,
      value: pointsRewarded(event.target.name, event.target.value),
    });
  };

  const pointChange = (event) => {
    // set state to all rating requireds input names and set value to the result of ratingRequired.

    setFormData({
      name: "twosRatingRequired",
      value: ratingRequried(event.target.value, 0.76),
      // ratingRequired is multiplied by 0.76 in 2v2.
    });
    setFormData({
      name: "threesRatingRequired",
      value: ratingRequried(event.target.value, 0.88),
      // ratingRequired is multiplied by 0.76 in 3v3.
    });
    setFormData({
      name: "fivesRatingRequired",
      value: ratingRequried(event.target.value, 1),
      // ratingRequired is multiplied by 1 in 5v5.
    });
  };

  return (
    <Main>
      <ArenaContainer>
        <div className="textArea">
          <h2>Arena Points rewarded</h2>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h3>
        </div>
        <form
          onChange={ratingChange}
          onSelect={handleSelect}
          autoComplete="off"
        >
          <table>
            <thead>
              <tr>
                <th>Bracket</th>
                <th>Your Rating</th>
                <th>Arena Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="bracket-col">2v2</th>
                <td>
                  <input type="number" name="twos" />
                </td>
                <td className="twosResults">{formData.twos}</td>
              </tr>

              <tr>
                <th className="bracket-col">3v3</th>
                <td>
                  <input type="number" name="threes" />
                </td>
                <td className="threesResults">{formData.threes}</td>
              </tr>

              <tr>
                <th className="bracket-col">5v5</th>
                <td>
                  <input type="number" name="fives" />
                </td>
                <td className="fivesResults">{formData.fives}</td>
              </tr>
            </tbody>
          </table>
        </form>
      </ArenaContainer>

      <ArenaContainer>
        <div className="textArea">
          <h2>Arena Rating Required</h2>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h3>
        </div>
        <form onChange={pointChange} onSelect={handleSelect} autoComplete="off">
          <table>
            <thead>
              <tr>
                <th>Points needed</th>
                <th>Bracket</th>
                <th>Arena Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td />
                <th className="bracket-col">2v2</th>
                <td className="twosRatingRequired">
                  {formData.twosRatingRequired}
                </td>
              </tr>

              <tr>
                <td>
                  <input type="number" name="threes" />
                </td>
                <th className="bracket-col">3v3</th>
                <td className="threesRatingRequired">
                  {formData.threesRatingRequired}
                </td>
              </tr>

              <tr>
                <td />
                <th className="bracket-col">5v5</th>
                <td className="fivesRatingRequired">
                  {formData.fivesRatingRequired}
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </ArenaContainer>
    </Main>
  );
}
export default Arenapointcalculator;
