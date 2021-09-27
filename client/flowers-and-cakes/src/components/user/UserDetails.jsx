import React, {useEffect, useState} from 'react'

import NavBar from '../home/NavBar'
import UserProfile from './UserProfile';
import ChangePassword from '../admin/ChangePassword';
import UserOrders from './UserOrders';

import './userDetails.css'
import Footer from '../home/Footer';
import { useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router';

function UserDetails() {
    const [rightContainer, setRightContainer] = useState("profile");

    const { logout, currentUser } = useAuth();
    const history = useHistory();

    useEffect(() => {
        if(!currentUser){
            history.push("/");
        }
    })

    return (
        <div>
            <NavBar />
            <div className="userDetails">
                <div className="userDetails-left">
                    <div className="userDetails-leftFirst">
                        <i class="fas fa-user-circle"></i>
                        <span>Hello Guest</span>
                    </div>
                    <div className={rightContainer === "profile" ? "userDetails-left-activeDiv" : ""} onClick={() => {setRightContainer("profile")}}>
                        <i class="fas fa-user-alt"></i>
                        <span>My Profile</span>
                    </div>
                    <div className={rightContainer === "productList" ? "userDetails-left-activeDiv" : ""} onClick={() => {setRightContainer("orders")}}>
                        <i class="fas fa-list-ul"></i>
                        <span>Orders</span>
                    </div>
                    <div className={rightContainer === "changePassword" ? "userDetails-left-activeDiv" : ""} onClick={() => {setRightContainer("changePassword")}}>
                        <i class="fas fa-key"></i>
                        <span>change password</span>
                    </div>
                    <div className={rightContainer === "logout" ? "userDetails-left-activeDiv userDetails-leftLast" : "userDetails-leftLast"} 
                        onClick={() => {
                            logout();
                            history.push("/");
                            setRightContainer("logout");
                            }}
                    >
                        <i class="fas fa-sign-out-alt"></i>
                        <span>logout</span>
                    </div>
                </div>
                <div className="userDetails-right">
                    {rightContainer === "profile" && <UserProfile /> }
                    {rightContainer === "orders" && <UserOrders /> }
                    {rightContainer === "changePassword" && <ChangePassword /> }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserDetails
