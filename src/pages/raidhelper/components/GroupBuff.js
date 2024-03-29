import styled from "styled-components";

const StyledGroupBuff = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  img {
    width: 22px;
    height: 22px;
  }

  @media (min-width: 820px) {
    padding: 0px;
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
          groupBuff.name === "Heroic Presence" &&
          !currentBuffs.includes(groupBuff.name)
        ) {
          if (groupBuff.draenei) {
            currentBuffs.push(groupBuff.name);
            groupBuffs.push(
              <a
                href={groupBuff.link}
                key={`group-buff-${playerInGroup.id}-${groupBuff.name}`}
                data-wowhead={`item=${groupBuff.spellId}`}
              >
                <img
                  srcSet={groupBuff.srcSet}
                  sizes="(max-width:820px) 22px, 28px"
                  src={groupBuff.image}
                  alt="group buff"
                />
              </a>
            );
          }
        } else if (groupBuff.name === "Divine Sacrifice") {
          if (groupBuff.checked) {
            currentBuffs.push(groupBuff.name);
            groupBuffs.push(
              <a
                href={groupBuff.link}
                key={`group-buff-${playerInGroup.id}-${groupBuff.name}`}
                data-wowhead={`item=${groupBuff.spellId}`}
              >
                <img
                  srcSet={groupBuff.srcSet}
                  sizes="(max-width:820px)  22px, 28px"
                  src={groupBuff.image}
                  alt="group buff"
                />
              </a>
            );
          }
        } else if (
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
              <img
                srcSet={groupBuff.srcSet}
                sizes="(max-width:820px)  22px, 28px"
                src={groupBuff.image}
                alt="group buff"
              />
            </a>
          );
        }
      }
    }
  }
  return <StyledGroupBuff>{groupBuffs}</StyledGroupBuff>;
};

export default GroupBuff;
