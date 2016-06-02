import {
    ADD_TRANSACTION_REQUEST,
    ADD_TRANSACTION_SUCCESS,
    ADD_TRANSACTION_ERROR
} from '../constants/transactionConstants';

import databaseService from '../services/databaseService';

export function addTransaction({ sum, bankId }) {
    return dispatch => {
        dispatch({
            type: ADD_TRANSACTION_REQUEST
        });

        databaseService.addTransaction({ sum, bankId })
            .then(result => {
                const { id, sum, bankName, timestamp } = result;
                dispatch({
                    type: ADD_TRANSACTION_SUCCESS,
                    paylod: {
                        id,
                        sum,
                        bankName,
                        timestamp
                    }
                });
            })
            .catch(error => {
                dispatch({
                    type: ADD_TRANSACTION_ERROR,
                    error
                });
            });
    };
}
