import Player from "./Player";
import { Droppable } from "react-beautiful-dnd";
import {
  PlayersContainer,
  GroupContainer,
  GroupTitle,
} from "./styles/RaidAssembler.styled";

const Group = ({ dropId, group, players, onDelete, onEdit }) => {
  return (
    <GroupContainer>
      <GroupTitle>{group.title}</GroupTitle>
      <Droppable droppableId={dropId}>
        {(provided, snapshot) => (
          <PlayersContainer
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {players.map((player, index) => (
              <Player
                key={player.id}
                onDelete={onDelete}
                onEdit={onEdit}
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
