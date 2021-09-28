import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import CartTableBody from './CartTableBody';

import './cart.css';
import { updateUser } from '../../redux/users/actionContainer';
import NavBar from '../home/NavBar';
import Footer from '../home/Footer';

const Cart=()=>{

    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.user.userDetails);
    
    useEffect(() => {
        calculate();
    })

    const calculate = () => {
        let item = 0;
        let price = 0;
        for(let i  = 0; i < userDetails.cart.length; i++){
            item += 1;
            price += userDetails.cart[i].price;
        }

        setTotalItems(item);
        setTotalPrice(price);
    }

    const handleDeleteAll = () => {
        dispatch(updateUser(userDetails._id, {...userDetails, cart: []}));
    }

    const handleCheckout = () => {
        const cart = userDetails.cart;

        dispatch(updateUser(userDetails._id, {...userDetails, cart: [], orders: [...userDetails.orders, ...cart]}));

        alert("You order is confirmed. Thankyou for shopping!")
    }

    return (
            <React.Fragment>
                <NavBar />
                <div className="cart row justify-content-center m-0 mt-5">
                    <div className="col-md-8 mt-5 mb-5">
                        <div className="card">
                            <div className="card-header bg-dark p-3">
                                <div className="card-header-flex">
                                    <button className="btn btn-danger mt-0 btn-sm" disabled={userDetails.cart.length === 0} onClick={handleDeleteAll}>
                                        <i className="fa fa-trash-alt mr-2"></i>
                                        <span>Empty Cart</span>
                                    </button>
                                    <h5 className="text-white m-0">Cart Calculation </h5>
                                    <Button variant="success" size="sm" disabled={userDetails.cart.length === 0} onClick={handleCheckout}>Checkout</Button>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                {userDetails.cart.length ? 
                                        <table className="table cart-table mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Action</th>
                                                    <th>Product</th>
                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>Qty</th>
                                                    <th className="text-right">
                                                        <span id="amount" className="amount">Total Amount</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            {userDetails.cart.map((item) => {
                                                return <CartTableBody key={item._id} userDetails={userDetails} item={item} />
                                            })}
                                            <tfoot>
                                                <tr>
                                                    <th>&nbsp;</th>
                                                    <th colSpan="3">&nbsp;</th>
                                                    <th>Items in Cart<span className="ml-2 mr-2">:</span><span className="text-right-bottom">{ totalItems }</span></th>
                                                    <th className="text-right-bottom">
                                                        Total Price
                                                        <span className="ml-2 mr-2">:</span>
                                                        <span className="text-right-bottom">₹ { totalPrice }</span>
                                                    </th>
                                                </tr>
                                            </tfoot>
                                    </table> :
                                    <table className="table cart-table mb-0">
                                        <tbody>
                                        <tr>
                                            <td colSpan="6">
                                            <div className="cart-empty">
                                                <i className="fa fa-shopping-cart"></i>
                                                <p>Your Cart Is empty</p>
                                            </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>      
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
     );
    }

export default Cart;