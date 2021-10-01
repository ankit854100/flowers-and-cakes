import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'

import {Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap"

import ItemCard from '../items/ItemCard';
// import '../items/itemCard.css';
// import '../home/navBar.css'
import '../items/itemContainer.css'
import './search.css'
import { connect, useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Footer from '../home/Footer';

const mapStateToProps = (state) => {
    return {
        gloablSearch: state.items.search,
        cakes: state.items.cakes,
        flowers: state.items.flowers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

function SearchPage(props) {

    const { currentUser } = useAuth();

    const buttonRef = useRef();

    const [data, setData] = useState([]);
    var [dataFlower, setDataFlower] = useState([]);  
    var [dataCake, setDataCake] = useState([]);

    const [dispData, setDispData] = useState([]);


    const [searchLine, setSearchLine] = useState(props.gloablSearch);
    const [btnClick, setBtnClick] = useState(true);

    const [itemType, setItemType] = useState('');    
    const [itemOrder, setItemOrder] = useState('');
    const [itemState, setItemState] = useState('');

    useEffect(() => {
        
        // axios.get("http://localhost:5000/flower")
        // .then(res => //console.log(res)
        // setDataFlower(res.data))
        // .catch(error => console.log(error));
    
        // axios.get("http://localhost:5000/cake")
        // .then(res => setDataCake(res.data))
        // .catch(error => console.log(error));
    
        dataFlower = props.flowers.map(item => ({...item, 'type':'flower'}))
        dataCake = props.cakes.map(item => ({...item, 'type':'cake'}))
    
        setData([...dataFlower, ...dataCake]);

        buttonRef.current.click();

        // findItem(searchLine, itemType, itemOrder, itemState)
    
      },[dataFlower,dataCake]);

      function findItem(newSearchLine, type, order, state) {
  
        let inp = newSearchLine;
    
        let searchSpace = [];
    
        data.map(item => searchSpace.push({...item , space:`${item.title}${item.category}`}))
        
        inp = inp.split(' ');
        
        let out = new Set();
        
        for(let word of inp){
            for(let item of searchSpace){
                if( item.space.toLowerCase().includes(word.toLowerCase()) ){
                    out.add(item)
                }
            }
        }
    
        out = [...out]
    
        if (type != ''){
            searchLine === '' ? setSearchLine('filter') : setSearchLine(searchLine)
          out = out.filter(obj => obj.type == type)
        }
    
        if (order != '' && order == 'asc') {
            searchLine === '' ? setSearchLine('filter') : setSearchLine(searchLine)
          out = out.sort((a,b) => {return a.price - b.price})
          console.log(out)
        }
        if (order != '' && order == 'desc') {
            searchLine === '' ? setSearchLine('filter') : setSearchLine(searchLine)
          out = out.sort((a,b) => {return a.price - b.price})
          out = out.reverse()
        }
    
        if (state != '' && state == 'avail'){
            searchLine === '' ? setSearchLine('filter') : setSearchLine(searchLine)
          out = out.filter(obj => obj.quantity >= 1)
        }
        else if (state != '' && state == 'unavail') {
            searchLine === '' ? setSearchLine('filter') : setSearchLine(searchLine)
          out = out.filter(obj => obj.quantity == 0)
        }
    
        setDispData(out)
    
    }

    useEffect(() => {
        findItem(searchLine, itemType, itemOrder, itemState)
    }, [btnClick]);

    return (
        <React.Fragment>
        <div className="homepage">
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
                            value={searchLine}
                            onChange={(e) => {setSearchLine(e.target.value)}}
                        />
                        <Button ref={buttonRef} variant="success" className="navBar-searchButton" onClick={() => setBtnClick(!btnClick)}><i className="fas fa-search"></i></Button>
                        </Form>
                    {/* className="navBar-select" */}
                        <div className="searchBar-Filters">
                            <select onChange={(e) => {setItemType(e.target.value)}}>
                                <option value='' selected>None</option>
                                <option value='flower'>Flowers</option>
                                <option value='cake'>Cakes</option>
                            </select>   

                            <select className="middle" onChange={(e) => {setItemOrder(e.target.value)}}>
                                <option value='' selected>None</option>
                                <option value='asc'>price low-high</option>
                                <option value='desc'>price high-low</option>
                            </select>

                            <select  onChange={(e) => {setItemState(e.target.value)}}>
                                <option value='' selected>None</option>
                                <option value='avail'>Available items</option>
                                <option value='unavail'>Out of stock items</option>
                            </select>
                        </div>

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
        
            <div className="itemContainer">
                <div className="itemContainer-cardWrapper">
                {
                    dispData.map(item => <ItemCard key={item._id} item={item} />) 
                }
                </div>
            </div>
        </div>
        <Footer />
        <style jsx>{`
                .homepage{
                    background-color: #F2F2F2;
                    padding-top: 1rem;
                    min-height: 100%;
                }
            `}</style>
        </React.Fragment>
    )
}

// export default SearchPage
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);