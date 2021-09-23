import React from 'react';
import './productDetails.css'

export class MainContent extends React.Component{

    state ={
        products:[
          {
            "_id ":"1",
            "title": "Chocolate Cake ",
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

      function bigImageShow(classname)=> {
        document.getElementById(classname2).src='classname';
      }
    
    render(){
        const{products} =this.state;
        console.log(products)
        return (
            <div className="product_details">
                <hr/>
             { products.map(item=>(
            <div className="details">
              <div className="show_images">
                  <img className ="Img1"src={item.src[1]} alt=" "></img>
                  <img className ="Img2" src={item.src[2]} alt=" " onlclick = 'bigImageShow(Img2)' ></img>
                  <img className ="Img3" src={item.src[3]} alt=" "></img>
                  <img className ="Img4" src={item.src[4]} alt=" "></img>
                  <img className ="Img5" src={item.src[5]} alt=" "></img>
                  
              </div>
            
              <div className="big_img">
                 <img  className="classname2"src="https://i1.fnp.com/images/pr/l/v20190802125859/cream-drop-chocolate-cake-half-kg_1.jpg" alt="" ></img>
              </div> 
              
              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  
                  <span class="curr-symbol">₹</span>
                  <span class="price">{item.price} </span>
                  
                </div>
                
                <p >{item.content}</p>
                <button className="arrToCart" >ADD TO CART</button>
                <button className="buyNow">Buy Now</button>
                <input type="text" name="pincode" placeholder="Enter Pincode" class="pincode"/>
                <hr/>
                <div class="description" itemprop="description">
                <p>{item.description}</p>
                 <h4>Description</h4><hr/>
                 <p><b>Product Details:</b></p><ul><li>Cake Flavour- Chocolate</li><li>Type of Cake - Cream</li><li>Weight- Half Kg</li><li>Shape- Round</li><li>Serves- 4-6 People</li><li>Size- 6 inches in Diameter</li></ul>
                 <p><b>Please Note:</b></p><hr/><ul><li>The cake stand, cutlery &amp; accessories used in the image are only for representation purposes. They are not delivered with the cake.</li><li>This cake is hand delivered in a good quality cardboard box.</li><li>This cake will be garnished with fresh cut fruits as per seasonal availability. The picture is only for representation and the actual fruits used might vary.</li></ul><ul><li>Country of Origin: India</li></ul>
                </div><hr/>
                <p>Reviews: </p>
                
              </div>
              
           </div> 
        ))
      }
      
    </div>
   )
  }
} 

export default MainContent;