import React, { Component } from 'react';
import './styles.css';
import facebook from './icons/facebook.png';
import instagram from './icons/instagram.png';
import twitter from './icons/twitter.png';
import vimeo from './icons/vimeo.png';
import youtube from './icons/youtube.png';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="icons">
          <span className="icon">
            <a href="//vimeo.com/katelynem" target="_blank" rel="noopener noreferrer">
              <img src={vimeo} alt="Katelyne Maroney's Vimeo" />
            </a>
          </span>
          <span className="icon">
            <a href="//www.instagram.com/katelyne_m/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Katelyne Maroney's Instagram" />
            </a>
          </span>
          <span className="icon">
            <a href="//twitter.com/katelyne_m" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Katelyne Maroney's Twitter" />
            </a>
          </span>
          <span className="icon">
            <a href="//www.facebook.com/katelyne.maroney" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Katelyne Maroney's Facebook" />
            </a>
          </span>
          <span className="icon">
            <a href="//www.youtube.com/channel/UC-R9vCXR20kxvW9XjVYlxGQ?view_as=subscriber" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="Katelyne Maroney's Youtube" />
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
