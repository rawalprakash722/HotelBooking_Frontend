import React from 'react';

import { Button } from 'react-bootstrap';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/hotel.mp4' autoPlay loop muted />
      <h1>Start Booking</h1>
      <p>Your favourite hotels</p>
      <div className='hero-btns'>
        < Button a href="/rooms"
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button a href="/home"
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='fa fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;