import React, { useReducer } from "react";
import {
  ArenaContainer,
  ArenaSection,
  Main,
} from "./styles/ArenaPointCalculator.styled";
import AlertDiv from "./components/AlertDiv";

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
  if (
    (pointsNeeded < 448 && percentage === 0.76) ||
    (pointsNeeded < 518 && percentage === 0.88) ||
    (pointsNeeded < 589 && percentage === 1)
  ) {
    return "Any";
    // If pointsNeeded is sufficiently low, no rating is required, only games played.
  } else if (pointsNeeded === "1602") {
    return "Not Possible";
    // An input of 1602 returns a result of Infinity in the 5s bracket for some reason...
  }

  const pointsMod = parseInt(pointsNeeded) / percentage;
  let theRatingRequired = 0;

  theRatingRequired = Math.ceil(
    (1 / -0.00412) *
      (Math.log((1022 / (pointsMod - 580) - 1) / 123) / Math.log(2.71828))
  );

  if (theRatingRequired && theRatingRequired >= 150) {
    return theRatingRequired;
  } else if (theRatingRequired < 150) {
    return "Unknown (<150)";
  } else {
    return "Not Possible";
  }

  // old 3.3.5 calc
  // let theRatingRequired = 0;
  // if (
  //   // in 3.3.5 you are rewarded a baseline amount of points if you are 1500 or below
  //   (pointsNeeded <= 261 && percentage === 0.76) ||
  //   // 261 is the min points recieved in 2v2
  //   (pointsNeeded <= 302 && percentage === 0.88) ||
  //   // 302 is the min points recieved in 3v3
  //   (pointsNeeded <= 344 && percentage === 1)
  //   // 344 is the min points recieved in 5v5
  // )
  //   return theRatingRequired;
  // else
  //   theRatingRequired = Math.ceil(
  //     Math.log(
  //       1511.26 / ((1639.28 * pointsNeeded) / percentage) - 1 / 1639.28
  //     ) / -0.00412
  //   );

  // return theRatingRequired ? theRatingRequired : "Not possible";
};

const pointsRewarded = (bracketName, rating) => {
  if (rating && rating >= 150) {
    const pointsCalc = 123 * Math.pow(2.71828, -0.00412 * rating) + 1;
    let points = 1022 / pointsCalc + 580;
    if (bracketName === "twos") {
      points *= 0.76;
    }
    if (bracketName === "threes") {
      points *= 0.88;
    }
    return Math.round(points);
  } else {
    return "Unknown";
  }
};
// old 3.3.5 calc
// let points = 0;
// if (bracketName === "twos") {
//   if (rating > 1500)
//     points =
//       0.76 * (1511.26 / (1 + 1639.29 * Math.pow(2.71828, -0.00412 * rating)));
//   else points = 261;
// } else if (bracketName === "threes") {
//   if (rating > 1500)
//     points =
//       0.88 * (1511.26 / (1 + 1639.29 * Math.pow(2.71828, -0.00412 * rating)));
//   else points = 302;
// } else if (bracketName === "fives") {
//   if (rating > 1500)
//     points = 1511.26 / (1 + 1639.29 * Math.pow(2.71828, -0.00412 * rating));
//   else points = 344;
// } else console.error("Unexpected bracket name");

// return Math.floor(points);

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
      <AlertDiv
        text="Calculator updated using formula provided by reddit user Finalbelle and is up to date (v. 3.4.1) - "
        postLink={
          <a
            href="https://www.reddit.com/r/classicwow/comments/us1cg5/tbc_arena_calculator_formula_updated_for_s4/"
            target="_blank"
            rel="noreferrer"
          >
            the original post
          </a>
        }
        background="#4BB543"
        height={80}
        color="#000"
      />
      <AlertDiv
        text="All calculations under 150 rating are inaccurate and will display
        'Unknown'."
        background="#CD5C5C"
        height={45}
        color="white"
      />
      <ArenaSection>
        <ArenaContainer>
          <h2>Arena Points Rewarded</h2>
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
                  <th className="bracket-col">
                    <label htmlFor="twos">2v2</label>
                  </th>
                  <td>
                    <input type="number" name="twos" id="twos" />
                  </td>
                  <td className="results" id="twosResults">
                    {formData.twos}
                  </td>
                </tr>

                <tr>
                  <th className="bracket-col">
                    <label htmlFor="threes">3v3</label>
                  </th>
                  <td>
                    <input type="number" name="threes" id="threes" />
                  </td>
                  <td className="results" id="threesResults">
                    {formData.threes}
                  </td>
                </tr>

                <tr>
                  <th className="bracket-col">
                    <label htmlFor="fives">5v5</label>
                  </th>
                  <td>
                    <input type="number" name="fives" id="fives" />
                  </td>
                  <td className="results" id="fivesResults">
                    {formData.fives}
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </ArenaContainer>
        <ArenaContainer>
          <h2>Arena Rating Needed</h2>
          <form
            onChange={pointChange}
            onSelect={handleSelect}
            autoComplete="off"
          >
            <table>
              <thead>
                <tr>
                  <th>
                    <label htmlFor="pointsNeeded">Points needed</label>
                  </th>
                  <th>Bracket</th>
                  <th>Arena Rating Needed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td />
                  <th className="bracket-col">2v2</th>
                  <td className="results" id="twosRatingRequired">
                    {formData.twosRatingRequired}
                  </td>
                </tr>

                <tr>
                  <td>
                    <input
                      type="number"
                      name="pointsNeeded"
                      id="pointsNeeded"
                    />
                  </td>
                  <th className="bracket-col">3v3</th>
                  <td className="results" id="threesRatingRequired">
                    {formData.threesRatingRequired}
                  </td>
                </tr>

                <tr>
                  <td />
                  <th className="bracket-col">5v5</th>
                  <td className="results" id="fivesRatingRequired">
                    {formData.fivesRatingRequired}
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </ArenaContainer>
      </ArenaSection>
    </Main>
  );
}
export default Arenapointcalculator;
