import { StyledClassBtnCheckboxes } from "./styles/RaidAssembler.styled";
import COLORS from "../components";

const ClassBtnCheckboxes = ({ text, color }) => {
  return color === COLORS.paladin ? (
    <StyledClassBtnCheckboxes>
      <div className="buff-checkbox-container">
        <label
          htmlFor={`${text.replace(/\s+/g, "")}-bok-checkbox`}
          className="buff-label"
        >
          <img
            className="buff-checkbox-image"
            src="images/Greater_Blessing_Of_Kings.png"
            alt="Blessing of Kings"
            htmlFor={`${text.replace(/\s+/g, "")}-bok-checkbox`}
          />
          BoK
        </label>
        <input
          className="buff-checkbox"
          type="checkbox"
          name={text.replace(/\s+/g, "")}
          id={`${text.replace(/\s+/g, "")}-bok-checkbox`}
          value="Kings"
          defaultChecked
        />
      </div>
      <div className="buff-checkbox-container">
        <label
          htmlFor={`${text.replace(/\s+/g, "")}-bom-checkbox`}
          className="buff-label"
        >
          <img
            className="buff-checkbox-image"
            src="images/Greater_Blessing_Of_Might.png"
            alt="Blessing of Might"
          />
          BoM
        </label>
        <input
          className="buff-checkbox"
          type="checkbox"
          name={text.replace(/\s+/g, "")}
          id={`${text.replace(/\s+/g, "")}-bom-checkbox`}
          value="Might"
        />
      </div>
      {text === "Protection Paladin" && (
        <div className="buff-checkbox-container">
          <label
            htmlFor={`${text.replace(/\s+/g, "")}-bos-checkbox`}
            className="buff-label"
          >
            <img
              className="buff-checkbox-image"
              src="images/Greater_Blessing_Of_Sanctuary.png"
              alt="Blessing of Sanctuary"
            />
            BoS
          </label>

          <input
            className="buff-checkbox"
            type="checkbox"
            name={text.replace(/\s+/g, "")}
            id={`${text.replace(/\s+/g, "")}-bos-checkbox`}
            value="Sanctuary"
          />
        </div>
      )}
      <div className="buff-checkbox-container">
        <label
          htmlFor={`${text.replace(/\s+/g, "")}-bow-checkbox`}
          className="buff-label"
        >
          <img
            className="buff-checkbox-image"
            src="images/Greater_Blessing_Of_Wisdom.png"
            alt="Blessing of Wisdom"
          />
          BoW
        </label>
        <input
          className="buff-checkbox"
          type="checkbox"
          name={text.replace(/\s+/g, "")}
          id={`${text.replace(/\s+/g, "")}-bow-checkbox`}
          value="Wisdom"
        />
      </div>
    </StyledClassBtnCheckboxes>
  ) : (
    <StyledClassBtnCheckboxes>
      <div className="buff-checkbox-container">
        <label
          htmlFor={`${text.replace(/\s+/g, "")}-bs-checkbox`}
          className="buff-label"
        >
          <img
            className="buff-checkbox-image"
            src="images/Battle_Shout.png"
            alt="Battle_Shout"
          />
          BS
        </label>
        <input
          className="buff-checkbox"
          type="checkbox"
          name={text.replace(/\s+/g, "")}
          id={`${text.replace(/\s+/g, "")}-bs-checkbox`}
          value="Battle Shout"
          defaultChecked
        />
      </div>
      <div className="buff-checkbox-container">
        <label
          htmlFor={`${text.replace(/\s+/g, "")}-cs-checkbox`}
          className="buff-label"
        >
          <img
            className="buff-checkbox-image"
            src="images/Commanding_Shout.png"
            alt="Commanding_Shout"
          />
          CS
        </label>
        <input
          className="buff-checkbox"
          type="checkbox"
          name={text.replace(/\s+/g, "")}
          id={`${text.replace(/\s+/g, "")}-cs-checkbox`}
          value="Commanding Shout"
          defaultChecked
        />
      </div>
    </StyledClassBtnCheckboxes>
  );
};

export default ClassBtnCheckboxes;
