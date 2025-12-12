import { useState, useCallback, useReducer } from "react";
import {
  intitialRaidState,
  initialPlayerState,
} from "../../../data/InitialStates";
import {
  BeastMasteryBuffs,
  Paladins,
  PaladinUtility,
  WarlockBuffs,
  Warlocks,
} from "../../../data/PlayersWithOptions";
import { v4 as uuidv4 } from "uuid";
import { groupSort } from "../store";

const useRaidHelper = () => {
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
  };

  const [raid, setRaid] = useState(intitialRaidState);
  const [buffs, setBuffs] = useReducer(formReducer, {});
  const [utilities, setUtilities] = useReducer(formReducer, {});
  const [raidCount, setCount] = useState([0, 0, 0, 0]); // first value full raid count, 2nd value Tanks, 3rd value Healers, 4th value DPS.
  const [aPlayer, setAPlayer] = useState(initialPlayerState);

  const addBuff = useCallback((id, player) => {
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
  }, []);

  const addUtility = useCallback((id, player) => {
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
  }, []);

  const handleCount = useCallback(
    (player, status) => {
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
    },
    [raidCount]
  );

  const addPlayer = useCallback(
    (player) => {
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
      }
    },
    [raid, raidCount, addBuff, addUtility, handleCount]
  );

  const deletePlayer = useCallback(
    (player) => {
      const newPlayers = raid.players.filter((gamer) => gamer.id !== player.id);
      const newGroup = JSON.parse(JSON.stringify(raid.groups));
      for (let group in newGroup) {
        for (let ids of newGroup[group].playerIds) {
          if (ids.id === player.id) {
            newGroup[group].playerIds.splice(
              newGroup[group].playerIds.indexOf(ids),
              1
            );
          }
        }
      }
      setRaid({ ...raid, players: newPlayers, groups: newGroup });
      setBuffs({ type: "delete", id: player.id });
      setUtilities({ type: "delete", id: player.id });
      handleCount(player, "delete");
    },
    [raid, handleCount]
  );

  const onDragEnd = useCallback(
    (result) => {
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
      const [newPlayerId] = newPlayerIds.splice(source.index, 1);

      if (start === finish) {
        // if moving inside same group
        newPlayerIds.splice(destination.index, 0, newPlayerId);

        const newGroup = {
          ...start,
          playerIds: newPlayerIds,
        };

        setRaid((prevRaid) => ({
          ...prevRaid,
          groups: {
            ...prevRaid.groups,
            [newGroup.id]: newGroup,
          },
        }));
        return;
      }
      // if moving outside the group
      const newStart = {
        ...start,
        playerIds: newPlayerIds,
      };
      const finishPlayerIds = Array.from(finish.playerIds);
      finishPlayerIds.splice(destination.index, 0, newPlayerId);
      const newFinish = {
        ...finish,
        playerIds: finishPlayerIds,
      };

      setRaid((prevRaid) => ({
        ...prevRaid,
        groups: {
          ...prevRaid.groups,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      }));
    },
    [raid.groups]
  );

  const reset = useCallback(() => {
    setRaid(intitialRaidState);
    setCount([0, 0, 0, 0]);
    setBuffs({ type: "reset" });
    setUtilities({ type: "reset" });
    setAPlayer(initialPlayerState);
  }, []);

  const handleUtility = useCallback(
    (player, utility, e) => {
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
          setUtilities({
            type: "removeEntry",
            id: player.id,
            value: newUtility,
          });
        }
      } else {
        if (e.target.checked) {
          newPlayerUtility[1].checked = true;
          newUtility.checked = true;
          setUtilities({ type: "addEntry", id: player.id, value: newUtility });
        } else if (!e.target.checked) {
          newPlayerUtility[1].checked = false;
          newUtility.checked = false;
          setUtilities({
            type: "removeEntry",
            id: player.id,
            value: newUtility,
          });
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
    },
    [raid]
  );

  const handleNote = (playerId, textAreaId) => {
    const textArea = document.querySelector(`#${textAreaId}`);
    const playerArray = JSON.parse(JSON.stringify(raid.players));
    const newGroups = JSON.parse(JSON.stringify(raid.groups));
    const newPlayers = playerArray.map((player) => {
      if (player.id === playerId) {
        player.note = textArea.value;
      }
      return player;
    });

    for (let group in newGroups) {
      for (let ids of newGroups[group].playerIds) {
        if (ids.id === playerId) {
          ids.note = textArea.value;
        }
      }
    }

    setRaid({ ...raid, players: newPlayers, groups: newGroups });
  };

  const focusName =
    ((nameText) => {
      let nameTextObject = document.querySelector(`#${nameText}`);
      nameTextObject.focus();

      if (nameTextObject.type === "text") {
        nameTextObject.value = "";
      }

      nameTextObject.addEventListener("keydown", function confirmEdit(e) {
        if (e.key === "Enter" || e.key === "Escape") {
          nameTextObject.blur();
        }
      });
    },
    []);

  const editName = useCallback(
    (playerId, nameText) => {
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
    },
    [raid]
  );

  const handleDraenei = useCallback(
    (player, e) => {
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
    },
    [raid]
  );

  const playerRoleEdit = useCallback(
    (player, e) => {
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
    },
    [raid, raidCount]
  );

  const playerBuffsEdit = useCallback(
    (player, buff, e) => {
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
    },
    [raid]
  );

  return {
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
    onDragEnd,
    handleUtility,
    playerRoleEdit,
    playerBuffsEdit,
    handleDraenei,
    handleNote,
    focusName,
    editName,
  };
};

export default useRaidHelper;
