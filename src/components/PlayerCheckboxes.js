import { StyledPlayerCheckboxes } from "./styles/RaidAssembler.styled";

const PlayerCheckboxes = ({ player, editBuffs }) => {
  return (
    <StyledPlayerCheckboxes color={player.color}>
      {player.name === "" ? (
        <h2 className="player-checkbox-header">
          Select what buffs this{" "}
          <span className="checkbox-header-player-text">{player.text}</span>{" "}
          will bring
        </h2>
      ) : (
        <h2 className="player-checkbox-header">
          Select what buffs{" "}
          <span className="checkbox-header-player-text">{player.name}</span>{" "}
          will bring
        </h2>
      )}
      {player.buffs.map(
        (buff) =>
          (buff.name === "Blessing of Kings" ||
            buff.name === "Blessing of Might" ||
            buff.name === "Blessing of Wisdom" ||
            buff.name === "Blessing of Sanctuary" ||
            buff.name === "Commanding Shout" ||
            buff.name === "Battle Shout") && (
            <label
              htmlFor={`${buff.name}-${player.id}`}
              key={`${buff.name}-${player.id}-checkbox`}
              className="player-checkbox-container"
            >
              <div className="image-and-name-label">{buff.name}</div>
              <label className="image-and-name-label">
                <input
                  type="checkbox"
                  id={`${buff.name}-${player.id}`}
                  className="player-checkbox"
                  defaultChecked={buff.checked}
                  onClick={(e) => editBuffs(player, buff, e)}
                />
                <img
                  src={buff.image}
                  alt="buff"
                  className="player-checkbox-image"
                />
              </label>
            </label>
          )
      )}
    </StyledPlayerCheckboxes>
  );
};

export default PlayerCheckboxes;
