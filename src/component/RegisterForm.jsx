import React, { Component, Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import ReactFormInputValidation from "react-form-input-validation";

export default class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'',email:'',password:'',contact:'',confirm_password:'',
            errors: {}
        }
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
            name: "required",
            email: "required",
            password: "required",
            confirm_password: "required",
            contact: "required",
        });
        this.form.onformsubmit = (fields) => {
            alert('Success');
        }
    }
    handleChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return (
            <div className="inner-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-2" />
                        <div className="col-md-6 col-sm-8">
                            <div className="login">
                                <div className="contctxt">Please complete all fields.</div>
                                <div className="formint conForm">
                                    <form onSubmit={this.form.handleSubmit}>
                                        <div className="input-wrap">
                                            <input type="text" onChange={this.handleChange} value={this.state.name} name="name" placeholder="Name" className="form-control" />
                                            {this.state.errors.name ? this.state.errors.name : ""}
                                        </div>
                                        <div className="input-wrap">
                                            <input type="text" onChange={this.handleChange} value={this.state.email} name="email" placeholder="Email" className="form-control" />
                                            {this.state.errors.email ? this.state.errors.email : ""}
                                        </div>
                                        <div className="input-wrap">
                                            <input type="text" onChange={this.handleChange} value={this.state.contact} name="contact" placeholder="Contact number" className="form-control" />
                                            {this.state.errors.contact ? this.state.errors.contact : ""}
                                        </div>
                                        <div className="input-wrap">
                                            <input type="password" onChange={this.handleChange} value={this.state.password} name="password" placeholder="Password" className="form-control" />
                                            {this.state.errors.password ? this.state.errors.password : ""}
                                        </div>
                                        <div className="input-wrap">
                                            <input type="password" onChange={this.handleChange} value={this.state.confirm_password} name="confirm_password" placeholder="Confirm password" className="form-control" />
                                            {this.state.errors.confirm_password ? this.state.errors.confirm_password : ""}
                                        </div>
                                        
                                        <div className="sub-btn">
                                            <input type="submit" className="sbutn" defaultValue="Login" />
                                        </div>
                                        <div className="newuser"><i className="fa fa-user" aria-hidden="true" /> Active User? <NavLink to={'login'}>Register Here</NavLink></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-2" />
                    </div>
                </div>
            </div>
        );
    }
}
