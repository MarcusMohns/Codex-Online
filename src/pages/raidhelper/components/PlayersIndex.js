import React from "react";
import {
  StyledPlayerIndex,
  StyledIndexPlayerName,
  DpsIcon,
  HealerIcon,
  TankIcon,
  CopyIcon,
} from "../styles/RaidHelper.styled";

const CopyToClipBoard = (textToCopy) => {
  navigator.clipboard.writeText(textToCopy);

  document.querySelector(".tooltiptext").style.opacity = "100%";
  setTimeout(function () {
    document.querySelector(".tooltiptext").style.opacity = "0%";
  }, 1000);
};

const PlayersIndex = ({ playersIndexOpen, setPlayersIndexOpen, players }) => {
  let tanks = [];
  let healers = [];
  let dps = [];

  let tanksText = [];
  let healersText = [];
  let dpsText = [];

  //  tanksText,healersText,dpsText is for formatting to clipboard

  for (let player of players) {
    // sort players into their different roles
    if (player.role === "dps") {
      dps = [
        ...dps,
        <StyledIndexPlayerName
          key={player.id}
          className="index-player-name"
          color={player.color}
        >
          {player.name === "" ? player.text : player.name}
        </StyledIndexPlayerName>,
      ];
      player.name === ""
        ? (dpsText = [...dpsText, `${player.text}`])
        : (dpsText = [...dpsText, `@${player.name}`]);
    } else if (player.role === "healer") {
      healers = [
        ...healers,
        <StyledIndexPlayerName
          key={player.id}
          className="index-player-name"
          color={player.color}
        >
          {player.name === "" ? player.text : player.name}
        </StyledIndexPlayerName>,
      ];
      player.name === ""
        ? (healersText = [...healersText, `${player.text}`])
        : (healersText = [...healersText, `@${player.name}`]);
    } else if (player.role === "tank") {
      tanks = [
        ...tanks,
        <StyledIndexPlayerName
          key={player.id}
          className="index-player-name"
          color={player.color}
        >
          {player.name === "" ? player.text : player.name}
        </StyledIndexPlayerName>,
      ];
      player.name === ""
        ? (tanksText = [...tanksText, `${player.text}`])
        : (tanksText = [...tanksText, `@${player.name}`]);
    }
  }
  const clipBoardText = `Tanks: ${tanksText}\nHealers: ${healersText}\nDPS: ${dpsText}`;

  return (
    <StyledPlayerIndex onClick={() => setPlayersIndexOpen(!playersIndexOpen)}>
      <div className="player-index-panel" onClick={(e) => e.stopPropagation()}>
        <div className="player-index-main-container">
          <h2 className="player-index-header">
            Player Index
            <div
              className="player-index-close-window-icn"
              onClick={() => setPlayersIndexOpen(!playersIndexOpen)}
            >
              x
            </div>
          </h2>
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
      </div>
    </StyledPlayerIndex>
  );
};

export default PlayersIndex;
