import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
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
        <div className="HamburgerMenu">
          <HamburgerMenu
            isOpen={this.state.open}
            menuClicked={this.handleClick.bind(this)}
            width={18}
            height={15}
            strokeWidth={1}
            rotate={0}
            color='white'
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
      </div>
    );
  }
}

export default Navigation;
