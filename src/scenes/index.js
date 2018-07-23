import React, { Component } from 'react';
import WebFont from 'webfontloader';
import './styles.css';

import Navigation from '../components/Navigation';
import Header from '../components/Header';

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
        <p className="App-intro">
          Katelyne Maroney's is <b>coming soon</b>. In the meantime, feel free to be enchanted by the ReactJS logo.
        </p>
      </div>
    );
  }
}

export default App;
