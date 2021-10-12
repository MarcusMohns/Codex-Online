import { Container } from "../components/styles/Container.styled"
import React, {useReducer } from 'react';

const formReducer = (state, event) => {
    return {
      ...state, 
      [event.name]: event.value
    }
   }

function Arenapointcalculator() {
    const [formData, setFormData] = useReducer(formReducer, {});
    console.log(formData)

   const handleChange = event => {
    let rating = 0;
    if (event.target.name === "twos") {
      if (event.target.value > 1500) {
        rating = 0.76 * (1511.26 / ( 1 + 1639.29 
            * Math.pow(2.71828, -0.00412 * (event.target.value))));
      }else 
          rating = 261;
        
    }
    else if (event.target.name === "threes") {
      if (event.target.value > 1500) {  
      rating = (0.88 * (1511.26 / ( 1 + 1639.29 
            * Math.pow(2.71828, -0.00412 * (event.target.value)))));
    }else
        rating = 302;
  }
  
    else if (event.target.name === "fives") {
      if (event.target.value > 1500) {  
      rating = (1511.26 / ( 1 + 1639.29 
            * Math.pow(2.71828, -0.00412 * (event.target.value))));
    }else
        rating = 344
  }
  else {
    console.log("Error")
  }
    setFormData({
      name: event.target.name,
      value: Math.floor(rating),
    });
  
}
    return(
      <Container>
      
        <form>
          <fieldset>
          <label>
              <p>2vs2</p>
              <input type="number" name="twos" onChange={handleChange}/>
            </label>
            <p> {formData.twos}</p>
            <label>
              <p>3vs3</p>
              <input type="number" name="threes" onChange={handleChange}/>
            </label>
            <p> {formData.threes}</p>
            <label>
              <p>5vs5</p>
              <input type="number" name="fives" onChange={handleChange}/>
            </label>
            <p> {formData.fives}</p>
          </fieldset>
        </form>
      </Container>
    )
  }
export default Arenapointcalculator


