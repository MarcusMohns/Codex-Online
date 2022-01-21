import ClassBtnCheckboxes from "./ClassBtnCheckboxes";
import ClassTooltip from "./ClassTooltip";
import {
  StyledSpecButton,
  DropArrow,
  InfoIcon,
} from "./styles/RaidAssembler.styled";
const SpecButton = ({ text, image, onClick, color, buffs }) => {
  return (
    <StyledSpecButton color={color}>
      {(color === "pink" || color === "brown") && (
        /* // If paladin or warrior add checkboxes */
        <div className="checkbox-and-image-container">
          <DropArrow id="drop-arrow-image" />
          <ClassBtnCheckboxes text={text} color={color} />
        </div>
      )}
      <div className="text-and-image-button-container" onClick={onClick}>
        <p className="specbutton-text">{text}</p>
        <img src={image} alt="spec icon" className="specbutton-image" />
      </div>
      <div className="class-tooltip-container">
        <InfoIcon id="info-image" />
        <ClassTooltip buffs={buffs} text={text} />
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
