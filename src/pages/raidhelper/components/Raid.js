import { DragDropContext } from "react-beautiful-dnd";
import Group from "./Group";
import { RaidGroupContainer } from "../styles/RaidHelper.styled";
import { memo } from "react";

const Raid = ({
  raid,
  onDelete,
  onDragEnd,
  focusName,
  editName,
  handlePlayerOptions,
}) => {
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
              focusName={focusName}
              editName={editName}
              handlePlayerOptions={handlePlayerOptions}
            />
          );
        })}
      </DragDropContext>
    </RaidGroupContainer>
  );
};

export default memo(Raid);
