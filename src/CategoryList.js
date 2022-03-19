import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
    render() {
        return (
            <div>
                <h3>Category List</h3>
                <ListGroup>
                    <ListGroupItem>1</ListGroupItem>
                    <ListGroupItem>2</ListGroupItem>
                    <ListGroupItem>3</ListGroupItem>
                    <ListGroupItem>4</ListGroupItem>
                    <ListGroupItem>5</ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}
