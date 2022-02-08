import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

const userId=localStorage.getItem('id')
class Header extends Component {

  render() {
    if(localStorage.getItem('token') && localStorage.getItem('userType')==="Admin"){
      var menu=
      <Navbar className="navbar navbar-dark bg-dark" variant="black" expand="lg">
      <Navbar.Brand className="logo" href="/home">HotelMandu</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        
                 <li className="nav-item">
                   <Link className="nav-link" to="/logout">Logout</Link>
                 </li>

                 <li className="nav-item">
                  <Link className="nav-link" to="/viewAila">View Rooms</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/addProduct">Add Rooms</Link>
                </li>
              
              
        </Nav>
       
        
       
      </Navbar.Collapse>
    </Navbar>
    }
   else if(localStorage.getItem('token') && localStorage.getItem('userType')==="Customer"){
      var menu=
      <Navbar className="navbar navbar-dark bg-dark" variant="black" expand="lg">
 <Navbar.Brand className="logo" href="/home">HotelMandu</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <li className="nav-item ">
                   <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                 </li>
                 <li className="nav-item ">
                   <Link className="nav-link" to="/about">About</Link>
                 </li>
                 <li className="nav-item">
                   <Link className="nav-link" to="/logout">Logout</Link>
                 </li>

                 <li className="nav-item">
                  <Link className="nav-link" to="/rooms">Rooms</Link>
                </li>
            
                 <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/mybooking">Booking</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={"/profile/"+ userId}>My Profile</Link>
                </li>

              
        </Nav>
       
        
       
      </Navbar.Collapse>
    </Navbar>
    }
    else{
      var menu=
      <Navbar className="navbar navbar-dark bg-dark" expand="lg">
 <Navbar.Brand className="logo" href="/home">HotelMandu</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <li className="nav-item ">
                   <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                 </li>
                 <li className="nav-item ">
                   <Link className="nav-link" to="/about">About</Link>
                 </li>
                 <li className="nav-item">
                   <Link className="nav-link" to="/loginsignup">Login</Link>
                 </li>
                 <li className="nav-item">
                  <Link className="nav-link" to="/rooms">Rooms</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
               
       
        </Nav>
       
        
       
      </Navbar.Collapse>
    </Navbar>
    }
    return (
     

      <div>
        {menu} 
      </div>

    )
  }
}
export default Header