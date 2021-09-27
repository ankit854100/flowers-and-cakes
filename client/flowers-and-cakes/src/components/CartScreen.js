import './CartScreen.css';
import React from 'react';

const CartScreen=()=>{
    
    return (
            <div className="row justify-content-center m-0">
                <div className="col-md-8 mt-5 mb-5">
                    <div className="card">
                        <div className="card-header bg-dark p-3">
                            <div className="card-header-flex">
                            <h5 className="text-white m-0">Cart Calculation </h5>
                            <button className="btn btn-danger mt-0 btn-sm">
                                <i className="fa fa-trash-alt mr-2"></i>
                                <span>Empty Cart</span>
                            </button>

                            </div>
                        </div>
                    <div className="card-body p-0">
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
                        </table> :
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
                    <tbody>
        
                     <tr>
                        <td><button className="prdct-delete"><i className="fa fa-trash-alt"></i></button></td>
                        <td><div className="product-img"><img src="http://dummyimage.com/440x620.png/cc0000/ffffff" alt="" /></div></td>
                        <td><div className="product-name"><p>Cake </p></div></td>
                        <td>Rupees</td>
                        <td>
                         <div className="prdct-qty-container">
                            <button className="prdct-qty-btn" type="button">
                                <i className="fa fa-minus"></i>
                            </button>
                            <input type="text" name="qty" className="qty-input-box" value="count" disabled />
                            <button className="prdct-qty-btn" type="button">
                                <i className="fa fa-plus"></i>
                            </button>
                         </div>
                        </td>
                        <td className="text-right">$ 50</td>
                     </tr>
        
                    </tbody>
                    <tfoot>
                     <tr>
                        <th>&nbsp;</th>
                        <th colSpan="3">&nbsp;</th>
                        <th>Items in Cart<span className="ml-2 mr-2">:</span><span className="text-right-bottom">2</span></th>
                        <th className="text-right-bottom">Total Price<span className="ml-2 mr-2">:</span><span className="text-right-bottom">50</span></th>
                     </tr>
                    </tfoot>
                    </table>
        
                    </div>
                    </div>
                </div>
            </div>

     );
    }

export default CartScreen;