
import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Navbar, Nav, NavLink,NavDropdown,Container} from 'react-bootstrap';
import Pharma from './Pharma'
import HeaCenter from './HeaCenter';
import Cardiologist from './Cardiologist';
import Orthopedic from './Orthopedic'
import Neurologist from './Neurologist'
import Doctor from './Doctor'
import  Contact from './Contact'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header(){

        
        return ( 
            <Router>
            <React.Fragment>
                <Navbar bg="light" expand ="sm" sticky="top">
                <Nav href="" style={{fontSize:10}}> +91 - 9922732290 | 0712 - 2255671 <p style={{marginLeft:1200}}>  <i class="fa fa-map-marker" style={{color:'black'}} aria-hidden="true"></i> Nagpur </p>  </Nav>
                </Navbar>
                <Navbar bg="secondary" expand="lg" sticky="top">
                <Container>
                <Navbar.Brand href="" style={{color:'orange'}}>Health-A-Plenty </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" style={{marginLeft:'200px'}}>
                <NavDropdown title="Doctor" id="basic-nav-dropdown" >
                <NavDropdown.Item href="/">Cardiologist</NavDropdown.Item>
                <NavDropdown.Item href="/or">Orthopedic</NavDropdown.Item>
                <NavDropdown.Item href="/neu">Neurologist</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/health" style={{color :'black'}}>HealthCare Center</Nav.Link>
                <Nav.Link href="/pharma" style={{color :'black'}}>Pharmacies</Nav.Link>
               
                <Nav.Link href="/cont" style={{color :'black'}}>Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
                </React.Fragment>
                <Switch>
                <Route exact path="/">
                    <Cardiologist/>
                </Route>
                <Route path="/or">
                    <Orthopedic/>
                </Route>
                <Route path="/neu">
                    <Neurologist/>
                </Route>
              
                 <Route path="/doc">
                   <Doctor/>
                </Route>
               <Route path="/health">
                    <HeaCenter/>
                </Route>
                <Route  path="/pharma">
                   <Pharma/>
                </Route>
               
                <Route path="/cont">
                   <Contact/>
                   </Route>
                
         </Switch>
                </Router>
             
         );
    }
 
