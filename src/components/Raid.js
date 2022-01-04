import { DragDropContext } from "react-beautiful-dnd";
import Group from "./Group";
import { RaidGroupContainer } from "./styles/RaidAssembler.styled";

const Raid = ({ raid, onDelete, onDragEnd }) => {
  return (
    <RaidGroupContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        {raid.groupOrder.map((groupId) => {
          const group = raid.groups[groupId];
          const players = group.playerIds.filter(
            (playerId, index) => raid.players[index].id !== playerId
          );

          return (
            <Group
              dropId={group.id}
              key={group.id}
              group={group}
              players={players}
              onDelete={onDelete}
            />
          );
        })}
      </DragDropContext>
    </RaidGroupContainer>
  );
};

export default Raid;
