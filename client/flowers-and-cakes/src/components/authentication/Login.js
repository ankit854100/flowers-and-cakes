import React, { useEffect, useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../context/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getAllUsers, resetUser } from "../../redux/users/actionContainer"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login, currentUser} = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const dispatch = useDispatch();



//   useEffect(() => {
//     if(currentUser){
//       history.push("/")
//     }
//   })

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      dispatch(resetUser());
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/");
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <div>
      <div className="login-wrapper">
        <Card>
            <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {/* {currentUser && currentUser.email} */}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button variant="success" disabled={loading} className="w-100 mt-2" type="submit">
                Log In
                </Button>
            </Form>
            <div className="w-100 text-center mt-3">
                <Link to="/forgot-password" className="login-signup">Forgot Password?</Link>
            </div>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup" className="login-signup">Sign Up</Link>
        </div>
      </div>
      <style jsx>{`
        .login-wrapper{
            padding: 5rem 25rem;
        }

        .login-signup{
            color: #198754;
        }

        .login-signup:hover{
            color: #009d43; !important;
        }
      `}</style>
    </div>
  )
}