import { StyledPlayerCheckboxes } from "../styles/RaidHelper.styled";

import PlayerOptionsCheckbox from "../components/PlayerOptionsCheckbox";

import {
  SpecsThatCanTankAndps,
  Auras,
  OptionalBuffClasses,
  OptionalBuffs,
  DraeneiClasses,
  Paladins,
  ClassesWithTotems,
  Totems,
  BeastMasteryBuffs,
  WarlockBuffs,
  Warlocks,
  PaladinUtility,
} from "../../../data/PlayersWithOptions";

const PlayerOptionsCheckboxes = ({
  player,
  editBuffs,
  playerRoleEdit,
  handleDraenei,
  handleUtility,
  focusName,
  handleNote,
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
      await editBuffs(player, spBuff, e);
      await editBuffs(player, critBuff, e);
    } else {
      editBuffs(player, buff, e);
    }
  };

  const editWarlockBuffs = async (player, buff, e) => {
    if (buff.name === "Fel Intelligence") {
      let intBuff = {
        category: "Intellect",
        name: "Fel Intelligence",
        image: "images/Fel_Intelligence.png",
        icon: "images/spellicons/Fel_Intelligence.png",
        link: "https://www.wowhead.com/wotlk/spell=57567/fel-intelligence",
        spellId: "57567",
        checked: player.text === "Affliction Warlock" ? true : false,
        type: "Fel Hunter",
      };

      let spiritBuff = {
        category: "Spirit",
        name: "Fel Intelligence",
        image: "images/Fel_Intelligence.png",
        icon: "images/spellicons/Fel_Intelligence.png",
        link: "https://www.wowhead.com/wotlk/spell=57567/fel-intelligence",
        spellId: "57567",
        checked: player.text === "Affliction Warlock" ? true : false,
        type: "Fel Hunter",
      };
      await editBuffs(player, intBuff, e);
      await editBuffs(player, spiritBuff, e);
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
      } else if (
        Totems.fire.includes(buff.name) &&
        buff.category !== "Crit Strike %"
      ) {
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
              <label htmlFor="role-toggle" className="role-select-label">
                DPS ⚔️
              </label>
              <input
                id="role-toggle"
                type="checkbox"
                className="toggle-role"
                defaultChecked={player.role === "tank" ? true : false}
                onChange={(e) => playerRoleEdit(player, e)}
              />
              <label htmlFor="role-toggle" className="role-select-label">
                Tank 🛡️
              </label>
            </div>
          </div>
        </StyledPlayerCheckboxes>
      )}
      {OptionalBuffClasses.includes(player.text) && (
        <StyledPlayerCheckboxes>
          <h2 className="player-options-subheader">Buff Select</h2>
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
      {Paladins.includes(player.text) && (
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
      {Paladins.includes(player.text) && (
        <StyledPlayerCheckboxes>
          <h2 className="player-options-subheader">Utility Select</h2>
          <div className="option-container">
            {player.utility.map(
              (utility) =>
                PaladinUtility.includes(utility.name) &&
                (utility.name === "Divine Guardian" ? (
                  <div
                    className="player-checkbox-container"
                    key={`${utility.name}-${player.id}-${utility.category}-checkbox`}
                  >
                    <label
                      className="player-checkbox"
                      htmlFor={`${utility.name}-${player.id}`}
                    >
                      <div className="player-checkbox-text">
                        {utility.name === "Divine Guardian"
                          ? `${utility.name}/Sacrifice`
                          : utility.name}
                      </div>

                      <input
                        type="checkbox"
                        id={`${utility.name}-${player.id}`}
                        className="player-checkbox-input"
                        defaultChecked={utility.checked}
                        onClick={(e) => handleUtility(player, utility, e)}
                      />
                      <span className="styled-player-checkmark"></span>
                      <a
                        href={utility.link}
                        data-wowhead={`item-${utility.spellId}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={utility.image}
                          alt="utility"
                          className="player-checkbox-image"
                        />
                      </a>
                    </label>
                  </div>
                ) : (
                  <div
                    className="player-checkbox-container"
                    key={`${utility.name}-${player.id}-${utility.category}-checkbox`}
                  >
                    <label
                      className="player-checkbox"
                      htmlFor={`${utility.name}-${player.id}`}
                    >
                      <div className="player-checkbox-text">{utility.name}</div>

                      <input
                        type="checkbox"
                        id={`${utility.name}-${player.id}`}
                        className="player-checkbox-input"
                        defaultChecked={utility.checked}
                        onClick={(e) => handleUtility(player, utility, e)}
                      />
                      <span className="styled-player-checkmark"></span>
                      <a
                        href={utility.link}
                        data-wowhead={`item-${utility.spellId}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={utility.image}
                          alt="utility"
                          className="player-checkbox-image"
                        />
                      </a>
                    </label>
                  </div>
                ))
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
      {player.text === "Beast Mastery Hunter" && (
        <StyledPlayerCheckboxes>
          <h2 className="player-options-subheader">Pet Select</h2>
          <div className="option-container">
            {player.buffs.map(
              (buff) =>
                BeastMasteryBuffs.includes(buff.name) && (
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
      {Warlocks.includes(player.text) && (
        <StyledPlayerCheckboxes>
          <h2 className="player-options-subheader">Pet Select</h2>
          <div className="option-container">
            {player.buffs.map(
              (buff) =>
                WarlockBuffs.includes(buff.name) &&
                buff.category !== "Spirit" && (
                  <PlayerOptionsCheckbox
                    buff={buff}
                    player={player}
                    editBuffs={editWarlockBuffs}
                    key={`${buff.name}-${player.id}-${buff.category}-checkbox`}
                  />
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
                <a
                  href={player.groupBuffs[0].link}
                  data-wowhead={`item-${player.groupBuffs[0].spellId}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={player.groupBuffs[0].image}
                    alt="draenei buff"
                    className="player-checkbox-image"
                  />
                </a>
              </label>
            </div>
          </div>
        </StyledPlayerCheckboxes>
      )}

      <StyledPlayerCheckboxes>
        <h2 className="player-options-subheader">Player Note</h2>
        <div className="option-container">
          <textarea
            id={`text-area-input-${player.id}`}
            onClick={() => focusName(`text-area-input-${player.id}`)}
            onBlur={() => handleNote(player.id, `text-area-input-${player.id}`)}
            autoComplete="off"
            spellCheck="false"
            defaultValue={player.note}
            placeholder="Player note..."
            cols={40}
            rows={5}
            maxLength={200}
          ></textarea>
        </div>
      </StyledPlayerCheckboxes>
    </>
  );
};

export default PlayerOptionsCheckboxes;
