import BlessingCheckboxes from "./BlessingCheckboxes";
import { StyledSpecButton } from "./styles/RaidAssembler.styled";
const SpecButton = ({ text, image, onClick, color }) => {
  return (
    <StyledSpecButton color={color}>
      <div className="text-and-image-button-container" onClick={onClick}>
        <p className="specbutton-text">{text}</p>
        <img src={image} alt="spec icon" className="specbutton-image" />
      </div>
      {color === "pink" && <BlessingCheckboxes text={text} />}
      {/* // If paladin add checkboxes */}
    </StyledSpecButton>
  );
};
SpecButton.defaultProps = {
  image: require("../images/hunter_beastmastery.png").default,
  text: "missing spec",
  color: "red",
};

export default SpecButton;
