import React from "react";
import { StyledPlayerOptions } from "../styles/RaidHelper.styled";
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
          Options for{" "}
          <span className="options-class-color">
            {player.name === "" ? player.text : player.name}
          </span>
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
