import React, { Component, PropTypes } from 'react';
import ErrorAlert from '../ErrorAlert';
import TransactionRow from './components/TransactionRow';
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
        const { deleteProgress, deleteKey, deleteTransaction } = this.props;
        return this.props.transactions.map(item => {
            const progress = item.id === deleteKey;
            return <TransactionRow key={item.id} item={item} disabled={deleteProgress} progress={progress} deleteTransaction={deleteTransaction} />;
        });
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
}

TransactionTable.propTypes = {
    error: PropTypes.bool,
    transactions: PropTypes.array,
    deleteProgress: PropTypes.bool,
    deleteKey: PropTypes.string,
    deleteTransaction: PropTypes.func
};
