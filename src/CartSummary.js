import React, { Component } from 'react'
import { DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Badge, NavItem, NavLink } from "reactstrap"

export default class CartSummary extends Component {
    getCarts = () => {
        if (this.props.carts.length == 0) {
            return "Sepetinzde Ürün Yok"
        }
    }
    renderSummary() {
        return (<UncontrolledDropdown
            inNavbar
            nav
        >
            <DropdownToggle
                caret
                nav
            >
                Sepetim <Badge color='info'>{this.props.carts.length}</Badge>
            </DropdownToggle>
            <DropdownMenu end>
                {
                    this.props.carts.length > 0 ?
                        this.props.carts.map(cart => {
                            return <DropdownItem key={cart.product.id}>
                                <Badge color='danger' onClick={()=>this.props.removeFromCart(cart.product)}>
                                    X
                                </Badge>&nbsp; 
                                {cart.product.productName} &nbsp;
                                <Badge color='primary'>{cart.quantity}</Badge>
                            </DropdownItem>
                        }) :
                        this.getCarts()
                }
            </DropdownMenu>
        </UncontrolledDropdown>
        );
    }
    renderEmptyCart() {
        return <NavItem>
            <NavLink>Empty Cart</NavLink>
        </NavItem>
    }
    render() {
        return (
            <div>
                {
                    this.props.carts.length > 0 ? this.renderSummary() : this.renderEmptyCart()
                }
            </div>
        )
    }
}
