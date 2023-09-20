import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export default function Coordinate() {
    const location = useLocation();
    useEffect(() => {
      let url = `https://web.whatsapp.com/send?phone=916261566281`;
      let k=location.state.team
      url += `&text=Team:${{k}}&app_absent=0`;
      window.open(url);
    })
  return (
    <div className='flex flex-col justify-center gap-4 items-center h-screen w-screen bg-cover bg-center' style={{
        backgroundImage:
            "url('https://cdn.pixabay.com/photo/2019/08/14/20/54/mobile-video-game-vector-background-4406706_1280.png')",
    }}>
        <h1 className='text-yellow-500 text-3xl font-extrabold '>Team: {location.state.team}</h1>
    </div>
  )
}
