import {
  StyledPlayerCheckboxes,
  BuffUpIcon,
} from "../styles/RaidHelper.styled";

const tankIcon = (
  <img src="images/Tank_icon.png" alt="shield" className="role-icon" />
);
const dpsIcon = (
  <img src="images/DPS_icon.png" alt="sword" className="role-icon" />
);

const PlayerCheckboxes = ({ player, editBuffs, playerRoleEdit }) => {
  return (
    <>
      {(player.text === "Feral Druid" ||
        player.text === "Blood Death Knight") && (
        <StyledPlayerCheckboxes>
          <h2 className="player-options-subheader">Role Select</h2>
          <div className="option-container">
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
          </div>
        </StyledPlayerCheckboxes>
      )}
      {(player.text === "Arms Warrior" ||
        player.text === "Protection Warrior" ||
        player.text === "Fury Warrior" ||
        player.text === "Protection Paladin" ||
        player.text === "Retribution Paladin" ||
        player.text === "Holy Paladin" ||
        player.text === "Elemental Shaman" ||
        player.text === "Enhancement Shaman" ||
        player.text === "Restoration Shaman" ||
        player.text === "Survival Hunter") && (
        <StyledPlayerCheckboxes>
          <h2 className="player-options-subheader">
            <BuffUpIcon />
            Buff Select
          </h2>
          <div className="option-container">
            {player.buffs.map(
              (buff) =>
                (buff.name === "Blessing of Kings" ||
                  buff.name === "Blessing of Might" ||
                  buff.name === "Blessing of Wisdom" ||
                  buff.name === "Blessing of Sanctuary" ||
                  buff.name === "Commanding Shout" ||
                  buff.name === "Battle Shout" ||
                  buff.name === "Aimed Shot" ||
                  buff.name === "Wrath of Air Totem" ||
                  buff.name === "Nature Resistance Totem" ||
                  buff.name === "Fire Resistance Totem" ||
                  buff.name === "Mana Spring Totem" ||
                  buff.name === "Hunting Party") && (
                  <div
                    key={`${buff.name}-${player.id}-checkbox`}
                    className="player-checkbox-container"
                  >
                    {buff.type}
                    <label
                      className="player-checkbox"
                      htmlFor={`${buff.name}-${player.id}`}
                    >
                      <div className="player-checkbox-text">{buff.name}</div>

                      <input
                        type="checkbox"
                        id={`${buff.name}-${player.id}`}
                        className="player-checkbox-input"
                        defaultChecked={buff.checked}
                        onClick={(e) => editBuffs(player, buff, e)}
                      />
                      <span className="styled-player-checkmark"></span>

                      <img
                        src={buff.image}
                        alt="buff"
                        className="player-checkbox-image"
                      />
                    </label>
                  </div>
                )
            )}
          </div>
        </StyledPlayerCheckboxes>
      )}
    </>
  );
};

export default PlayerCheckboxes;
