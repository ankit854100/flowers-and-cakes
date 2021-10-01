import React from 'react'
import { useSelector } from 'react-redux'

import './userOrders.css'

function UserOrders() {

    const userDetails = useSelector((state) => state.user.userDetails);
    // console.log(userDetails.orders);

    return (
        <div className="userOrders">
            {
                userDetails.orders.length ? 
                    <div className="userOrders-tableContainer">
                    <h2>List of Orders</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userDetails.orders.map((item, index) => {
                                return (
                                    <tr key={item._id + index}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <img src={item.images[0]} alt="" />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>₹ {item.price}</td>
                                        <td>{item.quantity}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div> : 
                <h2>You haven't ordered anything yet</h2>
            }
        </div>
    )
}

export default UserOrders
