import React, { Component } from 'react'
import { Table } from 'reactstrap';

export default class ProductList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h3>{this.props.info.title}-{this.props.currentCategory}</h3>
                <Table>
                    <thead>
                        <th>Id</th>
                        <th>CategoryId</th>
                        <th>Product Name</th>
                        <th>Quantity Per Unit</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>
                    </thead>
                    <tbody>
                        {
                            
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}
