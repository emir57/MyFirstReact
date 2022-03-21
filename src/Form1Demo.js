import React, { Component } from 'react'
import { Form } from 'reactstrap'

export default class Form1Demo extends Component {
    state = {
        userName:''
    }
    onChangeHandler = (event)=>{
        this.setState({userName:event.target.value})
    }
    render() {
        return (
            <div>
                <Form>
                    <h3>User Name</h3>
                    <input onChange={this.onChangeHandle} type="text"></input>
                    <h3>User Name is {this.state.userName}</h3>
                </Form>
            </div>
        )
    }
}
