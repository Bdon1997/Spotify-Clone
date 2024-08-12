import { React, useContext, useState } from "react";
import { assets} from "./assets/assets";
import { MusicContext } from "../context/MusicContext";


const Player = (props) => {   
    

    const {seekBar, seekBg, isPlaying, play,pause,track,Time,previous,Next,seekSong} = useContext(MusicContext);
    return (
            <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>        
            <div className="hidden lg:flex items-center gap-4">
                <img className="w-12" src={track.image} alt="" />
                <div>
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0,30)}</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-1 m-auto'>
                    <div className="flex gap-4">
                        <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="Shuffle" />
                        <img onClick={previous} className="w-4 cursor-pointer" src={assets.prev_icon} alt="Prev" />      
                        <button>
                            <span className='material-symbols-rounded'>
                                {isPlaying
                                 ? <img  onClick={pause} className="w-4 cursor-pointer" src={assets.pause_icon} alt="Pause" />
                                 : <img onClick={play} className="w-4 cursor-pointer" src={assets.play_icon} alt="Play" />   
                                }
                            </span>
                        </button>  
                        <img onClick={Next}  className="w-4 cursor-pointer" src={assets.next_icon} alt="Next" />
                        <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="Loop" />
                    </div>
                    <div className="flex items-center gap-5">
                        <p>{Time.currentTime.minute}:{Time.currentTime.second}</p>
                        <div ref={seekBg} onClick={seekSong} className=' w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                            <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full'/>
                        </div>
                        <p>{Time.totalTime.minute}:{Time.totalTime.second}</p>
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

export default Player