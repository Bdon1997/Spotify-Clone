import React from 'react';
import {assets} from '../assets/assets'

const Display = () => {
    return (
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
            <div className='bg-[#121212] h=[15%] rounded flex flex-col justify-around'>
                <div className='flex items-center gap-3 pl-8 cursor-pointer mb-3'>
                    <img className='w-8 ' src={assets.home_icon} alt="Home Icon" />
                    <p className='font-bold'>Home</p>
                </div>
                <div className='flex items-center gap-3 pl-8 cursor-pointer mb-3'>
                    <img className='w-8' src={assets.search_icon} alt="Search Icon" />
                    <p className='font-bold'>Search</p>
                </div>
            </div>
            <div className='bg-[#121212] h=[85%] rounded'>
                <div className='flex p-4 items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img className='w-8' src={assets.stack_icon} alt="Stack Icon" />
                        <p className='font-semibold'>Library</p>
                    </div>
                    <div className='flex items-end gap-3'>
                        <img className='w-5' src={assets.arrow_icon} alt="Arrow Icon" />
                        <img className='w-5' src={assets.plus_icon} alt="Arrow Icon" />

                    </div>
                </div>
                <div className='p-4 bg-[#242424] m2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mb-3'>
                    <h1>CURATE YOUR SOUND</h1>
                    <p className='font-light'>Delve into the Spotiverse with your first playlist</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 hover:bg-green-400'>Create Playlist</button>
                </div>
                <div className='p-4 bg-[#242424] m2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1>FOLLOW YOUR FAVOURITE TALENT</h1>
                    <p className='font-light'>Indulge your mind with the best podcast</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 hover:bg-green-400'>Follow Podcast</button>
                </div>

            </div>
        </div>
    )
}

export default Display