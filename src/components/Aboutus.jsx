import React from 'react';
import myimg from '../assets/lily-banse--YHSwy6uqvk-unsplash.jpg';
import { Footer } from './Footer';

export const Aboutus = () => {
  return (
    <>
    <div>
    <img src={myimg} style={{ width: '100vw', height: '90vh' }} alt="Mountains" />
    <h1 className="text" style={{ color: 'white'}}>About Us<p className='text2'>Unleash the Power of Fresh, Locally-Sourced Ingredients – UrbanPlate, Your Culinary Haven.Innovative. Fresh. Unforgettable. Welcome to UrbanPlate Eatery.</p></h1>
    </div>
<section  id="backcolor">
      <div className='about-us'>
      <div className='aboutus'>
  <header>
    <h1 id='aboutheading'>UrbanPlates Eatery</h1>
  </header>
  <section className='aboutsection'>
    <h2>About Us</h2>
    <p>Welcome to UrbanPlates Eatery! We are a place where food meets passion, and every dish tells a story...</p>
    <p>Our chefs are dedicated to crafting culinary delights that tantalize your taste buds. We source the finest ingredients to ensure a memorable dining experience for our guests.</p>
    <p>At UrbanPlates Eatery, we believe in creating a warm and inviting atmosphere, whether you're here for a casual meal or a special celebration. Our commitment to quality, hospitality, and creativity sets us apart.</p>
    <p>Thank you for choosing UrbanPlates Eatery. We look forward to serving you and making your dining experience truly exceptional.</p>
  </section>
    </div>
    </div>
    </section>
    <Footer/>
    </>
  )
}
