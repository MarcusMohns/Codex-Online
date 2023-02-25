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
      onClick={() => setPlayerOptionsOpen(!playerOptionsOpen)}
    >
      <div className="options-menu" onClick={(e) => e.stopPropagation()}>
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
