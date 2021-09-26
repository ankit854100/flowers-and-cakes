import React, { useState } from 'react'
import {Button} from 'react-bootstrap'

import './userProfile.css'

function UserProfile() {
    const [name, setName] = useState("");
    const [countryCode, setCountryCode] = useState("+91");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState();
    const [anniversary, setAnniversary] = useState();
    const [gender, setGender] = useState("M");
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("India");

    const [isEditable, setIsEditable] = useState(false);

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }

    const handleSave = () => {
        setIsEditable(false);
    }

    const handleCancel = () => {
        setIsEditable(false);
    }

    const handleEdit = () => {
        setIsEditable(true);
    }

    return (
        <div className="userProfile">
            <h2>My Profile</h2>
            <div className="userProfile-form">
                <div className="userProfile-form-row">
                    <div className="userProfile-formItem rightMargin">
                        <i class="fas fa-user"></i>
                        <div className="userProfile-formItem-right">
                            <span>Name *</span>
                            <input type="text" className="userProfile-formItem-right-textInput" disabled={isEditable === false} value={name} onChange={(e) => {setName(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="userProfile-formItem">
                        <i class="fas fa-phone-alt"></i>
                        <div className="userProfile-formItem-right">
                            <span>Mobile *</span>
                            <div style={{display: "flex"}}>
                                <select name="mobile" id="" className="userProfile-formItem-right-textInput mobileCode" disabled={isEditable === false} value={countryCode} onChange={(e) => {setCountryCode(e.target.value)}}>
                                    <option value="+91">+91</option>
                                    <option value="+1">+1</option>
                                    <option value="+213">+213</option>
                                </select>
                                <input type="text" className="userProfile-formItem-right-textInput" disabled={isEditable === false} value={mobile} onChange={(e) => {setMobile(e.target.value)}} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="userProfile-form-row">
                    <div className="userProfile-formItem rightMargin">
                        <i class="fas fa-envelope"></i>
                        <div className="userProfile-formItem-right">
                            <span>Email *</span>
                            <input type="text" className="userProfile-formItem-right-textInput" disabled={isEditable === false} value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="userProfile-formItem">
                        <i class="fas fa-birthday-cake"></i>
                        <div className="userProfile-formItem-right">
                            <span>Date of birth</span>
                            <input type="date" className="userProfile-formItem-right-textInput" disabled={isEditable === false} value={dob} onChange={(e) => {setDob(e.target.value)}} />
                        </div>
                    </div>
                </div>
                <div className="userProfile-form-row">
                    <div className="userProfile-formItem rightMargin">
                        <i class="fas fa-birthday-cake"></i>
                        <div className="userProfile-formItem-right">
                            <span>Date of anniversary</span>
                            <input type="date" className="userProfile-formItem-right-textInput" disabled={isEditable === false} value={anniversary} onChange={(e) => {setAnniversary(e.target.value)}} />
                        </div>
                    </div>
                    <div className="userProfile-formItem">
                        <i class="fas fa-user"></i>
                        <div className="userProfile-formItem-right">
                            <span>Gender *</span>
                            <div className="userProfile-formItem-right-radioInputWrapper">
                                <div>
                                    <input type="radio" value='M' checked={gender === 'M'} disabled={isEditable === false} onChange={handleGenderChange}/>
                                    {" "}Male
                                </div>
                                <div>
                                    <input type="radio" value='F' checked={gender === 'F'} disabled={isEditable === false} onChange={handleGenderChange}/>
                                    {" "}Female
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="userProfile-form-row">
                    <div className="userProfile-formItem rightMargin">
                        <i class="fas fa-address-book"></i>
                        <div className="userProfile-formItem-right">
                            <span>Address *</span>
                            <input type="text" className="userProfile-formItem-right-textInput" disabled={isEditable === false} value={address} onChange={(e) => {setAddress(e.target.value)}} />
                        </div>
                    </div>
                    <div className="userProfile-formItem">
                        <i class="fas fa-map-marker-alt"></i>
                        <div className="userProfile-formItem-right">
                            <span>Pincode *</span>
                            <input type="text" className="userProfile-formItem-right-textInput" disabled={isEditable === false} value={pincode} onChange={(e) => {setPincode(e.target.value)}} />
                        </div>
                    </div>
                </div>
                <div className="userProfile-form-row">
                    <div className="userProfile-formItem rightMargin">
                        <i class="fas fa-city"></i>
                        <div className="userProfile-formItem-right">
                            <span>City *</span>
                            <input type="text" className="userProfile-formItem-right-textInput" disabled={isEditable === false} value={city} onChange={(e) => {setCity(e.target.value)}} />
                        </div>
                    </div>
                    <div className="userProfile-formItem">
                        <i class="fas fa-flag"></i>
                        <div className="userProfile-formItem-right">
                            <span>Country *</span>
                            <select name="country" value={country} className="userProfile-formItem-right-textInput" disabled={isEditable === false} onChange={(e) => {setCountry(e.target.value)}}>
                                <option value="India">India</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Bhutan">Bhutan</option>
                                <option value="Bangladesh">Bangladesh</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            {isEditable ? 
                <div className="userProfile-buttonContainer">
                    <Button variant="secondary" className="cancelButton" onClick={handleCancel}>Cancel</Button>
                    <Button variant="success" onClick={handleSave}>Save</Button>
                </div>   : 
                
                <div className="userProfile-buttonContainer">
                    <Button variant="success" onClick={handleEdit}>Edit</Button>
                </div>
            }
        </div>
    )
}

export default UserProfile
