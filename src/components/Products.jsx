import * as React from 'react';
import $ from 'jquery';
import { Footer } from './Footer';
import  myimg from '../assets/davide-cantelli-jpkfc5_d-DI-unsplash.jpg';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

export const Products = () => {
  const navigate = useNavigate();

  const handleEdit = (productid) => {
    console.log('Handling Product Object:', productid);
    navigate(`/EditProducts/${productid}`);
  };

  function deleteproduct(id){
    $.ajax({
        url:"http://localhost:3000/api/products/" + id,
        method: "DELETE",
    success:function(){
        loadproducts();
    }
    })
}

  function loadproducts(){
    $.ajax({
        url:"http://localhost:3000/api/products",
        method: "GET",
        error: function(){
          var products2 = $("#sec5");
          products2.append("An Error has Occured");
        },
        success: function(res){
            console.log(res);
        var products2 = $("#sec5");
        products2.empty();
        for(var i = 0; i < res.length ; i++){
        var product2 = res[i];
  products2.append(`<div class="product" id='${product2._id}'><img src='${product2.Image}' class='imgstyle' id='productimage'/><h3 id='name'>${product2.Name}</h3><p id='Ingredients'>${product2.Ingredients}</p><p id='Category'>${product2.Category}</p><p id='Description'>${product2.Description}</p>
        <div id='pricecontainer'><button id='price'>${product2.Price} Rs</button><div id='btn'><button id='Edit' class='edit'>Edit</button> 
        <button id='Delete' class='Del'>Delete</button>
        </div></div>`);
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
      } 
    })
}

loadproducts();

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
    <Footer/>
    </>
)
}
