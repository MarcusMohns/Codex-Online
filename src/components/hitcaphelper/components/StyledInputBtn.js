import React from "react";
import styled from "styled-components";

const InputBtn = styled.label`
  height: 42px;
  input {
    display: none;
    ~ img {
      transition: opacity 0.1s;
    }
    &:checked {
      ~ img {
        opacity: 1;
      }
    }
  }

  img {
    opacity: 35%;
    border: 2px solid transparent;
    border-radius: 15px;
    &:hover {
      opacity: 1;
    }
  }
`;

const StyledRadioBtn = ({ text, image, name, handleChange, type, checked }) => {
  return (
    <InputBtn htmlFor={text} className="input-radio-and-image">
      <input
        type={type}
        onChange={handleChange(name)}
        id={text}
        name={name}
        value={text}
        checked={checked}
      />
      <img src={image} alt="spec" />
    </InputBtn>
  );
};

export default StyledRadioBtn;
