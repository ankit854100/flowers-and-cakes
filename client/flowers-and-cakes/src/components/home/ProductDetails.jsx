import React, { useEffect } from 'react'
import {Button} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import NavBar from './NavBar';

import './productDetails.css'

function ProductDetails() {

  const selectedProduct = useSelector((state) => state.items.selectedProduct);
  const history = useHistory();

  useEffect(() => {
    if(selectedProduct === null){
      history.push("/");
    }
  })

  return (
    <React.Fragment>
      <NavBar />
      <div className="productDetails">
        <div className="productDetails-left">
          <div className="productDetails-left-imageContainer">
            {/* <img src="https://i1.fnp.com/images/pr/l/v20200910193822/8-white-carnations-bouquet-small_1.jpg" alt="" /> */}
            {selectedProduct.images.map((image) => {
              return <img src={image} alt="" />
            })}
          </div>
          {/* <img className="largeImage"src="https://i1.fnp.com/images/pr/l/v20200910193822/8-white-carnations-bouquet-small_1.jpg" alt="" /> */}
          <img className="largeImage"src={selectedProduct.images[0]} alt="" />
        </div>
        <div className="productDetails-right">
          <span className="productDetails-right-title">{selectedProduct.title}</span>
          <div className="productDetails-right-priceContainer">
            <i class="fas fa-rupee-sign"></i>
            <span>{selectedProduct.price}</span>
          </div>
          <div className="productDetails-right-inputContainer">
            <input type="text" placeholder="Enter pincode"></input>
          </div>
          <div class="productDetails-right-buttonContainer">
            <Button variant="success"><i class="fas fa-cart-plus"></i>{" "}Add to cart</Button>
            <Button variant="warning"><i class="fas fa-bolt"></i>{" "}Buy now</Button>
          </div>
          <div class="productDetails-right-descriptionContainer">

              <p>Product details</p>
              <ul>
                <li>Online White Carnations Bouquet</li>
                <li>8 White Carnations</li>
              </ul>

              <p>Delivery information</p>
              <ul>
                <li>The image displayed is indicative in nature.</li>
                <li>Actual product may vary in shape or design as per the availability</li>
              </ul>

              <p>Care instructions</p>
              <ul>
                <li>The image displayed is indicative in nature.</li>
                <li>Actual product may vary in shape or design as per the availability</li>
              </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProductDetails
