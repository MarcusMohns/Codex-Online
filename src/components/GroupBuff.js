import styled from "styled-components";

const StyledGroupBuff = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  img {
    width: 16px;
    height: 16px;
  }

  @media (min-width: 1200px) {
    img {
      width: 28px;
      height: 28px;
    }
  }
`;

const GroupBuff = ({ group }) => {
  let currentBuffs = [];
  let groupBuffs = [];

  for (let playerInGroup of group.playerIds) {
    if (playerInGroup.groupBuffs !== undefined) {
      for (let groupBuff of playerInGroup.groupBuffs) {
        if (
          !currentBuffs.includes(groupBuff.name) ||
          ["Mana Tide Totem", "Tranquility"].includes(groupBuff.name)
        ) {
          currentBuffs.push(groupBuff.name);
          groupBuffs.push(
            <a
              href={groupBuff.link}
              key={`group-buff-${playerInGroup.id}-${groupBuff.name}`}
              data-wowhead={`item=${groupBuff.spellId}`}
            >
              <img src={groupBuff.image} alt="group buff" />
            </a>
          );
        }
      }
    }
  }

  return <StyledGroupBuff>{groupBuffs}</StyledGroupBuff>;
};

export default GroupBuff;
