import React from 'react';
import './SolutionSection.css';
import Steps from './SolutionData';
import Works from '../images/how.svg';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function SolutionSection() {
  return (
    <>
      <div className='home__solution-section darkBg'>
        <div className='container solution__container darkBg'>
          <h1 className='section__heading'>How it Works?</h1>
          <div
            className='row home__solution-row'
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div className='col'>
              {Steps.map((steps) => (
                <div
                  className='home__solution-text-wrapper'
                  data-aos='fade-right'
                >
                  <h1 className='solution__heading '>{steps.headline}</h1>
                  <p className='home__solution-subtitle '>
                    {steps.description}
                  </p>
                </div>
              ))}
            </div>

            <div className='col'>
              <div className='home__solution-img-wrapper' data-aos='fade-left'>
                <img src={Works} alt='alt' className='home__solution-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SolutionSection;
