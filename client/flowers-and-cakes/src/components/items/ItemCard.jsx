import React from 'react'
import {Button} from 'react-bootstrap'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux';

import { setCurrentId, setSelectedProduct } from '../../redux/items/actionContainer';

import './itemCard.css'

function ItemCard(props) {

    const history = useHistory();
    const dispatch = useDispatch();

    const handleCardClick = () => {
        dispatch(setSelectedProduct(props.item));
        history.push("/product-details");
    }

    return (
        <div className="itemCard" onClick={handleCardClick}>
            {/* <img src="https://images.unsplash.com/photo-1586968295564-92fd7572718b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" /> */}
            <img src={props.item.images[0]} alt="" />
            <div className="itemCard-bottom">
                <div className="itemCard-details">
                    <p>{props.item.title}</p>
                    <div>
                        <span><i class="fas fa-rupee-sign"></i>{" "}{props.item.price}</span>
                    </div>
                </div>
                <Button size="sm">add to cart</Button>
            </div>
        </div>
    )
}

export default ItemCard
