import React from "react";
import { StyledPlayerIndex } from "./styles/RaidAssembler.styled";

const PlayersIndex = ({ playersIndexOpen, setPlayersIndexOpen, players }) => {
  const tanks = [];
  const healers = [];
  const dps = [];

  for (let player of players) {
    if (player.role === "dps") {
      dps.push(
        <div key={player.id} className="index-player-name">
          {player.name === "" ? player.text : player.name}{" "}
        </div>
      );
    } else if (player.role === "healer") {
      healers.push(
        <div key={player.id} className="index-player-name">
          {player.name === "" ? player.text : player.name}{" "}
        </div>
      );
    } else if (player.role === "tank") {
      tanks.push(
        <div key={player.id} className="index-player-name">
          {player.name === "" ? player.text : player.name}{" "}
        </div>
      );
    }
  }

  return (
    <StyledPlayerIndex onClick={() => setPlayersIndexOpen(!playersIndexOpen)}>
      <div className="player-index-panel" onClick={(e) => e.stopPropagation()}>
        <div className="player-index-role-container">
          <h2> Tanks </h2>
          {tanks}
        </div>
        <div className="player-index-role-container">
          <h2> Healers </h2>
          {healers}
        </div>
        <div className="player-index-role-container">
          <h2> DPS </h2>
          {dps}
        </div>
      </div>
    </StyledPlayerIndex>
  );
};

export default PlayersIndex;
