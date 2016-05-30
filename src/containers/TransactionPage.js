import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Transaction from '../components/Transaction';
import Loader from '../components/Loader';

import * as bankActions from '../actions/bankActions';
import * as transactionActions from '../actions/transactionActions';

class TransactionPage extends Component {
    constructor(props) {
        super(props);
        if (!props.bank.isBanksLoaded) {
            this.props.bankActions.getBanks();
        }
    }

    render() {
        const { progress: bankProgress, banks } = this.props.bank;
        const { progress: transactionProgress, transactions, error } = this.props.transaction;
        const { addTransaction } = this.props.transactionActions;
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-header">
                            <h3>Добавление транзакции</h3>
                        </div>
                    </div>
                </div>
                {bankProgress ? (
                    <Loader text={'Загрузка списка банков...'} />
                ) : (
                    <Transaction 
                        banks={banks}
                        error={error}
                        transactions={transactions}
                        progress={transactionProgress} 
                        addTransaction={addTransaction} />
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        bank: state.bank,
        transaction: state.transaction
    };
}

function mapDispatchToProps(dispatch) {
    return {
        bankActions: bindActionCreators(bankActions, dispatch),
        transactionActions: bindActionCreators(transactionActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPage);
