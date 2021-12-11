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
  RaidCount,
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
  const [raidCount, setCount] = useState(0);
  const [rightMenuOpen, setRightMenuOpen] = useState(false);

  const handleRightMenuToggle = () => {
    setRightMenuOpen(!rightMenuOpen);
  };

  const addPlayer = (player) => {
    if (raidCount < 25) {
      const id = uuidv4();
      const newPlayer = { id, ...player };
      setRaid([...raid, newPlayer]);
      addBuff(id, player);
      addUtility(id, player);
      setCount(raidCount + 1);
    } else {
      alert("Raid is full");
    }
  };

  const deletePlayer = (id) => {
    setRaid(raid.filter((player) => player.id !== id));
    setCount(raidCount - 1);
    deleteBuff(id);
    deleteUtlity(id);
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
        <RaidCount> {raidCount} / 25 </RaidCount>
        {raid.length > 0 ? (
          <PlayersInRaid raid={raid} onDelete={deletePlayer} />
        ) : (
          "No players in raid!"
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
