import PlayerInRaid from "./PlayerInRaid"

const PlayersInRaid = ({raid, onDelete}) => {
    return (
        <div className="grid">
          {raid.map((player)=> (
  
            <PlayerInRaid 
            key={player.id} 
            onDelete={onDelete} 
            player={player}/>  
            
          ))}  
        </div>
    
    )
}

export default PlayersInRaid
