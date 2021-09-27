import React from 'react'
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from "react-bootstrap"
import { useHistory } from 'react-router'
import { useAuth } from '../../context/AuthContext';

import './navBar.css'

function NavBar() {

  const history = useHistory();

  const { currentUser } = useAuth();

  return (
    <div className="navBar">
      <Navbar className="navBar-top-wrapper" fixed="top" bg="light" expand="lg">
        <Navbar.Brand href="/" onClick={() => history.push("/")}>Flowers and cakes</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
              <FormControl
                className="navBar-search"
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="success" className="navBar-searchButton"><i class="fas fa-search"></i></Button>
            </Form>
          <Nav
            className="my-2 my-lg-0 ms-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="" href="#action1">
              <div className="navBar-icon-wrapper">
                <i class="fas fa-shopping-cart fa-lg"></i>
                <span className="navBar-iconCaption">cart</span>
              </div>
            </Nav.Link>

            <Nav.Link className="" href="#action2">
              <div className="navBar-icon-wrapper">
                <i class="fas fa-user-circle fa-lg"></i>
               {currentUser && 
                 <NavDropdown className="navBar-iconCaption" title="profile" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/user-details" onClick={() => history.push("/user-details")}>My profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">My orders</NavDropdown.Item>
                </NavDropdown>

               }

              {!currentUser && 
                <NavDropdown className="navBar-iconCaption" title="signup/login" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/user-details" onClick={() => history.push("/signup")}>Signup</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2" onClick={() => history.push("/login")}>Login</NavDropdown.Item>
                </NavDropdown>
              }
              </div>
            </Nav.Link>

            <Nav.Link className="" href="#action3">
              <div className="navBar-icon-wrapper">
              <i class="fas fa-question-circle fa-lg"></i>
                <span className="navBar-iconCaption">Help center</span>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
