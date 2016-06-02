import {
    GET_BANKS_REQUEST,
    GET_BANKS_SUCCESS,
    GET_BANKS_ERROR
} from '../constants/bankConstants';

export function getBanks() {
    return dispatch => {
        dispatch({
            type: GET_BANKS_REQUEST
        });

        window.firebase.database().ref('banks').once('value')
            .then(snapshot => {
                dispatch({
                    type: GET_BANKS_SUCCESS,
                    paylod: {
                        banks: snapshot.val()
                    }
                });
            })
            .catch(error => {
                dispatch({
                    type: GET_BANKS_ERROR,
                    error
                });
            });
    };
}
