import { StyledPlayerCheckboxes } from "../styles/RaidHelper.styled";

const tankIcon = (
  <img src="images/Tank_icon.png" alt="shield" className="role-icon" />
);
const dpsIcon = (
  <img src="images/DPS_icon.png" alt="sword" className="role-icon" />
);

const PlayerCheckboxes = ({ player, editBuffs, playerRoleEdit }) => {
  if (player.text === "Feral Druid" || player.text === "Blood Death Knight") {
    return (
      <StyledPlayerCheckboxes color={player.color}>
        {player.name === "" ? (
          <h2 className="player-checkbox-header">
            Select this{" "}
            <span className="checkbox-header-player-text">{player.text}s</span>{" "}
            role:
          </h2>
        ) : (
          <h2 className="player-checkbox-header">
            Select{" "}
            <span className="checkbox-header-player-text">{player.name}'s</span>{" "}
            role:
          </h2>
        )}
        <div className="role-toggler-container">
          <label className="role-select-label">DPS{dpsIcon}</label>
          <input
            type="checkbox"
            className="toggle-role"
            defaultChecked={player.role === "tank" ? true : false}
            onClick={(e) => playerRoleEdit(player, e)}
          />
          <label className="role-select-label">Tank{tankIcon}</label>
        </div>
      </StyledPlayerCheckboxes>
    );
  } else {
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
  }
};

export default PlayerCheckboxes;
