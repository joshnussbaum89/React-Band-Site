import React, { Component } from 'react';
import album from '../images/album-one.jpg';

class Works extends Component {
    state = {
        isTurned: false
    }

    toggleDescription = () => {
        this.setState((prevState) => ({
            isTurned: !prevState.isTurned
        }));
    }

    render() {
        if (this.state.isTurned) {
            return (
                <section className='hero-album'>
                    <img src={album} alt='' className='hero-album-image' />
                    <div className="overlay" onClick={this.toggleDescription}>
                        <h3>Album Info</h3>
                        <p>Burden than that sitting on and wide quaff. In nevermore came bust metell living the, shorn bird on you feather.</p>
                        <div className="album-arrows">
                            <span>&#x2190;</span>
                            <span>&#x2192;</span>
                        </div>
                    </div>
                </section>
            )
        } else {
            return (
                <section className='hero-album'>
                    <img src={album} alt='' onClick={this.toggleDescription} />
                </section>
            )
        }
    }
}

export default Works
