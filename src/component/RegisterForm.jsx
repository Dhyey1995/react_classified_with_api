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

        const passwrod_reg_exp = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{1,100}$/);

        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
            name: "required|name_validation",
            email: "required|email|email_validation",
            password: "required|password_validation",
            confirm_password: "required|confirm_password_validation",
            contact: "required",
        });

        ReactFormInputValidation.registerAsync('password_validation', (password, attribute, req, passes) => {
            if (!passwrod_reg_exp.test(password))
                passes(false, 'Password should contain atleast 1 Capital letter ,Small letter,one special character and number');
            else
                passes();
        });

        ReactFormInputValidation.registerAsync('email_validation', (password, attribute, req, passes) => {
            Axios.post('http://localhost/jayrathod/reactapilaravel/api/validate_user_email', {
                email: this.state.email,
            }).then(response => {
                if(!response.data.status){
                    passes(false, response.data.message);
                } else {
                    passes();
                }
            }).catch(function (error) {
                passes(false, 'Sorry, we have to face some technical errors. Please try again later.');
            });
        });

        ReactFormInputValidation.registerAsync('confirm_password_validation', (confirm_password, attribute, req, passes) => {
            if (confirm_password != this.state.password)
                passes(false, 'Passwords do not match.');
            else
                passes();
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
                                    <form autoComplete="off" onSubmit={this.form.handleSubmit}>
                                        <div className="input-wrap">
                                            <input onBlur={this.form.handleBlurEvent} data-async type="text" onChange={this.handleChange} value={this.state.name} name="name" placeholder="Name" className="form-control" />
                                            <span className="validation_error">{this.state.errors.name ? this.state.errors.name : ""}</span>
                                        </div>
                                        <div className="input-wrap">
                                            <input onBlur={this.form.handleBlurEvent} data-async type="text" onChange={this.handleChange} value={this.state.email} name="email" placeholder="Email" className="form-control" />
                                            <span className="validation_error">{this.state.errors.email ? this.state.errors.email : ""}</span>
                                        </div>
                                        <div className="input-wrap">
                                            <input onBlur={this.form.handleBlurEvent} data-async type="text" onChange={this.handleChange} value={this.state.contact} name="contact" placeholder="Contact number" className="form-control" />
                                            <span className="validation_error">{this.state.errors.contact ? this.state.errors.contact : ""}</span>
                                        </div>
                                        <div className="input-wrap">
                                            <input onBlur={this.form.handleBlurEvent} data-async type="password" onChange={this.handleChange} value={this.state.password} name="password" placeholder="Password" className="form-control" />
                                            <span className="validation_error">{this.state.errors.password ? this.state.errors.password : ""}</span>
                                        </div>
                                        <div className="input-wrap">
                                            <input onBlur={this.form.handleBlurEvent} data-async data-async type="password" onChange={this.handleChange} value={this.state.confirm_password} name="confirm_password" placeholder="Confirm password" className="form-control" />
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
