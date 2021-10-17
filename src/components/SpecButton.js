import { StyledSpecButton } from './styles/SpecButton.styled';
const SpecButton = ({text, image, onClick,color}) => {

    return (

        <StyledSpecButton backgroundColor={color} onClick={onClick}>
        
        <img src={image}></img>    
        {text}
        
        </StyledSpecButton>

    )
}

SpecButton.defaultProps = {
    image:require('../images/hunter_beastmastery.png').default
  }


export default SpecButton
