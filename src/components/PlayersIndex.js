import React from "react";
import {
  StyledPlayerIndex,
  StyledIndexPlayerName,
  DpsIcon,
  HealerIcon,
  TankIcon,
  CopyIcon,
} from "./styles/RaidAssembler.styled";

const CopyToClipBoard = (textToCopy) => {
  navigator.clipboard.writeText(textToCopy);

  document.querySelector(".tooltiptext").style.opacity = "100%";
  setTimeout(function () {
    document.querySelector(".tooltiptext").style.opacity = "0%";
  }, 1000);
};

const PlayersIndex = ({ playersIndexOpen, setPlayersIndexOpen, players }) => {
  const tanks = [];
  const healers = [];
  const dps = [];

  const tanksText = [];
  const healersText = [];
  const dpsText = [];

  //  tanksText,healersText,dpsText is for formatting to clipboard

  for (let player of players) {
    // sort players into their different roles
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
      player.name === ""
        ? dpsText.push(` ${player.text}`)
        : dpsText.push(` ${player.name}`);
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
      player.name === ""
        ? healersText.push(` ${player.text}`)
        : healersText.push(` ${player.name}`);
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
      player.name === ""
        ? tanksText.push(` ${player.text}`)
        : tanksText.push(` ${player.name}`);
    }
  }
  const clipBoardText = `Tanks: ${tanksText} \n Healers: ${healersText} \n DPS:${dpsText}`;

  return (
    <StyledPlayerIndex onClick={() => setPlayersIndexOpen(!playersIndexOpen)}>
      <div className="player-index-panel" onClick={(e) => e.stopPropagation()}>
        <h2 className="player-index-header">Player Index</h2>
        <div className="player-index-role-container">
          <h2 className="player-index-subheader">
            <TankIcon /> Tanks
          </h2>
          <div className="player-index-players">{tanks}</div>
        </div>
        <div className="player-index-role-container">
          <h2 className="player-index-subheader">
            <HealerIcon /> Healers
          </h2>
          <div className="player-index-players">{healers}</div>
        </div>
        <div className="player-index-role-container">
          <h2 className="player-index-subheader">
            <DpsIcon /> DPS
          </h2>
          <div className="player-index-players">{dps}</div>
        </div>

        <div className="tooltip">
          <div
            className="copy-to-clipboard"
            onClick={() => CopyToClipBoard(clipBoardText)}
          >
            <CopyIcon id="index-player-copy-icon" />
            <span className="tooltiptext">Copied!</span>
            Copy
          </div>
        </div>
      </div>
    </StyledPlayerIndex>
  );
};

export default PlayersIndex;
