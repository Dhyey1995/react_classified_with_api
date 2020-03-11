import React, { Component } from 'react';
import HeaderTopBar from '../component/HeaderTopBar';
import Header from '../component/Header';
import Footer from '../component/Footer';
import PageHeader from '../component/PageHeader';
import RegisterForm from '../component/RegisterForm';

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            register_url: null
        };
    }
    componentDidMount() {
        let page_url = this.props.match.path ;
        this.setState({
            register_url: page_url
        });
    }
    render() {
        return (
            <React.Fragment>
                <HeaderTopBar />
                <Header page_url={this.state.register_url} />
                <PageHeader page_title={'Register'} />
                <RegisterForm />
                <Footer />
            </React.Fragment>
        );
    }
}
