import { useState, useCallback } from "react";
import SpecButtons from "./components/SpecButtons";
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
  SpecContainer,
  RaidContainer,
  BuffContainer,
  ResetIcon,
  RaidHeaderButton,
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

  const [saveMenuOpen, setSaveMenuOpen] = useState(false);
  const [raidCooldownsOpen, setRaidCooldownsOpen] = useState(false);
  const [playersIndexOpen, setPlayersIndexOpen] = useState(false);
  const [playerOptionsOpen, setPlayerOptionsOpen] = useState(false);
  const [spec, setSpec] = useState([]);
  const [classTooltipOpen, setClassTooltipOpen] = useState(false);

  const handlePlayerOptions = useCallback(
    (player) => {
      try {
        setAPlayer(player);
        setPlayerOptionsOpen(!playerOptionsOpen);
      } catch (e) {
        console.error(e);
      }
    },
    [playerOptionsOpen, setAPlayer]
  );

  const handleSpecTooltip = useCallback(
    (player) => {
      try {
        setSpec(player);
        setClassTooltipOpen(!classTooltipOpen);
      } catch (e) {
        console.error(e);
      }
    },
    [classTooltipOpen]
  );

  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = raid.groups[source.droppableId];
    const finish = raid.groups[destination.droppableId];
    const newPlayerIds = Array.from(start.playerIds);
    const newPlayerId = newPlayerIds[source.index];

    if (start === finish) {
      // if moving inside same group
      newPlayerIds.splice(source.index, 1);
      newPlayerIds.splice(destination.index, 0, newPlayerId);

      const newGroup = {
        ...start,
        playerIds: newPlayerIds,
      };

      const newRaid = {
        ...raid,
        groups: {
          ...raid.groups,
          [newGroup.id]: newGroup,
        },
      };
      setRaid(newRaid);
      return;
    }
    // if moving outside the group
    const startPlayerIds = Array.from(start.playerIds);
    startPlayerIds.splice(source.index, 1);
    const newStart = {
      ...start,
      playerIds: startPlayerIds,
    };
    const finishPlayerIds = Array.from(finish.playerIds);
    finishPlayerIds.splice(destination.index, 0, newPlayerId);
    const newFinish = {
      ...finish,
      playerIds: finishPlayerIds,
    };
    const newRaid = {
      ...raid,
      groups: {
        ...raid.groups,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setRaid(newRaid);
  };

  return (
    <>
      <SpecContainer className="spec-container">
        <SpecButtons
          className="spec-buttons"
          onClick={addPlayer}
          handleSpecTooltip={handleSpecTooltip}
        />
      </SpecContainer>
      <Main>
        {classTooltipOpen && (
          <ClassTooltip
            spec={spec}
            classTooltipOpen={classTooltipOpen}
            setClassTooltipOpen={setClassTooltipOpen}
          />
        )}
        {saveMenuOpen && (
          <SaveMenu
            saveOnClick={saveOnClick}
            loadOnClick={loadOnClick}
            editSaveOnChange={editSaveOnChange}
            deleteSaveOnClick={deleteSaveOnClick}
            saveOnClickToFile={saveOnClickToFile}
            loadOnClickToFile={loadOnClickToFile}
            saveMenuOpen={saveMenuOpen}
            setSaveMenuOpen={setSaveMenuOpen}
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
        {playerOptionsOpen && (
          <PlayerOptions
            playerOptionsOpen={playerOptionsOpen}
            setPlayerOptionsOpen={setPlayerOptionsOpen}
            player={aPlayer}
            editBuffs={playerBuffsEdit}
            playerRoleEdit={playerRoleEdit}
            handleDraenei={handleDraenei}
            handleUtility={handleUtility}
            focusName={focusName}
            handleNote={handleNote}
          />
        )}
        {raidCooldownsOpen && (
          <RaidCooldowns
            raidCooldownsOpen={raidCooldownsOpen}
            setRaidCooldownsOpen={setRaidCooldownsOpen}
            utilities={utilities}
          />
        )}
        {playersIndexOpen && (
          <PlayersIndex
            playersIndexOpen={playersIndexOpen}
            setPlayersIndexOpen={setPlayersIndexOpen}
            players={raid.players}
          />
        )}

        <RaidContainer className="raid-container">
          <RaidContentHeader>
            <RaidHeaderButton
              onClick={() => {
                setSaveMenuOpen(!saveMenuOpen);
              }}
              backgroundColor="#47774b"
              id="raid-saves-btn"
            >
              <span className="utility-btn-text">Import/Export & Saves</span>
              💾
            </RaidHeaderButton>
            <RaidHeaderButton
              onClick={() => {
                setPlayersIndexOpen(!playersIndexOpen);
              }}
              backgroundColor="#3b3e44"
              marginLeft="0px"
              marginRight="none"
            >
              <span className="utility-btn-text">Index</span>
              📜
            </RaidHeaderButton>

            <div className="raid-count">{raidCount[0]}/25</div>
            <div className="role-count">
              <p>{raidCount[1]} Tanks 🛡️</p>
              <p>{raidCount[2]} Healers ➕</p>
              <p>{raidCount[3]} DPS ⚔️</p>
            </div>
            <div className="btn-container">
              <ResetIcon onClick={reset} />
            </div>
          </RaidContentHeader>
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
              className={
                raidCount[0] >= 25 ? "raid-is-full" : "raid-is-not-full"
              }
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
            <UtilityHeaderButton
              onClick={() => {
                setRaidCooldownsOpen(!raidCooldownsOpen);
              }}
            >
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
    </>
  );
};

export default RaidHelper;
