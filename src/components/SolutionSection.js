import React from 'react';
import './SolutionSection.css';
import Steps from './SolutionData';
import Works from '../images/works.svg';

function SolutionSection() {
  return (
    <>
      <div className='home__hero-section darkBg'>
        <div className='container darkBg'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div className='col'>
              {Steps.map((steps) => (
                <div className='home__hero-text-wrapper'>
                  <h1 className='heading '>{steps.headline}</h1>
                  <p className='home__hero-subtitle '>{steps.description}</p>
                </div>
              ))}
            </div>

            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={Works} alt='alt' className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SolutionSection;
