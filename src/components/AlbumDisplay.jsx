import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from './assets/assets';

const AlbumDisplay = () => {

    const {id} = useParams();
    const albumData = albumsData[id];
    
    return (
        <>
            <Navbar/>
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
                <img className='w-48 rounded' src={albumData.image} alt="Album cover" />
                <div className='flex flex-col'>
                    <p>Playlist</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                    <p className='mt-2 '>
                        <img className='inline-block w-5 mr-2 mb-2' src={assets.spotify_logo} alt="Spotify Logo" />
                        <b>Spotify </b>
                        • 42,523,582 Likes
                        • <b>50 Songs, </b>
                        About 2hr 45mins.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-gray'>
                <p><b className='mr-4'>#</b>Title</p>
                <p>Album</p>
                <p className='hidden sm:block'>Date Added</p>
                <img className='m-auto w-4' src={assets.clock_icon} alt="" />
            </div>
            <hr />
            {
                songsData.map((item,index)=>(
                    <div key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-gray hover:bg-green-400 cursor-pointer'>
                        <p className='text-white'>
                            <b className='mr-4 text-gray'>{index+1}</b>
                            <img className='inline w-10 mr-4' src={item.image} alt="Song Image" />
                            {item.name}
                        </p>
                        <p className='text[px15]'>{albumData.name}</p>
                        <p className='text[px15] hidden sm:block'>4 days ago</p>
                        <p className='text[px15] text-center'>{item.duration}</p>
                    </div>
                ))
            }
        </>
    )
}

export default AlbumDisplay
