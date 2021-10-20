import PlayerInRaid from "./PlayerInRaid"

const PlayersInRaid = ({raid}) => {
    return (
        <>
          {raid.map((player)=> (
  
            <PlayerInRaid text={player.text}/>
            
          ))}  
        </>
    
    )
}

export default PlayersInRaid
