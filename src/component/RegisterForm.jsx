import React, { Component, Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import ReactFormInputValidation from "react-form-input-validation";
import Axios from 'axios';
import AlertMessage from './AlertMessage';

export default class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '', email: '', password: '', contact: '', confirm_password: '',
            errors: {},
            alert_response: { message: '', type: '' },
            button_disabled: false,
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
            this.setState({ button_disabled: true });
            Axios.post('http://localhost/jayrathod/reactapilaravel/api/member', {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                contact: this.state.contact,
            }).then(response => {
                this.setState({
                    alert_response: { message: response.data.message, type: response.data.status }
                });
                setTimeout(() => {
                    this.setState({
                        alert_response: { message: '', type: '' },
                        name: '', email: '', password: '', contact: '', confirm_password: '',
                    });
                    this.setState({ button_disabled: false });
                }, 2000);
            }).catch(function (error) {
                this.setState({ button_disabled: false });
            });
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
                                {this.state.alert_response.message !== '' ? <AlertMessage alert_assets={this.state.alert_response} /> : null}
                                <div className="formint conForm">
                                    <form onSubmit={this.form.handleSubmit}>
                                        <div className="input-wrap">
                                            <input type="text" onChange={this.handleChange} value={this.state.name} name="name" placeholder="Name" className="form-control" />
                                            <span className="validation_error">{this.state.errors.name ? this.state.errors.name : ""}</span>
                                        </div>
                                        <div className="input-wrap">
                                            <input type="text" onChange={this.handleChange} value={this.state.email} name="email" placeholder="Email" className="form-control" />
                                            <span className="validation_error">{this.state.errors.email ? this.state.errors.email : ""}</span>
                                        </div>
                                        <div className="input-wrap">
                                            <input type="text" onChange={this.handleChange} value={this.state.contact} name="contact" placeholder="Contact number" className="form-control" />
                                            <span className="validation_error">{this.state.errors.contact ? this.state.errors.contact : ""}</span>
                                        </div>
                                        <div className="input-wrap">
                                            <input type="password" onChange={this.handleChange} value={this.state.password} name="password" placeholder="Password" className="form-control" />
                                            <span className="validation_error">{this.state.errors.password ? this.state.errors.password : ""}</span>
                                        </div>
                                        <div className="input-wrap">
                                            <input type="password" onChange={this.handleChange} value={this.state.confirm_password} name="confirm_password" placeholder="Confirm password" className="form-control" />
                                            <span className="validation_error">{this.state.errors.confirm_password ? this.state.errors.confirm_password : ""}</span>
                                        </div>

                                        <div className="sub-btn">
                                            <input type="submit" disabled={this.state.button_disabled} className="sbutn" defaultValue="Login" />
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
