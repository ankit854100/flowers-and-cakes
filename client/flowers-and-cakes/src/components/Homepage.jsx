import React, { useEffect } from 'react'

import NavBar from './home/NavBar'
import CakeCategory from "./home/CakesCategory"
import FlowerCategory from './home/FlowersCategory'
import Footer from './home/Footer'
import CarouselHomePage from './home/CarouselHomePage'
import { useAuth } from '../context/AuthContext'
import { useDispatch, useSelector } from 'react-redux'

import { getAllUsers } from '../redux/users/actionContainer'

function Homepage() {

    const { currentUser } = useAuth();
    const dispatch = useDispatch();
    const userDetails = useSelector(state => state.user.userDetails);

    useEffect(() => {
        if(currentUser && userDetails.name === ""){
            dispatch(getAllUsers(currentUser.email));
        }
    })

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
