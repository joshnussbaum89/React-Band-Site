import React, { Component } from 'react';
import { motion } from 'framer-motion';

class Works extends Component {
    state = {
        id: 0,
        title: [
            "No Startled All",
            "In Purple",
            "Was Tapping Lenore Weak",
            "The Metell",
            "In on Lamplight"
        ],
        albumUrls: Object.values(this.props),
        albumDesc: [
            "Will the of or if at. He and shutter token.",
            "Stillness fiery all a lenore have rapping. Merely core or.",
            "Qu'elle vivre aussi de demain souris ou visage. Morceau encadré.",
            "Pilgrimage chaste mine he later vexed the like have adieu.",
            "Borrow front hope lent this i the of. Above the."
        ]
    }

    increment = () => {
        (this.state.id < 4) ?
            this.setState((prevState) => ({
                id: prevState.id += 1
            }))
            :
            this.setState((prevState) => ({
                id: prevState.id = 0
            }));
    }

    decrement = () => {
        (this.state.id >= 1) ?
            this.setState((prevState) => ({
                id: prevState.id -= 1
            }))
            :
            this.setState((prevState) => ({
                id: prevState.id = 3
            }));
    }

    render() {
        const title = this.state.title;
        const description = this.state.albumDesc;
        const url = this.state.albumUrls;
        const index = this.state.id;


        return (
            <motion.section
                className='hero-album'
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 1 }}
            >
                <img src={url[index]} alt='' className='hero-album-image' />
                <div className="overlay">
                    <h3>{title[index]}</h3>
                    <p>{description[index]}</p>
                    <div className="album-arrows">
                        <svg className='album-arrows-icon' onClick={this.decrement} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525 525"><path d="M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z" /></svg>
                        <svg className='album-arrows-icon' onClick={this.decrement} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175"><path d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z" /></svg>
                    </div>
                </div>
            </motion.section>
        )
    }
}

export default Works
