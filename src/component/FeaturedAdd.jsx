import React, { Component } from 'react';

export default class FeaturedAdd extends Component {
    render() {
        return (
            <div className="feature-wrap">
                <div className="container">
                    <div className="heading-title">Featured Ads</div>
                    <div className="heading-text">Find out &amp; explore new businesses near your area and see what's happening !!!</div>
                    <ul className="row feature-service">
                        <li className="col-md-3 col-sm-6 col-xs-12">
                            <div className="feature-image">
                                <img src="./assets/images/iphone.jpg" alt="" />
                                <div className="price">$170.000</div>
                            </div>
                            <div className="feature">
                                <div className="feat-bg">
                                    <h3><a href="#">Apple iphone 6 mobile for Sale</a></h3>
                                </div>
                                <div className="feature-detail">
                                    <ul className="featureList">
                                        <li><i className="fa fa-map-marker" aria-hidden="true" /> Atlanta, GA</li>
                                        <li><i className="fa fa-clock-o" aria-hidden="true" /> 5.40pm</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="col-md-3 col-sm-6 col-xs-12">
                            <div className="feature-image">
                                <img src="./assets/images/bike.jpg" alt="" />
                                <div className="price">$170.000</div>
                            </div>
                            <div className="feature">
                                <div className="feat-bg">
                                    <h3><a href="#">Suzuki Heavy Bike for Sale</a></h3>
                                </div>
                                <div className="feature-detail">
                                    <ul className="featureList">
                                        <li><i className="fa fa-map-marker" aria-hidden="true" /> Atlanta, GA</li>
                                        <li><i className="fa fa-clock-o" aria-hidden="true" /> 5.40pm</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="col-md-3 col-sm-6 col-xs-12">
                            <div className="feature-image">
                                <img src="./assets/images/car.jpg" alt="" />
                                <div className="price">$170.000</div>
                            </div>
                            <div className="feature">
                                <div className="feat-bg">
                                    <h3><a href="#">Brand New Volvo V40 for Sale</a></h3>
                                </div>
                                <div className="feature-detail">
                                    <ul className="featureList">
                                        <li><i className="fa fa-map-marker" aria-hidden="true" /> Atlanta, GA</li>
                                        <li><i className="fa fa-clock-o" aria-hidden="true" /> 5.40pm</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
