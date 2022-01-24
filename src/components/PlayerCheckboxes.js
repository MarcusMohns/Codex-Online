import { StyledPlayerCheckboxes } from "./styles/RaidAssembler.styled";

const PlayerCheckboxes = ({ player, editBuffs }) => {
  return (
    <StyledPlayerCheckboxes>
      {player.buffs.map(
        (buff) =>
          (buff.name === "Blessing of Kings" ||
            buff.name === "Blessing of Might" ||
            buff.name === "Blessing of Wisdom" ||
            buff.name === "Blessing of Sanctuary" ||
            buff.name === "Commanding Shout" ||
            buff.name === "Battle Shout") && (
            <div
              key={`${buff.name}-${player.id}-checkbox`}
              className="player-checkbox-container"
            >
              <label htmlFor={`${buff.name}-${player.id}`}>
                <img
                  src={buff.image}
                  alt="buff"
                  className="player-checkbox-image"
                />
                {buff.name}
              </label>
              <input
                type="checkbox"
                id={`${buff.name}-${player.id}`}
                className="player-checkbox"
                defaultChecked={buff.checked}
                onClick={(e) => editBuffs(player, buff, e)}
              />
            </div>
          )
      )}
    </StyledPlayerCheckboxes>
  );
};

export default PlayerCheckboxes;
