export const groupSort = (groups, player) => {
  for (const [groupId, group] of Object.entries(groups)) {
    if (group.playerIds.length < 5) {
      return {
        ...groups,
        [groupId]: {
          ...group,
          playerIds: [...group.playerIds, player],
        },
      };
    }
  }
  return groups;
};
