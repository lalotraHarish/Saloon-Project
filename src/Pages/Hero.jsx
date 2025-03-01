import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className='hero-section col-md-12 row'>
        <div className='col-md-6'>
            <h2 className='hero-h2'>India's No.1 Beauty Salon</h2>
            <p className='hero-p'>
                At Naturals, we believe in the harmony of beauty and excellence.
                Our mission is to provide top-notch beauty services using the
                finest premium products. We strive to create an oasis of
                serenity where you can relax, rejuvenate, and leave looking and
                feeling your best.
              </p>
              <button className='btn btn-primary bg-white'>Book Appointment</button>
              <button className='btn btn-primary bg-transparent'><span>Saloon Locator</span> <FaArrowRightLong/></button>
        </div>
        <div className='col-md-6'>
            <div className='hero-poster'>
                <img className='hero-img' src='src/assets/images/banner_girl.png' alt='poster'/>
            </div>
        </div>
        </section>
  )
}

export default Hero