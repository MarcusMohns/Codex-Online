import React from "react";
import {
  StyledPlayerIndex,
  StyledIndexPlayerName,
} from "./styles/RaidAssembler.styled";

const PlayersIndex = ({ playersIndexOpen, setPlayersIndexOpen, players }) => {
  const tanks = [];
  const healers = [];
  const dps = [];

  for (let player of players) {
    if (player.role === "dps") {
      dps.push(
        <StyledIndexPlayerName
          key={player.id}
          className="index-player-name"
          color={player.color}
        >
          {player.name === "" ? player.text : player.name}
        </StyledIndexPlayerName>
      );
    } else if (player.role === "healer") {
      healers.push(
        <StyledIndexPlayerName
          key={player.id}
          className="index-player-name"
          color={player.color}
        >
          {player.name === "" ? player.text : player.name}{" "}
        </StyledIndexPlayerName>
      );
    } else if (player.role === "tank") {
      tanks.push(
        <StyledIndexPlayerName
          key={player.id}
          className="index-player-name"
          color={player.color}
        >
          {player.name === "" ? player.text : player.name}{" "}
        </StyledIndexPlayerName>
      );
    }
  }
  console.log(players);
  return (
    <StyledPlayerIndex onClick={() => setPlayersIndexOpen(!playersIndexOpen)}>
      <div className="player-index-panel" onClick={(e) => e.stopPropagation()}>
        <div className="player-index-role-container">
          <h2 className="player-index-subheader"> Tanks </h2>
          <div className="player-index-players">{tanks}</div>
        </div>
        <div className="player-index-role-container">
          <h2 className="player-index-subheader"> Healers </h2>
          <div className="player-index-players">{healers}</div>
        </div>
        <div className="player-index-role-container">
          <h2 className="player-index-subheader"> DPS </h2>
          <div className="player-index-players">{dps}</div>
        </div>
      </div>
    </StyledPlayerIndex>
  );
};

export default PlayersIndex;
