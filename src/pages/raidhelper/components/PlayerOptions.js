import React from "react";
import { StyledPlayerOptions } from "../styles/RaidHelper.styled";
import PlayerCheckboxes from "./PlayerCheckboxes";

const PlayerOptions = ({
  playerOptionsOpen,
  setPlayerOptionsOpen,
  player,
  editBuffs,
  playerRoleEdit,
  handleDraenei,
}) => {
  return (
    <StyledPlayerOptions
      color={player.color}
      onClick={() => setPlayerOptionsOpen(!playerOptionsOpen)}
    >
      <div className="options-menu" onClick={(e) => e.stopPropagation()}>
        <div className="options-header">
          <div className="options-header-text">Options</div>
          <p className="options-player-info">
            <span className="options-class-color">
              {player.name === "" ? player.text : player.name}
            </span>
            <img
              src={player.icon}
              alt="class icon"
              className="options-class-image"
            />
          </p>
          <div className="options-close-window-btn">
            <div
              className="options-close-window-icn"
              onClick={() => setPlayerOptionsOpen(!playerOptionsOpen)}
            >
              x
            </div>
          </div>
        </div>
        <PlayerCheckboxes
          className="player-checkboxes-menu"
          player={player}
          editBuffs={editBuffs}
          playerRoleEdit={playerRoleEdit}
          handleDraenei={handleDraenei}
        />
      </div>
    </StyledPlayerOptions>
  );
};

export default PlayerOptions;
