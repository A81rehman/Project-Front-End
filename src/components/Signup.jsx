import React from 'react';
import { Footer } from './Footer';
import  myimg from '../assets/jay-wennington-N_Y88TWmGwA-unsplash.jpg';
import $ from 'jquery';

export const Signup = () => {
  const handleSignup = async () => {
  var name=  $("#fname").val();
  var email=  $("#email").val();
  var username= $("#username").val();
  var password=  $("#password").val();
  var date= $("#dateofbirth").val();

    if (username === '' || password === '' || date === '' || name === '' || email === '') {
      window.alert('Input is required');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({Name:name, Email: email, UserName: username, Password: password , DateofBirth : date}),
      });

      if (response.ok) {
        window.alert('Signup successful. Please login.');
      } else {
        const errorData = await response.json();
        window.alert(`Signup failed. ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
    $("#fname").val(null);
    $("#email").val(null);
 $("#username").val(null);
 $("#password").val(null);
  $("#dateofbirth").val(null);
  };

  return (
    <>
    <div>
    <img src={myimg} style={{ width: '100vw', height: '90vh' }} alt="Mountains" />
    <h1 className="text" style={{ color: 'white'}}>Sign Up<p className='text2'>Unleash the Power of Fresh, Locally-Sourced Ingredients – UrbanPlate, Your Culinary Haven.Innovative. Fresh. Unforgettable. Welcome to UrbanPlate Eatery.</p></h1>
    </div>
    <section style={{display: 'flex' , flexDirection: 'row' , justifyContent: 'center' , alignItems :'center'}} id="backcolor">
    <div className="flex items-center justify-center mr-auto ml-auto">
    <div className="w-full p-8 my-4 md:px-12 mr-auto rounded-3xl shadow-md">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="font-bold uppercase text-3xl text-red-700">Enter Details</h1>
      </div>
      <div className="flex flex-col items-center justify-center text-center mt-5">
  <input id='fname'
    className="w-full bg-gray-100 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline mb-1"
    type="text"
    placeholder="Name*"
  />
  <input id='email'
    className="w-full bg-gray-100 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline mb-1"
    type="email"
    placeholder="Email*"
  />
  <input id='username'
    className="w-full bg-gray-100 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline mb-1"
    type="text"
    placeholder="User Name*"
  />
  <input id='password'
    className="w-full bg-gray-100 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline mb-1"
    type="password"
    placeholder="Password*"
  />
  <input id='dateofbirth'
    className="w-full bg-gray-100 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline mb-1"
    type="date"
    placeholder="Date of Birth*"
  />
</div>

<div className="my-2 w-full flex items-center justify-center text-center">
  <button className="uppercase text-sm font-bold tracking-wide bg-red-600 text-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline" onClick={() => handleSignup()}>
    Sign up
  </button>
</div>
    </div>
</div>
</section>
<Footer/>
    </>
  )
}
