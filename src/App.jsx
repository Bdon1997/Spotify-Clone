import React, { useContext, useState} from "react";
import Sidebar from './components/Sidebar'
import Player from "./components/Player";
import Display from "./components/Display";
import { songsData } from "./components/assets/assets";
import { MusicContext } from "./context/MusicContext";


const App = () => {

   const {audioRef,track} = useContext(MusicContext);

  return (
    <div className='h-screen bg-black '>
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload="auto"/>
    </div>
  )
}

export default App