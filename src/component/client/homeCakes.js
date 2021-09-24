import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './homeCakes.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './Images/all_cakes.jpg';
import img2 from './Images/blackforest_cake.jpg';
import img3 from './Images/chocholate_cake.jpg';
import img4 from './Images/pineapple_cake.jpg';


export const HomeCakes=()=>{
    return (
  <main class="main-content">
    <div class="container-fluid">
    <div class="new-categories_cdp" data-wdgtinfo="category~Cakes~8~">
        <h2 class="category-title">Cakes Online</h2>
        <div class="main-categories">
            <div class="cols6">
                <div class="single-category">
                    <a href='/Cake'>
                        <div class="categories-img_aspectRation_bigimg">
                            <img src={img1} alt="Cakes Delivery Online" height="650px" width="500px"/>
                        </div>
                        <div class="categories-descriptions">
                            <h4>All Cakes</h4>
                            <p><h5>Celebration-Ready</h5></p>
                        </div>
                    </a>
                </div>
                <div class="single-category">
                    <a href="" data-wdgt="~~3~ black forest Cakes~">
                        <div class="categories-img_aspectRation_bigimg">
                            <img src={img2} alt="BlackForest Cake" height="400px" width="500px"/>
                        </div>
                        <div class="categories-descriptions">
                            <h4>Blackforest Cakes</h4>
                            <h5>Best of Two Worlds</h5>
                        </div>
                    </a>
                </div>
            </div>
            <div class="cols6">
                <div class="single-category">
                    <a href="" data-wdgt="~~2~Chocolate Cakes~">
                        <div class="categories-img_aspectRation_bigimg">
                            <img src={img3} alt="Chocolate Cake" height="400px" width="550px"/>
                        </div>
                        <div class="categories-descriptions">
                            <h4 >Chocolate Cakes</h4>
                            <p><h5>Bittersweet Symphony</h5></p>
                        </div>
                    </a>
                </div>
                <div class="single-category">
                    <a href="" data-wdgt="~~4~Pineapple Cakes~">
                        <div class="categories-img_aspectRation_bigimg">
                            <img src={img4} alt="Pineapple Cake" height="650px" width="550px"/>
                        </div>
                        <div class="categories-descriptions">
                            <h4>Pineapple Cakes</h4>
                            <p><h5>Tangy Temptations</h5></p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  <br/>
    </div>
</main>
    )

}
export default HomeCakes;