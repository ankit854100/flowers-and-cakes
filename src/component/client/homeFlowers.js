import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './homeFlowers.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import img5 from './Images/all_flowers.jpg';
import img6 from './Images/carnations.jpg';
import img7 from './Images/roses.jpg';
import img8 from './Images/mix_flowers.jpg';

export const HomeFlowers=()=>{
    return (
    <main class="main-content">
        <div class="container-fluid">
              <div class="new-categories_cdp" data-wdgtinfo="category~All Flowers~10~">
                    <h2 class="category-title">All Flowers</h2>
                    <div class="main-categories">
                        <div class="cols6">
                            <div class="single-category">
                                <a href="" data-wdgt="">
                                    <div class="categories-img aspectRation bigimg">
                                        <img src={img5} alt="Flowers Online"height="500px" width="600px"/>
                                    </div>
                                    <div class="categories-descriptions">
                                        <h4>All Flowers</h4>
                                        <h5>Explore Gorgeous Flowers with 3 Hour Delivery</h5>
                                    </div>
                                </a>
                            </div>
                            <div class="single-category">
                                <a href="/Cakes.js" data-wdgt="">
                                    <div class="categories-img aspectRation smallimg">
                                        <img src={img6} alt="Carnations"height="400px" width="550px"/>
                                    </div>
                                    <div class="categories-descriptions">
                                        <h4>Carnations</h4>
                                        <h5>When you want to express admiration</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="cols6">
                            <div class="single-category">
                                <a href="" data-wdgt="">
                                    <div class="categories-img aspectRation smallimg">
                                        <img src={img7} alt="Roses"height="400px" width="400px"/>
                                    </div>
                                    <div class="categories-descriptions">
                                        <h4>Roses</h4>
                                        <h5>Perfect for conveying love &amp; care</h5>
                                    </div>
                                </a>
                            </div>
                            <div class="single-category">
                                <a href="" data-wdgt="">
                                    <div class="categories-img aspectRation bigimg">
                                        <img src={img8} alt="Mixed Flowers"height="500px" width="400px"/>
                                    </div>
                                    <div class="categories-descriptions">
                                        <h4>Mixed Flowers</h4>
                                        <h5>Variety is the spice of life</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </main>
    )

}
export default HomeFlowers;