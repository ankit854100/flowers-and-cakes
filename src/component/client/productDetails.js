import React from 'react';
import './productDetails.css'
import 'bootstrap/dist/css/bootstrap.css';

export class ProductDetails extends React.Component{

    state ={
        products:[
          {
            "_id ":"1",
            "title": "Chocolate Cake ",
            "weight" :"Half kg",
            "src": [
              "https://imgcdn.floweraura.com/banners/chocolate-cakes.jpg?tr=h-203,w-236",
              "https://i1.fnp.com/images/pr/s/v20210325114058/chocolate-truffle-cream-cake-half-kg_1.jpg",
              "https://i1.fnp.com/images/pr/s/v20210325114059/chocolate-truffle-cream-cake-half-kg_2.jpg",
              "https://i1.fnp.com/images/pr/s/v20210325114100/chocolate-truffle-cream-cake-half-kg_3.jpg",
               "https://i1.fnp.com/images/pr/s/v20210325114100/chocolate-truffle-cream-cake-half-kg_4.jpg",
               "https://i1.fnp.com/images/pr/s/v20210325114102/chocolate-truffle-cream-cake-half-kg_5.jpg"
            ],
            "description":"This is Chocolate cake",
            "content": "This is a short review content you can add a content and similar cakes links here.",
            "price":240,
            "category":"chocolate",
            "rating": ["2","3","4","5"]
          }
        ]
      }
      render(){
          const{products} =this.state;
           console.log(products);
             return (
                  <>
                  <div> This is Header</div><hr/>
                  <div className="product_details-contaoner" class=''><hr/>
                    { 
                      products.map(item=>(
                        <div className="product-details-row"class='container' >
                            <div className="show_images" class='col1'>
                            <button onclick="topArrow()" class="thumb-button arrow-up slick-arrow slick-disabled" aria-disabled="true">
                            <i class="material-icons"></i>
                            </button>
                            <div class='image-space'><img className ="Img1"src={item.src[1]} alt=" "></img></div>
                            <div class='image-space'><img className ="Img2" src={item.src[2]} alt=" " ></img></div>
                            <div class='image-space'><img className ="Img3" src={item.src[3]} alt=" "></img></div>
                            <div class='image-space'> <img className ="Img4" src={item.src[4]} alt=" "></img></div>
                            <div class='image-space'> <img className ="Img5" src={item.src[5]} alt=" "></img></div>
                            
                            </div>
                            <div className="big_img" class='col2 fixed-bottom'>
                              <img  className="classname2" src="https://i1.fnp.com/images/pr/l/v20190802125859/cream-drop-chocolate-cake-half-kg_1.jpg"alt="" ></img>
                            </div> 
                            <div className="product-content" class='col3 overflow-auto'> 
                                <div className="all-product-info">
                                  <h3>{item.title}-{item.weight}</h3>
                                  <div>
                                  <span class="curr-symbol">₹</span>
                                  <span class="price">{item.price}</span>
                                   </div>
                                </div>
                                <p >{item.content}</p>
                                
                                <p class='enterpincodeMSG'> <span class='single-line-PINCODE'>Enter correct Pincode for hassle free timely delivery.</span></p>
                                <input type="text" name="pincode" size="25" placeholder="Enter Pincode" class="pincode"/><hr/>
                                <div class="center">
                                    <span class="buttons d-flex flex-row">
                                          <button class="btn btn-warning cart-button px-20" ><span class="">Add To Cart</span></button>
                                    </span>                               
                                    <span class="buttons d-flex flex-row">
                                          <button class="btn btn-info Buy-button px-20">Buy Now </button>
                                    </span>
                                </div><hr/>
                                <div class="description" itemprop="description">
                                   <h4><b>Description</b></h4><hr/>                                 
                                    <div class='product-details'>
                                      <h4><b>Product Details:</b></h4><ul><li>Cake Flavour- Chocolate</li>
                                       <li>Type of Cake - Cream</li><li>Weight- Half Kg</li><li>Shape- Round</li><li>Serves- 4-6 People</li>
                                        <li>Size- 6 inches in Diameter</li></ul>
                                    </div>
                                    <div class="please-note">
                                        <h4><b>Please Note:</b></h4><ul><li>The cake stand, cutlery &amp; accessories used in the image are only for representation purposes. They are not delivered with the cake.</li><li>This cake is hand delivered in a good quality cardboard box.</li><li>This cake will be garnished with fresh cut fruits as per seasonal availability. The picture is only for representation and the actual fruits used might vary.</li></ul>
                                        <ul><li>Country of Origin: India</li></ul>
                                    </div>
                                    <div class="delivary-info">
                                         <h3><b>Delivery Information</b></h3><hr/>
                                         <ul><li>Every cake we offer is handcrafted and since each chef has his/her own way of baking and designing a cake, there might be slight variation in the product in terms of design and shape.</li>
                                         <li>The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product to be delivered.</li><li>Since cakes are perishable in nature, we attempt delivery of your order only once. The delivery cannot be redirected to any other address.</li>
                                         <li>This product is hand delivered and will not be delivered along with courier products.</li>
                                         <li>Occasionally, substitutions of flavours/designs is necessary due to temporary and/or regional unavailability issues.</li></ul> </div>
                                    </div><hr/>
                                    <div class="care-info">
                                        <h3><b>Care Instructions</b></h3><hr/>
                                        <ul><li>Store cream cakes in a refrigerator. Fondant cakes should be stored in an air conditioned environment.</li><li>Slice and serve the cake at room temperature and make sure it is not exposed to heat.</li><li>Use a serrated knife to cut a fondant cake.</li>
                                        <li>Sculptural elements and figurines may contain wire supports or toothpicks or wooden skewers for support.</li><li>Please check the placement of these items before serving to small children.</li>
                                        <li>The cake should be consumed within 24 hours.</li><li>Enjoy your cake!</li></ul> 
                                    </div>
                              </div>
                      </div>   
                      ))}
                   </div>
                   <hr/>
                   
                <div>This is Footer</div>
            </> 
            )
            }
          } 

export default ProductDetails;