import React from 'react'
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { setSearch } from '../../redux/items/actionContainer';

import './navBar.css'

function NavBar() {

  const history = useHistory();

  const { currentUser } = useAuth();

  const search = useSelector((state) => state.items.search);
  const dispatch = useDispatch();

  return (
    <div className="navBar">
      <Navbar className="navBar-top-wrapper" fixed="top" bg="light" expand="lg">
        <Navbar.Brand href="/"><Link to="/" className="routerLink">Flowers and cakes</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
              <FormControl
                className="navBar-search"
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                value={search}
                onChange={(e) => dispatch(setSearch(e.target.value))}
              />
              <Link to="/search">
                <Button variant="success" className="navBar-searchButton"><i class="fas fa-search"></i></Button>
              </Link>
            </Form>
          <Nav
            className="my-2 my-lg-0 ms-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="" href="#action1">
              <Link to="/cart" className="routerLink">
                <div className="navBar-icon-wrapper">
                  <i class="fas fa-shopping-cart fa-lg"></i>
                  <span className="navBar-iconCaption">cart</span>
                </div>
              </Link>
            </Nav.Link>

            <Nav.Link className="routerLink" href="#action2">
              <div className="navBar-icon-wrapper">
                <i class="fas fa-user-circle fa-lg"></i>
               {currentUser && 
                 <NavDropdown className="navBar-iconCaption" title="profile" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/user-details"><Link to="/user-details" className="routerLink">My profile</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2" className="routerLink">My orders</NavDropdown.Item>
                </NavDropdown>

               }

              {!currentUser && 
                <NavDropdown className="navBar-iconCaption" title="login" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/user-details"><Link to="/signup" className="routerLink">Signup</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2"><Link to="/login" className="routerLink">Login</Link></NavDropdown.Item>
                </NavDropdown>
              }
              </div>
            </Nav.Link>

            <Nav.Link className="" href="#action3">
            <Link to="/help-center" className="routerLink">
              <div className="navBar-icon-wrapper">
                <i class="fas fa-question-circle fa-lg"></i>
                <span className="navBar-iconCaption">Help center</span>
              </div>
            </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
