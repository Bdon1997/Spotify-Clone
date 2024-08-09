import React from 'react'
import { assets } from './assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold mt-1'>
        <div className='flex items-center gap-2'>
            <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded 2x1 cursor-pointer' src={assets.arrow_left} alt="" />
            <img onClick={()=>navigate(+1)} className='w-8 bg-black p-2 rounded 2x1 cursor-pointer' src={assets.arrow_right} alt="" />
        </div>
        <div className='flex items-center gap-4'>
            <p className='bg-white text-black text-[15px] px-4 py-1 rounded-full hidden md:block cursor-pointer font-bold hover:bg-yellow-400'> Explore Premium</p>
            <p className='bg-black py-1 px-3 rounded-full text-[15px] cursor-pointer'>Install App</p>
            <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>B</p>
        </div>
      </div>
      <div className='flex itens-center gap-2 mt-2'>
        <p className='bg-white text-black px-4 py-1 rounded-full font-bold hover:bg-green-400 cursor-pointer'>All</p>
        <p className='bg-black text-white px-4 py-1 rounded-full hover:text-green-400 cursor-pointer'>Music</p>
        <p className='bg-black text-white px-4 py-1 rounded-full hover:text-green-400 cursor-pointer'>Podcast</p>
      </div>
    </>
  )
}

export default Navbar
