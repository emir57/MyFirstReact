import React, { Component } from 'react'
import { Nav, Navbar, DropdownMenu, NavbarToggler, Collapse, NavItem, NavLink, NavbarText, NavbarBrand, DropdownItem, UncontrolledDropdown, DropdownToggle, Badge } from "reactstrap"

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
                            <UncontrolledDropdown
                                inNavbar
                                nav
                            >
                                <DropdownToggle
                                    caret
                                    nav
                                >
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    {
                                        this.props.carts.length > 0 ?
                                            this.props.carts.map(cart => {
                                                return <DropdownItem>
                                                    {cart.product.productName} <Badge color='primary'>{cart.quantity}</Badge>
                                                </DropdownItem>
                                            }):
                                            this.getCarts()
                                    }
                                </DropdownMenu>
                            </UncontrolledDropdown>
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
