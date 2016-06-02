import React, { Component, PropTypes } from 'react';
import './style.scss';

export default class Table extends Component {
    render() {
        const { text } = this.props;
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="loader__body">
                        <div className="loader__spinner">
                            <i className="fa fa-lg fa-spinner fa-spin fa-4x"></i>
                        </div>
                        <div className="loader__text">
                            {text} 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Table.propTypes = {
    text: PropTypes.string
};

Table.defaultProps = {
    text: 'Загрузка...'
}
