import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

const Navbar = () => {
$(window).on("load", function() {
        $("#Logout").addClass("hidden");
         $("#token").addClass("hidden");
});
const [isNavOpen, setNavOpen] = useState(false);

const toggleNav = () => {
    setNavOpen(!isNavOpen);
};

function Logout(){
    localStorage.setItem('token', "");
    $("#Login").removeClass("hidden");
    $("#Signup").removeClass("hidden");
    $("#Logout").addClass("hidden");
  
}

return (
    <nav className="bg-white border-gray-200 dark:bg-customGray" id='navbar'>
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
        onClick={toggleNav}
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded={isNavOpen}
        >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
        </button>
        <div className={`w-full md:flex md:w-auto ${isNavOpen ? 'block' : 'hidden'}`} id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-customGray md:dark:bg-customGray dark:border-customGray">
            <li>
            <Link to='/' id='font' className="block py-2 px-3 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 dark:text-white md:dark:text-red-500" aria-current="page">Home</Link>
            </li>
            <li>
            <Link to='/Product' id='font' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Products</Link>
            </li>
            <li>
            <Link to='/Aboutus' id='font' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About us</Link>
            </li>
            <li id='Login'>
            <Link to='/Login' id='font' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</Link>
            </li>
            <li id='Logout'>
            <button id='font' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent  ml-2" onClick={() => Logout()}>Logout</button>
            </li>
            <li id='Signup'>
            <Link to='/Signup' id='font' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Signup</Link>
            </li>
        </ul>
        </div>
    </div>
    </nav>
);
};

export default Navbar;
