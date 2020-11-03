import React from 'react';
import './TechStack.css';
import { MdBlurOn } from 'react-icons/md';
import {
  reactIcon,
  idx,
  antdesign,
  semantic,
  fleek,
  filecoin,
  buiddler,
  scaffold,
} from '../images/index';
function TechStack() {
  return (
    <>
      <div className='home__hero-section darkBg'>
        <div className='container'>
          <div className='heading'>
            <h1 className='section__heading'>Our TechStack</h1>
          </div>
          <div className='Tech__container'>
            <div className='box__1'>
              <div className='card__content'>
                <div className='icon'>
                  <img src={reactIcon} alt='' srcset='' />
                </div>

                <p>React</p>
              </div>
            </div>

            <div className='box__1'>
              <div className='card__content'>
                <div className='icon'>
                  <img src={antdesign} alt='' srcset='' />
                </div>

                <p>React</p>
              </div>
            </div>

            <div className='box__1'>
              <div className='card__content'>
                <div className='icon'>
                  <img src={semantic} alt='' srcset='' />
                </div>

                <p>React</p>
              </div>
            </div>

            <div className='box__1'>
              <div className='card__content'>
                <div className='icon'>
                  <img src={fleek} alt='' srcset='' />
                </div>

                <p>Semantic UI</p>
              </div>
            </div>

            <div className='box__1'>
              <div className='card__content'>
                <div className='icon'>
                  <img src={filecoin} alt='' srcset='' />
                </div>

                <p>Semantic UI</p>
              </div>
            </div>
            <div className='box__1'>
              <div className='card__content'>
                <div className='icon'>
                  <img src={idx} alt='' srcset='' />
                </div>

                <p>Semantic UI</p>
              </div>
            </div>

            <div className='box__1'>
              <div className='card__content'>
                <div className='icon'>
                  <img src={buiddler} alt='' srcset='' />
                </div>

                <p>Semantic UI</p>
              </div>
            </div>

            <div className='box__1'>
              <div className='card__content'>
                <div className='icon'>
                  <img src={scaffold} alt='' srcset='' />
                </div>

                <p>Semantic UI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechStack;
