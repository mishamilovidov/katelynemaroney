import React, { Component } from 'react';
import WebFont from 'webfontloader';
import { Switch, Route } from 'react-router-dom';
import './styles.css';

import Navigation from '../components/Navigation';
import Gallery from './Gallery';

WebFont.load({
  google: {
    families: ['Montserrat', 'sans-serif']
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="body">
          <Switch>
            <Route exact path='/gallery' component={Gallery}/>
            <Route exact path='/' component={Gallery}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
