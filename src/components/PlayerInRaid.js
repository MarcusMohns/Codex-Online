import { StyledPlayer } from "./styles/RaidAssembler.styled";
const PlayerInRaid = ({ player, onDelete }) => {
  return (
    <StyledPlayer onClick={() => onDelete(player)} background={player.color}>
      <p>{player.text}</p>
      <img src={player.image} alt="player in raid" />
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
