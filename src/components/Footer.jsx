import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {

return (
    <>
    <footer className="relative dark:bg-customGray pt-8 pb-6">
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
        <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-2xl font-semibold text-red-600">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-white">
            Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="text-lg mt-0 mb-2 text-white">
            <div className="text-2xl font-semibold text-red-600">Privacy Policy | Terms of Service | Accessibility</div>

            © 2023 UrbanPlate Eatery. All rights reserved.
            Designed by Abdul Rehman
            </div>
            <div className="mt-6 lg:mb-0 mb-6">
            <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fab fa-twitter"></i>
            </button>
            <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fab fa-facebook-square"></i>
            </button>
            <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fab fa-dribbble"></i>
            </button>
            <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fab fa-github"></i>
            </button>
            </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
            <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-xl  text-red-600 font-semibold mb-2">Opening</span>
                <ul className="list-unstyled">
                <li className="text-white  font-semibold block pb-2 text-lg">Monday - Saturday
                </li>
                <li className="text-white  font-semibold block pb-2 text-sm">09AM - 09PM
                </li>
                <li className="text-white  font-semibold block pb-2 text-lg">Sunday
                </li>
                <li className="text-white  font-semibold block pb-2 text-sm">10AM - 08PM
                </li>
                </ul>
            </div>
            <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-xl  text-red-600 font-semibold mb-2">Company</span>
                <ul className="list-unstyled">
                <li>
                <Link to='/Aboutus' className="text-white hover:text-red-600 font-semibold block pb-2 text-sm">About Us</Link>
                </li>
                <li>
                <Link to='/Contactus' className="text-white hover:text-red-600 font-semibold block pb-2 text-sm">Contact Us</Link>
                </li>
                <li>
                <Link to='/Booktable' className="text-white hover:text-red-600 font-semibold block pb-2 text-sm">Reservation</Link>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    </div>
    </footer>
    </>
);
};