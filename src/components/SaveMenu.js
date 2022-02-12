import { StyledSaveMenu } from "./styles/RaidAssembler.styled";
import { DeletePlayerIcon, EditIcon } from "./styles/RaidAssembler.styled";

const saves = [
  "saveSlotOne",
  "saveSlotTwo",
  "saveSlotThree",
  "saveSlotFour",
  "saveSlotFive",
];

const saveExist = (aSave) => {
  try {
    return JSON.parse(localStorage.getItem(aSave)).name;
  } catch {
    return "EMPTY";
  }
};

const SaveMenu = ({
  saveOnClick,
  loadOnClick,
  editSaveOnChange,
  deleteSaveOnClick,
  saveOnClickToFile,
  saveMenuOpen,
  setSaveMenuOpen,
}) => {
  return (
    <StyledSaveMenu onClick={() => setSaveMenuOpen(!saveMenuOpen)}>
      <div className="save-menu" onClick={(e) => e.stopPropagation()}>
        <h2 className="save-menu-header">Saves</h2>
        <div style={{ color: "white" }} onClick={() => saveOnClickToFile()}>
          download
        </div>
        {saves.map((aSave, index) => (
          <div className="one-save" key={aSave}>
            <div className="save-slot-number">{index + 1}</div>
            <div
              onClick={() => saveOnClick(aSave)}
              className="save-buttons"
              id="save-button"
            >
              Save
            </div>
            <input
              type="text"
              className="save-text"
              id={aSave}
              defaultValue={saveExist(aSave)}
              onChange={(e) => editSaveOnChange(aSave, e)}
            />
            <EditIcon id="edit-save-button" />
            <div
              onClick={() => {
                loadOnClick(aSave);
                setSaveMenuOpen(!saveMenuOpen);
              }}
              className="save-buttons"
              id="load-button"
            >
              Load
            </div>
            <div
              onClick={() => deleteSaveOnClick(aSave)}
              className="save-buttons"
              id="delete-button"
            >
              Delete <DeletePlayerIcon id="delete-icon" />
            </div>
          </div>
        ))}
      </div>
    </StyledSaveMenu>
  );
};

export default SaveMenu;
