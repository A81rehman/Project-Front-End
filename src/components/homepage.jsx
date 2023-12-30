import React, { useState, useEffect } from 'react';
import myimg from '../assets/lily-banse--YHSwy6uqvk-unsplash.jpg';
import myimg1 from '../assets/jay-wennington-N_Y88TWmGwA-unsplash.jpg';
import myimg2 from '../assets/vegetables-set-left-black-slate.jpg';
import { Link } from 'react-router-dom';
import myimg3 from '../assets/jason-leung-poI7DelFiVA-unsplash.jpg';
import myimg4 from '../assets/Screenshot 2023-12-25 195454.png';
import myimg5 from '../assets/Screenshot 2023-12-25 200534.png';
import { Footer } from './Footer';

export const Homepage = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      plusSlides(1);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [slideIndex]);

  useEffect(() => {
    showSlides();
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > 3) {
        newIndex = 1;
      } else if (newIndex < 1) {
        newIndex = 3;
      }
      return newIndex;
    });
  };

  const showSlides = () => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (!slides || !dots) {
      return;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  };

  return (
    <>
      <div className="slideshow-container">
        <div className="mySlides fade" id='caption'>
          <div className="numbertext">1 / 3</div>
          <img src={myimg} style={{ width: '100vw', height: '100vh' }} alt="Nature" />
          <h1 className="text" style={{ color: 'white'}}>UrbanPlates Eatery<p className='text2'>Savor the UrbanPlates Experience: Where Culinary Passion Meets Every Plate!Innovative. Fresh. Unforgettable. Welcome to UrbanPlate Eatery.</p></h1>
          
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src={myimg1} style={{ width: '100vw', height: '100vh' }} alt="Snow" />
          <h1 className="text" style={{ color: 'white'}}>UrbanPlates Eatery<p className='text2'>Discover a Symphony of Flavors at UrbanPlates – Where Freshness is the Main Ingredient.Innovative. Fresh. Unforgettable. Welcome to UrbanPlate Eatery.</p></h1>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src={myimg2} style={{ width: '100vw', height: '100vh' }} alt="Mountains" />
          <h1 className="text" style={{ color: 'white'}}>UrbanPlates Eatery<p className='text2'>Unleash the Power of Fresh, Locally-Sourced Ingredients – UrbanPlate, Your Culinary Haven.Innovative. Fresh. Unforgettable. Welcome to UrbanPlate Eatery.</p></h1>
        </div>
      </div>

      <div style={{ textAlign: 'center'}} id='backcolor'>
        <br />
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <section id='mainbody'>
        <div><p id='para'>Welcome to UrbanPlate Eatery, where culinary excellence meets a vibrant dining experience. At UrbanPlate, we take pride in crafting a gastronomic journey that transcends the ordinary. Our commitment is simple – to deliver a feast for the senses, blending the freshest, locally-sourced ingredients with innovative culinary techniques.
        Immerse yourself in an atmosphere where modern elegance converges with timeless flavors. Our menu is a celebration of diverse tastes, offering a symphony of dishes that cater to every palate. From delectable appetizers to mouthwatering main courses and decadent desserts, each item on our menu is a masterpiece in its own right.</p></div>
        <div id='part1'>
          <div id='sec1'>
            <img src={myimg4} alt=""  id='img1'/>
          </div>
          <div id='sec2'>
            <h1 id='heading'>Flavors of Commitment</h1>
            <p id='para'>What sets UrbanPlate apart is our unwavering dedication to quality and sustainability. We source our ingredients responsibly, ensuring that every dish reflects our commitment to the environment and the communities we serve. Our chefs, driven by passion and creativity, transform these ingredients into culinary delights that will leave a lasting impression on your taste buds.</p>
          </div>
      </div>
      <div id='part2'>
      <div id='sec2'>
            <h1 id='heading'>Unforgettable Moments</h1>
            <p id='para'>Whether you're here for a casual brunch, a business lunch, or a special celebration, UrbanPlate provides a welcoming space for food enthusiasts and connoisseurs alike. Our warm and inviting ambiance complements the diverse menu, creating an unforgettable dining experience for our guests.</p>
          </div>
          <div id='sec1'>
            <img src={myimg3} alt=""  id='img1'/>
          </div>
      </div>
      <div id='part1'>
          <div id='sec1'>
            <img src={myimg5} alt=""  id='img1'/>
          </div>
          <div id='sec2'>
            <h1 id='heading'>Experience the Art of Dining</h1>
            <p id='para'>At UrbanPlate Eatery, we invite you to savor more than just a meal; we invite you to savor an experience. Join us on a journey of culinary discovery, where every bite tells a story, and every visit leaves you with a longing for more. Welcome to UrbanPlate – where passion, flavor, and community come together to redefine the art of dining.</p>
          </div>
      </div>
      </section>
      <Footer/>

 
    </>
  );
};