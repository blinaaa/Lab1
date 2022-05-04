import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component{
    render(){
        return(
            <Nav bg='dark' expand='lg'>
                <Navbar.Toggle aria-controls='basic-navabr-nav'/>
                <Navbar.Collapse id='basic.navbar-nav'>
                    <Nav>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                            Home
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/Personeli">
                            Personeli
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/Stoku">
                            Stoku
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>

            </Nav>
        )
    }
}