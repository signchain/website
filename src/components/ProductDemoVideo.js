import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Button } from './Button';
import Video from '../images/video.svg';
import Modal from 'react-modal';
import './ProductDemoVideo.css';

function ProductDemoVideo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <div style={{ width: '80%', height: '600px' }}>
        <ReactPlayer
          url='https://youtu.be/tPuTKhuddHk'
          width='100%'
          height='100%'
          controls
          playing
          playIcon
        /> */}
      {/* <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/XZy307J-0dI'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe> */}
      {/* </div> */}
      <div className='modal'>
        {' '}
        <Modal
          isOpen={open}
          onRequestClose={() => setOpen(false)}
          shouldCloseOnOverlayClick={() => setOpen(false)}
        >
          <h2>SG in action</h2>
          <ReactPlayer
            url='https://www.youtube.com/embed/XZy307J-0dI'
            width='100%'
            height='100%'
            controls
            playing
            playIcon
          />
          <div style={{ marginTop: '14px 0 14px 0' }}>
            <Button
              buttonSize='btn--medium'
              buttonColor='blue'
              onClick={() => setOpen(false)}
            >
              Close Player
            </Button>
          </div>
        </Modal>
      </div>

      <div className='home__hero-section'>
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper' data-aos='fade-right'>
                <h1 className='heading dark'>Signchain in Action</h1>
                <p className='home__hero-subtitle dark'>
                  Signchain (Digital signing platform for legal documents) demo
                  video for ETHOnline hackathon.
                </p>

                <a href='#'>
                  {/* <Link to='/sign-up'> */}
                  <Button
                    buttonSize='btn--medium'
                    buttonColor='blue'
                    onClick={() => setOpen(true)}
                  >
                    Play Video
                  </Button>
                  {/* </Link> */}
                </a>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper' data-aos='fade-left'>
                <img src={Video} alt='IMG' className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDemoVideo;
