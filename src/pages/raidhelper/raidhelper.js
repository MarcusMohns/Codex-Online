import { useState, useCallback } from "react";
import SpecButtonsSideMenu from "./components/SpecButtonsSideMenu";
import BuffCategories from "./components/BuffCategories";
import Utilities from "./components/Utilities";
import SaveMenu from "./components/SaveMenu";
import RaidCooldowns from "./components/RaidCooldowns";
import PlayersIndex from "./components/PlayersIndex";
import PlayerOptions from "./components/PlayerOptions";
import ClassTooltip from "./components/ClassTooltip";
import Raid from "./components/Raid";

import {
  Main,
  RaidContainer,
  BuffContainer,
  ResetIcon,
  RaidHeaderButton,
  RaidCountContainer,
  UtilityContainer,
  ContentHeader,
  RaidContentHeader,
  NoPlayersText,
  UtilityHeaderButton,
  ContentTitle,
} from "./styles/RaidHelper.styled";

import useRaidHelper from "./hooks/useRaidHelper";
import useSave from "./hooks/useSave";

const RaidHelper = () => {
  const {
    raid,
    setRaid,
    buffs,
    setBuffs,
    utilities,
    setUtilities,
    raidCount,
    setCount,
    reset,
    onDragEnd,
    setAPlayer,
    aPlayer,
    addPlayer,
    deletePlayer,
    handleUtility,
    playerRoleEdit,
    playerBuffsEdit,
    handleDraenei,
    handleNote,
    focusName,
    editName,
  } = useRaidHelper();

  const {
    deleteSaveOnClick,
    editSaveOnChange,
    saveOnClickToFile,
    loadOnClickToFile,
    saveOnClick,
    loadOnClick,
  } = useSave({
    raid,
    buffs,
    utilities,
    raidCount,
    setRaid,
    setBuffs,
    setUtilities,
    setCount,
  });

  const [uiState, setUiState] = useState({
    saveMenuOpen: false,
    specButtonSideMenu: true,
    raidCooldownsOpen: false,
    playersIndexOpen: false,
    playerOptionsOpen: false,
    classTooltipOpen: false,
  });
  const [spec, setSpec] = useState([]);

  const toggleUi = useCallback((component) => {
    setUiState((prev) => ({ ...prev, [component]: !prev[component] }));
  }, []);

  const handlePlayerOptions = useCallback(
    (player) => {
      setAPlayer(player);
      toggleUi("playerOptionsOpen");
    },
    [setAPlayer, toggleUi]
  );

  const handleSpecTooltip = useCallback(
    (player) => {
      setSpec(player);
      toggleUi("classTooltipOpen");
    },
    [toggleUi]
  );

  return (
    <Main>
      {uiState.specButtonSideMenu && (
        <SpecButtonsSideMenu
          className="spec-buttons"
          onClick={addPlayer}
          handleSpecTooltip={handleSpecTooltip}
          handleCloseSideMenu={() => toggleUi("specButtonSideMenu")}
        />
      )}
      {uiState.classTooltipOpen && (
        <ClassTooltip
          spec={spec}
          classTooltipOpen={uiState.classTooltipOpen}
          setClassTooltipOpen={() => toggleUi("classTooltipOpen")}
        />
      )}
      {uiState.saveMenuOpen && (
        <SaveMenu
          saveOnClick={saveOnClick}
          loadOnClick={loadOnClick}
          editSaveOnChange={editSaveOnChange}
          deleteSaveOnClick={deleteSaveOnClick}
          saveOnClickToFile={saveOnClickToFile}
          loadOnClickToFile={loadOnClickToFile}
          saveMenuOpen={uiState.saveMenuOpen}
          setSaveMenuOpen={() => toggleUi("saveMenuOpen")}
          raid={raid}
          setRaid={setRaid}
          buffs={buffs}
          setBuffs={setBuffs}
          utilities={utilities}
          setUtilities={setUtilities}
          raidCount={raidCount}
          setCount={setCount}
        />
      )}
      {uiState.playerOptionsOpen && (
        <PlayerOptions
          playerOptionsOpen={uiState.playerOptionsOpen}
          setPlayerOptionsOpen={() => toggleUi("playerOptionsOpen")}
          player={aPlayer}
          editBuffs={playerBuffsEdit}
          playerRoleEdit={playerRoleEdit}
          handleDraenei={handleDraenei}
          handleUtility={handleUtility}
          focusName={focusName}
          handleNote={handleNote}
        />
      )}
      {uiState.raidCooldownsOpen && (
        <RaidCooldowns
          raidCooldownsOpen={uiState.raidCooldownsOpen}
          setRaidCooldownsOpen={() => toggleUi("raidCooldownsOpen")}
          utilities={utilities}
        />
      )}
      {uiState.playersIndexOpen && (
        <PlayersIndex
          playersIndexOpen={uiState.playersIndexOpen}
          setPlayersIndexOpen={() => toggleUi("playersIndexOpen")}
          players={raid.players}
        />
      )}

      <RaidContainer className="raid-container">
        <RaidContentHeader>
          <RaidHeaderButton
            onClick={() => toggleUi("specButtonSideMenu")}
            backgroundColor="#47774b"
          >
            <span className="utility-btn-text">Add Player</span>
            <span className="plus-icon">+</span>
          </RaidHeaderButton>
          <RaidHeaderButton
            onClick={() => toggleUi("saveMenuOpen")}
            backgroundColor="#47774b"
            id="raid-saves-btn"
          >
            <span className="utility-btn-text">Saves</span>
            💾
          </RaidHeaderButton>

          <RaidHeaderButton
            onClick={() => toggleUi("playersIndexOpen")}
            backgroundColor="#575b61ff"
            marginLeft="1rem"
          >
            <span className="utility-btn-text">Index</span>
            📜
          </RaidHeaderButton>
          <RaidHeaderButton
            onClick={reset}
            backgroundColor="#742c2cff"
            marginLeft="auto"
          >
            <span className="utility-btn-text">Reset</span>
            <ResetIcon />
          </RaidHeaderButton>
        </RaidContentHeader>
        <RaidCountContainer>
          <div className="raid-count">{raidCount[0]}/25</div>
          <div className="role-count">
            <p>{raidCount[1]} Tanks 🛡️</p>
            <p>{raidCount[2]} Healers ➕</p>
            <p>{raidCount[3]} DPS ⚔️</p>
          </div>
        </RaidCountContainer>
        {raid.players.length >= 25 ? (
          // Raid is full
          <div
            className={
              raidCount[0] >= 25 ? "raid-is-full-warning" : "raid-is-not-full"
            }
          >
            Raid is full
          </div>
        ) : (
          <div
            className={raidCount[0] >= 25 ? "raid-is-full" : "raid-is-not-full"}
          >
            Raid is full
          </div>
        )}
        {raid.players.length > 0 ? (
          <Raid
            raid={raid}
            onDelete={deletePlayer}
            focusName={focusName}
            editName={editName}
            editBuffs={playerBuffsEdit}
            playerRoleEdit={playerRoleEdit}
            setRaid={setRaid}
            onDragEnd={onDragEnd}
            handlePlayerOptions={handlePlayerOptions}
          />
        ) : (
          <NoPlayersText>No players in raid</NoPlayersText>
        )}
      </RaidContainer>
      <UtilityContainer>
        <ContentHeader>
          <ContentTitle>Utilities</ContentTitle>
          <UtilityHeaderButton onClick={() => toggleUi("raidCooldownsOpen")}>
            <span className="utility-btn-text">Cooldowns</span>
            📜
          </UtilityHeaderButton>
        </ContentHeader>
        <Utilities utilities={utilities} />
      </UtilityContainer>
      <BuffContainer className="buff-container">
        <ContentHeader>Buffs & Debuffs</ContentHeader>
        <BuffCategories currentBuffs={buffs}></BuffCategories>
      </BuffContainer>
    </Main>
  );
};

export default RaidHelper;
