import React from 'react';
import { Link } from 'react-router-dom';
import './DevelopmentTimeline.css';

function DevelopmentTimeline() {
  return (
    <>
      <div className='home__hero-section darkBg'>
        <div className='container dev__container'>
          <h1 className='section__heading '>Where it all Started? </h1>

          <ul className='timeline'>
            <li className='event ' data-date=' 2020 June'>
              <h1 className='timeline__heading'>
                Started as a module for our arbitration project
              </h1>
            </li>
            <li className='event' data-date='2020 August'>
              <h1 className='timeline__heading'>
                Rework on the Architeture and Implementation
              </h1>
            </li>

            <li className='event' id='date' data-date='2020 October'>
              <h1 className='timeline__heading'>POC at EthOnline Hackathon</h1>
              <a
                className='dev__link'
                href='https://hack.ethglobal.co/showcase/signchain-recY6409wwWnJyxJ9'
                target='_next'
              >
                <p>
                  Signchain has bagged 2 sponsor prizes during the EthOnline
                  hackathon 🎉 🎊
                  <p />
                  <div>
                    🔶 Ceramic: Best overall use of Identity Index (IDX) Library{' '}
                    <br /> 📁 Protocol Labs, 3rd place{' '}
                  </div>
                </p>
              </a>
            </li>

            <li className='event' data-date='Q4 2020 '>
              <h1 className='timeline__heading'>
                Updates on data archival and confidential sharing
              </h1>
            </li>

            <li className='event' data-date='Q1 2021 '>
              <h1 className='timeline__heading'>
                Verifiable credentials with mobile app
              </h1>
            </li>

            <li className='event' data-date='Q2 2022 '>
              <h1 className='timeline__heading '>
                Support for Several regulated e-signature standards
              </h1>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default DevelopmentTimeline;
