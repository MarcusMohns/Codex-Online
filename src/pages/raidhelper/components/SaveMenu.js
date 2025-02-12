import {
  DeletePlayerIcon,
  EditIcon,
  DownloadIcon,
  UploadIcon,
  StyledSaveMenu,
} from "../styles/RaidHelper.styled";
import { useState } from "react";

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

const deleteAllSavesOnClick = () => {
  localStorage.clear();
  saves.map((save) => {
    return (document.querySelector(`#${save}`).value = "EMPTY");
  });
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
  raid,
  setRaid,
  buffs,
  setBuffs,
  utilities,
  setUtilities,
  raidCount,
  setCount,
}) => {
  const [importText, setImportText] = useState("");
  const [showSmallAlert, setShowSmallAlert] = useState(false);
  const handleImportText = (e) => setImportText(e.target.value);
  const handleImport = async () => {
    importFromString(importText);
    setImportText("");
  };

  const exportImportString = () => {
    navigator.clipboard
      .writeText(
        JSON.stringify({
          raid,
          buffs,
          utilities,
          raidCount,
        })
      )
      .then(() => {
        setShowSmallAlert(true);
        setTimeout(() => setShowSmallAlert(false), 3000);
      })
      .catch((err) => {
        console.error("Error in copying text: ", err);
      });
  };

  const importFromString = (string) => {
    setImportText("");
    const newRaid = JSON.parse(string);
    try {
      setRaid(newRaid.raid);
      setBuffs({ type: "load", value: newRaid.buffs });
      setUtilities({ type: "load", value: newRaid.utilities });
      setCount(newRaid.raidCount);
    } catch {
      console.error("could not load");
    }
  };

  return (
    <StyledSaveMenu onClick={() => setSaveMenuOpen(!saveMenuOpen)}>
      <div className="save-menu" onClick={(e) => e.stopPropagation()}>
        <h2 className="save-menu-header">
          Save Menu
          <div
            className="save-menu-close-window-icn"
            onClick={() => setSaveMenuOpen(!saveMenuOpen)}
          >
            x
          </div>
        </h2>
        <span className="saved-tooltip">SAVED</span>

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
              autoComplete="off"
            />
            <EditIcon
              id="edit-save-button"
              onClick={() => document.querySelector(`#${aSave}`).select()}
            />
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
        <div className="save-menu-import-export-container">
          <h2 className="import-export-header">Import/Export</h2>
          <div className="import-main-content">
            <div className="import-small-container">
              {showSmallAlert ? (
                <span className="small-alert">Copied!</span>
              ) : (
                <span className="small-alert hidden">Copied!</span>
              )}
              Export:
              <div
                className="copy-import-text-btn"
                onClick={exportImportString}
              >
                Copy to Clipboard✏️
              </div>
            </div>
            <div className="import-small-container">
              Import:
              <div className="import-btn-input-container">
                <input
                  className="paste-import-text-input"
                  type="text"
                  placeholder="Paste Exported Text"
                  value={importText}
                  onChange={handleImportText}
                />
                <div className="paste-import-text-btn" onClick={handleImport}>
                  Import!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="save-menu-footer">
          <div
            id="save-to-disk-button"
            className="save-menu-footer-buttons"
            onClick={() => saveOnClickToFile()}
          >
            Save to Disk <DownloadIcon />
          </div>

          <div
            className="save-menu-footer-buttons"
            id="load-from-disk-button"
            onClick={() => {
              loadOnClickToFile();
              setSaveMenuOpen(!saveMenuOpen);
            }}
          >
            Load from Disk <UploadIcon />
          </div>

          <div
            className="save-menu-footer-buttons"
            id="delete-all-saves-button"
            onClick={() => deleteAllSavesOnClick()}
          >
            Delete All Saves
            <DeletePlayerIcon id="delete-icon" />
          </div>
        </div>
      </div>
    </StyledSaveMenu>
  );
};

export default SaveMenu;
