import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function HeroSection({
  lightBg,
  topLine,
  topLineColor,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  buttonLink,
  img,
  alt,
  imgStart,
}) {
  console.log(buttonLink);
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper' data-aos='fade-right'>
                <div className={'top-line-' + topLineColor}>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                {buttonLabel ? (
                  <a href={buttonLink}>
                    {/* <Link to='/sign-up'> */}
                    <Button buttonSize='btn--medium' buttonColor='blue'>
                      {buttonLabel}
                    </Button>
                    {/* </Link> */}
                  </a>
                ) : null}
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper' data-aos='fade-left'>
                <img src={img} alt={alt} className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
