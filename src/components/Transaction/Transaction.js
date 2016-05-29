import React, { Component } from 'react';
import Table from '../Table';
import './style.scss';

export default class Transaction extends Component {
    render() {
        const options = this._getOptions();
        const { progress, transactions } = this.props;
        const disabled = progress ? 'disabled' : null;
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <form className="form-inline" onSubmit={this._submit.bind(this)}>
                            <div className="form-group">
                                <input type="text" 
                                    disabled={disabled}
                                    className="form-control" id="sum" 
                                    placeholder="Введите сумму" required />
                            </div>
                            <div className="form-group">
                                <select className="form-control" id="bank" disabled={disabled}>
                                    {options}
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary" disabled={disabled}>
                                {progress ? <i className="fa fa-lg fa-spinner fa-spin"></i> : null} Выполнить
                            </button>
                        </form>
                    </div>
                </div>
                <br/>
                {transactions.length ? <Table transactions={transactions} /> : null}
            </div>
        );
    }

    _getOptions() {
        const { banks } = this.props;
        return banks.map(item => <option key={item.id} value={item.id}>{item.name}</option>);
    }

    _submit(e) {
        e.preventDefault();
        const { sum, bank } = e.target;
        this.props.addTransaction({
            sum: sum.value,
            bankId: bank.value
        });
    }
}
