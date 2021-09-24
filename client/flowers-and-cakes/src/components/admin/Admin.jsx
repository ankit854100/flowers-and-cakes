import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import ProfileForm from './ProfileForm'
import ProductList from './ProductList'
import AddProducts from './AddProducts'
import ChangePassword from './ChangePassword'

import './admin.css'
import { getCakes, getFlowers } from '../../redux/items/actionContainer'

import { useAuth} from "../../context/AuthContext"

function Admin() {

    const [rightContainer, setRightContainer] = useState("profile");

    const dispatch = useDispatch();

    const { logout } = useAuth();

    useEffect(() => {
        dispatch(getCakes());
        dispatch(getFlowers());
        
    }, [dispatch])
    
    return (
        <div className="admin">
            <div className="admin-left">
                <div className="admin-leftFirst">
                    <i class="fas fa-user-circle"></i>
                    <span>Hello Admin</span>
                </div>
                <div className={rightContainer === "profile" ? "admin-left-activeDiv" : ""} onClick={() => {setRightContainer("profile")}}>
                    <i class="fas fa-user-alt"></i>
                    <span>My Profile</span>
                </div>
                <div className={rightContainer === "productList" ? "admin-left-activeDiv" : ""} onClick={() => {setRightContainer("productList")}}>
                    <i class="fas fa-list-ul"></i>
                    <span>List of products</span>
                </div>
                <div className={rightContainer === "addProduct" ? "admin-left-activeDiv" : ""} onClick={() => {setRightContainer("addProduct")}}>
                    <i class="fas fa-plus-circle"></i>
                    <span>Add product</span>
                </div>
                <div className={rightContainer === "changePassword" ? "admin-left-activeDiv" : ""} onClick={() => {setRightContainer("changePassword")}}>
                    <i class="fas fa-key"></i>
                    <span>change password</span>
                </div>
                <div className={rightContainer === "logout" ? "admin-left-activeDiv admin-leftLast" : "admin-leftLast"} onClick={() => {
                    logout();
                    setRightContainer("logout")
                }}>
                    <i class="fas fa-sign-out-alt"></i>
                    <span>logout</span>
                </div>
            </div>
            <div className="admin-right">
                {rightContainer === "profile" && <ProfileForm /> }
                {rightContainer === "productList" && <ProductList setRightContainer={setRightContainer} /> }
                {rightContainer === "addProduct" && <AddProducts /> }
                {rightContainer === "changePassword" && <ChangePassword /> }
            </div>
        </div>
    )
}

export default Admin
