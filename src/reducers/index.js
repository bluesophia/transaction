import { combineReducers } from 'redux'
import auth from './authReducer'
import transaction from './transactionReducer'

export default combineReducers({
    auth,
    transaction
});
