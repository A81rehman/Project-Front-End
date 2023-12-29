import React from 'react';
import { Footer } from './Footer';
import {Link} from 'react-router-dom';
import  myimg from '../assets/davide-cantelli-jpkfc5_d-DI-unsplash.jpg';
import $ from 'jquery';

export const Login = () => {

const handleLogin = async () => {
    var  username = $("#username").val();
    var  password = $("#password").val();
    if (username === '' || password === '') {
      window.alert('Input is required');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ UserName: username, Password: password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        $("#Login").css("display", "none");
        $("#Signup").css("display", "none");
        $("#Logout").css("display", "contents");
      } else {
        window.alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  
  $("#username").val(null);
  $("#password").val(null);
  };

  return (
    <>
  <div>
    <img src={myimg} style={{ width: '100vw', height: '90vh' }} alt="Mountains" />
    <h1 className="text" style={{ color: 'white'}}>Login<p className='text2'>Unleash the Power of Fresh, Locally-Sourced Ingredients – UrbanPlate, Your Culinary Haven.Innovative. Fresh. Unforgettable. Welcome to UrbanPlate Eatery.</p><Link to='/Signup' className='text3'>Sign Up</Link></h1>
    </div>
    <section style={{display: 'flex' , flexDirection: 'row' , justifyContent: 'center' , alignItems :'center'}} id="backcolor">
    <div className="flex items-center justify-center mr-auto ml-auto">
    <div className="w-full p-8 my-4 md:px-12 mr-auto rounded-3xl shadow-md">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="font-bold uppercase text-3xl text-red-700">Enter Details</h1>
      </div>
      <div className="flex flex-col items-center justify-center text-center mt-5">

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

</div>

<div className="my-2 w-full flex items-center justify-center text-center">
  <button className="uppercase text-sm font-bold tracking-wide bg-red-600 text-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline" onClick={() => handleLogin ()}>
    Login
  </button>
</div>
    </div>
</div>
</section>
<Footer/>

    </>
  )
}
