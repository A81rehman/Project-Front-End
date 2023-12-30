import * as React from 'react';
import $ from 'jquery';
import { Footer } from './Footer';
import { useState, useEffect, useCallback } from 'react';
import  myimg from '../assets/davide-cantelli-jpkfc5_d-DI-unsplash.jpg';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import Pagination from '@mui/material/Pagination';

export const Products = () => {
  const navigate = useNavigate();
  const { page } = useParams();
  const [currentPage, setCurrentPage] = useState(page ? parseInt(page) : 1);
  const [total,setTotal] = useState(0);

  const handlePageChange = useCallback((newPage) => {
    const nextPage = newPage || 1;
    setCurrentPage(nextPage);
    navigate(`/Product/${nextPage}`);
    loadproducts(nextPage);
  }, [setCurrentPage, navigate]);

  const handleEdit = (productid) => {
    console.log('Handling Product Object:', productid);
    navigate(`/EditProducts/${productid}`);
  };

  function deleteproduct(id) {
    $.ajax({
      url: "http://localhost:3000/api/products/" + id,
      method: "DELETE",
      success: function () {
        loadproducts();
      },
    });
  }

  const loadproducts = useCallback((page) => {
    $.ajax({
      url: "http://localhost:3000/api/products?page=" + page,
      method: "GET",
      error: function () {
        var products2 = $("#sec5");
        products2.append("An Error has Occurred");
      },
      success: function (res) {
        var products2 = $("#sec5");
        products2.empty();
        var Meal = res.Meal;
        setTotal(res.total);
        for (var i = 0; i < Meal.length; i++) {
          var product2 = Meal[i];
          products2.append(`
            <div class="product" id='${product2._id}'>
              <img src='${product2.Image}' class='imgstyle' id='productimage'/>
              <h3 id='name'>${product2.Name}</h3>
              <p id='Ingredients'>${product2.Ingredients}</p>
              <p id='Category'>${product2.Category}</p>
              <p id='Description'>${product2.Description}</p>
              <div id='pricecontainer'>
                <button id='price'>${product2.Price} Rs</button>
                <div id='btn'>
                  <button id='Edit' class='edit'>Edit</button> 
                  <button id='Delete' class='Del'>Delete</button>
                </div>
              </div>
            </div>
          `);
        }

        var deletebtns = document.querySelectorAll(".Del");
        deletebtns.forEach((deletebtn, idx) => {
          deletebtn.addEventListener("click", function (e) {
            var productId = this.closest(".product").id;
            console.log(productId);
            deleteproduct(productId);
          });
        });

        var editbtn = document.querySelectorAll(".edit");
        editbtn.forEach((editbtn, idx) => {
          editbtn.addEventListener("click", function (e) {
            var productId = this.closest(".product").id;
            handleEdit(productId);
          });
        });
      },
    });
  }, []);

  useEffect(() => {
    handlePageChange(currentPage);
  }, [currentPage, handlePageChange]);

  return (
    <>
    <div>
    <img src={myimg} style={{ width: '100vw', height: '90vh' }} alt="Mountains" />
    <h1 className="text" style={{ color: 'white'}}>Products<p className='text2'>Unleash the Power of Fresh, Locally-Sourced Ingredients – UrbanPlate, Your Culinary Haven.Innovative. Fresh. Unforgettable. Welcome to UrbanPlate Eatery.</p></h1>
    </div>
    <section id='mainbody' style={{padding:'5% 10%'}}>
        <div><h1 id='para' style={{ fontSize: '40px' , marginBottom : '5%'}}>Products</h1>
        <Link to='/Addproducts' id='Reservation' style={{marginLeft:'2%'}}>Add Products</Link></div>
        <div id='sec5' className='flex flex-col justify-center align-content-center mt-10'>
        </div>
    </section>
    <section id='backcolor' className='flex justify-center items-center pb-8'>
      <Pagination count={Math.ceil(total/10)} shape="rounded" color='primary'  onChange={(e,value)=>{
        handlePageChange(value);
      }} />
    </section>
    <Footer/>
    </>
)
}
