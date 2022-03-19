import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories:[
                {categoryId:1,categoryName:"Beverages"},
                {categoryId:2,categoryName:"Condiments"},
                {categoryId:3,categoryName:"Chocolates"},
                {categoryId:4,categoryName:"Foods"},
            ]
        };
    }
    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <ListGroup>
                    {
                        this.state.categories.map(category=>{
                            return <ListGroupItem key={category.categoryId}>{category.categoryName}</ListGroupItem>
                        })
                    }
                </ListGroup>
            </div>
        )
    }
}
