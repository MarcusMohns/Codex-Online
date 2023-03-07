import {
  StyledPlayerCheckboxes,
  BuffUpIcon,
} from "../styles/RaidHelper.styled";

import PlayerOptionsCheckbox from "../components/PlayerOptionsCheckbox";

import {
  SpecsThatCanTankAndps,
  Auras,
  OptionalBuffClasses,
  OptionalBuffs,
  DraeneiClasses,
  ClassesWithAuras,
  ClassesWithTotems,
  Totems,
} from "../../../data/PlayersWithOptions";

const tankIcon = (
  <img src="images/Tank_icon.png" alt="shield" className="role-icon" />
);
const dpsIcon = (
  <img src="images/DPS_icon.png" alt="sword" className="role-icon" />
);

const PlayerOptionsCheckboxes = ({
  player,
  editBuffs,
  playerRoleEdit,
  handleDraenei,
}) => {
  const editBuffState = async (player, buff, e) => {
    if (buff.name === "Totem of Wrath") {
      let spBuff = {
        category: "Spell Power",
        name: "Totem of Wrath",
        image: "images/Totem_Of_Wrath.png",
        link: "https://www.wowhead.com/wotlk/spell=3738/wrath-of-air-totem",
        spellId: "3738",
        checked: true,
      };

      let critBuff = {
        category: "Crit Strike %",
        name: "Totem of Wrath",
        image: "images/Totem_Of_Wrath.png",
        link: "https://www.wowhead.com/wotlk/spell=3738/wrath-of-air-totem",
        spellId: "3738",
        checked: true,
      };
      for (let i = 0; i < 2; i++) {
        await editBuffs(player, spBuff, e);
        await editBuffs(player, critBuff, e);
      }
    } else {
      editBuffs(player, buff, e);
    }
  };

  const ourTotems = (player, editBuffs) => {
    let TotemsAndCategories = [];

    let earth = [<h3 key={"earth-totem-header"}>Earth</h3>];
    let fire = [<h3 key={"fire-totem-header"}>Fire</h3>];
    let water = [<h3 key={"water-totem-header"}>Water</h3>];
    let air = [<h3 key={"air-totem-header"}>Air</h3>];

    for (let buff of player.buffs) {
      if (Totems.water.includes(buff.name)) {
        water = [
          ...water,
          <PlayerOptionsCheckbox
            key={`${buff.name}-${player.id}-${buff.category}-checkbox`}
            buff={buff}
            player={player}
            editBuffs={editBuffs}
          />,
        ];
      } else if (Totems.fire.includes(buff.name)) {
        fire.push(
          <PlayerOptionsCheckbox
            key={`${buff.name}-${player.id}-${buff.category}-checkbox`}
            buff={buff}
            player={player}
            editBuffs={editBuffState}
          />
        );
      } else if (Totems.earth.includes(buff.name)) {
        earth = [
          ...earth,
          <PlayerOptionsCheckbox
            key={`${buff.name}-${player.id}-${buff.category}-checkbox`}
            buff={buff}
            player={player}
            editBuffs={editBuffs}
          />,
        ];
      } else if (Totems.air.includes(buff.name)) {
        air = [
          ...air,
          <PlayerOptionsCheckbox
            key={`${buff.name}-${player.id}-${buff.category}-checkbox`}
            buff={buff}
            player={player}
            editBuffs={editBuffs}
          />,
        ];
      } else {
      }
    }
    TotemsAndCategories = [
      <div
        className="totem-element-container"
        key={`earth-totem-container-${player.id}`}
      >
        {earth}
      </div>,
      <div
        className="totem-element-container"
        key={`fire-totem-container-${player.id}`}
      >
        {fire}
      </div>,
      <div
        className="totem-element-container"
        key={`water-totem-container-${player.id}`}
      >
        {water}
      </div>,
      <div
        className="totem-element-container"
        key={`air-totem-container-${player.id}`}
      >
        {air}
      </div>,
    ];
    return TotemsAndCategories;
  };

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
                  <PlayerOptionsCheckbox
                    buff={buff}
                    player={player}
                    editBuffs={editBuffs}
                    key={`${buff.name}-${player.id}-${buff.category}-checkbox`}
                  />
                )
            )}
          </div>
        </StyledPlayerCheckboxes>
      )}
      {ClassesWithAuras.includes(player.text) && (
        <StyledPlayerCheckboxes>
          <h2 className="player-options-subheader">Aura Select</h2>
          <div className="option-container">
            {player.buffs.map(
              (buff) =>
                Auras.includes(buff.name) && (
                  <PlayerOptionsCheckbox
                    buff={buff}
                    player={player}
                    editBuffs={editBuffs}
                    key={`${buff.name}-${player.id}-${buff.category}-checkbox`}
                  />
                )
            )}
          </div>
        </StyledPlayerCheckboxes>
      )}
      {ClassesWithTotems.includes(player.text) && (
        <StyledPlayerCheckboxes>
          <h2 className="player-options-subheader">Totem Select</h2>
          <div className="option-container">{ourTotems(player, editBuffs)}</div>
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

export default PlayerOptionsCheckboxes;
