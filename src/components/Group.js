import Player from "./Player";
import { Droppable } from "react-beautiful-dnd";
import {
  PlayersContainer,
  GroupContainer,
} from "./styles/RaidAssembler.styled";

const Group = ({ dropId, group, players, onDelete }) => {
  return (
    <GroupContainer>
      <div>{group.title}</div>
      <Droppable droppableId={dropId}>
        {(provided) => (
          <PlayersContainer
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {players.map((player, index) => (
              <Player
                key={player.id}
                onDelete={onDelete}
                player={player}
                index={index}
              />
            ))}
            {provided.placeholder}
          </PlayersContainer>
        )}
      </Droppable>
    </GroupContainer>
  );
};

export default Group;
