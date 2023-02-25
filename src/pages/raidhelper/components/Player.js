import { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import RaidRole from "./RaidRole";
import {
  StyledPlayer,
  DeletePlayerIcon,
  EditIcon,
  TinyContainer,
  PlayerNameContainer,
  SettingsIcon,
} from "../styles/RaidHelper.styled";

const Player = ({
  player,
  onDelete,
  focusName,
  editName,
  index,
  handlePlayerOptions,
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
            <img id="class-img" src={player.icon} alt="player in raid" />
            <RaidRole player={player} />

            <SettingsIcon
              onClick={() => handlePlayerOptions(player)}
              id="player-info-icon"
            />
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
