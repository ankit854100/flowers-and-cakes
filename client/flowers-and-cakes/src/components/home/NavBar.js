import React, { useEffect, useState } from 'react'
import {Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap"

import './navBar.css'

function NavBar(props) {

  return (
    <div className="navBar">
      <Navbar className="navBar-top-wrapper" fixed="top" bg="light" expand="lg">
        <Navbar.Brand href="#">Flowers and cakes</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
              {/* <FormControl
                className="navBar-search"
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              /> */}
              <Button variant="success" className="navBar-searchButton" onClick={() => window.location = "http://localhost:3000/search"}><i className="fas fa-search"></i></Button>
            </Form>
          <Nav
            className="my-2 my-lg-0 ms-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="" href="#action1">
              <div className="navBar-icon-wrapper">
                <i className="fas fa-shopping-cart fa-lg"></i>
                <span className="navBar-iconCaption">cart</span>
              </div>
            </Nav.Link>

            <Nav.Link className="" href="#action2">
              <div className="navBar-icon-wrapper">
                <i className="fas fa-user-circle fa-lg"></i>
                <NavDropdown className="navBar-iconCaption" title="profile" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">My profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">My orders</NavDropdown.Item>
              </NavDropdown>
              </div>
            </Nav.Link>

            <Nav.Link className="" href="#action3">
              <div className="navBar-icon-wrapper">
              <i className="fas fa-question-circle fa-lg"></i>
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
