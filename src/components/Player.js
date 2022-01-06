import { StyledPlayer, DeletePlayerIcon } from "./styles/RaidAssembler.styled";
import { Draggable } from "react-beautiful-dnd";
import { memo } from "react";
const Player = ({ player, onDelete, index }) => {
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
          <DeletePlayerIcon
            id="delete-player-img"
            onClick={() => onDelete(player)}
          />
          <p>{player.text}</p>
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
