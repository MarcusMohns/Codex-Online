const PlayerCheckboxes = ({ player, editBuffs }) => {
  return (
    <div>
      {player.buffs.map(
        (buff) =>
          (buff.name === "Blessing of Kings" ||
            buff.name === "Blessing of Might" ||
            buff.name === "Blessing of Wisdom" ||
            buff.name === "Blessing of Sanctuary" ||
            buff.name === "Commanding Shout" ||
            buff.name === "Battle Shout") && (
            <input
              type="checkbox"
              defaultChecked={buff.checked}
              checked={buff.checked}
              onClick={(e) => editBuffs(player, buff, e)}
              key={`${buff.name}-${player.id}-checkbox`}
            />
          )
      )}
    </div>
  );
};

export default PlayerCheckboxes;
