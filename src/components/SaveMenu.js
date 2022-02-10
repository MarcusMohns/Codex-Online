import { StyledSaveMenu } from "./styles/RaidAssembler.styled";

const saves = ["saveSlotOne", "saveSlotTwo", "saveSlotThree"];
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
  saveMenuOpen,
  setSaveMenuOpen,
}) => {
  return (
    <StyledSaveMenu>
      <div className="save-menu">
        {saves.map((aSave) => (
          <div className="one-save" key={aSave}>
            <button onClick={() => saveOnClick(aSave)}>Save</button>
            <input
              type="text"
              className="save-text"
              id={aSave}
              defaultValue={saveExist(aSave)}
              onChange={(e) => editSaveOnChange(aSave, e)}
            />
            <button onClick={() => loadOnClick(aSave)}>Load</button>
            <button onClick={() => deleteSaveOnClick(aSave)}>delete</button>
          </div>
        ))}
      </div>
    </StyledSaveMenu>
  );
};

export default SaveMenu;
