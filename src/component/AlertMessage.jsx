import React, { Component } from 'react';

export default class AlertMessage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            alert_type : this.props.alert_assets.type == true ? 'alert alert-success' : 'alert alert-danger',
            alert_message : this.props.alert_assets.message,
        }
    }
    render() {
        return (
            <div className={this.state.alert_type} role="alert">
                {this.state.alert_message}
            </div>
        );
    }
}
