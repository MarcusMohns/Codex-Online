import { StyledPlayer } from "./styles/RaidAssembler.styled";
const PlayerInRaid = ({ player, onDelete }) => {
  return (
    <StyledPlayer onClick={() => onDelete(player.id)} background={player.color}>
      <p>{player.text}</p>
      <img src={player.image} alt="player in raid" />
    </StyledPlayer>
  );
};

export default PlayerInRaid;
