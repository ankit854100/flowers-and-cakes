import React, {useState} from 'react'
import {Button} from 'react-bootstrap'

import './changePassword.css'

function ChangePassword() {

    const [email, setEmail] = useState("");
    
    const handleSubmit = () => {
        alert("Check your mail for password reset link!");
        setEmail("");
    }

    return (
        <div className="changePassword">
            <h2>Change password</h2>
            <div className="changePassword-form">
                <div className="changePassword-form-row">
                    <div className="changePassword-formItem rightMargin">
                        <i class="fas fa-envelope"></i>
                        <div className="changePassword-formItem-right">
                            <span>Enter your email *</span>
                            <input type="text" className="changePassword-formItem-right-textInput" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                            <Button variant="success" onClick={handleSubmit}>Submit</Button>
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
