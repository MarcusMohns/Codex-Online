import { StyledBlessingCheckboxes } from "./styles/RaidAssembler.styled";

const BlessingCheckboxes = ({ text }) => {
  return (
    <StyledBlessingCheckboxes>
      <div className="blessing-container">
        <img
          className="a-blessing-image"
          src={require("../images/Greater_Blessing_Of_Kings.png").default}
          alt="Blessing of Kings"
        />
        <input
          className="a-blessing-checkbox"
          type="checkbox"
          name={text.replace(/\s+/g, "")}
          id={`${text.replace(/\s+/g, "")}-bok-checkbox`}
          value="Kings"
          defaultChecked
        />{" "}
        <label htmlFor={`${text.replace(/\s+/g, "")}-bok-checkbox`}>BoK</label>
      </div>
      <div className="blessing-container">
        <img
          className="a-blessing-image"
          src={require("../images/Greater_Blessing_Of_Might.png").default}
          alt="Blessing of Might"
        />
        <input
          className="a-blessing-checkbox"
          type="checkbox"
          name={text.replace(/\s+/g, "")}
          id={`${text.replace(/\s+/g, "")}-bom-checkbox`}
          value="Might"
        />{" "}
        <label htmlFor={`${text.replace(/\s+/g, "")}-bom-checkbox`}>BoM</label>
      </div>
      <div className="blessing-container">
        <img
          className="a-blessing-image"
          src={require("../images/Greater_Blessing_Of_Wisdom.png").default}
          alt="Blessing of Wisdom"
        />
        <input
          className="a-blessing-checkbox"
          type="checkbox"
          name={text.replace(/\s+/g, "")}
          id={`${text.replace(/\s+/g, "")}-bow-checkbox`}
          value="Wisdom"
        />{" "}
        <label htmlFor={`${text.replace(/\s+/g, "")}-bow-checkbox`}>BoW</label>
      </div>
    </StyledBlessingCheckboxes>
  );
};

export default BlessingCheckboxes;
