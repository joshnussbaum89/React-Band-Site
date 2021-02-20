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
                        <span onClick={this.decrement}>&#x2190;</span>
                        <span onClick={this.increment}>&#x2192;</span>
                    </div>
                </div>
            </motion.section>
        )
    }
}

export default Works
