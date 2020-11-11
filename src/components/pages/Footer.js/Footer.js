import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>

            <a href='https://consensolabs.com/#/about'>About </a>
            <a href='https://consensolabs.com/#/team'>Team</a>

            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <a href='https://consensolabs.com/#/contact'>Contact</a>
            <Link to='/'>Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Resources</h2>
            <a href='https://youtu.be/XZy307J-0dI'>Demo Video</a>
            <a href='https://github.com/signchain'>GitHub</a>
            <Link to='/'>Pitch Deck</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Discord</Link>
            <a target="_blank" href='https://twitter.com/sign_chain'>Twitter</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              SIGNCHAIN
            </Link>
          </div>
          <small className='website-rights'>Signchain © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to={
                '//www.facebook.com/consensolabs'
              }
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/watch?v=XZy307J-0dI'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.twitter.com/sign_chain'
              }
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.linkedin.com/company/consensolabs'
              }
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
