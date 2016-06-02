import {
    GET_TRANSACTIONS_REQUEST,
    GET_TRANSACTIONS_SUCCESS,
    GET_TRANSACTIONS_ERROR,
    DELETE_TRANSACTIONS_REQUEST,
    DELETE_TRANSACTIONS_SUCCESS,
    DELETE_TRANSACTIONS_ERROR,
    ON_TRANSACTIONS_UPDATE
} from '../constants/tableConstants';

const initialState = {
    loaded: false,
    loadProgress: false,
    deleteProgress: false,
    deleteKey: null,
    transactions: null
};

export default function table(state = initialState, action) {
    switch (action.type) {
        case GET_TRANSACTIONS_REQUEST: {
            return { ...state, loadProgress: true };
        }
        case GET_TRANSACTIONS_SUCCESS: {
            const { transactions } = action.paylod;
            return { ...state, transactions, loadProgress: false, loaded: true };
        }
        case GET_TRANSACTIONS_ERROR: {
            const { error } = action;
            return { ...state, error, loadProgress: false };
        }
        case DELETE_TRANSACTIONS_REQUEST: {
            const { key } = action.paylod;
            return { ...state, deleteKey: key, deleteProgress: true };
        }
        case DELETE_TRANSACTIONS_SUCCESS: {
            return { ...state, deleteKey: null, deleteProgress: false };
        }
        case DELETE_TRANSACTIONS_ERROR: {
            const { error } = action;
            return { ...state, error, deleteKey: null, deleteProgress: false };
        }
        case ON_TRANSACTIONS_UPDATE: {
            const { transactions } = action.paylod;
            return { ...state, transactions };
        }
        default: {
            return state;
        }
    }
}
