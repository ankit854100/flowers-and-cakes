import React from 'react';
import './footer.css'

export default function Footer() {
    return (
        <>
        <div className="footer">
        <div className="line"></div>
        <div className="box-container">
            <div className="box">
                <h3>Flowers & Cakes <i className="fas fa-shopping-basket"></i></h3>
                <p>This Website helps you to order different types of flowers and cakes based on different occassions like Anniversary,Birthday,Marriage and Farewell.</p>
            <div className="share">
                <a href="/" className="fab fa-facebook-f"></a>
                <a href="/" className="fab fa-twitter"></a>
                <a href="/" className="fab fa-instagram"></a>
                <a href="/" className="fab fa-linkedin"></a>
            </div>
            </div>
            <div className="box">
                <h3>contact info</h3>
                <a href="/" className="links"><i className="fas fa-phone"></i> +123-456-789</a>
                <a href="/" className="links"><i className="fas fa-phone"></i> +111-456-789</a>
                <a href="/" className="links"><i className="fas fa-envelope"></i>admin@flowersandcakes.com</a>
                <a href="/" className="links"><i className="fas fa-map-marker-alt"></i>Pune,Maharashtra India-400104</a>
            </div>
            <div className="box">
                <h3>quick links</h3>
                <a href="/" className="links"><i className="fas fa-arrow-right"></i>Home</a>
                <a href="/" className="links"><i className="fas fa-arrow-right"></i>Feature</a>
                <a href="/" className="links"><i className="fas fa-arrow-right "></i>Products</a>
                <a href="/" className="links"><i className="fas fa-arrow-right"></i>Categories</a>
            </div>
            <div className="box">
                <h3>newsletter</h3>
                <p>subscribe for latest updates</p>
                <input type="email" placeholder="your mail" className="email"/>
                <input type="submit" value="subscribe" className="btn"/>
            </div>
          </div>  
          </div>
        </>
    )
}