import React, { useState } from 'react'
import {Button} from 'react-bootstrap'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import Loader from "react-loader-spinner";
import { useAuth } from "../../context/AuthContext";

import { setSelectedProduct } from '../../redux/items/actionContainer';

import './itemCard.css'
import { updateUser } from '../../redux/users/actionContainer';

function ItemCard(props) {

    const [disable, setDisable] = useState(false)

    const { currentUser} = useAuth();

    const history = useHistory();
    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.user.userDetails);

    const handleCardClick = () => {
        dispatch(setSelectedProduct(props.item));
        history.push("/product-details");
    }

    const handleAddToCart = () => {

        setDisable(true);
        const updatedData = {...userDetails, cart: [...userDetails.cart, {...props.item, quantity: 1}]};   
        dispatch(updateUser(userDetails._id, updatedData))
            .then(() => {
                alert("Product added to cart");
                setDisable(false);
            })
    }

    return (
        <div className="itemCard">
            {/* <img src="https://images.unsplash.com/photo-1586968295564-92fd7572718b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" /> */}
            <img src={props.item.images[0]} alt="" onClick={handleCardClick}/>
            <div className="itemCard-bottom">
                <div className="itemCard-details">
                    <p>{props.item.title}</p>
                    <div>
                        <span><i class="fas fa-rupee-sign"></i>{" "}{props.item.price}</span>
                    </div>
                </div>
                <Button variant="success" size="sm" disabled={disable || (currentUser && currentUser.email === "ankit854100@gmail.com") || !currentUser} onClick={handleAddToCart}>{disable? <Loader type="ThreeDots" color="#fff" height="30" width="30"/> : "add to cart"}</Button>
            </div>
        </div>
    )
}

export default ItemCard
