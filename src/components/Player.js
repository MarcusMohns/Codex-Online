import {
  StyledPlayer,
  DeletePlayerIcon,
  EditIcon,
  TinyContainer,
} from "./styles/RaidAssembler.styled";
import { Draggable } from "react-beautiful-dnd";
import { memo } from "react";
const Player = ({ player, onDelete, onEdit, index }) => {
  return (
    <Draggable draggableId={player.id} index={index}>
      {(provided, snapshot) => (
        <StyledPlayer
          background={player.color}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <TinyContainer>
            <EditIcon id="edit-player-icon" onClick={() => onEdit(player)} />
            <DeletePlayerIcon
              id="delete-player-img"
              onClick={() => onDelete(player)}
            />
          </TinyContainer>
          <input
            type="text"
            id="player-name"
            className="player-name"
            name="player-name"
            value={player.text}
          />
          <img id="class-img" src={player.image} alt="player in raid" />
        </StyledPlayer>
      )}
    </Draggable>
  );
};

Player.defaultProps = {
  player: {
    color: "red",
    text: "missing player",
    image: "images/hunter_beastmastery.png",
  },
};

export default memo(Player);
