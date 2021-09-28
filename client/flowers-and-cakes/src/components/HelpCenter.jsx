import React from 'react'
import NavBar from './home/NavBar'

import './helpCenter.css'
import Footer from './home/Footer'

function HelpCenter() {
    return (
        <div>
            <NavBar />
            <div className="helpCenter">
                <div className="helpCenter-insideWrapper">
                    <h2>Need some help ?</h2>
                    {/* <div className="helpCenter-insideWrapper-form" >
                        <div className="helpCenter-insideWrapper-form-nameWrapper">
                            <input type="text" placeholder="first name"/>
                            <input type="text" placeholder="last name"/>
                        </div>
                        <input type="text" placeholder="email"/>
                        <textarea name="" id="" cols="30" rows="2" placeholder="your query"></textarea>
                    </div> */}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HelpCenter
