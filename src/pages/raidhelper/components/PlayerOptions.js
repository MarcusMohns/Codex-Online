import React from "react";
import {
  StyledPlayerOptions,
  WhiteSettingsIcon,
} from "../styles/RaidHelper.styled";
import PlayerCheckboxes from "./PlayerCheckboxes";

const PlayerOptions = ({
  playerOptionsOpen,
  setPlayerOptionsOpen,
  player,
  editName,
  editBuffs,
  playerRoleEdit,
}) => {
  return (
    <StyledPlayerOptions
      color={player.color}
      onClick={() => setPlayerOptionsOpen(!playerOptionsOpen)}
    >
      <div className="options-menu" onClick={(e) => e.stopPropagation()}>
        <div className="options-header">
          <WhiteSettingsIcon />
          Options for
          <span className="options-class-color">
            {player.name === "" ? player.text : player.name}
          </span>
          <img
            src={player.icon}
            alt="class icon"
            className="options-class-image"
          />
        </div>

        <PlayerCheckboxes
          className="options-menu"
          onClick={(e) => e.stopPropagation()}
          player={player}
          editBuffs={editBuffs}
          playerRoleEdit={playerRoleEdit}
        />
      </div>
    </StyledPlayerOptions>
  );
};

export default PlayerOptions;
