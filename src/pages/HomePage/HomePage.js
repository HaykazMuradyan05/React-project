import './HomePage.css'
import React, { useState } from 'react';
import paruyr from './paruyr.jpg';
import hovhaness from './hovhanes.jpg';
import kaputikyan from './kaputikyan.jpg'


export default function HomePage() {
    const [ hov, setHov ] = useState(false)
    const [sevak, setSevak] = useState(false)
    const [kaputikyann, setKaputikyann ] = useState(false)


    return (
        <div className='yndanur'>
            <div className='paruyr'>
                <div onClick={()=>setSevak((e) =>!e)}><img src={paruyr}/></div>
                {sevak && <a href='https://hy.wikipedia.org/wiki/%D5%8A%D5%A1%D6%80%D5%B8%D6%82%D5%B5%D6%80_%D5%8D%D6%87%D5%A1%D5%AF'>Paruyr Sevak</a>}
            </div>
            <div className='kaputikyan'>
                <img src={kaputikyan} onClick={() => setKaputikyann((e) => !e)}/>
                {kaputikyann && <a href='https://hy.wikipedia.org/wiki/%D5%8D%D5%AB%D5%AC%D5%BE%D5%A1_%D4%BF%D5%A1%D5%BA%D5%B8%D6%82%D5%BF%D5%AB%D5%AF%D5%B5%D5%A1%D5%B6'>Silva Kaputikyan</a>}
            </div>
            <div className='hovhanes'>
                <img src={hovhaness} onClick={() => setHov((e) => !e)}/>
                {hov && <a href='https://hy.wikipedia.org/wiki/%D5%80%D5%B8%D5%BE%D5%B0%D5%A1%D5%B6%D5%B6%D5%A5%D5%BD_%D4%B9%D5%B8%D6%82%D5%B4%D5%A1%D5%B6%D5%B5%D5%A1%D5%B6'>Hovhanes Tumanyan</a>}
            </div>
        </div>
    )
}