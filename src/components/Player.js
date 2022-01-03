import { StyledPlayer2, DeletePlayerIcon } from "./styles/RaidAssembler.styled";
import { Draggable } from "react-beautiful-dnd";

const Player = ({ player, onDelete, index }) => {
  return (
    <Draggable draggableId={player.id} index={index}>
      {(provided) => (
        <StyledPlayer2
          background={player.color}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <DeletePlayerIcon
            id="delete-player-img"
            onClick={() => onDelete(player)}
          />
          <p>{player.text}</p>
          <img id="class-img" src={player.image} alt="player in raid" />
        </StyledPlayer2>
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

export default Player;