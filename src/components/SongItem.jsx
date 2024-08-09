import React, { useContext, useState } from 'react'
import {SongId} from '../context/PlayerContext'

const SongItem = ({image,name,desc,id}) => {

  const [showSongId, setShowSongId] = useState(false);

  return (
          <div onClick={() => setShowSongId(true)}  className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] overflow-scroll'>
            <img className='rounded' src={image} alt="Album Image" />
            <p className='font-bold mt-2 mb-1'>{name}</p>
            <p className=' text-slate-200 text-sm mb-1'>{desc}</p>
            {showSongId? <SongId Id={id}/>: null}
          </div>
  )
}

export default SongItem;
