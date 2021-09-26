import React from 'react'

import NavBar from './home/NavBar'
import CakeCategory from "./home/CakesCategory"
import FlowerCategory from './home/FlowersCategory'
import Footer from './home/Footer'
import CarouselHomePage from './home/CarouselHomePage'

function Homepage() {
    return (
        <React.Fragment>
            <div className="homepage">
                <NavBar />
                <CarouselHomePage />
                <CakeCategory />
                <FlowerCategory />
                <Footer />
            </div>
            <style jsx>{`
                .homepage{
                    background-color: #F2F2F2;
                }
            `}</style>
        </React.Fragment>
    )
}

export default Homepage
