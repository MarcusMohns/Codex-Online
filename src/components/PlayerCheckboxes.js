const PlayerCheckboxes = ({ player, editBuffs }) => {
  return (
    <div>
      {player.buffs.map(
        (buff) =>
          (buff.name === "Blessing of Kings" && (
            <input
              type="checkbox"
              defaultChecked={buff.checked}
              onClick={(e) => editBuffs(player, buff, e)}
              key={`${buff.name}-${player.id}-checkbox`}
            />
          )) ||
          (buff.name === "Battle Shout" && (
            <input
              type="checkbox"
              defaultChecked={buff.checked}
              onClick={(e) => editBuffs(player, buff, e)}
              key={`${buff.name}-${player.id}-checkbox`}
            />
          )) ||
          (buff.name === "Commanding Shout" && (
            <input
              type="checkbox"
              defaultChecked={buff.checked}
              onClick={(e) => editBuffs(player, buff, e)}
              key={`${buff.name}-${player.id}-checkbox`}
            />
          )) ||
          (buff.name === "Blessing of Might" && (
            <input
              type="checkbox"
              defaultChecked={buff.checked}
              onClick={(e) => editBuffs(player, buff, e)}
              key={`${buff.name}-${player.id}-checkbox`}
            />
          )) ||
          (buff.name === "Blessing of Wisdom" && (
            <input
              type="checkbox"
              defaultChecked={buff.checked}
              onClick={(e) => editBuffs(player, buff, e)}
              key={`${buff.name}-${player.id}-checkbox`}
            />
          )) ||
          (player.text === "Protection Paladin" &&
            buff.name === "Blessing of Sanctuary" && (
              <input
                type="checkbox"
                defaultChecked={buff.checked}
                onClick={(e) => editBuffs(player, buff, e)}
                key={`${buff.name}-${player.id}-checkbox`}
              />
            ))
      )}
    </div>
  );
};

export default PlayerCheckboxes;
