import React from 'react'
import NavBar from './home/NavBar'

import './helpCenter.css'
import Footer from './home/Footer'
import Chat from './chatbot/Chat'
import { Button } from 'react-bootstrap'

function HelpCenter() {
    return (
        <div>
            <NavBar />
            <div className="helpCenter">
                <div className="helpCenter-insideWrapper">
                    <div className="helpCenter-leftContainer">
                        <h2>Fill the form its easy  </h2>
                        <div className="helpCenter-leftFormContainer">
                            <div>
                                <input type="text" placeholder="First name" style={{marginRight: "0.5rem"}}/>
                                <input type="text" placeholder="Last name"/>
                            </div>
                            <input type="text" placeholder="Email"/>
                            <textarea name="" id="" cols="30" rows="5" placeholder="Briefly tell us how can we help you."></textarea>
                        </div>
                        <Button variant="success" type="submit">Submit</Button>
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
