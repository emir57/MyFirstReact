import { getValue } from '@testing-library/user-event/dist/utils'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, NavLink, NavbarText, NavbarBrand } from "reactstrap"
import CartSummary from './CartSummary'

export default class Navi extends Component {
    
    render() {
        return (
            <div>
                <Navbar
                    color="light"
                    expand="md"
                    fixed=""
                    
                    light
                    className='mb-3'
                >
                    <NavbarBrand href="/">
                        Northwind App
                    </NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck() { }} />
                    <Collapse navbar>
                        <Nav
                            className="ms-auto" navbar
                        >
                            <NavItem>
                                <NavLink>
                                    <Link style={{textDecoration:"none"}} to="/form1">Form1</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">
                                    GitHub
                                </NavLink>
                            </NavItem>
                            <CartSummary removeFromCart={this.props.removeFromCart} carts = {this.props.carts}/>
                        </Nav>
                        <NavbarText>
                            Simple Text
                        </NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
