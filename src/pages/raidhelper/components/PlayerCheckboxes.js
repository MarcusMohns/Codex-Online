import {
  StyledPlayerCheckboxes,
  BuffUpIcon,
} from "../styles/RaidHelper.styled";

import { SpecsThatCanTankAndps } from "../../../data/PlayersWithOptions";
import { OptionalBuffClasses } from "../../../data/PlayersWithOptions";
import { OptionalBuffs } from "../../../data/PlayersWithOptions";
import { DraeneiClasses } from "../../../data/PlayersWithOptions";
import { Auras } from "../../../data/PlayersWithOptions";

const tankIcon = (
  <img src="images/Tank_icon.png" alt="shield" className="role-icon" />
);
const dpsIcon = (
  <img src="images/DPS_icon.png" alt="sword" className="role-icon" />
);

const PlayerCheckboxes = ({
  player,
  editBuffs,
  playerRoleEdit,
  handleDraenei,
}) => {
  return (
    <>
      {SpecsThatCanTankAndps.includes(player.text) && (
        <StyledPlayerCheckboxes>
          <h2 className="player-options-subheader">Role Select</h2>
          <div className="option-container">
            <div className="role-toggler-container">
              <label className="role-select-label">DPS{dpsIcon}</label>
              <input
                type="checkbox"
                className="toggle-role"
                defaultChecked={player.role === "tank" ? true : false}
                onChange={(e) => playerRoleEdit(player, e)}
              />
              <label className="role-select-label">Tank{tankIcon}</label>
            </div>
          </div>
        </StyledPlayerCheckboxes>
      )}
      {OptionalBuffClasses.includes(player.text) && (
        <StyledPlayerCheckboxes>
          <h2 className="player-options-subheader">
            <BuffUpIcon />
            Buff Select
          </h2>
          <div className="option-container">
            {player.buffs.map(
              (buff) =>
                OptionalBuffs.includes(buff.name) && (
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
      {["Protection Paladin", "Retribution Paladin", "Holy Paladin"].includes(
        player.text
      ) && (
        <StyledPlayerCheckboxes>
          <h2 className="player-options-subheader">
            <BuffUpIcon />
            Aura Select
          </h2>
          <div className="option-container">
            {player.buffs.map(
              (buff) =>
                Auras.includes(buff.name) && (
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
      {DraeneiClasses.includes(player.text) && (
        <StyledPlayerCheckboxes>
          <h2 className="player-options-subheader">Draenei Check</h2>
          <div className="option-container">
            <div className="player-checkbox-container">
              <label className="player-checkbox">
                <div className="player-checkbox-text">
                  {player.groupBuffs[0].name}
                </div>
                <input
                  type="checkbox"
                  className="player-draenei-checkbox-input"
                  defaultChecked={player.groupBuffs[0].draenei}
                  onChange={(e) => handleDraenei(player, e)}
                />
                <span className="styled-player-checkmark"></span>
                <img
                  src={player.groupBuffs[0].image}
                  alt="draenei buff"
                  className="player-checkbox-image"
                />
              </label>
            </div>
          </div>
        </StyledPlayerCheckboxes>
      )}
    </>
  );
};

export default PlayerCheckboxes;
