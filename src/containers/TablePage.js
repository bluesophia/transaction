import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Table from '../components/Table';
import Loader from '../components/Loader';

import * as transactionActions from '../actions/transactionActions';

class TablePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const transactions = [];
        const transactionsProgress = true;
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-header">
                            <h3>Таблица транзакций</h3>
                        </div>
                    </div>
                </div>
                {transactionsProgress ? (
                    <Loader text={'Загрузка списка транзакций...'} />
                ) : (
                    <Table transactions={transactions} />
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        transaction: state.transaction
    };
}

function mapDispatchToProps(dispatch) {
    return {
        transactionActions: bindActionCreators(transactionActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TablePage);
