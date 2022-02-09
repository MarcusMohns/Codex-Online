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
  saveMenuOpen,
  setSaveMenuOpen,
}) => {
  return (
    <StyledSaveMenu onClick={() => setSaveMenuOpen(!saveMenuOpen)}>
      <div className="save-menu">
        {saves.map((aSave) => (
          <div className="one-save" key={aSave}>
            <button onClick={() => saveOnClick(aSave)}>Save</button>
            <div className="save-text"> {saveExist(aSave)} </div>
            <button onClick={() => loadOnClick(aSave)}>Load</button>
            <button onClick={() => localStorage.removeItem(aSave)}>
              delete
            </button>
          </div>
        ))}
      </div>
    </StyledSaveMenu>
  );
};

export default SaveMenu;
