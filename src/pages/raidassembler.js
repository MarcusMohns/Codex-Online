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
  UtilityContainer,
  StyledContentHeader,
} from "../components/styles/RaidAssembler.styled";

const { v4: uuidv4 } = require("uuid");

const formReducer = (state, action) => {
  // run for every buff the new player posseses
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
};

const RaidAssembler = () => {
  const [raid, setRaid] = useState([]);
  const [buffs, setBuffs] = useReducer(formReducer, {});
  const [utilities, setUtilities] = useReducer(formReducer, {});
  const [raidCount, setCount] = useState([0, 0, 0, 0]);
  const [rightMenuOpen, setRightMenuOpen] = useState(false);

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
    handleCount(player, "delete");
    deleteBuff(player.id);
    deleteUtlity(player.id);
  };

  const addBuff = (id, player) => {
    for (let buff of player.buffs) {
      let newBuff = {
        buffCategory: buff.category,
        buffName: buff.name,
        buffImg: buff.image,
      };
      setBuffs({
        name: id,
        value: newBuff,
      });
    }
  };

  const deleteBuff = (id) => {
    delete buffs[id];
  };

  const addUtility = (id, player) => {
    for (let utility of player.utility) {
      let newUtility = {
        name: utility.name,
        image: utility.image,
      };
      setUtilities({
        name: id,
        value: newUtility,
      });
    }
  };
  const deleteUtlity = (id) => {
    delete utilities[id];
  };

  const handleCount = (player, status) => {
    // first value 0/25, 2nd value Tanks, 3rd value healers, 4th value DPS.
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

  return (
    <Main>
      <div className={`${rightMenuOpen ? "right-menu" : "hide-right-menu"}`}>
        <DoubleArrowLeft
          className="double-arrow-right"
          onClick={handleRightMenuToggle}
        />
        <SpecContainer className="spec-container">
          <h1 id="spec-container-text">Spec Button container</h1>
          <SpecButtons
            className="spec-buttons"
            specs={SpecArray}
            onClick={addPlayer}
          />
        </SpecContainer>
      </div>

      <RaidContainer className="raid-container">
        <StyledContentHeader>
          {/* make this pretty */}
          <div>Raid</div>
          <div>{raidCount[0]} / 25 ---</div>
          <div>{raidCount[1]} Tanks ---</div>
          <div>{raidCount[2]} Healers ---</div>
          <div>{raidCount[3]} DPS ---</div>
        </StyledContentHeader>
        {raid.length > 0 ? (
          <PlayersInRaid raid={raid} onDelete={deletePlayer} />
        ) : (
          <p className="no-players-text">No players in raid</p>
        )}
      </RaidContainer>
      <UtilityContainer>
        <StyledContentHeader>Utilities</StyledContentHeader>
        <Utilities utilities={utilities}></Utilities>
      </UtilityContainer>
      <BuffContainer className="buff-container">
        <StyledContentHeader>Buffs & Debuffs</StyledContentHeader>
        <BuffCategories currentBuffs={buffs}></BuffCategories>
      </BuffContainer>
    </Main>
  );
};

export default RaidAssembler;
