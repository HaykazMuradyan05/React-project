import './AboutPage.css'
import React from 'react'
import galactic from './lusin.jpg'
import Titel from '../../component/Title/Titel'
import Likes from '../../component/Likes/Likes'
import Comments from '../../component/Comments/Comments'
// import { AiFillHome } from 'react-icons/ai';
const AboutPage = () => {
    return(
        <div className='about'>
            <div className='wrap'>
                <div className='card'>
                    <div className='card-image'>
                        <img src={galactic} alt='galactic'/>
                        <Titel/>
                        {/* <AiFillHome/> */}
                        <Likes/>
                    </div>
                    <Comments/>
                </div>
                
            </div>
        </div>
    )
}

export default AboutPage

// vorpesi ver redux-y miana reactin kam proektin apa kanchum enq react-redaxui gradaranic kanchum en provaydery vori stor hatkuyany 
// poxancum enq mer story aynuhetev patahatum mer glxavor comonety app-y