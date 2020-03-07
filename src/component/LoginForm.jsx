import React, { Component } from 'react';
import ReactFormInputValidation from "react-form-input-validation";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
            email: "required|email",
            password: "required",
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
                                <div className="contctxt">User Login</div>
                                <div className="formint conForm">
                                    <form onSubmit={this.form.handleSubmit}>
                                        <div className="input-wrap">
                                            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" className="form-control" />
                                            <label className="error">
                                                {this.state.errors.email ? this.state.errors.email : ""}
                                            </label>
                                        </div>
                                        <div className="input-wrap">
                                            <input type="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" className="form-control" />
                                            <label className="error">
                                                {this.state.errors.password ? this.state.errors.password : ""}
                                            </label>
                                        </div>
                                        <div className="sub-btn">
                                            <input type="submit" className="sbutn" defaultValue="Login" />
                                        </div>
                                        <div className="newuser"><i className="fa fa-user" aria-hidden="true" /> New User? <a href="#.">Register Here</a></div>
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

export default LoginForm;
