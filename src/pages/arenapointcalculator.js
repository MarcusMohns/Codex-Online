import { ArenaContainer } from '../components/styles/ArenaContainer.styled';
import { PointsContainer } from '../components/styles/PointsContainer.styled';
import React, {useReducer } from 'react';
import { Container } from '../components/styles/Container.styled';

const formReducer = (state, event) => {
    return {
      ...state, 
      [event.name]: event.value
    }
   }

   // Highlight text
   const handleFocus = (event) => {
  event.target.select();
}


const ratingRequried = (pointsNeeded,percentage) =>{
  let the_ratingRequired = 0
  if (pointsNeeded > 1600)
    return "Not possible"
  else if (pointsNeeded <= 261 && percentage == 0.76)
    return the_ratingRequired  
  else if (pointsNeeded <= 302 && percentage == 0.88)
    return the_ratingRequired
  else if (pointsNeeded <= 344 && percentage == 1)
    return the_ratingRequired
  else 
      the_ratingRequired = Math.ceil(Math.log((1511.26 / (1639.28 * pointsNeeded / percentage)) - ( 1 / 1639.28)) / ( -0.00412 ));
  
  return the_ratingRequired;
}

const pointsRewarded = (bracketName,rating) => {
    let points = 0
    if (bracketName === "twos") {
      if (rating > 1500) 
        points = 0.76 * (1511.26 / ( 1 + 1639.29 * Math.pow(2.71828, -0.00412 * (rating))));
      else 
        points = 261;
    }
    else if (bracketName === "threes") {
      if (rating > 1500)   
        points = (0.88 * (1511.26 / ( 1 + 1639.29 * Math.pow(2.71828, -0.00412 * (rating)))));
      else
        points = 302;
  }
    else if (bracketName === "fives") {
      if (rating > 1500)  
      points = (1511.26 / ( 1 + 1639.29 * Math.pow(2.71828, -0.00412 * (rating))));
      else
        points = 344
  }
    else 
      console.log("Error")
      
  return Math.floor(points)
}


function Arenapointcalculator() {
    
  const [formData, setFormData] = useReducer(formReducer, {});
  // Handles change on arena rating to arena points input
  const handleChange = event => {

      setFormData({
        name: event.target.name,
        value: pointsRewarded(event.target.name,event.target.value),
    });
  }
  // Handles change on arena points to arena rating input
  const pointChange = event => {

    setFormData({
      name: "twosRatingRequired",
      value: ratingRequried(event.target.value,0.76),
  });
    setFormData({
      name: "threesRatingRequired",
      value: ratingRequried(event.target.value,0.88),
  });
    setFormData({
      name: "fivesRatingRequired",
      value: ratingRequried(event.target.value,1),
  });

    
  }

    return(
      <Container>
  
        <ArenaContainer>
          <label>
              <p class="arena-bracket">2vs2</p>
              <input type="number" name="twos" onChange={handleChange} onFocus={handleFocus}/>
              <p id="results" >{formData.twos}</p>
          </label>

          <label>
              <p class="arena-bracket">3vs3</p>
              <input type="number" name="threes" onChange={handleChange} onFocus={handleFocus}/>
              <p id="results" >{formData.threes}</p>
          </label>

          <label>
              <p class="arena-bracket">5vs5</p>
              <input type="number" name="fives" onChange={handleChange} onFocus={handleFocus}/>
              <p id="results">{formData.fives}</p>
          </label>
        </ArenaContainer>

          <PointsContainer>
          <input type="number" name="points" onChange={pointChange} onFocus={handleFocus}/>
          <div class="pointsresult">

          <p>2v2: {formData.twosRatingRequired}</p>

          <p>3v3: {formData.threesRatingRequired}</p>

          <p>5v5: {formData.fivesRatingRequired}</p>
          </div>
          </PointsContainer>
      
      </Container>
    )
  }
export default Arenapointcalculator

