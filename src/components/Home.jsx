import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Home() {
    const navigator=useNavigate();
    return (
        <div className='flex flex-col items-center h-screen w-screen bg-cover bg-center' style={{
            backgroundImage:
                "url('https://cdn.pixabay.com/photo/2019/08/14/20/54/mobile-video-game-vector-background-4406706_1280.png')",
        }}>
            <h1 className='text-4xl font-extrabold mt-5 text-white'>
                AASF
            </h1>
            <h3 className='text-xl text-yellow-500'>Guess the number</h3>
            <div className='flex overflow-scroll h-1/2 bg-slate-300 bg-opacity-10 w-4/5 flex-col items-center m-3 text-white p-5 rounded-xl '>
                <h1 className='text-white font-bold text-lg'>select your team</h1>
                {Array.from(Array(30), (e, i) => {
                    return (
                        <div onClick={(e)=>{navigator("/play",{ state:{team:i+1} })}} className='m-1 w-60 text-center border-2 rounded px-16 py-3 text-2xl text-orange-500 font-bolder'>
                            Team {i+1}
                        </div>
                    )
                })}
                
            </div>
            <div className=' w-4/5 h-1 bg-black mt-4'></div>
            <div>
                <h1 className='text-2xl text-yellow-500'>Choose your team</h1>
            </div>
        </div>
    )
}
