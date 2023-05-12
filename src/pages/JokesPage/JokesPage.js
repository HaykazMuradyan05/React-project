import React, { useState } from 'react'
import './JokesPage.css'

export default function JokesPage() {
    const [obj, setObj] = useState([])

    const fatch = async () => {
        try {
                    const res = await fetch('https://api.chucknorris.io/jokes/random')
                    const req = await res.json()
                    setObj((a)=>a=[...a,req.value])
                    if(obj.length>10){
                        obj.shift()
                    }
                    console.log(obj);
                }
                catch (err) {
                    console.log(err);
                }
    }
    return (
        <div className='joke'>
         <button onClick={fatch} className='but'>Click</button>
         {obj.map((e,i)=>(
                    <div className="joked" key={i}>{e}</div>
                ))}
        </div>
    )
}