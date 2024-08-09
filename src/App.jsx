import React, { useContext, useState} from "react";
import Sidebar from './components/Sidebar'
import Player from "./components/Player";
import Display from "./components/Display";
import { songsData } from "./components/assets/assets";
import MusicPlayer from "./components/MusicPlayer";





const App = () => {


  return (
    <div className='h-screen bg-black '>
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player/>
      </div>
  )
}

export default App