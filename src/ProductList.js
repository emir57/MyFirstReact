import React, { Component } from 'react'

export default class ProductList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}
