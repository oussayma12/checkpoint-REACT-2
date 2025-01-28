import React from "react";
import Player from "./Player";
import players from "./players";


const PlayerList =()=>{
    return(
        <div>
{players.map((player)=>(<Player player={player}/>))}
        </div>
    )
}

export default PlayerList;