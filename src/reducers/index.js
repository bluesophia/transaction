import { combineReducers } from 'redux';
import auth from './authReducer';
import bank from './bankReducer';
import transaction from './transactionReducer';

export default combineReducers({
    auth,
    bank,
    transaction
});
