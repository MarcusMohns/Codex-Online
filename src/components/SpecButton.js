import { StyledSpecButton } from "./styles/RaidAssembler.styled";
const SpecButton = ({ text, image, onClick, color }) => {
  return color === "pink" ? ( // if paladin
    <StyledSpecButton color={color} onClick={onClick}>
      <p>{text}</p>
      <img src={image} alt="spec icon" />
      <div>
        <input
          type="checkbox"
          name={text.replace(/\s+/g, "")}
          id={`${text.replace(/\s+/g, "")}-bok-checkbox`}
          value="Kings"
          defaultChecked
        />{" "}
        <label htmlFor={`${text.replace(/\s+/g, "")}-bok-checkbox`}>BoK</label>
        <input
          type="checkbox"
          name={text.replace(/\s+/g, "")}
          id={`${text.replace(/\s+/g, "")}-bom-checkbox`}
          value="Might"
        />{" "}
        <label htmlFor={`${text.replace(/\s+/g, "")}-bom-checkbox`}>BoM</label>
        <input
          type="checkbox"
          name={text.replace(/\s+/g, "")}
          id={`${text.replace(/\s+/g, "")}-bow-checkbox`}
          value="Wisdom"
        />{" "}
        <label htmlFor={`${text.replace(/\s+/g, "")}-bow-checkbox`}>BoW</label>
      </div>
    </StyledSpecButton>
  ) : (
    <StyledSpecButton color={color} onClick={onClick}>
      <p>{text}</p>
      <img src={image} alt="spec icon" />
    </StyledSpecButton>
  );
};

SpecButton.defaultProps = {
  image: require("../images/hunter_beastmastery.png").default,
  text: "missing spec",
  color: "red",
};

export default SpecButton;
