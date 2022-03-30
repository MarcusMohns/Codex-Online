import React from "react";
import { StyledPlayerIndex } from "./styles/RaidAssembler.styled";

const PlayersIndex = ({ playersIndexOpen, setPlayersIndexOpen }) => {
  return (
    <StyledPlayerIndex onClick={() => setPlayersIndexOpen(!playersIndexOpen)}>
      <div className="player-index-panel" onClick={(e) => e.stopPropagation()}>
        hey
      </div>
    </StyledPlayerIndex>
  );
};

export default PlayersIndex;
