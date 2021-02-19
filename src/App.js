import React, { Component } from 'react';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// Pictures
import picOne from './images/album-one.jpg';
import picTwo from './images/album-two.jpg';
import picThree from './images/album-three.jpg';
import picFour from './images/album-four.jpg';
import picFive from './images/just-the-boys.jpg';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';

class App extends Component {

  state = {
    tourDates: [
      {
        venue: 'High Noon Saloon',
        date: '01.01.2021'
      },
      {
        venue: 'The Sylvee',
        date: '01.02.2021'
      },
      {
        venue: 'The Brink Lounge',
        date: '01.03.2021'
      },
      {
        venue: 'Clutch Sound & Picture Studios',
        date: '01.04.2021'
      },
      {
        venue: 'Breese Stevens Field',
        date: '01.05.2021'
      },
      {
        venue: 'Alliant Energy Center',
        date: '01.07.2021'
      },
      {
        venue: 'MadisonTap',
        date: '01.08.2021'
      },
      {
        venue: 'Shi-tty Barn',
        date: '01.09.2021'
      },
      {
        venue: 'The Miramar Theatre',
        date: '01.10.2021'
      },
      {
        venue: 'Cystal Grand Music Theatre',
        date: '01.12.2021'
      },
    ]
  }

  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Header />
          <Switch>
            <Route exact path='/' render={() => <Hero />} />
            <Route path='/about' render={() =>
              <About
                tourDates={this.state.tourDates}
              />}
            />
            <Route path='/works' render={() =>
              <Works
                picOne={picOne}
                picTwo={picTwo}
                picThree={picThree}
                picFour={picFour}
                picFive={picFive}
              />
            } />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
