import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

export default class componentName extends Component {
    render() {
        return (
            <div className="topbar-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-6">
                            <div className="user-wrap">
                                <div className="login-btn"><NavLink to={'/login'}>Login</NavLink></div>
                                <div className="register-btn"><a href="register.html">Register</a></div>
                                <div className="clearfix" />
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-6 col-xs-6">
                            <ul className="social-wrap">
                                <li><a href="#."><i className="fa fa-facebook-square" aria-hidden="true" /></a></li>
                                <li><a href="#."><i className="fa fa-twitter-square" aria-hidden="true" /></a></li>
                                <li><a href="#."><i className="fa fa-google-plus-square" aria-hidden="true" /></a></li>
                                <li><a href="#."><i className="fa fa-linkedin-square" aria-hidden="true" /></a></li>
                                <li><a href="#."><i className="fa fa-vimeo-square" aria-hidden="true" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
