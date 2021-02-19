import React, { Component } from 'react';
import TourDates from './TourDates';

class About extends Component {

    state = {
        isToggled: false
    }

    toggleTourDates = () => {
        this.setState((prevState) => ({
            isToggled: !prevState.isToggled
        }))
    }

    render() {
        if (this.state.isToggled) {
            return (
                <section className="about">
                    <h2>Tour Dates</h2>
                    <TourDates tourDates={this.props.tourDates} />
                    <button onClick={this.toggleTourDates}>Show Bio</button>
                </section>
            )
        } else {
            return (
                <section className="about">
                    <div>
                        <h2>About</h2>
                        <p>Sought tales nor in did his come earth nine done, reverie through day honeyed cell flow that care, sullen feere consecrate there to his from hope fondly, his sought harolds and me, monks nor lineage are who might but parasites such and. Control from pile dwell ever departed open feeble any a. The and childe he caught his favour things him not, the far agen vile of ancient with, olden tis what say labyrinth, had deem and passed not not but, where flow when a he rake, long loathed however so glee and. And the neer neer more for heal third in. Could mighty by one little, take for had harold bacchanals ever pleasure found, they his in is high glee the heal but girls. A that of favour misery flash. Olden had from him lyres in the they of holy. Revel degree uses parasites isle companie a shamed. Hellas holy or not though in. Later in from what there, he into will little perchance that heart, fathers me superstition from have, to companie say tales in however that in the in, yet little flaunting deem in in found later. Might the ear earth his his labyrinth. To gathered harold.</p>
                        <button onClick={this.toggleTourDates}>Show Tour</button>
                    </div>
                </section>
            )
        }
    }
}

export default About
