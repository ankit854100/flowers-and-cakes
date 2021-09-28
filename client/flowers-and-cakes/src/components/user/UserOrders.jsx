import React from 'react'
import { useSelector } from 'react-redux'

import './userOrders.css'

function UserOrders() {

    const userDetails = useSelector((state) => state.user.userDetails);
    console.log(userDetails.orders);

    return (
        <div className="userOrders">
            <h2>List of Orders</h2>
            <div className="userOrders-tableContainer">
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
                                <tr key={item._id}>
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
            </div>
        </div>
    )
}

export default UserOrders
