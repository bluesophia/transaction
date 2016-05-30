import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TransactionTable from '../components/TransactionTable';
import Loader from '../components/Loader';

import * as tableActions from '../actions/tableActions';

class TablePage extends Component {
    constructor(props) {
        super(props);
        if (!this.props.table.loaded) {
            this.props.tableActions.getTransactions();
        }
    }

    render() {
        const { loadProgress, transactions, deleteProgress, deleteKey, error } = this.props.table;
        const { deleteTransaction } = this.props.tableActions;
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-header">
                            <h3>Таблица транзакций</h3>
                        </div>
                    </div>
                </div>
                {loadProgress ? (
                    <Loader text={'Загрузка списка транзакций...'} />
                ) : (
                    <TransactionTable 
                        transactions={transactions} 
                        deleteTransaction={deleteTransaction} 
                        deleteProgress={deleteProgress} 
                        deleteKey={deleteKey}
                        error={error} />
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        table: state.table
    };
}

function mapDispatchToProps(dispatch) {
    return {
        tableActions: bindActionCreators(tableActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TablePage);
