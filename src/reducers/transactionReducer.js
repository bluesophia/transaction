import {
    ADD_TRANSACTION_REQUEST,
    ADD_TRANSACTION_SUCCESS,
    ADD_TRANSACTION_ERROR
} from '../constants/transactionConstants';

const initialState = {
    progress: false,
    transactions: []
};

export default function transaction(state = initialState, action) {
    switch (action.type) {
        case ADD_TRANSACTION_REQUEST: {
            const { sum, bankId, bankName } = action;
            return { ...state, sum, bankId, bankName, progress: true };
        }
        case ADD_TRANSACTION_SUCCESS: {
            const { id, sum, bankName, timestamp } = action.paylod;
            const { transactions } = state;
            transactions.unshift({
                id,
                sum,
                bankName,
                timestamp
            });
            return { ...state, transactions, progress: false };
        }
        case ADD_TRANSACTION_ERROR: {
            const { error } = action;
            return { ...state, error, progress: false };
        }
        default: {
            return state;
        }
    }
}
