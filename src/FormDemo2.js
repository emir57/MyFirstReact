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
        this.setState({ [name]: value });
    }
    handleSubmit = event => {
        event.preventDefault();
        alertify.notify(`${this.state.email} added tı db!`, "info", 2);
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup mb-3>
                        <Label for='email'>Email</Label>
                        <Input onChange={this.handleChange} name='email' id='email' placeholder='Enter Email' type='email'></Input>
                    </FormGroup>
                    <FormGroup mb-3>
                        <Label for='password'>Password</Label>
                        <Input onChange={this.handleChange} name='password' id='password' placeholder='Enter Password' type='password'></Input>
                    </FormGroup>

                </Form>
            </div>
        )
    }
}
