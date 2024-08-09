import React, { useContext, useEffect, useRef, useState } from 'react';
import { assets, songsData } from "./assets/assets";
// import {SongId} from '../context/PlayerContext';

const MusicPlayer = (props) => {

    console.log("MusicPlayer " + props.Id);
  const Id = 0;

  if (props.Id === undefined) {
    let Id = 0;
    console.log("MusicPlayer1 " + Id);
 
  } 
  else {
    let Id = props.Id;    
    console.log("MusicPlayer2 " + Id);

  }


  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setcurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);


  const [Song, setCurrentSong] = useState(new Audio(songsData[Id].file));


  // function to handleSeek
  const handleSeek = (e) => {
    Song.currentTime = e.target.value;
    setcurrentTime(Song.currentTime)
  }
  
  // handle to update currentTime on bar
  const handleUpdateTime = () => {
    setcurrentTime(Song.currentTime);
    setDuration(Song.duration);
  }
  
    // function to handlePlay
    const handlePlay = () => {
        Song.play();
        setIsPlaying(true);
    }  

    // function to handlePause
  const handlePause = () => {
    Song.pause();
    setIsPlaying(false);
  }
  
  const handlePrev = () => {
    setcurrentTime(0);
    handlePlay();
} 

  const playwithid = async (Id) => {
     await setCurrentSong(new Audio(songsData[Id].file));
     handlePlay();
  }
 

 // handle toggle between play and pause
 const handlePlayPause = () => {
    if (isPlaying) {
        handlePause();
    }
    else {
        handlePlay();
    }
 }  

 

 function formatDuration(durationSeconds) {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedSeconds = seconds.toString().padStart(2,"0");
    return `${minutes}:${formattedSeconds}`;
 }

 //effect to listen to updated Time and duration 
 useEffect( () => {
    Song.addEventListener("timeupdate", handleUpdateTime);

    //if the duration unamounts then it will remove the event listener to reset 
    return () => {
        Song.removeEventListener("timeupdate", handleUpdateTime);

    }
 })


  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>        
        <div className="hidden lg:flex items-center gap-4">
            <img className="w-12" src={songsData[Id].image} alt="" />
            <div>
                <p>{songsData[Id].name}</p>
                <p>{songsData[Id].desc.slice(0,12)}</p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-1 m-auto'>
                <div className="flex gap-4">
                    <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="Shuffle" />
                    <img onClick={handlePrev} className="w-4 cursor-pointer" src={assets.prev_icon} alt="Prev" />      
                    <button onClick={handlePlayPause}>
                        <span className='material-symbols-rounded'>
                            {isPlaying 
                            ?<img onClick={handlePlayPause} className="w-4 cursor-pointer" src={assets.pause_icon} alt="Pause" />
                            :<img onClick={handlePlayPause} className="w-4 cursor-pointer" src={assets.play_icon} alt="Play" />
                            }
                        </span>
                    </button>  
                    <img className="w-4 cursor-pointer" src={assets.next_icon} alt="Next" />
                    <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="Loop" />
                </div>
                <div className="flex items-center gap-5">
                    <p>{formatDuration(currentTime)}</p>
                    <input className='h-1 border-none w-80 accent-green-800 rounded-full'
                        type="range"
                        min="0"
                        max={duration}   
                        value={currentTime}
                        onChange={handleSeek}
                    />
                    <p>{formatDuration(duration)}</p>
                </div>
        </div>
        <div className='hidden lg:flex items-center gap-2 opacity-75'>
                <img className="w-4" src={assets.play_icon} alt="play Icon" />
                <img className="w-4" src={assets.mic_icon} alt="mic Icon" />
                <img className="w-4" src={assets.queue_icon} alt="queue Icon" />
                <img className="w-4" src={assets.speaker_icon} alt="speaker Icon" />
                <img className="w-4" src={assets.volume_icon} alt="volume Icon" />
                <div className='w-20 bg-slate-50 h-1 rounded'>
                    
                </div>
                <img className="w-4" src={assets.mini_player_icon} alt="mini player Icon" />
                <img className="w-4" src={assets.zoom_icon} alt="zoom Icon" />
            </div>
    </div>
  )
}

export default MusicPlayer

