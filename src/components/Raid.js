import Player from "./Player";
import { Droppable } from "react-beautiful-dnd";
import { RaidGrid } from "./styles/RaidAssembler.styled";

const Raid = ({ raid, onDelete }) => {
  console.log(raid);
  return (
    <Droppable droppableId="raid">
      {(provided) => (
        <RaidGrid ref={provided.innerRef} {...provided.droppableProps}>
          {raid.players.map((player, index) => (
            <Player
              key={player.id}
              onDelete={onDelete}
              player={player}
              index={index}
            />
          ))}
          {provided.placeholder}
        </RaidGrid>
      )}
    </Droppable>
  );
};

export default Raid;
