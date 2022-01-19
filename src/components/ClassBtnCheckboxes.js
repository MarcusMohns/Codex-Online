import { StyledClassBtnCheckboxes } from "./styles/RaidAssembler.styled";
const ClassBtnCheckboxes = ({ text, color }) => {
  return color === "pink" ? (
    <StyledClassBtnCheckboxes>
      <div className="buff-checkbox-container">
        <img
          className="buff-checkbox-image"
          src="images/Greater_Blessing_Of_Kings.png"
          alt="Blessing of Kings"
        />
        <input
          className="buff-checkbox"
          type="checkbox"
          name={text.replace(/\s+/g, "")}
          id={`${text.replace(/\s+/g, "")}-bok-checkbox`}
          value="Kings"
          defaultChecked
        />{" "}
        <label htmlFor={`${text.replace(/\s+/g, "")}-bok-checkbox`}>BoK</label>
      </div>
      <div className="buff-checkbox-container">
        <img
          className="buff-checkbox-image"
          src="images/Greater_Blessing_Of_Might.png"
          alt="Blessing of Might"
        />
        <input
          className="buff-checkbox"
          type="checkbox"
          name={text.replace(/\s+/g, "")}
          id={`${text.replace(/\s+/g, "")}-bom-checkbox`}
          value="Might"
        />{" "}
        <label htmlFor={`${text.replace(/\s+/g, "")}-bom-checkbox`}>BoM</label>
      </div>
      {text === "Protection Paladin" && (
        <div className="buff-checkbox-container">
          <img
            className="buff-checkbox-image"
            src="images/Greater_Blessing_Of_Sanctuary.png"
            alt="Blessing of Sanctuary"
          />
          <input
            className="buff-checkbox"
            type="checkbox"
            name={text.replace(/\s+/g, "")}
            id={`${text.replace(/\s+/g, "")}-bos-checkbox`}
            value="Sanctuary"
          />{" "}
          <label htmlFor={`${text.replace(/\s+/g, "")}-bos-checkbox`}>
            BoS
          </label>
        </div>
      )}
      <div className="buff-checkbox-container">
        <img
          className="buff-checkbox-image"
          src="images/Greater_Blessing_Of_Wisdom.png"
          alt="Blessing of Wisdom"
        />
        <input
          className="buff-checkbox"
          type="checkbox"
          name={text.replace(/\s+/g, "")}
          id={`${text.replace(/\s+/g, "")}-bow-checkbox`}
          value="Wisdom"
        />{" "}
        <label htmlFor={`${text.replace(/\s+/g, "")}-bow-checkbox`}>BoW</label>
      </div>
    </StyledClassBtnCheckboxes>
  ) : (
    <StyledClassBtnCheckboxes>
      {" "}
      <div className="buff-checkbox-container">
        <img
          className="buff-checkbox-image"
          src="images/Battle_Shout.png"
          alt="Battle_Shout"
        />
        <input
          className="buff-checkbox"
          type="checkbox"
          name={text.replace(/\s+/g, "")}
          id={`${text.replace(/\s+/g, "")}-bs-checkbox`}
          value="Battle Shout"
          defaultChecked
        />{" "}
        <label htmlFor={`${text.replace(/\s+/g, "")}-bs-checkbox`}>BS</label>
      </div>{" "}
      <div className="buff-checkbox-container">
        <img
          className="buff-checkbox-image"
          src="images/Commanding_Shout.png"
          alt="Commanding_Shout"
        />
        <input
          className="buff-checkbox"
          type="checkbox"
          name={text.replace(/\s+/g, "")}
          id={`${text.replace(/\s+/g, "")}-cs-checkbox`}
          value="Commanding Shout"
          defaultChecked
        />{" "}
        <label htmlFor={`${text.replace(/\s+/g, "")}-cs-checkbox`}>CS</label>
      </div>
    </StyledClassBtnCheckboxes>
  );
};

export default ClassBtnCheckboxes;
