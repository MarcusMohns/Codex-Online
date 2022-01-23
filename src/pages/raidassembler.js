import { useReducer, useState, useEffect } from "react";
import SpecArray from "../SpecArray";
import SpecButtons from "../components/SpecButtons";
import BuffCategories from "../components/BuffCategories";
import Utilities from "../components/Utilities";
import Raid from "../components/Raid";
import {
  Main,
  SpecContainer,
  RaidContainer,
  BuffContainer,
  ArrowLeft,
  ResetIcon,
  AddPlayerButton,
  UtilityContainer,
  ContentHeader,
  RaidContentHeader,
  NoPlayersText,
} from "../components/styles/RaidAssembler.styled";

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

    case "edit":
      const newState1 = state[action.id].filter(
        (item) => item.buffName !== action.value.buffName
      );
      return { ...state, [action.id]: newState1 };

    case "reset":
      return {};
    default:
      return state;
  }

  // run for every buff the new player posseses
};

const RaidAssembler = () => {
  const intitialRaidState = {
    players: [],
    groups: {
      "group-1": {
        id: "group-1",
        title: "Group 1",
        playerIds: [],
      },
      "group-2": {
        id: "group-2",
        title: "Group 2",
        playerIds: [],
      },
      "group-3": {
        id: "group-3",
        title: "Group 3",
        playerIds: [],
      },
      "group-4": {
        id: "group-4",
        title: "Group 4",
        playerIds: [],
      },
      "group-5": {
        id: "group-5",
        title: "Group 5",
        playerIds: [],
      },
    },
    groupOrder: ["group-1", "group-2", "group-3", "group-4", "group-5"],
  };

  const [raid, setRaid] = useState(intitialRaidState);
  const [buffs, setBuffs] = useReducer(formReducer, {});
  const [utilities, setUtilities] = useReducer(formReducer, {});
  const [raidCount, setCount] = useState([0, 0, 0, 0]); // first value full raid count, 2nd value Tanks, 3rd value Healers, 4th value DPS.
  const [rightMenuOpen, setRightMenuOpen] = useState(false);
  const [raidIsFull, setRaidIsFull] = useState(false);

  const handleRightMenuToggle = (e) => {
    if (e.code === "KeyQ" || e.type === "click") {
      setRightMenuOpen(!rightMenuOpen);

      // TO DO Add a way for users to keybind which button they want to use to open the menu... Also when input is highlighted the menu shouldnt be openable by the keystroke.
    }
  };

  const resetRaid = () => {
    setRaid(intitialRaidState);
    setCount([0, 0, 0, 0]);
    setBuffs({ type: "reset" });
    setUtilities({ type: "reset" });
  };

  const groupSort = (groups, player) => {
    // Sorts the new player into a availible slot in one of the groups.
    const sortedGroup = JSON.parse(JSON.stringify(groups));
    for (let group of Object.entries(sortedGroup)) {
      if (group[1].playerIds.length < 5) {
        // if group isnt full (5/5) add our player.
        group[1].playerIds.push(player);
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
      };
      setBuffs({ type: "add", name: id, value: newBuff });
    }
  };

  const playerBuffsEdited = (player, buff, e) => {
    const playerArray = [...raid.players];
    let newPlayers;
    let newBuff = {
      buffCategory: buff.category,
      buffName: buff.name,
      buffImg: buff.image,
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
        "unexpected missing checkbox value in playerBuffsEdited func"
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

    // setRaid({ ...raid, players: newPlayers });
    // addBuff(player.id, player);
  };

  const addUtility = (id, player) => {
    for (let utility of player.utility) {
      let newUtility = {
        name: utility.name,
        image: utility.image,
      };
      setUtilities({ type: "add", name: id, value: newUtility });
    }
  };

  const handleCount = (player, status) => {
    let value = 0;
    if (status === "add") {
      value = 1;
    } else if (status === "delete") {
      value = -1;
    } else {
      console.error("unexpected value passed to handleCount");
    }

    let count = [...raidCount];

    const tanks = [
      "Protection Paladin",
      "Blood Death Knight",
      "Feral Druid",
      "Protection Warrior",
    ];
    const healers = [
      "Discipline Priest",
      "Holy Priest",
      "Holy Paladin",
      "Restoration Druid",
      "Restoration Shaman",
    ];
    if (tanks.includes(player.text)) {
      count[1] += value;
    } else if (healers.includes(player.text)) {
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

  useEffect(() => {
    window.addEventListener("keydown", handleRightMenuToggle);
    return function cleanup() {
      window.removeEventListener("keydown", handleRightMenuToggle);
    };
  });
  return (
    <Main>
      <div className={`${rightMenuOpen ? "right-menu" : "hide-right-menu"}`}>
        <ArrowLeft className="arrow-left" onClick={handleRightMenuToggle} />
        <SpecContainer className="spec-container">
          <SpecButtons
            className="spec-buttons"
            specs={SpecArray}
            onClick={addPlayer}
          />
        </SpecContainer>
      </div>

      <RaidContainer className="raid-container">
        <RaidContentHeader>
          <div className="raid-status-container">
            <p className="raid-count">{raidCount[0]} / 25 </p>
            {raidCount[1]} Tanks | {raidCount[2]} Healer(s) | {raidCount[3]} DPS
          </div>
          <div className="raid-text">Raid</div>
          <div className="btn-container">
            <AddPlayerButton onClick={handleRightMenuToggle}>
              Add a Player <span id="plus-sign">+</span>
            </AddPlayerButton>
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
            editBuffs={playerBuffsEdited}
            setRaid={setRaid}
            onDragEnd={onDragEnd}
          />
        ) : (
          <NoPlayersText>No players in raid</NoPlayersText>
        )}
      </RaidContainer>
      <UtilityContainer>
        <ContentHeader>Utilities</ContentHeader>
        <Utilities utilities={utilities}></Utilities>
      </UtilityContainer>
      <BuffContainer className="buff-container">
        <ContentHeader>Buffs & Debuffs</ContentHeader>
        <BuffCategories currentBuffs={buffs}></BuffCategories>
      </BuffContainer>
    </Main>
  );
};

export default RaidAssembler;
