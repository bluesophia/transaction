import React, { Component } from 'react';

export default class ErrorAlert extends Component {
    render() {
        const { text } = this.props;
        return (
            <div className="row">
                <div className="col-md-6">
                    <div className="alert alert-danger">
                        <strong>Ошибка!</strong> {text}
                    </div>
                </div>
            </div>
        );
    }
}
