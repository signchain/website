import React from 'react';
import './Feature.css';

import { FiCpu, FiShield, FiCodesandbox } from 'react-icons/fi';
function Features() {
  return (
    <>
      <div className='home__hero-section '>
        <div className='container'>
          <div className='heading'>
            <h1 className='section__heading dark'>Features</h1>
          </div>
          <div className='Feature__container'>
            <div className='box__1'>
              <div className='card__content'>
                <div className='icon'>
                  <FiCpu className='feature-icon' />
                </div>
                <h1 className='heading dark'>Interoperable proofs</h1>
                <p className='home__hero-subtitle dark'>
                  Signchain uses standard dicentralized digital identity and
                  signature proofs that can be verified on any platform.
                </p>
              </div>
            </div>

            <div className='box__1'>
              <div className='card__content'>
                <div className='icon'>
                  <FiShield className='feature-icon' />
                </div>
                <h1 className='heading dark'>Privacy focused</h1>
                <p className='home__hero-subtitle dark'>
                  We focus on delivering the much needed privacy for the legal
                  documents through contracts, DIDs and E2E encryption.
                </p>
              </div>
            </div>

            <div className='box__1'>
              <div className='card__content'>
                <div className='icon'>
                  <FiCodesandbox className='feature-icon' />
                </div>
                <h1 className='heading dark'>Workflow efficiency</h1>
                <p className='home__hero-subtitle dark'>
                  With lesser delays and lower cost of workflow, it’s an ideal
                  solution to the growing remote work environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
