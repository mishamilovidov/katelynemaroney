import React, { Component } from 'react';
import WebFont from 'webfontloader';
import './styles.css';

import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Photography from './Photography';

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
        <Header />
        <div className="body">
          <Photography />
        </div>
      </div>
    );
  }
}

export default App;
