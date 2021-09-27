import React, { useRef, useState } from 'react'
import {Card, Form, Button, Alert} from "react-bootstrap"
import { useDispatch } from 'react-redux';
import {Link , useHistory} from "react-router-dom"

import { useAuth } from "../../context/AuthContext"
import { addUser } from '../../redux/users/actionContainer';

function Signup() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const { signup, currentUser } = useAuth();

    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

//   useEffect(() => {
//     if(currentUser){
//       history.push("/")
//     }
//   })


    const handleSubmit = (e) => {
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Password do not match");
        }

        try {
            setError("");
            setLoading(true);
            signup(emailRef.current.value, passwordRef.current.value)
            dispatch(addUser({email: emailRef.current.value}));
        } catch (error) {
            setError("Failed to create account");
        }

        setLoading(false);
        
    };
    return (
        <div className="signup-top">
            <div className="signup-wrapper">
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Sign Up</h2>
                        {currentUser && currentUser.email}
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required placeholder="In alpha-numeric format"/>
                            </Form.Group>
                            <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required placeholder="In alpha-numeric format"/>
                            </Form.Group>
                            <Button variant="success" className="w-100 mt-2" disabled={loading} type="submit">
                            Sign Up
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    Already have an account? <Link to="/login" className="signup-login">login</Link>
                </div>
            </div>
            <style jsx>{`
                .signup-top{
                    {/* text-align: center; */}
                }
                .signup-wrapper{
                    padding: 5rem 25rem;
                }

                .signup-login{
                    color: #198754;
                }

                .signup-login:hover{
                    color: #009d43; !important;
                }

            `}</style>
        </div>
    )
}

export default Signup
