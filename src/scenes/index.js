import React, { Component } from 'react';
import WebFont from 'webfontloader';
import { Switch, Route } from 'react-router-dom';
import './styles.css';

import Navigation from '../components/Navigation';
import About from './About';
import Contact from './Contact';
import Gallery from './Gallery';
import Videos from './Videos';

WebFont.load({
  google: {
    families: ['Montserrat:400,600', 'sans-serif']
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="body">
          <Switch>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/gallery' component={Gallery}/>
            <Route exact path='/videos' component={Videos}/>
            <Route exact path='/' component={Gallery}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
