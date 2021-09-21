import React, {useState} from 'react'
import {Button} from 'react-bootstrap'

import './addProducts.css'

function AddProducts() {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState("cakes");
    const [productDetails, setProductDetails] = useState("");

    const reset = () => {
        setTitle("");
        setPrice("");
        setQuantity(0);
        setCategory("cakes");
        setProductDetails("");

    }

    const handleCancel = () => {
        reset();
    }

    const handleSubmit = () => {
        alert("product added successfully");
        reset();
    }

    return (
        <div className="addProduct">
            <h2>Add a new product</h2>
            <div className="addProduct-form">
                <div className="addProduct-form-row">
                    <div className="addProduct-formItem rightMargin">
                        <i class="fas fa-heading"></i>
                        <div className="addProduct-formItem-right">
                            <span>Title *</span>
                            <input type="text" className="addProduct-formItem-right-textInput" value={title} onChange={(e) => {setTitle(e.target.value)}} />
                        </div>
                    </div>
                    <div className="addProduct-formItem">
                        <i class="fas fa-rupee-sign"></i>
                        <div className="addProduct-formItem-right">
                            <span>Price *</span>
                            <input type="text" className="addProduct-formItem-right-textInput" value={price} onChange={(e) => {setPrice(e.target.value)}}/>
                        </div>
                    </div>
                </div>
                <div className="addProduct-form-row">
                    <div className="addProduct-formItem rightMargin">
                        <i class="fas fa-sort-amount-up-alt"></i>
                        <div className="addProduct-formItem-right">
                            <span>Quantity *</span>
                            <input type="number" className="addProduct-formItem-right-textInput" value={quantity} onChange={(e) => {setQuantity(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="addProduct-formItem">
                        <i class="fas fa-birthday-cake"></i>
                        <div className="addProduct-formItem-right">
                            <span>Category</span>
                            <select name="category" id="" className="addProduct-formItem-right-textInput" value={category} onChange={(e) => {setCategory(e.target.value)}}>
                                <option value="cakes">Cakes</option>
                                <option value="flowers">Flowers</option>
                            </select>
                        </div>
                    </div>
                </div> 
                <div className="addProduct-form-row">
                    <div className="addProduct-formItem rightMargin">
                        <i class="fas fa-info-circle"></i>
                        <div className="addProduct-formItem-right">
                            <span>Product details *</span>
                            <textarea name="" id="" cols="30" rows="1" placeholder="Enter multiple details separated by space" value={productDetails} onChange={(e) => {setProductDetails(e.target.value)}}></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-buttonContainer">
                <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
                <Button variant="success" onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    )
}

export default AddProducts
