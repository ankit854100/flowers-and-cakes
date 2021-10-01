import React, { useState } from 'react'
import NavBar from './home/NavBar'

import './helpCenter.css'
import Footer from './home/Footer'
import Chat from './chatbot/Chat'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { sendFeedback } from '../redux/items/actionContainer'

function HelpCenter() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [query, setQuery] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(sendFeedback({firstname: firstName, lastname: lastName, email: email, post: query}));
        reset();
    }

    const reset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setQuery("");
    }

    return (
        <div>
            <NavBar />
            <div className="helpCenter">
                <div className="helpCenter-insideWrapper">
                    <div className="helpCenter-leftContainer">
                        <h2>Fill the form its easy  </h2>
                        <div className="helpCenter-leftFormContainer">
                            <div>
                                <input type="text" placeholder="First name" style={{marginRight: "0.5rem"}} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                <input type="text" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                            </div>
                            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <textarea name="" id="" cols="30" rows="5" placeholder="Briefly tell us how can we help you." value={query} onChange={(e) => setQuery(e.target.value)}></textarea>
                        </div>
                        <Button variant="success" onClick={handleSubmit}>Submit</Button>
                    </div>
                    <div className="helpCenter-rightContainer">
                        <h2>Contact details</h2>
                        <div className="helpCenter-rightContainer-logoContainer">
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <span className="helpCenter-addressTitle">Pune, Maharastra</span>
                                <span>21B Lorem Ipsum Str. District 12, Pune</span>
                            </div>
                        </div>
                        <div className="helpCenter-rightContainer-logoContainer">
                            <i class="fas fa-envelope"></i>
                            <span>admin@gmail.com</span>
                        </div>
                        <div className="helpCenter-rightContainer-logoContainer">
                            <i class="fas fa-phone-alt"></i>
                            <span>+91-820091234</span>
                        </div>
                    </div>
                </div>
            </div>
            <Chat />
            <Footer />
        </div>
    )
}

export default HelpCenter
