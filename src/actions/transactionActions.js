import {
    GET_BANKS_REQUEST
    // GET_BANKS_SUCCESS,
    // GET_BANKS_ERROR
} from '../constants/transactionConstants';

export function getBanks() {
    return dispatch => {
        dispatch({
            type: GET_BANKS_REQUEST
        });

        window.firebase.database().ref('banks').on('value', () => {
            debugger;
        });
    };
}
