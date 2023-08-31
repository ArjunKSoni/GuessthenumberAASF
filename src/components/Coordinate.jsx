import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Coordinate() {
    const location = useLocation();
  return (
    <div className='flex flex-col justify-center gap-4 items-center h-screen w-screen bg-cover bg-center' style={{
        backgroundImage:
            "url('https://cdn.pixabay.com/photo/2019/08/14/20/54/mobile-video-game-vector-background-4406706_1280.png')",
    }}>
        <h1 className='text-yellow-500 text-3xl font-extrabold '>{location.state.coordinatex}</h1>
        <h1 className='text-yellow-500 text-3xl font-extrabold '>{location.state.coordinatey}</h1>
    </div>
  )
}
