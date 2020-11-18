import React from 'react';
import './TechStack.css';
import { MdBlurOn } from 'react-icons/md';
import {
  reactIcon,
  idx,
  textileDB,
  semantic,
  fleek,
  filecoin,
  Ether,
} from '../images/index';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function TechStack() {
  return (
    <>
      <div className='home__hero-section darkBg'>
        <div className='container'>
          <div className='heading'>
            <h1 className='tech__heading'>Our TechStack</h1>
          </div>
          <div className='Tech__container'>
            <div className='box__1' data-aos='zoom-in'>
              <div className='card__content'>
                <div className='icon'>
                  <img src={filecoin} alt='' srcset='' />
                </div>

                <h3>Filecoin + Textile Hub, Powergate</h3>
              </div>
            </div>
            <div className='box__1' data-aos='zoom-in'>
              <div className='card__content'>
                <div className='icon'>
                  <img src={textileDB} alt='' srcset='' />
                </div>

                <h3>Textile ThreadDB</h3>
              </div>
            </div>

            <div className='box__1' data-aos='zoom-in'>
              <div className='card__content'>
                <div className='icon'>
                  <img src={idx} alt='' srcset='' />
                </div>

                <h3>Ceramic IDX</h3>
              </div>
            </div>

            <div className='box__1' data-aos='zoom-in'>
              <div className='card__content'>
                <div className='icon'>
                  <img src={Ether} alt='' srcset='' />
                </div>

                <h3>Ethereun Platform</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechStack;
