import React, { Component } from 'react';
import Axios from 'axios';


export default class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: [],
        };
    }

    componentDidMount() {
        Axios.get('http://localhost/jayrathod/reactapilaravel/api/countries')
            .then(response => {
                this.setState({
                    country: response.data.data,
                });
            });
    }

    render() {
        return (
            <div className="slider-wrap">
                <div className="container">
                    <div className="sliderTxt">
                        <h1>World’s Largest Classifieds Portal</h1>
                        <p>Search from over 15,00,000 classifieds &amp; Post unlimited classifieds free!</p>
                        <form>
                            <div className="row form-wrap">
                                <div className="col-md-3">
                                    <div className="input-group">
                                        <input type="text" name="keyword" placeholder="Enter Keyword..." className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="input-group">
                                        <select name="location" className="dropdown">
                                            <option>Location... </option>
                                            {this.state.country.map(
                                                (oneCountry, index) => (
                                                    <option key={index} value={oneCountry.id}>{oneCountry.name}</option>
                                                ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="input-group">
                                        <select name="category" className="dropdown">
                                            <option>Category... </option>
                                            <option value="mobile">Mobile</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="input-btn">
                                        <input type="submit" className="sbutn" defaultValue="Search" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
