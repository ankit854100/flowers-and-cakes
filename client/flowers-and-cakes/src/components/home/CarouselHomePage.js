import React from 'react'
import {Carousel} from 'react-bootstrap'

import './CarouselHomePage.css'

function CarouselHomePage() {
  return (
    <div className="carouselHomePage">
      <Carousel fade>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://i1.fnp.com/assets/images/custom/new-desk-home/hero-banners/SameDayDelivery1md2_3may_.jpg"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://i1.fnp.com/assets/images/custom/new-desk-home/hero-banners/Combos-Desk-25-feb-2021.jpg"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://i1.fnp.com/assets/images/custom/new-desk-home/hero-banners/Birthday-Banner-Desk-8-sept-2021.jpg"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselHomePage
