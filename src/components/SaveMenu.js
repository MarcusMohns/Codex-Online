import { StyledSaveMenu } from "./styles/RaidAssembler.styled";
import {
  DeletePlayerIcon,
  EditIcon,
  DownloadIcon,
  UploadIcon,
} from "./styles/RaidAssembler.styled";

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
  loadOnClickToFile,
  saveMenuOpen,
  setSaveMenuOpen,
}) => {
  return (
    <StyledSaveMenu onClick={() => setSaveMenuOpen(!saveMenuOpen)}>
      <div className="save-menu" onClick={(e) => e.stopPropagation()}>
        <h2 className="save-menu-header">Saves</h2>

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
        <div className="save-menu-footer">
          <div
            id="save-to-disk-button"
            className="save-menu-footer-buttons"
            onClick={() => saveOnClickToFile()}
          >
            Save to Disk... <DownloadIcon />
          </div>

          <div
            className="save-menu-footer-buttons"
            id="load-from-disk-button"
            onClick={() => {
              loadOnClickToFile();
              setSaveMenuOpen(!saveMenuOpen);
            }}
          >
            Load from Disk... <UploadIcon />
          </div>

          <div
            className="save-menu-footer-buttons"
            id="delete-all-saves-button"
          >
            Delete All
            <DeletePlayerIcon id="delete-icon" />
          </div>
        </div>
      </div>
    </StyledSaveMenu>
  );
};

export default SaveMenu;
