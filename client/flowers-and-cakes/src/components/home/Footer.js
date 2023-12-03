import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { addNewsLetterEmail } from '../../redux/items/actionContainer';

import './footer.css'

function Footer() {

    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(addNewsLetterEmail({email: email}))
            .then(() => {
                alert("You email has been sent");
                setEmail("");
            })
    }

    return (
        <div className="footer">
            <div className="footer-row">
                <div className="footer-Col">
                    <h2>Flowers and Cakes</h2>
                    <p>A website that will help you to order cakes and flowers and deliver it at your doorsteps.</p>
                </div> 
                <div className="footer-Col">
                    <h2>Contact info</h2>
                    <div>
                        <i class="fas fa-phone-alt"></i>
                        <span>+91-9172638398</span>
                    </div>
                    <div>
                        <i class="fas fa-envelope"></i>
                        <span>admin@gmail.com</span>
                    </div>
                    <div>
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Pune, Maharastra</span>
                    </div>
                </div> 
                <div className="footer-Col">
                    <h2>Quick links</h2>
                    <div>
                        <i class="fas fa-external-link-alt"></i>
                        <span><Link className="footer-links" to='/'>Home</Link></span>
                    </div>
                    {/* <div>
                        <i class="fas fa-external-link-alt"></i>
                        <span>Cakes</span>
                    </div>
                    <div>
                        <i class="fas fa-external-link-alt"></i>
                        <span>Flowers</span>
                    </div> */}
                    <div>
                        <i class="fas fa-external-link-alt"></i>
                        <span><Link className="footer-links" to="/user-details">profile</Link></span>
                    </div>
                </div>
                <div className="footer-Col">
                    <h2>Get latest update</h2>
                    <div className="footer-Col-inputContainer">
                        <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Button variant ="success" onClick={handleSubmit}>submit</Button>
                    </div>
                </div>
            </div>
            <div className="footer-rowSecond">
                <p>Made with ❤️ in Pune, Maharastra</p>
            </div>
        </div>
    )
}

export default Footer
