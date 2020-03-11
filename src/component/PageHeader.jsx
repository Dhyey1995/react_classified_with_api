import React, { Component } from 'react';

export default class PageHeader extends Component {

    render() {
        return (
            <div className="inner-heading">
                <div className="container">
                    <h1>{ this.props.page_title }</h1>
                </div>
            </div>
        );
    }
}


