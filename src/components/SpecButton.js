import BlessingCheckboxes from "./BlessingCheckboxes";
import { StyledSpecButton } from "./styles/RaidAssembler.styled";
const SpecButton = ({ text, image, onClick, color }) => {
  return (
    <StyledSpecButton color={color} onClick={onClick}>
      <p>{text}</p>
      <img src={image} alt="spec icon" />
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
