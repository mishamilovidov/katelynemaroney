import React, { Component } from 'react';
import './styles.css';

class Navigation extends Component {
  constructor(props){
    super(props);

    this.state = { open: false };
  }

  handleClick() {
    this.setState({
        open: !this.state.open
    });
  }

  render() {
    return (
      <div className="Navigation">
        <div className="logo-text">Katelyne Maroney</div>
        <div className="links">
          <div>Gallery</div>
          <div>Videos</div>
          <div>About</div>
          <div>Contact</div>
        </div>
      </div>
    );
  }
}

export default Navigation;
