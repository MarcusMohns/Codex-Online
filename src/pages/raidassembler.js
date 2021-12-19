import { useReducer, useState } from "react";

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
  DoubleArrowLeft,
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
      console.log(action.id);
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
  const [raidCount, setCount] = useState([0, 0, 0, 0]);
  const [rightMenuOpen, setRightMenuOpen] = useState(false);

  const resetRaid = () => {
    setRaid([]);
    setCount([0, 0, 0, 0]);
    setRightMenuOpen(false);
    setBuffs({ type: "reset" });
    setUtilities({ type: "reset" });
  };

  const handleRightMenuToggle = () => {
    setRightMenuOpen(!rightMenuOpen);
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
      alert("Raid is full");
    }
  };

  const deletePlayer = (player) => {
    setRaid(raid.filter((gamer) => gamer.id !== player.id));
    setBuffs({ type: "delete", id: player.id });
    setUtilities({ type: "delete", id: player.id });
    handleCount(player, "delete");
  };

  const addBuff = (id, player) => {
    for (let buff of player.buffs) {
      let newBuff = {
        buffCategory: buff.category,
        buffName: buff.name,
        buffImg: buff.image,
      };
      setBuffs({ type: "add", name: id, value: newBuff });
    }
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
    // raidCount is an arrray [0,0,0,0]
    // first value 0/25, 2nd value Tanks, 3rd value healers, 4th value DPS.

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

  return (
    <Main>
      <div className={`${rightMenuOpen ? "right-menu" : "hide-right-menu"}`}>
        <DoubleArrowLeft
          className="double-arrow-right"
          onClick={handleRightMenuToggle}
        />
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
            {raidCount[1]} Tanks | {raidCount[2]} Healers | {raidCount[3]} DPS
          </div>
          <div className="raid-text">Raid</div>
          <div className="btn-container">
            <AddPlayerButton onClick={handleRightMenuToggle}>
              Add a player <AddPlayerIcon />
            </AddPlayerButton>
            <ResetIcon onClick={resetRaid} />
          </div>
        </RaidContentHeader>
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
