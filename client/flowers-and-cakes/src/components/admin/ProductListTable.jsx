import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { setCurrentId } from '../../redux/items/actionContainer';

function ProductListTable(props) {

    const dispatch = useDispatch();
    const items = props.items;

    return (
        <div className="productList">
            <h2>List of {props.name}</h2>
            <div className="productList-tableContainer">
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
                        {items.map((item, index) => {
                            return (
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>₹{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td className="last"><i class="fas fa-edit" onClick={() => {
                                        dispatch(setCurrentId(item._id));
                                        // props.setRightContainer("addProduct");
                                        }}></i></td>
                                    <td className="last"><i class="fas fa-trash-alt"></i></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductListTable;
