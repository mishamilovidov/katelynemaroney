import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <div className="logo-text"><Link to="/">Katelyne Maroney</Link></div>
        <div className="links">
          <div><Link to="/gallery">Gallery</Link></div>
          <div><Link to="/videos">Videos</Link></div>
          <div><Link to="/about">About</Link></div>
          <div><Link to="/contact">Contact</Link></div>
        </div>
      </div>
    );
  }
}

export default Navigation;
