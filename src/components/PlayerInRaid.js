import {StyledPlayer} from "./styles/Player.styled"
const PlayerInRaid = ({player,onDelete}) => {

    return (
        <StyledPlayer onClick={()=> onDelete(player.id)}>
        {player.text}
        <img src={player.image} alt="player in raid"/>
        </StyledPlayer>
    )
}

export default PlayerInRaid