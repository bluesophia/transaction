import { Promise } from 'es6-promise-polyfill';
import _ from 'underscore';

import {
    GET_TRANSACTIONS_REQUEST,
    GET_TRANSACTIONS_SUCCESS,
    DELETE_TRANSACTIONS_REQUEST,
    DELETE_TRANSACTIONS_SUCCESS,
    DELETE_TRANSACTIONS_ERROR
} from '../constants/tableConstants';

export function getTransactions() {
    return dispatch => {
        dispatch({
            type: GET_TRANSACTIONS_REQUEST
        });

        window.firebase.database().ref('transactions').on('value', snapshot => {
            _resolveBankName(snapshot.val())
                .then(transactions => {
                    dispatch({
                        type: GET_TRANSACTIONS_SUCCESS,
                        paylod: {
                            transactions
                        }
                    });
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

        window.firebase.database().ref(`transactions/${key}`).remove()
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

function _resolveBankName(transactions) {
    const requests = [];
    const result = [];
    
    for (let key in transactions) {
        const item = transactions[key];
        result.push({ ...item, id: key });
        requests.push(_getBankName(item.bankId));
    }

    return Promise.all(requests)
        .then(snapshots => {
            return snapshots.map(item => item.val());
        })
        .then(names => {
            result.forEach((item, index) => {
                return item.bankName = names[index].name;
            })
            return result;
        });
}

const _getBankName = _.memoize(function(bankId) {
    return window.firebase.database().ref(`banks/${bankId}`).once('value');
});
