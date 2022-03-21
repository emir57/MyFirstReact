import React, { Component } from 'react'
import alertify from 'alertifyjs'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default class FormDemo2 extends Component {
    componentDidMount(){
        this.getCities()
    }
    state = {
        cities:[],
        email: '',
        password: '',
        city: '',
        description: ''
    }
    citiesOptionsRender(){
        return (
            this.state.cities.map(city=>{
                return <option key={city.id} value={city.cityName}>
                    {city.cityName}
                </option>
            })
        );
    }
    getCities = ()=>{
        fetch("http://localhost:3000/cities")
        .then(response=>response.json())
        .then(data=>this.setState({cities:data}));
    }
    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }
    handleSubmit = event => {
        event.preventDefault();
        alertify.notify(`${this.state.email} added to db!`, "info", 2);
        alertify.notify(`${this.state.password} added to db!`, "info", 2);
        alertify.notify(`${this.state.description} added to db!`, "info", 2);
        alertify.notify(`${this.state.city} added to db!`, "info", 2);
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup mb-3="true">
                        <Label for='email'>Email</Label>
                        <Input onChange={this.handleChange} name='email' id='email' placeholder='Enter Email' type='email'></Input>
                    </FormGroup>
                    <FormGroup mb-3="true">
                        <Label for='password'>Password</Label>
                        <Input onChange={this.handleChange} name='password' id='password' placeholder='Enter Password' type='password'></Input>
                    </FormGroup>
                    <FormGroup mb-3="true">
                        <Label for='description'>Description</Label>
                        <Input onChange={this.handleChange} name='description' id='description' placeholder='Enter Description' type='textarea'></Input>
                    </FormGroup>
                    <FormGroup mb-3="true">
                        <Label for='city'>City</Label>
                        <Input onChange={this.handleChange} name='city' id='city' type='select'>
                            {this.citiesOptionsRender()}
                        </Input>
                    </FormGroup>
                    <Input type='submit' value={"Save"}></Input>
                </Form>
            </div>
        )
    }
}
