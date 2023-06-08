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
    width: 56px;
    height: 56px;

    &:hover {
      opacity: 1;
    }
  }
`;

const StyledRadioBtn = ({
  text,
  image,
  name,
  handleChange,
  type,
  checked,
  srcSet,
  id,
}) => {
  return (
    <InputBtn htmlFor={id} className="input-radio-and-image">
      <input
        type={type}
        onChange={handleChange(name)}
        id={id}
        name={name}
        value={text}
        checked={checked}
      />
      <img
        src={image}
        srcSet={srcSet}
        alt="spec"
        sizes="(min-width: 1000px) 56px, (min-width: 660px) 40px, 28px"
      />
    </InputBtn>
  );
};

export default StyledRadioBtn;
