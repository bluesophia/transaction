import {
    GET_BANKS_REQUEST,
    GET_BANKS_SUCCESS,
    GET_BANKS_ERROR
} from '../constants/bankConstants';

import databaseService from '../services/databaseService';

export function getBanks() {
    return dispatch => {
        dispatch({
            type: GET_BANKS_REQUEST
        });

        databaseService.getBanks()
            .then(banks => {
                dispatch({
                    type: GET_BANKS_SUCCESS,
                    paylod: {
                        banks
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
