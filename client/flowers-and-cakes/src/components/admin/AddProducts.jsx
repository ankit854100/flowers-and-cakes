import React, {useEffect, useState} from 'react'
import FileBase from 'react-file-base64'

import {Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addCake, addFlowers } from '../../redux/items/actionContainer';

import './addProducts.css'

function AddProducts() {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState("cakes");
    const [cakeCategory, setCakeCategory] = useState("Chocolate");
    const [flowerCategory, setFlowerCategory] = useState("Rose");
    const [images, setImages] = useState([]);
    const [productDetails, setProductDetails] = useState("");

    const dispatch = useDispatch();
    // const currentId = useSelector((state) => state.items.currentId);

    // useEffect(() => {
    //     if(currentId !== null){

    //     }
    // })


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

        if(category === "cakes") 
            dispatch(addCake({title: title, price: price, quantity: quantity, images: [images], category: cakeCategory, productDetails: productDetails.split("."), reviews: {}}));
        else 
            dispatch(addFlowers({title: title, price: price, quantity: quantity, images: [images], category: flowerCategory, productDetails: productDetails.split("."), reviews: {}}));

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
                        {category === "cakes" ? <i class="fas fa-birthday-cake"></i> : <i class="fas fa-fan"></i>}
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
                        <i class="fas fa-sort-amount-up-alt"></i>
                        <div className="addProduct-formItem-right">
                            <span>Images *</span>
                            {/* <input type="file" multiple className="addProduct-formItem-right-textInput"  onChange={(e) => {setImages(...images, e.target.value)}} /> */}
                            <FileBase type="file" className="addProduct-formItem-right-textInput" multiple={false} onDone={({ base64 }) => setImages(base64)} />
                        </div>
                    </div>
                    <div className="addProduct-formItem">
                        {category === "cakes" ? <i class="fas fa-birthday-cake"></i> : <i class="fas fa-fan"></i>}
                        <div className="addProduct-formItem-right">
                            <span>{category === "cakes" ? "Cake category": "Flower category"}</span>
                            {category === "cakes" ? 
                                <select name="cakesCategory" id="" className="addProduct-formItem-right-textInput" value={cakeCategory} onChange={(e) => {setCakeCategory(e.target.value)}}>
                                    <option value="Chocolate">Chocolate</option>
                                    <option value="Vanilla">Vanilla</option>
                                    <option value="Pineapple">Pineapple</option>
                                    <option value="Butterscotch">Butterscotch</option>
                                    <option value="Strawberry">Strawberry</option>
                                </select> :
                                <select name="flowersCategory" id="" className="addProduct-formItem-right-textInput" value={flowerCategory} onChange={(e) => {setFlowerCategory(e.target.value)}}>
                                    <option value="Rose">Rose</option>
                                    <option value="Jasmine">Jasmine</option>
                                    <option value="Tulip">Tulip</option>
                                    <option value="Lotus">Lotus</option>
                                </select>
                            }
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
