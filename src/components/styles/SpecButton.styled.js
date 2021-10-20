import styled from "styled-components";

export const StyledSpecButton = styled.button`

background: ${(props)=> props.backgroundColor};
color: #fff;
border:none;
padding: 8px;
margin: 5px;
flex: 0 1 31%;
border-radius: 5px;
cursor: pointer;
font-size: 15px;
text-shadow: #000 0px 0px 3px,   #000 0px 0px 3px,   #000 0px 0px 3px,
             #000 0px 0px 3px,   #000 0px 0px 3px,   #000 0px 0px 3px;
font-family: inherit;





&:hover {-webkit-box-shadow: 2px 2px 12px 2px rgba(0,0,0,0.2); 
box-shadow: 2px 2px 12px 2px rgba(0,0,0,0.5);
}

&:active {}




}
`


