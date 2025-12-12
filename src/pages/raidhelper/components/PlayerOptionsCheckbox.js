const OptionsCheckbox = ({ buff, player, editBuffs }) => {
  return (
    <div className="player-checkbox-container">
      <label className="player-checkbox" htmlFor={`${buff.name}-${player.id}`}>
        <div className="player-checkbox-text">
          {buff.name} {buff.type ? `(${buff.type})` : ""}
        </div>

        <input
          type="checkbox"
          id={`${buff.name}-${player.id}`}
          className="player-checkbox-input"
          defaultChecked={buff.checked}
          onClick={(e) => editBuffs(player, buff, e)}
        />
        <span className="styled-player-checkmark"></span>
        <a
          href={buff.link}
          data-wowhead={`item-${buff.spellId}`}
          target="_blank"
          rel="noreferrer"
        >
          <img src={buff.image} alt="buff" className="player-checkbox-image" />
        </a>
      </label>
    </div>
  );
};

export default OptionsCheckbox;
