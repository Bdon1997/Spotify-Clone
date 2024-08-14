import React from "react";
import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../components/assets/assets";

export const MusicContext = createContext();

const MusicContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[0]);
    const [isPlaying, setPlaying] = useState(false);
    const [Time,setTime] = useState({
        currentTime:{
            second: 0, 
            minute: 0
        },
        totalTime:{
            second: 0, 
            minute: 0
        }

    })

    const play = () => {
        audioRef.current.play();
        setPlaying(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlaying(false);
    }

    const previous = async () => {
        if (track.id > 0) {
            await setTrack(songsData[track.id-1]);
            await audioRef.current.play()  
            setPlaying(true);
        }
    }
    const Next = async () => {
        if (track.id < songsData.length+1) {
            await setTrack(songsData[track.id+1]);
            await audioRef.current.play()  
            setPlaying(true);
        }
    }

    const seekSong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration)
    }

    const PlayWithId = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play()
        setPlaying(true);
    }
    
    useEffect(()=>{
        setTimeout(()=> {                
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100)) + "%";
                setTime({
                    currentTime:{
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime:{
                        second: Math.floor(audioRef.current.duration % 60), 
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        },1000);
    })

    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track,setTrack,
        isPlaying,setPlaying,
        Time,setTime,
        play,pause,
        PlayWithId,
        previous,Next,
        seekSong
    }

    return (
        <MusicContext.Provider value={contextValue}>
            {props.children}
        </MusicContext.Provider>
    )
}

export default MusicContextProvider;