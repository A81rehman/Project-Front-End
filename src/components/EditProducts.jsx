import React, {useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import $ from 'jquery';
import { Footer } from './Footer';
import  myimg from '../assets/davide-cantelli-jpkfc5_d-DI-unsplash.jpg';
import {useNavigate} from 'react-router-dom';


export const EditProducts = (props) => {
    const { id } = useParams();

    const navigate = useNavigate();
useEffect(() => {
    const isLoggedIn = localStorage.getItem('token') !== "";
    if (isLoggedIn === true) {
        console.log('Logged in');
    }
    else {
    console.log('Logged out');
    navigate(`/Login`);
    }
}, [navigate]);

useEffect(() => {
$.get(`http://localhost:3000/api/products/${id}`, function (res) {
        $("#URL").val(res.Image);
        $("#Name").val(res.Name);
        $("#PCategory").val(res.Category);
        $("#PIngredients").val(res.Ingredients);
        $("#ProductPrice").val(res.Price);
        $("#PDescription").val(res.Description);
});
}, [id]);
  
const updateProduct = () => {
        var _id = `${id}`;
        var Image = $("#URL").val();
        var Name = $("#Name").val();
        var Category = $("#PCategory").val();
        var Ingredients = $("#PIngredients").val();
        var Price = $("#ProductPrice").val();
        var Description = $("#PDescription").val();
       var token = $("#token").html();
        if(Image === "" || Name === "" || Price === "" || Category === "" || Ingredients === "" || Description === ""){
            window.alert("Input is required");
            return;
        }
        $.ajax({
            url:"http://localhost:3000/api/products/"+ _id,
            method: "PUT",
            data:{Name,Category,Price,Description,Ingredients,Image},
                        headers: {
                'x-auth-token': token,
                },
            success: function(res){
                console.log(res);
            }
        })
};

return (
<>
    <div>
    <img src={myimg} style={{ width: '100vw', height: '90vh' }} alt="Mountains" />
    <h1 className="text" style={{ color: 'white'}}>Edit Products<p className='text2'>Unleash the Power of Fresh, Locally-Sourced Ingredients – UrbanPlate, Your Culinary Haven.Innovative. Fresh. Unforgettable. Welcome to UrbanPlate Eatery.</p><Link to='/Product' className='text3'>Products</Link></h1>
    </div>
    <section style={{display: 'flex' , flexDirection: 'row' , justifyContent: 'center' , alignItems :'center'}} id="backcolor">
    <div className="flex items-center justify-center mr-auto ml-auto">
    <div className="w-full p-8 my-4 md:px-12 mr-auto rounded-3xl shadow-md">
    <div className="flex">
        <h1 className="font-bold uppercase text-3xl text-red-700">Enter Details</h1>
    </div>
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
        <input id='URL'
        className="w-full bg-gray-100 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Product Image Url*"
        />
        <input id='Name'
        className="w-full bg-gray-100 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Product Name*"
        />
        <input id='PCategory'
        className="w-full bg-gray-100 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline"
        type="text" placeholder="Product Category*"
        />
        <input id='PIngredients'
        className="w-full bg-gray-100 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Product Ingredients*"
        />
        <input id='ProductPrice'
        className="w-full bg-gray-100 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline"
        type="Number"
        placeholder="Product Price*"
        />
    </div>
    <div className="my-4">
        <textarea id='PDescription'
        placeholder="Product Description*"
        className="w-full h-32 bg-gray-100 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline"
        ></textarea>
    </div>
    <div className="my-2 w-1/2 lg:w-1/4">
        <button
        className="uppercase text-sm font-bold tracking-wide bg-red-600 text-gray-100 p-3 rounded-lg w-full 
        focus:outline-none focus:shadow-outline" onClick={() => updateProduct()}
        >
        Update Product
        </button>
    </div>
    </div>
</div>
</section>
    <Footer/>
</>
);
};
