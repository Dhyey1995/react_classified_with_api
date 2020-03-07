import React, { Component } from 'react';

import HeaderTopBar from '../component/HeaderTopBar';
import Header from '../component/Header';
import Business from '../component/Business';
import Footer from '../component/Footer';
import AboutContent from '../component/AboutContent';


export default class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            about_url: null
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
                <Header page_url={this.state.about_url}/>
                <AboutContent />
                <Business />
                <Footer />
            </React.Fragment>
        );
    }
}
