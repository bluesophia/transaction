import React, { Component } from 'react';
import ErrorAlert from '../ErrorAlert';
import './style.scss';

export default class TransactionTable extends Component {
    render() {
        const tbody = this._getTbody();
        return (
            <div>
                {this.props.error ? <ErrorAlert text={'Не удалось удалить транзакцию.'} /> : null}
                <div className="row">
                    <div className="col-md-5">
                        <table className="table table-striped table-hover transactionTable">
                            <thead>
                                <tr>
                                    <th>Сумма</th>
                                    <th>Банк</th>
                                    <th>Дата</th>
                                    <th>Время</th>
                                    <th></th>
                                </tr>
                            </thead>
                            {tbody}
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    _getTbody() {
        const { transactions } = this.props;
        let rows;

        if (transactions && transactions.length) {
            rows = this._getRows();
        } else {
            rows = this._getEmptyRow();
        }

        return (
            <tbody>
                {rows}
            </tbody>
        );
    }

    _getRows() {
        const { deleteProgress, deleteKey } = this.props;
        const disabled = deleteProgress ? 'disabled' : null;
        return this.props.transactions.map(item => {
            const progress = item.id === deleteKey;
            return this._createRow(item, disabled, progress);
        });
    }

    _createRow(item, disabled, progress) {
        const timestamp = new Date(item.timestamp);
        const date = timestamp.getDate();
        const month = timestamp.getMonth();
        const year = timestamp.getFullYear();
        return (
            <tr key={item.id}>
                <td>{item.sum}</td>
                <td>{item.bankName}</td>
                <td>{date}/{month}/{year}</td>
                <td>{timestamp.toLocaleTimeString()}</td>
                <td>
                    <button type="button" className="btn btn-danger btn-xs" 
                        disabled={disabled}
                        onClick={this._deleteTransaction.bind(this, item.id)} >
                        {progress ? <i className="fa fa-lg fa-spinner fa-spin"></i> : null} Удалить
                    </button>
                </td>
            </tr>
        );
    }

    _getEmptyRow() {
        return (
            <tr>
                <td className="transactionTable__emptyRow" colSpan="5">
                    Транзакций нет
                </td>
            </tr>
        );
    }

    _deleteTransaction(key, e) {
        e.preventDefault();
        this.props.deleteTransaction(key);
    }
}
