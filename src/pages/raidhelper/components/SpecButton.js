import ClassTooltip from "./ClassTooltip";
import { StyledSpecButton, InfoIcon } from "../styles/RaidHelper.styled";
const SpecButton = ({ text, image, onClick, color, buffs, utility }) => {
  return (
    <StyledSpecButton color={color} onClick={onClick}>
      <div className="text-and-image-button-container">
        <p className="specbutton-text">{text}</p>
        <img src={image} alt="spec icon" className="specbutton-image" />
      </div>
      <div className="class-tooltip-container">
        <InfoIcon id="info-image" />
        <ClassTooltip
          buffs={buffs}
          text={text}
          utility={utility}
          color={color}
          image={image}
        />
      </div>
    </StyledSpecButton>
  );
};
SpecButton.defaultProps = {
  image: "images/hunter_beastmastery.png",
  text: "missing spec",
  color: "red",
};

export default SpecButton;
