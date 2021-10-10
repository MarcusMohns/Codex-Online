import { StyledSpecButton } from './styles/SpecButton.styled';
const SpecButton = ({text, image, onClick,color}) => {

    return (

        <StyledSpecButton backgroundColor={color} onClick={onClick}>
        
        <img src={image}></img>    
        {" "+text}
        
        </StyledSpecButton>

    )
}

export default SpecButton
