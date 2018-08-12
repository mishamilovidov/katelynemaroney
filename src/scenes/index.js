import React, { Component } from 'react';
import WebFont from 'webfontloader';
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
          <Gallery />
        </div>
      </div>
    );
  }
}

export default App;
