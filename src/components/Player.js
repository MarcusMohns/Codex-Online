import { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import PlayerCheckboxes from "./PlayerCheckboxes";
import {
  StyledPlayer,
  DeletePlayerIcon,
  EditIcon,
  TinyContainer,
  PlayerNameContainer,
  DropUpArrow,
} from "./styles/RaidAssembler.styled";
import COLORS from "../components";

const Player = ({
  player,
  onDelete,
  focusName,
  editName,
  index,
  editBuffs,
}) => {
  return (
    <Draggable draggableId={player.id} index={index}>
      {(provided, snapshot) => (
        <StyledPlayer
          background={player.color}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          hasText={player.name === "" ? false : true}
        >
          <TinyContainer>
            <EditIcon
              id="edit-player-icon"
              onClick={() => focusName(`player-input-${player.id}`)}
            />
            <DeletePlayerIcon
              id="delete-player-img"
              onClick={() => onDelete(player)}
            />
          </TinyContainer>
          <PlayerNameContainer>
            <label className="player-name">
              <input
                type="text"
                id={`player-input-${player.id}`}
                onBlur={() => editName(player.id, `player-input-${player.id}`)}
                autoComplete="off"
                spellCheck="false"
                defaultValue={player.name}
              />
              <span className="placeholder">{player.text}</span>
            </label>
            <img id="class-img" src={player.image} alt="player in raid" />

            {/* If warrior or paladin add the checkboxes to check what buffs they provide */}
            {(player.color === COLORS.paladin ||
              player.color === COLORS.warrior) && (
              <div className="player-tooltip-container">
                <DropUpArrow id="info-image" />
                <PlayerCheckboxes player={player} editBuffs={editBuffs} />
              </div>
            )}
          </PlayerNameContainer>
        </StyledPlayer>
      )}
    </Draggable>
  );
};

Player.defaultProps = {
  player: {
    color: "red",
    text: "missing player",
    image: "images/hunter_beastmastery.png",
    name: "",
  },
};

export default memo(Player);
