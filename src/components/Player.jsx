import { React, useContext, useState } from "react";
import { assets, songsData} from "./assets/assets";
import MusicPlayer from "./MusicPlayer";
//import { SongContext } from "../context/PlayerContext";


const Player = (props) => {   
    
//     const id = 0;

//   if (props.Id === undefined) {
//     let id = 0;
//     console.log("Player1 " + id);
 
//   } 
//   else {
//     let id = props.Id;    
//     console.log("Player2 " + id);

//   }
    // console.log("Player3 " + id);
    return (
            <MusicPlayer Id={props.Id} preload='auto'/>
    )
}

export default Player