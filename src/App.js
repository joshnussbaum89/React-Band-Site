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

  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Header />
          <Switch>
            <Route exact path='/' render={() => <Hero />} />
            <Route path='/about' component={About} />
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
