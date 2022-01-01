import { StyledPlayer, DeletePlayerIcon } from "./styles/RaidAssembler.styled";
const PlayerInRaid = ({ player, onDelete }) => {
  return (
    <StyledPlayer background={player.color}>
      <DeletePlayerIcon
        id="delete-player-img"
        onClick={() => onDelete(player)}
      />
      <p>{player.text}</p>
      <img id="class-img" src={player.image} alt="player in raid" />
    </StyledPlayer>
  );
};

PlayerInRaid.defaultProps = {
  player: {
    color: "red",
    text: "missing player",
    image: "images/hunter_beastmastery.png",
  },
};

export default PlayerInRaid;
