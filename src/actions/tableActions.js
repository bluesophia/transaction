import {
    GET_TRANSACTIONS_REQUEST,
    GET_TRANSACTIONS_SUCCESS,
    DELETE_TRANSACTIONS_REQUEST,
    DELETE_TRANSACTIONS_SUCCESS,
    DELETE_TRANSACTIONS_ERROR,
    ON_TRANSACTIONS_UPDATE
} from '../constants/tableConstants';

import databaseService from '../services/databaseService';

export function getTransactions() {
    return dispatch => {
        dispatch({
            type: GET_TRANSACTIONS_REQUEST
        });

        return databaseService.getTransactions()
            .then(transactions => {
                dispatch({
                    type: GET_TRANSACTIONS_SUCCESS,
                    paylod: {
                        transactions
                    }
                });
            });
    };
}

export function listenToChangeTransactions() {
    return dispatch => {
        databaseService.listenToChangeTransactions(transactions => {
            dispatch({
                type: ON_TRANSACTIONS_UPDATE,
                paylod: {
                    transactions
                }
            });
        });
    };
}

export function deleteTransaction(key) {
    return dispatch => {
        dispatch({
            type: DELETE_TRANSACTIONS_REQUEST,
            paylod: {
                key
            }
        });

        databaseService.deleteTransaction(key)
            .then(() => {
                dispatch({
                    type: DELETE_TRANSACTIONS_SUCCESS
                });
            })
            .catch(error => {
                dispatch({
                    type: DELETE_TRANSACTIONS_ERROR,
                    error
                });
            });
    }
}
