import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import divider from './divider.png';
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
        <div className="logo-text"><NavLink to="/">Katelyne Maroney</NavLink></div>
        <img className="divider" src={divider} alt="" />
        <div className="links">
          <div><NavLink activeClassName='is-active' to="/gallery">Gallery</NavLink></div>
          <div><NavLink activeClassName='is-active' to="/videos">Videos</NavLink></div>
          <div><NavLink activeClassName='is-active' to="/about">About</NavLink></div>
          <div><NavLink activeClassName='is-active' to="/contact">Contact</NavLink></div>
        </div>
      </div>
    );
  }
}

export default Navigation;
