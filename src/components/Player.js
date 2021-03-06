import { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import PlayerCheckboxes from "./PlayerCheckboxes";
import RaidRole from "./RaidRole";
import {
  StyledPlayer,
  DeletePlayerIcon,
  EditIcon,
  TinyContainer,
  PlayerNameContainer,
  SettingsIcon,
} from "./styles/RaidAssembler.styled";
import COLORS from "../components";

const Player = ({
  player,
  onDelete,
  focusName,
  editName,
  index,
  editBuffs,
  playerRoleEdit,
}) => {
  return (
    <Draggable draggableId={player.id} index={index}>
      {(provided, snapshot) => (
        <StyledPlayer
          background={player.color}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          hasText={player.name === "" ? false : true}
        >
          <TinyContainer>
            <EditIcon
              id="edit-player-icon"
              onClick={() => focusName(`player-input-${player.id}`)}
            />
            <DeletePlayerIcon
              id="delete-player-icon"
              onClick={() => onDelete(player)}
            />
          </TinyContainer>
          <PlayerNameContainer>
            <label className="player-name">
              <input
                type="text"
                id={`player-input-${player.id}`}
                onBlur={() => editName(player.id, `player-input-${player.id}`)}
                autoComplete="off"
                spellCheck="false"
                defaultValue={player.name}
              />
              <span className="placeholder">{player.text}</span>
            </label>
            <img id="class-img" src={player.image} alt="player in raid" />
            <RaidRole player={player} />
            {/* If warrior or paladin add the checkboxes to check what buffs they provide */}
            {(player.color === COLORS.paladin ||
              player.color === COLORS.warrior ||
              player.text === "Feral Druid" ||
              player.text === "Blood Death Knight") && (
              <div className="player-tooltip-container">
                <SettingsIcon id="player-info-icon" />
                <PlayerCheckboxes
                  player={player}
                  editBuffs={editBuffs}
                  playerRoleEdit={playerRoleEdit}
                />
              </div>
            )}
          </PlayerNameContainer>
        </StyledPlayer>
      )}
    </Draggable>
  );
};

Player.defaultProps = {
  player: {
    color: "red",
    text: "missing player",
    image: "images/Beast_Mastery_Hunter.webp",
    name: "",
  },
};

export default memo(Player);
