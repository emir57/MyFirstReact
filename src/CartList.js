import React, { Component } from 'react'
import { Table } from 'reactstrap';

export default class CartList extends Component {
    renderCart(){
        return (
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Category Id</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Units In Stock</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.cart.map(cart=>{
                                return <tr>
                                    <td>{cart.product.id}</td>
                                    <td>{cart.product.categoryId}</td>
                                    <td>{cart.product.productName}</td>
                                    <td>{cart.product.unitPrice}</td>
                                    <td>{cart.product.unitsInStock}</td>
                                    <td>{cart.quantity}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
        );
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
