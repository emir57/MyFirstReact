import React, { Component } from 'react'
import alertify from 'alertifyjs'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default class FormDemo2 extends Component {
    state = {
        email: '',
        password: '',
        city: '',
        description: ''
    }
    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value});
    }
    handleSubmit = event =>{
        event.preventDefault();
        alertify.notify(`${this.state.email} added tı db!`,"info",2);
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Label for='email'>Email</Label>
                    <Input name='email' type='email'></Input>
                </Form>
            </div>
        )
    }
}
