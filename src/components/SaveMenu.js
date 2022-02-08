import { StyledSaveMenu } from "./styles/RaidAssembler.styled";

const SaveMenu = ({
  saveOnClick,
  loadOnClick,
  saveMenuOpen,
  setSaveMenuOpen,
}) => {
  return (
    <StyledSaveMenu onClick={() => setSaveMenuOpen(!saveMenuOpen)}>
      <div className="save-menu">
        <button onClick={saveOnClick}>Save</button>
        <button onClick={loadOnClick}>Load</button>
      </div>
    </StyledSaveMenu>
  );
};

export default SaveMenu;
