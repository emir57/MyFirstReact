import React, { Component } from 'react'
import { Form } from 'reactstrap'

export default class Form1Demo extends Component {
    state = {
        userName:''
    }
    onChangeHandler = (event)=>{
        this.setState({userName:event.target.value})
    }
    onSubmitHandler = ()=>{

    }
    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmitHandler}>
                    <h3>User Name</h3>
                    <input onChange={this.onChangeHandler} type="text"></input>
                    <h3>User Name is {this.state.userName}</h3>
                    <input type="submit" value="Save"></input>
                </Form>
            </div>
        )
    }
}
