import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <h3>ABOUT Classify</h3>
                            <div className="footer-logo"><img src="./assets/images/footer-logo.png" alt="" /></div>
                            <p>Integer ac lorem sit amet est rhoncus dapi bus don cad pede acus morbi elit nunc molestie at ultrices eu eleifen lorem ut dictum erat masa... <a href="about-us.html">Read More</a></p>
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <h3>Quick  LInks</h3>
                            <ul className="footer-links">
                                <li><a href="#.">Home</a></li>
                                <li><a href="#.">About Us</a></li>
                                <li><a href="#.">Features</a></li>
                                <li><a href="#.">Categories</a></li>
                                <li><a href="#.">Blog</a></li>
                                <li><a href="#.">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h3>MAIN CATEGORIES</h3>
                            <ul className="footer-category">
                                <li><a href="#.">Electronics</a></li>
                                <li><a href="#.">Vahicles</a></li>
                                <li><a href="#.">Bikes</a></li>
                                <li><a href="#.">Animals</a></li>
                                <li><a href="#.">Toys</a></li>
                                <li><a href="#."> Furniture</a></li>
                                <li><a href="#.">Marketing</a></li>
                                <li><a href="#.">Technology</a></li>
                            </ul>
                            <div className="clearfix" />
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h3>MAIN CATEGORIES</h3>
                            <div className="address">Lorem # 38, Ispum Hill, Lorem, WA 12345 </div>
                            <div className="info"><i className="fa fa-phone" aria-hidden="true" /> <a href="#.">(777) 123 4567</a></div>
                            <div className="info"><i className="fa fa-fax" aria-hidden="true" /> <a href="#.">(123) 456 7890</a></div>
                        </div>
                    </div>
                    <div className="copyright">Copyright © 2017 Classify - All Rights Reserved.</div>
                </div>
            </div>
        );
    }
}
