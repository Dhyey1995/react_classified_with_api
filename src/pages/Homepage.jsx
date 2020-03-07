import React, { Component } from 'react';
import HeaderTopBar from '../component/HeaderTopBar';
import Header from '../component/Header';
import Banner from "../component/Banner";
import FeaturedAdd from "../component/FeaturedAdd";
import Latestadd from '../component/Latestadd';
import Testimonials from '../component/Testimonials';
import Business from '../component/Business';
import Footer from '../component/Footer';

export default class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home_url: null
        };
    }
    componentDidMount() {
        let page_url = this.props.match.path ;
        this.setState({
            about_url: page_url
        });
    }
    render() {
        return (
            <React.Fragment>
                <HeaderTopBar />
                <Header page_url={this.state.about_url} />
                <Banner />
                <FeaturedAdd />
                <Latestadd />
                <Testimonials />
                <Business />
                <Footer />
            </React.Fragment>
        );
    }
}
