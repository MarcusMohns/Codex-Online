import { Container } from "../components/styles/Container.styled"
import React, { useState, useReducer } from 'react';

const formReducer = (state, event) => {
    return {
      ...state, 
      [event.name]: event.value
    }
   }


function Arenapointcalculator() {
    const [formData, setFormData] = useReducer(formReducer, {});

   const handleChange = event => {
    let rating = 0;
    if (event.target.name === "2vs2") {
        rating = 0.76 * (1511.26 / ( 1 + 1639.29 
            * Math.pow(2.71828, -0.00412 * (event.target.value))));
    }
    else if (event.target.name === "3vs3") {
        rating = (0.88 * (1511.26 / ( 1 + 1639.29 
            * Math.pow(2.71828, -0.00412 * (event.target.value)))));
    }
    else if (event.target.name === "5vs5") {
        rating = (1511.26 / ( 1 + 1639.29 
            * Math.pow(2.71828, -0.00412 * (event.target.value))));
    }

    setFormData({
      name: event.target.name,
      value: rating,
    });
  
}
    return(
      <div>

       <div>
         You are submitting the following:
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
         </ul>
       </div>
      
        <form>
          <fieldset>
          <label>
              <p>2vs2</p>
              <input name="2vs2" onChange={handleChange} />
            </label>
            <label>
              <p>3vs3</p>
              <input name="3vs3" onChange={handleChange}/>
            </label>
            <label>
              <p>5vs5</p>
              <input name="5vs5" onChange={handleChange}/>
            </label>
          </fieldset>
        </form>
      </div>
    )
  }
export default Arenapointcalculator


