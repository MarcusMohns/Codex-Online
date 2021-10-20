const PlayerInRaid = ({text,player, onDelete}) => {
    return (
        <div onClick={()=> onDelete(player.id)}>
        {text}
        </div>
    )
}

export default PlayerInRaid
