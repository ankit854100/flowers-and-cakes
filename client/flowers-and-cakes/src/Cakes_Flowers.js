import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './all_cakes.jpg';
import img2 from './blackforest_cake.jpg';
import img3 from './chocholate_cake.jpg';
import img4 from './pineapple_cake.jpg';
import img5 from './all_flowers.jpg';
import img6 from './carnations.jpg';
import img7 from './roses.jpg';
import img8 from './mix_flowers.jpg';

export const CFS =()=>{
    return (
        <main class="main-content">
            <br/>
            <br/>
    <div class="container-fluid">
    <div class="new-categories_cdp" data-wdgtinfo="category~Cakes~8~">
        <h2 class="category-title">Cakes Online</h2>
        <div class="main-categories">
            <div class="cols6">
                <div class="single-category">
                    <a href=''>
                        <div class="categories-img_aspectRation_bigimg">
                            <img src={img1} alt="Cakes Delivery Online" height="650px" width="500px"/>
                        </div>
                        <div class="categories-descriptions">
                            <h4>All Cakes</h4>
                            <h5>Celebration-Ready</h5>
                        </div>
                    </a>
                </div>
                <div class="single-category">
                    <a href="google.com" data-wdgt="~~3~ black forest Cakes~">
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
                            <h5>Bittersweet Symphony</h5>
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
                            <h5>Tangy Temptations</h5>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  <br/>
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
                    <a href="google.com" data-wdgt="">
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
                    <a href="google.com" data-wdgt="">
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
                    <a href="google.com" data-wdgt="">
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
    <hr/>
    </div>
</main>
)
}
export default CFS;
