import React, { Component } from 'react';

export default class TransactionList extends Component {
    render() {
        const tbody = this._getTbody();
        return (
            <div className="row">
                <div className="col-md-5">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Сумма</th>
                                <th>Банк</th>
                                <th>Дата</th>
                                <th>Время</th>
                            </tr>
                        </thead>
                        {tbody}
                    </table>
                </div>
            </div>
        );
    }

    _getTbody() {
        const rows = this._getRows();
        return (
            <tbody>
                {rows}
            </tbody>
        );
    }

    _getRows() {
        const { transactions} = this.props;
        return transactions.map(item => {
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
                </tr>
            );
        });
    }
}
