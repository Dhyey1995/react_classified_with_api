import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="header-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <div className="logo"><a href="index.html"><img src="./assets/images/logo.png" alt="" /></a></div>
                        </div>
                        <div className="col-md-7 col-sm-9">
                            <div className="navigationwrape">
                                <div className="navbar navbar-default" role="navigation">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
                                    </div>
                                    <div className="navbar-collapse collapse">
                                        <ul className="nav navbar-nav">
                                            <li> <NavLink className={this.props.page_url == '/' ? 'menu_active' : '' } to={'/'}> Home</NavLink></li>
                                            <li> <NavLink className={this.props.page_url == '/about_us' ? 'menu_active' : ''} to={'/about_us'}>About Us</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-3">
                            <div className="post-btn"><a href="ad-post.html">Post your Ad!</a></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
