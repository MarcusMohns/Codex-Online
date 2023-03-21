import { useReducer, useState } from "react";
import SpecArray from "../../data/SpecArray";
import SpecButtons from "./components/SpecButtons";
import BuffCategories from "./components/BuffCategories";
import Utilities from "./components/Utilities";
import SaveMenu from "./components/SaveMenu";
import RaidCooldowns from "./components/RaidCooldowns";
import PlayersIndex from "./components/PlayersIndex";
import PlayerOptions from "./components/PlayerOptions";
import Raid from "./components/Raid";
import {
  intitialRaidState,
  initialPlayerState,
} from "../../data/InitialStates";
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
  SaveIcon,
  UtilityHeaderButton,
  RaidCooldownIcon,
  ContentTitle,
} from "./styles/RaidHelper.styled";
import {
  BeastMasteryBuffs,
  Paladins,
  PaladinUtility,
  WarlockBuffs,
  Warlocks,
} from "../../data/PlayersWithOptions";

const { v4: uuidv4 } = require("uuid");

const formReducer = (state, action) => {
  switch (action.type) {
    case "add":
      if (action.name in state) {
        // If player ID already exists in state
        let newEntry = [...state[action.name], action.value];
        // spread the IDs values into newEntry and add the new value
        return {
          ...state,
          [action.name]: newEntry,
        };
      } else {
        return {
          ...state,
          [action.name]: [action.value],
        };
      }

    case "delete":
      const newState = Object.entries(state).filter(
        (item) => item[0] !== action.id
      );
      return Object.fromEntries(newState);

    case "load":
      return action.value;

    case "edit":
      const editedState = state[action.id].filter(
        (item) => item.buffName !== action.value.buffName
      );

      return { ...state, [action.id]: editedState };

    case "addEntry":
      const addEntryState = JSON.parse(JSON.stringify(state[action.id]));
      addEntryState.push(action.value);

      return { ...state, [action.id]: addEntryState };

    case "removeEntry":
      const removeEntryState = state[action.id].filter(
        (utility) => utility.name !== action.value.name
      );
      return { ...state, [action.id]: removeEntryState };

    case "reset":
      return {};
    default:
      return state;
  }

  // run for every buff the new player posseses
};

const RaidHelper = () => {
  const [raid, setRaid] = useState(intitialRaidState);
  const [buffs, setBuffs] = useReducer(formReducer, {});
  const [utilities, setUtilities] = useReducer(formReducer, {});
  const [raidCount, setCount] = useState([0, 0, 0, 0]); // first value full raid count, 2nd value Tanks, 3rd value Healers, 4th value DPS.
  const [raidIsFull, setRaidIsFull] = useState(false);
  const [saveMenuOpen, setSaveMenuOpen] = useState(false);
  const [raidCooldownsOpen, setRaidCooldownsOpen] = useState(false);
  const [playersIndexOpen, setPlayersIndexOpen] = useState(false);
  const [playerOptionsOpen, setPlayerOptionsOpen] = useState(false);
  const [aPlayer, setAPlayer] = useState(initialPlayerState);

  const resetRaid = () => {
    setRaid(intitialRaidState);
    setCount([0, 0, 0, 0]);
    setBuffs({ type: "reset" });
    setUtilities({ type: "reset" });
    setAPlayer(initialPlayerState);
  };

  const groupSort = (groups, player) => {
    // Sorts the new player into a availible slot in one of the groups.
    const sortedGroup = JSON.parse(JSON.stringify(groups));
    for (let group of Object.entries(sortedGroup)) {
      if (group[1].playerIds.length < 5) {
        // if group isnt full (5/5) add our player.
        group[1].playerIds = [...group[1].playerIds, player];
        return sortedGroup;
      }
    }
    return sortedGroup;
  };

  const addPlayer = (player) => {
    if (raidCount[0] < 25) {
      const id = uuidv4();
      const newPlayer = { id, ...player };
      const newGroups = groupSort(raid.groups, newPlayer);

      setRaid({
        ...raid,
        players: [...raid.players, newPlayer],
        groups: newGroups,
      });
      addBuff(id, player);
      addUtility(id, player);
      handleCount(player, "add");
    } else {
      setRaidIsFull(true);
    }
  };

  const deletePlayer = (player) => {
    const newPlayers = raid.players.filter((gamer) => gamer.id !== player.id);
    const newGroup = JSON.parse(JSON.stringify(raid.groups));
    // deep copy as to not alter state directly
    for (let group in newGroup) {
      for (let ids of newGroup[group].playerIds) {
        if (ids.id === player.id) {
          // If ids.id contains our passed in players' id
          newGroup[group].playerIds.splice(
            newGroup[group].playerIds.indexOf(ids),
            1
          ); // Remove player
        }
      }
    }
    setRaid({ ...raid, players: newPlayers, groups: newGroup });
    setBuffs({ type: "delete", id: player.id });
    setUtilities({ type: "delete", id: player.id });
    handleCount(player, "delete");

    if (raidIsFull) {
      setRaidIsFull(false);
    }
  };

  const focusName = (nameText) => {
    let nameTextObject = document.querySelector(`#${nameText}`);
    nameTextObject.focus();
    nameTextObject.value = "";

    nameTextObject.addEventListener("keydown", function confirmEdit(e) {
      if (e.key === "Enter") {
        nameTextObject.blur();
        nameTextObject.removeEventListener("keydown", confirmEdit);
      }
      if (e.key === "Escape") {
        nameTextObject.blur();
        nameTextObject.removeEventListener("keydown", confirmEdit);
      }
    });
  };

  const editName = (playerId, nameText) => {
    const nameTextObject = document.querySelector(`#${nameText}`);
    const playerArray = JSON.parse(JSON.stringify(raid.players));
    const newGroups = JSON.parse(JSON.stringify(raid.groups));
    const newPlayers = playerArray.map((player) => {
      if (player.id === playerId) {
        player.name = nameTextObject.value;
      }
      return player;
    });

    for (let group in newGroups) {
      for (let ids of newGroups[group].playerIds) {
        if (ids.id === playerId) {
          ids.name = nameTextObject.value;
        }
      }
    }

    setRaid({ ...raid, players: newPlayers, groups: newGroups });
  };

  const addBuff = (id, player) => {
    let playerBuffs = [...player.buffs];

    for (let buff of playerBuffs) {
      let newBuff = {
        buffCategory: buff.category,
        buffName: buff.name,
        buffImg: buff.image,
        buffIcon: buff.icon,
        buffLink: buff.link,
        buffSpellId: buff.spellId,
      };

      if (
        player.text === "Beast Mastery Hunter" &&
        BeastMasteryBuffs.includes(buff.name)
      ) {
        if (buff.checked) {
          setBuffs({ type: "add", name: id, value: newBuff });
        }
      } else if (
        Warlocks.includes(player.text) &&
        WarlockBuffs.includes(buff.name)
      ) {
        if (buff.checked) {
          setBuffs({ type: "add", name: id, value: newBuff });
        }
      } else {
        setBuffs({ type: "add", name: id, value: newBuff });
      }
    }
  };

  const handleDraenei = (player, e) => {
    // CLEANUP IN ISLE THIS AND HANDLE DSAC BCEAUSE IT LOOKS LIKE A DUMPSTERFIRE THANKS =)

    const statePlayer = raid.players.find((gamer) => player.id === gamer.id);
    const newBuffs = JSON.parse(JSON.stringify(statePlayer.groupBuffs));
    if (e.target.checked) {
      newBuffs[0].draenei = true;
    } else if (!e.target.checked) {
      newBuffs[0].draenei = false;
    }
    const newPlayer = { ...statePlayer, groupBuffs: newBuffs };

    const newRaid = { ...raid };
    const newPlayers = newRaid.players.map((gamer) => {
      return player.id === gamer.id ? newPlayer : gamer;
    });

    const newGroups = JSON.parse(JSON.stringify(raid.groups));
    for (let group in newGroups) {
      for (let gamer of newGroups[group].playerIds) {
        player.id === gamer.id && (gamer.groupBuffs = newBuffs);
      }
    }
    setRaid({ ...raid, players: newPlayers, groups: newGroups });
  };

  const handleUtility = (player, utility, e) => {
    const statePlayer = raid.players.find((gamer) => player.id === gamer.id);
    const newUtility = JSON.parse(JSON.stringify(utility));
    const newPlayerUtility = JSON.parse(JSON.stringify(statePlayer.utility));
    const newBuffs = JSON.parse(JSON.stringify(statePlayer.groupBuffs));

    if (utility.name === "Divine Guardian") {
      if (e.target.checked) {
        newBuffs[1].checked = true;
        newPlayerUtility[0].checked = true;
        setUtilities({ type: "addEntry", id: player.id, value: newUtility });
      } else if (!e.target.checked) {
        newBuffs[1].checked = false;
        newPlayerUtility[0].checked = false;
        setUtilities({ type: "removeEntry", id: player.id, value: newUtility });
      }
    } else {
      if (e.target.checked) {
        newPlayerUtility[1].checked = true;
        newUtility.checked = true;
        setUtilities({ type: "addEntry", id: player.id, value: newUtility });
      } else if (!e.target.checked) {
        newPlayerUtility[1].checked = false;
        newUtility.checked = false;
        setUtilities({ type: "removeEntry", id: player.id, value: newUtility });
      }
    }
    const newPlayer = {
      ...statePlayer,
      groupBuffs: newBuffs,
      utility: newPlayerUtility,
    };

    const newRaid = { ...raid };

    const newPlayers = newRaid.players.map((gamer) => {
      return player.id === gamer.id ? newPlayer : gamer;
    });

    const newGroups = JSON.parse(JSON.stringify(raid.groups));
    for (let group in newGroups) {
      for (let gamer of newGroups[group].playerIds) {
        if (player.id === gamer.id) {
          gamer.groupBuffs = newBuffs;
          gamer.utility = newPlayerUtility;
        }
      }
    }
    setRaid({ ...raid, players: newPlayers, groups: newGroups });
  };

  const handlePlayerOptions = (player) => {
    try {
      setAPlayer(player);
      setPlayerOptionsOpen(!playerOptionsOpen);
    } catch (e) {
      console.error(e);
    }
  };

  const playerRoleEdit = (player, e) => {
    let newRole = "dps";
    e.target.checked && (newRole = "tank");
    const newPlayer = { ...player, role: newRole };
    // if checked role is set to tank

    const newRaid = { ...raid };
    const newPlayers = newRaid.players.map((gamer) => {
      return player.id === gamer.id ? newPlayer : gamer;
    });
    // set raid.players

    const newGroups = JSON.parse(JSON.stringify(raid.groups));
    for (let group in newGroups) {
      for (let gamer of newGroups[group].playerIds) {
        player.id === gamer.id && (gamer.role = newRole);
      }
    }

    setRaid({ ...raid, players: newPlayers, groups: newGroups });

    let count = [...raidCount];
    if (e.target.checked) {
      // if checked remove 1 from dps count and add to tank count
      count[1] += 1;
      count[3] -= 1;
    } else if (!e.target.checked) {
      // if unchecked remove 1 from tank count and add to dps count
      count[1] -= 1;
      count[3] += 1;
    } else {
      console.error("error in playerRoleEdit when updating raid count");
    }
    setCount(count);
  };
  const playerBuffsEdit = (player, buff, e) => {
    const playerArray = [...raid.players];
    let newPlayers;
    let newBuff = {
      buffCategory: buff.category,
      buffName: buff.name,
      buffImg: buff.image,
      buffIcon: buff.icon,
      buffLink: buff.link,
      buffSpellId: buff.spellId,
    };

    if (e.target.checked) {
      newBuff.checked = true;

      newPlayers = playerArray.map((gamer) =>
        gamer.id === player.id
          ? {
              ...gamer,
              buffs: [...gamer.buffs, newBuff],
            }
          : { ...gamer }
      );
      setBuffs({ type: "add", name: player.id, value: newBuff });
    } else if (!e.target.checked) {
      newBuff.checked = false;

      newPlayers = playerArray.map((gamer) =>
        gamer.id === player.id
          ? {
              ...gamer,
              buffs: gamer.buffs.filter((buff) => buff !== newBuff),
            }
          : { ...gamer }
      );
      setBuffs({ type: "edit", id: player.id, value: newBuff });
    } else {
      return console.error(
        "unexpected missing checkbox value in playerBuffsEdit func"
      );
    }
    const newGroups = JSON.parse(JSON.stringify(raid.groups));
    for (let group in newGroups) {
      for (let ids of newGroups[group].playerIds) {
        for (let idBuff of ids.buffs) {
          if (idBuff.name === newBuff.buffName && ids.id === player.id) {
            newBuff.checked
              ? (idBuff.checked = true)
              : (idBuff.checked = false);
          }
        }
      }
    }

    setRaid({ ...raid, players: newPlayers, groups: newGroups });
  };

  const addUtility = (id, player) => {
    for (let utility of player.utility) {
      if (Paladins.includes(player.text)) {
        if (PaladinUtility.includes(utility.name)) {
          if (utility.checked) {
            setUtilities({ type: "add", name: id, value: utility });
          }
        } else {
          setUtilities({ type: "add", name: id, value: utility });
        }
      } else {
        setUtilities({ type: "add", name: id, value: utility });
      }
    }
  };
  const deleteSaveOnClick = (saveName) => {
    const saveNameInput = document.querySelector(`#${saveName}`);
    if (saveNameInput) {
      // save exists
      saveNameInput.value = "EMPTY";
      localStorage.removeItem(saveName);
    }
  };
  const editSaveOnChange = (saveName, e) => {
    const newState = JSON.parse(localStorage.getItem(saveName));
    if (newState) {
      // save exists
      newState.name = e.target.value;
      const newSave = JSON.stringify(newState);
      localStorage.setItem(saveName, newSave);
    }
  };
  const saveOnClickToFile = () => {
    const savedRaid = JSON.stringify(raid);
    const savedBuffs = JSON.stringify(buffs);
    const savedUtils = JSON.stringify(utilities);
    const savedCount = JSON.stringify(raidCount);

    const data = JSON.stringify({
      name: `${raidCount[0]}/25 - Saved Raid`,
      raid: savedRaid,
      buffs: savedBuffs,
      utils: savedUtils,
      count: savedCount,
    });
    let c = document.createElement("a");
    c.download = `${raidCount[0]}/25 - Saved Raid.txt`;

    const t = new Blob([data], {
      type: "text/plain",
    });

    c.href = window.URL.createObjectURL(t);
    c.click();
  };

  const loadOnClickToFile = () => {
    const fileSelector = document.createElement("input");
    fileSelector.setAttribute("type", "file");
    fileSelector.click();

    fileSelector.addEventListener("change", () => {
      let files = fileSelector.files;
      if (files.length === 0) return;
      if (files[0].type !== "text/plain") return;

      const file = files[0];
      let reader = new FileReader();

      reader.onload = (e) => {
        const file = e.target.result;
        try {
          const newState = JSON.parse(file);
          const newRaid = JSON.parse(newState.raid);
          const newBuffs = JSON.parse(newState.buffs);
          const newUtilities = JSON.parse(newState.utils);
          const newCount = JSON.parse(newState.count);

          setRaid(newRaid);
          setBuffs({ type: "load", value: newBuffs });
          setUtilities({ type: "load", value: newUtilities });
          setCount(newCount);
        } catch {
          console.error("could not load");
        }
      };

      reader.onerror = (e) => alert(e.target.error.name);
      reader.readAsText(file);
    });
  };
  const saveOnClick = (saveName) => {
    const saveNameInput = document.querySelector(`#${saveName}`);
    // turn state into JSON
    const savedRaid = JSON.stringify(raid);
    const savedBuffs = JSON.stringify(buffs);
    const savedUtils = JSON.stringify(utilities);
    const savedCount = JSON.stringify(raidCount);

    // handles the displayed name of the save
    const date = new Date();
    const curDate = `${date.getDate()}/${
      date.getMonth() + 1
    }-${date.getFullYear()}`;
    let newSaveName = "";

    saveNameInput.value === "EMPTY"
      ? // Only overwrite the save name when 'EMPTY' otherwise edited save name will be deleted on save.
        (newSaveName = `(${raidCount[0]}/25) - ${curDate}`)
      : (newSaveName = saveNameInput.value);

    const saveOne = JSON.stringify({
      name: newSaveName,
      raid: savedRaid,
      buffs: savedBuffs,
      utils: savedUtils,
      count: savedCount,
    });

    document.querySelector(".saved-tooltip").style.opacity = "100%";
    setTimeout(function () {
      document.querySelector(".saved-tooltip").style.opacity = "0%";
    }, 1000);
    // Show 'Saved!' for 1 second

    saveNameInput.value = newSaveName;
    localStorage.setItem(saveName, saveOne);
  };
  const loadOnClick = (loadName) => {
    const newState = JSON.parse(localStorage.getItem(loadName));
    if (newState) {
      // save exists
      const newRaid = JSON.parse(newState.raid);
      const newBuffs = JSON.parse(newState.buffs);
      const newUtilities = JSON.parse(newState.utils);
      const newCount = JSON.parse(newState.count);

      setRaid(newRaid);
      setBuffs({ type: "load", value: newBuffs });
      setUtilities({ type: "load", value: newUtilities });
      setCount(newCount);
    }
  };

  const handleCount = (player, status) => {
    let count = [...raidCount];
    let value = 0;

    if (status === "add") {
      value = 1;
    } else if (status === "delete") {
      value = -1;
    } else {
      console.error("unexpected value passed to handleCount");
    }

    if (player.role === "tank") {
      count[1] += value;
    } else if (player.role === "healer") {
      count[2] += value;
    } else {
      count[3] += value;
    }

    count[0] += value;
    setCount(count);
  };

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
          specs={SpecArray}
          onClick={addPlayer}
        />
      </SpecContainer>
      <Main>
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
              id="raid-saves-btn"
            >
              <SaveIcon /> Saves
            </RaidHeaderButton>
            <UtilityHeaderButton
              onClick={() => {
                setPlayersIndexOpen(!playersIndexOpen);
              }}
              marginLeft="0px"
              marginRight="none"
            >
              <RaidCooldownIcon />
              Index
            </UtilityHeaderButton>

            <div className="raid-count">{raidCount[0]} / 25 </div>
            <div className="role-count">
              <p> {raidCount[1]} Tanks </p>
              <p> {raidCount[2]} Healers </p>
              <p> {raidCount[3]} DPS</p>
            </div>
            <div className="btn-container">
              <ResetIcon onClick={resetRaid} />
            </div>
          </RaidContentHeader>
          {raidIsFull ? (
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
              <RaidCooldownIcon />
              Cooldowns
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
