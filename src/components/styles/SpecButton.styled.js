import styled from "styled-components";

export const StyledSpecButton = styled.button`
display: inline-block;
background: ${(props)=> props.backgroundColor};
color: #fff;
border: none;
padding: 10px 20px;
margin: 5px;
border-radius: 5px;
cursor: pointer;
text-decoration: none;
font-size: 15px;
font-family: inherit;
`;
