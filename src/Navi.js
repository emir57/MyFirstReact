import React, { Component } from 'react'
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, NavLink, NavbarText, NavbarBrand } from "reactstrap"
import CartSummary from './CartSummary'

export default class Navi extends Component {
    getCarts = () => {
        if (this.props.carts.length == 0) {
            return "Sepetinzde Ürün Yok"
        }
    }
    render() {
        return (
            <div>
                <Navbar
                    color="light"
                    expand="md"
                    fixed=""
                    full
                    light
                    className='mb-3'
                >
                    <NavbarBrand href="/">
                        Northwind App
                    </NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck() { }} />
                    <Collapse navbar>
                        <Nav
                            className="mx-auto"
                            navbar
                        >
                            <NavItem>
                                <NavLink href="/components/">
                                    Components
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">
                                    GitHub
                                </NavLink>
                            </NavItem>
                            <CartSummary />
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
