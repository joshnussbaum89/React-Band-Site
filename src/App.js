import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <Hero />} />
          <Route path='/about' component={About} />
          <Route path='/works' component={Works} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
