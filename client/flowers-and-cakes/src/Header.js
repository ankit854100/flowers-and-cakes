import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './header.css'

export const Header =()=>{
    return (
        <div>
            <Carousel>
            <Carousel.Item>
            <img
            className="d-block w-100 cake"
            src="cake.jpg"
            alt="First slide"
            />
            <Carousel.Caption>

            <h3>Cakes</h3>
            <p>All Types of Cake is available Here. Anniversary Cakes, Birthday Cakes, Truffle Cakes and for all Occassional events.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
            className="d-block w-100 flower"
            src="flower.jpg"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Flower</h3>
            <p>Birthday, Anniversary and Love N Romance. Give your partner or your family with a gesture of love.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
            className="d-block w-100 rocher"
            src="rocher.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Combo Offer</h3>
            <p>This Festive Season celebrate with your Family and Close ones.Get 30% off on your first order.</p>
            </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    )
};

export default Header;