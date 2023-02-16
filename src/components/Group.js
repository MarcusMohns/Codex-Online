import Player from "./Player";
import { Droppable } from "react-beautiful-dnd";
import {
  PlayersContainer,
  GroupContainer,
  GroupTitle,
} from "./styles/RaidAssembler.styled";
import GroupBuff from "./GroupBuff";

const Group = ({
  dropId,
  group,
  players,
  onDelete,
  focusName,
  editName,
  editBuffs,
  playerRoleEdit,
}) => {
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
                focusName={focusName}
                editName={editName}
                player={player}
                index={index}
                editBuffs={editBuffs}
                playerRoleEdit={playerRoleEdit}
              />
            ))}
            {provided.placeholder}
          </PlayersContainer>
        )}
      </Droppable>
      <GroupBuff group={group} />
    </GroupContainer>
  );
};

export default Group;
