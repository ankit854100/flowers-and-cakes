import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Alert} from 'react-bootstrap'

import { useAuth } from "../../context/AuthContext"

import './changePassword.css'

function ChangePassword() {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const { resetPassword } = useAuth();

    
    const handleSubmit = async () => {
        if(email === ""){
            alert("Enter valid email address");
        }
        else{
            try {
                setMessage("");
                setError("");
                setLoading(true);
                await resetPassword(email);
                setMessage("check your inbox for furthur instructions");
            } catch (error) {
                setError("Failed to reset password");
            }

            setLoading(false);
        }
    }

    return (
        <div className="changePassword">
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <h2>Change password</h2>
            <div className="changePassword-form">
                <div className="changePassword-form-row">
                    <div className="changePassword-formItem rightMargin">
                        <i class="fas fa-envelope"></i>
                        <div className="changePassword-formItem-right">
                            <span>Enter your email *</span>
                            <input type="text" className="changePassword-formItem-right-textInput" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                            <Button variant="success" disabled={loading} onClick={handleSubmit}>Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="profile-buttonContainer">
                <Button variant="success">Submit</Button>
            </div> */}
        </div>
    )
}

export default ChangePassword
