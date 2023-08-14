import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function Play() {
    const ref = useRef(null);
    const navigator=useNavigate()
    const [cal,setCal]=useState()
    const [number,setNumber]=useState('');
    const [error,setError]=useState("let's Play");
    useEffect(() => {
        setCal(Math.floor(Math.random() * 100))
    }, [])
    const location = useLocation();
    const submit=()=>{
        if(number==cal){
            navigator('/coordinate',{state:{coordinatex:200,coordinatey:400}});
        }
        else if(number<cal){
            alert("The gussed number is very small")
        }
        else{
            alert("The gussed number is very big")
        }
        ref.current.focus();
        setNumber('');
    }
    return (
        <div className='flex flex-col items-center h-screen w-screen bg-cover bg-center' style={{
            backgroundImage:
                "url('https://cdn.pixabay.com/photo/2019/08/14/20/54/mobile-video-game-vector-background-4406706_1280.png')",
        }}>
            <h1 className='text-4xl font-extrabold text-center mt-5 text-yellow-500'>
                Team {location.state.team}
            </h1>
            <div className='flex flex-col bg-slate-300 bg-opacity-10 rounded-xl mt-3 justify-center items-center p-4 w-4/5 h-1/4'>
                <input ref={ref} maxLength={2} autoFocus={true} onChange={(e)=>setNumber(e.target.value)} value={number} className='focus:outline-0 font-extrabold text-center bg-transparent border-b-4 text-red-500 text-3xl w-36' type="text" />
                <h1 className='font-bold mt-3'>guess a number between 0-99</h1>
            </div>

            <button onClick={submit} className='px-5 py-3 bg-green-500 rounded-xl text-white text-3xl font-bold mt-6'>
                Submit
            </button>
            <div className='flex text-center text-xl font-bold flex-col mt-20 bg-slate-300 bg-opacity-10 rounded-xl justify-center items-center p-4 w-4/5'>
             </div>

        </div>
    )
}
