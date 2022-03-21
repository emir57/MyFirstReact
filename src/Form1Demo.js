import React, { Component } from 'react'
import { Form, FormGroup,FormControl } from 'reactstrap'

export default class Form1Demo extends Component {
    state = {
        userName: '',
        city:''
    }
    onChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value})
    }
    onSubmitHandler = (event) => {
        event.preventDefault();
        alert(this.state.userName)
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmitHandler}>
                    <h3>User Name</h3>
                    <input name='userName' className='form-control' onChange={this.onChangeHandler} type="text"></input>
                    <h3>User Name is {this.state.userName}</h3>
                    <hr></hr>
                    <h3>City</h3>
                    <input name='city' className='form-control' onChange={this.onChangeHandler} type="text"></input>
                    <h3>City is {this.state.city}</h3>
                    <input type="submit" value="Save"></input>
                </Form>
            </div>
        )
    }
}
