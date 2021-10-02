import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateUser } from '../../redux/users/actionContainer';

function CartTableBody(props) {

    const dispatch = useDispatch();
    // const [disable, setDisable] = useState(false);

    const handleDeleteOne = () => {
        // console.log(props.userDetails.cart.filter((item) => item._id !== props.item._id));
        // setDisable(true);
        dispatch(updateUser(props.userDetails._id, {...props.userDetails, cart: props.userDetails.cart.filter((item) => item._id !== props.item._id)}));
    }

    return (
        <tbody>
            <tr>
                <td>
                    <button className="prdct-delete" onClick={handleDeleteOne}>
                        <i className="fa fa-trash-alt"></i>
                    </button>
                </td>
                <td><div className="product-img"><img src={props.item.images[0]} alt="" /></div></td>
                <td><div className="product-name"><p>{ props.item.title }</p></div></td>
                <td>{ props.item.price }</td>
                <td>
                    { props.item.quantity }
                    {/* <div className="prdct-qty-container"> */}
                        {/* <button className="prdct-qty-btn" type="button">
                                <i className="fa fa-minus"></i>
                            </button> */}
                        {/* <input type="text" name="qty" className="qty-input-box" value="count" disabled /> */}
                        {/* <button className="prdct-qty-btn" type="button">
                                <i className="fa fa-plus"></i>
                        </button> */}
                    {/* </div> */}
                </td>
                <td className="text-right">₹ {props.item.price}</td>
            </tr>
        </tbody>
    )
}

export default CartTableBody
