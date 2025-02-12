import { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import RaidRole from "./RaidRole";
import {
  DeletePlayerIcon,
  EditIcon,
  TinyContainer,
  PlayerNameContainer,
  SettingsIcon,
} from "../styles/RaidHelper.styled";
import styled from "styled-components";

const StyledPlayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  box-sizing: border-box;
  color: #fff;
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid black;
  cursor: pointer;
  margin: 2px;
  min-height: 69px;
  text-align: center;
  text-shadow: rgb(0, 0, 0) 1px 0px 0px, rgb(0, 0, 0) 0.540302px 0.841471px 0px,
    rgb(0, 0, 0) -0.416147px 0.909297px 0px,
    rgb(0, 0, 0) -0.989992px 0.14112px 0px,
    rgb(0, 0, 0) -0.653644px -0.756802px 0px,
    rgb(0, 0, 0) 0.283662px -0.958924px 0px,
    rgb(0, 0, 0) 0.96017px -0.279415px 0px;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 1px;
  .role-icon {
    position: absolute;
    right: 2px;
    bottom: 2px;
  }
  #player-info-icon {
    position: absolute;
    left: 2px;
    bottom: 1px;
    visibility: hidden;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
  .player-name {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    font-size: 0.8rem;
    pointer-events: none;
  }
  .player-name input {
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-appearance: none;
    -ms-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    border: none;
    user-select: none;
    pointer-events: none;
    border-radius: 3px;
    background-color: transparent;
    width: 95%;
    caret-color: black;
    color: #fff;
    text-align: center;
    text-shadow: rgb(0, 0, 0) 1px 0px 0px,
      rgb(0, 0, 0) 0.540302px 0.841471px 0px,
      rgb(0, 0, 0) -0.416147px 0.909297px 0px,
      rgb(0, 0, 0) -0.989992px 0.14112px 0px,
      rgb(0, 0, 0) -0.653644px -0.756802px 0px,
      rgb(0, 0, 0) 0.283662px -0.958924px 0px,
      rgb(0, 0, 0) 0.96017px -0.279415px 0px;
    margin-bottom: 5px;
    letter-spacing: 1px;
    font-weight: 800;
    font-family: "Raleway", sans-serif;
    font-size: 0.8rem;
  }
  .placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 2px;
    border: none;
    user-select: none;
    pointer-events: none;
    opacity: 100%;
    transition: top 0.3s ease, top 0.3s ease, top 0.3s ease, font-size 0.3s ease,
      opacity 0.3s ease;
  }
  .player-name input:focus + .placeholder {
    top: -20px;
    font-size: 10px;
  }
  .player-name input + .placeholder {
    ${(props) => props.hasText && "top: -20px; font-size: 10px; color: white;"};
  }

  #class-img {
    display: none;
  }
  #edit-player-icon {
    display: flex;
    margin-left: 2px;
    cursor: pointer;
    font-size: 1.4rem;
    visibility: hidden;
    &:hover {
      transform: scale(1.2);
    }
  }
  #delete-player-icon {
    display: flex;
    font-size: 1.3rem;
    cursor: pointer;
    visibility: hidden;
    &:hover {
      transform: scale(1.2);
    }
  }
  &:hover {
    transform: translateY(-0.1em);
    #edit-player-icon,
    #delete-player-icon,
    #player-info-icon {
      visibility: visible;
    }
  }
  @media (min-width: 576px) {
    .player-name input:focus + .placeholder {
      top: -20px;
      font-size: 10px;
      opacity: 100%;
    }
    .player-name input + .placeholder {
      ${(props) =>
        props.hasText &&
        "top: -20px; font-size: 10px; color: white;opacity:100%;"};
    }
    #class-img {
      display: flex;
      width: 22px;
      height: 22px;
      border-radius: 35%;
      margin-bottom: 2px;
    }
  }
  @media (min-width: 1300px) {
    font-size: 0.8rem;
    padding: 0rem;
  }
`;

const Player = ({
  player,
  onDelete,
  focusName,
  editName,
  index,
  handlePlayerOptions,
}) => {
  return (
    <Draggable draggableId={player.id} index={index}>
      {(provided, snapshot) => (
        <StyledPlayer
          backgroundColor={player.color}
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
              id="delete-player-icon"
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
            <img id="class-img" src={player.icon} alt="player in raid" />
            <RaidRole player={player} />
            <SettingsIcon
              onClick={() => handlePlayerOptions(player)}
              id="player-info-icon"
            />
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
    image: "images/Beast_Mastery_Hunter.webp",
    name: "",
  },
};

export default memo(Player);
