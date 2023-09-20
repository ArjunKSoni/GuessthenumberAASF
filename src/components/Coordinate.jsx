import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export default function Coordinate() {
  const location = useLocation();
  useEffect(() => {
    let k = location.state.team
    const teamfetch = async () => {
      const response = await fetch("https://guess-the-number-backend-46f3.vercel.app/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({team:`Team: ${k}`}),
      });
      console.log(response)
    }
    teamfetch();
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
