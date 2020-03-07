import React, { Component } from 'react';
import HeaderTopBar from '../component/HeaderTopBar';
import Header from '../component/Header';
import Footer from '../component/Footer';
import PageHeader from '../component/PageHeader';
import LoginForm from '../component/LoginForm';


export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login_url: null
        };
    }
    componentDidMount() {
        let page_url = this.props.match.path ;
        this.setState({
            login_url: page_url
        });
    }
    render() {
        return (
            <React.Fragment>
                <HeaderTopBar />
                <Header page_url={this.state.login_url} />
                <PageHeader />
                <LoginForm />
                <Footer />
            </React.Fragment>
        );
    }
}
