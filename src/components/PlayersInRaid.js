import PlayerInRaid from "./PlayerInRaid"

const PlayersInRaid = ({raid, onDelete}) => {
    return (
        <>
          {raid.map((player)=> (
  
            <PlayerInRaid key={player.id} text={player.text} onDelete={onDelete} player={player}/>  
            
          ))}  
        </>
    
    )
}

export default PlayersInRaid
