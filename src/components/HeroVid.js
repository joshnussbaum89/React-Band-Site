import React from 'react'
import backgroundVideo from '../videos/rover rover.m4v';

const HeroVid = () => {
    console.log(backgroundVideo)
    return (
        <section className='hero-vid'>
            <video autoPlay loop muted id='bg-vid'>
                <source src={backgroundVideo} type='video/mp4' />
            </video>
        </section>
    )
}

export default HeroVid;
