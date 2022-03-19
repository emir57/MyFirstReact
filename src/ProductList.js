import React, { Component } from 'react'

export default class ProductList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
            </div>
        )
    }
}
