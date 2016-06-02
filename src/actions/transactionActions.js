import {
    ADD_TRANSACTION_REQUEST,
    ADD_TRANSACTION_SUCCESS,
    ADD_TRANSACTION_ERROR
} from '../constants/transactionConstants';

export function addTransaction({ sum, bankId }) {
    return dispatch => {
        dispatch({
            type: ADD_TRANSACTION_REQUEST
        });

        const firebase = window.firebase;
        const databaseName = 'transactions';
        const id = firebase.database().ref(databaseName).push().key;
        const timestamp = Date.now();

        const updates = {
            [`${id}`]: {
                sum,
                bankId,
                timestamp
            }
        };

        firebase.database().ref(databaseName).update(updates)
            .then(() => {
                return firebase.database().ref(`banks/${bankId}`).once('value');
            })
            .then(snapshot => {
                const { name: bankName } = snapshot.val();
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
