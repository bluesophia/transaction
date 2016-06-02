import React, { Component, PropTypes } from 'react';

export default class TransactionRow extends Component {
    constructor(props) {
        super(props);

        this._onClickDelete = e => {
            this._deleteTransaction(e, props.item.id);
        };
    }

    render() {
        const { item, disabled, progress } = this.props;
        
        const timestamp = new Date(item.timestamp);
        const date = timestamp.getDate();
        const month = timestamp.getMonth();
        const year = timestamp.getFullYear();

        return (
            <tr>
                <td>{item.sum}</td>
                <td>{item.bankName}</td>
                <td>{date}/{month + 1}/{year}</td>
                <td>{timestamp.toLocaleTimeString()}</td>
                <td>
                    <button type="button" className="btn btn-danger btn-xs" 
                        disabled={disabled ? 'disabled' : null}
                        onClick={this._onClickDelete} >
                        {progress ? <i className="fa fa-lg fa-spinner fa-spin"></i> : null} Удалить
                    </button>
                </td>
            </tr>
        );
    }

    _deleteTransaction(e, key) {
        e.preventDefault();
        this.props.deleteTransaction(key);
    }
}

TransactionRow.propTypes = {
    item: PropTypes.object,
    disabled: PropTypes.bool,
    progress: PropTypes.bool,
    deleteTransaction: PropTypes.func
};
