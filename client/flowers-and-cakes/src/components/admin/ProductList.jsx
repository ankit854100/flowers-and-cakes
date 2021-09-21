import React from 'react'

import './productList.css'

function ProductList() {
    return (
        <div className="productList">
            <h2>List of products</h2>
            <table>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Title</th>
                        <th>price</th>
                        <th>Quantity</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Fudge Brownie Cake Half kg</td>
                        <td>₹459</td>
                        <td>12</td>
                        <td className="last"><i class="fas fa-edit"></i></td>
                        <td className="last"><i class="fas fa-trash-alt"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductList
