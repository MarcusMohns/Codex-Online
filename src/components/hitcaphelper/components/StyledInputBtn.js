import React from "react";
import styled from "styled-components";

const InputBtn = styled.label`
  input {
    display: none;

    &:checked {
      ~ img {
        border: 2px solid grey;
        transform: scale(1.1);
        opacity: 1;
      }
    }
  }

  img {
    opacity: 60%;
    border: 2px solid transparent;
    border-radius: 15px;
    &:hover {
      opacity: 1;
    }
  }
`;

const StyledRadioBtn = ({ text, image, name, handleChange, type }) => {
  return (
    <InputBtn htmlFor={text} className="input-radio-and-image">
      <input
        type={type}
        onChange={handleChange(name)}
        id={text}
        name={name}
        value={text}
      />
      <img src={image} alt="spec" />
    </InputBtn>
  );
};

export default StyledRadioBtn;