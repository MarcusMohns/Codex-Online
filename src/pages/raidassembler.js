import { useReducer, useState, useEffect } from "react";

import SpecArray from "../SpecArray";
import PlayersInRaid from "../components/PlayersInRaid";
import SpecButtons from "../components/SpecButtons";
import BuffCategories from "../components/BuffCategories";
import Utilities from "../components/Utilities";
import {
  Main,
  SpecContainer,
  RaidContainer,
  BuffContainer,
  ArrowLeft,
  ResetIcon,
  AddPlayerIcon,
  AddPlayerButton,
  UtilityContainer,
  ContentHeader,
  RaidContentHeader,
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

    case "reset":
      return {};
    default:
      return state;
  }

  // run for every buff the new player posseses
};

const RaidAssembler = () => {
  const [raid, setRaid] = useState([]);
  const [buffs, setBuffs] = useReducer(formReducer, {});
  const [utilities, setUtilities] = useReducer(formReducer, {});
  const [raidCount, setCount] = useState([0, 0, 0, 0]); // first value full raid count, 2nd value Tanks, 3rd value Healers, 4th value DPS.
  const [rightMenuOpen, setRightMenuOpen] = useState(false);
  const [raidIsFull, setRaidIsFull] = useState(false);

  const handleRightMenuToggle = () => {
    setRightMenuOpen(!rightMenuOpen);
  };

  const resetRaid = () => {
    setRaid([]);
    setCount([0, 0, 0, 0]);
    setRightMenuOpen(false);
    setBuffs({ type: "reset" });
    setUtilities({ type: "reset" });
  };

  const addPlayer = (player) => {
    if (raidCount[0] < 25) {
      const id = uuidv4();
      const newPlayer = { id, ...player };
      setRaid([...raid, newPlayer]);
      addBuff(id, player);
      addUtility(id, player);
      handleCount(player, "add");
    } else {
      setRaidIsFull(true);
    }
  };

  const deletePlayer = (player) => {
    setRaid(raid.filter((gamer) => gamer.id !== player.id));
    setBuffs({ type: "delete", id: player.id });
    setUtilities({ type: "delete", id: player.id });
    handleCount(player, "delete");

    if (raidIsFull) {
      setRaidIsFull(false);
    }
  };

  const addBuff = (id, player) => {
    let playerBuffs = [...player.buffs];

    if (
      // Paladins can only have 1 blessing on the raid at one time
      player.text === "Holy Paladin" ||
      "Protection Paladin" ||
      "Retribution Paladin"
    ) {
      playerBuffs = [...paladinBlessings(player)]; // Their playerBuffs needs to be edited
    }

    for (let buff of playerBuffs) {
      let newBuff = {
        buffCategory: buff.category,
        buffName: buff.name,
        buffImg: buff.image,
      };
      setBuffs({ type: "add", name: id, value: newBuff });
    }
  };

  const paladinBlessings = (player) => {
    // Return edited array of buffs depending on user choice (Kings,Might or Wisdom)
    let playerBuffs = [...player.buffs];

    for (let buff of player.buffs) {
      if (
        buff.name === "Blessing of Wisdom" &&
        !document.querySelector(
          `#${player.text.replace(/ /g, "")}-bow-checkbox`
        ).checked
      ) {
        playerBuffs.splice(playerBuffs.indexOf(buff), 1);
      }
      if (
        buff.name === "Blessing of Might" &&
        !document.querySelector(
          `#${player.text.replace(/ /g, "")}-bom-checkbox`
        ).checked
      ) {
        playerBuffs.splice(playerBuffs.indexOf(buff), 1);
      }
      if (
        buff.name === "Blessing of Kings" &&
        !document.querySelector(
          `#${player.text.replace(/ /g, "")}-bok-checkbox`
        ).checked
      ) {
        playerBuffs.splice(playerBuffs.indexOf(buff), 1);
      }
      if (
        buff.name === "Blessing of Sanctuary" &&
        !document.querySelector(
          `#${player.text.replace(/ /g, "")}-bos-checkbox`
        ).checked
      ) {
        playerBuffs.splice(playerBuffs.indexOf(buff), 1);
      }
    }

    return playerBuffs;
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
              Add a player <AddPlayerIcon />
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
        {raid.length > 0 ? (
          <PlayersInRaid raid={raid} onDelete={deletePlayer} />
        ) : (
          <p className="no-players-text">No players in raid</p>
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
