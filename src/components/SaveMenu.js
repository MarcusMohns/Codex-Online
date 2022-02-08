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
        <button onClick={() => saveOnClick("Retard! :)")}>Save</button>
        <div>{localStorage["raid"].name}</div>
        <button onClick={loadOnClick}>Load</button>
      </div>
    </StyledSaveMenu>
  );
};

export default SaveMenu;
