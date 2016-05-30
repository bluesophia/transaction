import { combineReducers } from 'redux';
import auth from './authReducer';
import bank from './bankReducer';
import transaction from './transactionReducer';
import table from './tableReducer';

export default combineReducers({
    auth,
    bank,
    transaction,
    table
});
