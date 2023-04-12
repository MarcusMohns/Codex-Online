import { StyledSpecButton, InfoIcon } from "../styles/RaidHelper.styled";
const SpecButton = ({ spec, handleSpecTooltip, onClick }) => {
  return (
    <StyledSpecButton color={spec.color}>
      <div className="text-and-image-button-container" onClick={onClick}>
        <p className="specbutton-text">{spec.text}</p>
        <img src={spec.icon} alt="spec icon" className="specbutton-image" />
      </div>
      <InfoIcon id="info-image" onClick={() => handleSpecTooltip(spec)} />
    </StyledSpecButton>
  );
};
SpecButton.defaultProps = {
  image: "images/hunter_beastmastery.png",
  text: "missing spec",
  color: "red",
};

export default SpecButton;
