import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import NavBar from './home/NavBar'
import CakeCategory from "./home/CakesCategory"
import FlowerCategory from './home/FlowersCategory'
import Footer from './home/Footer'

function Homepage() {
    return (
        <React.Fragment>
            <div className="homepage">
                <NavBar />
                <CakeCategory />
                <FlowerCategory />
                <Footer />
            </div>
            <style jsx>{`
                .homepage{
                    background-color: #F2F2F2;
                    margin-top: 5rem;
                }
            `}</style>
        </React.Fragment>
    )
}

export default Homepage
