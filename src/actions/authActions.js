import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR
} from '../constants/authConstants';

import authService from '../services/authService';

export function login({ email, password }) {
    return dispatch => {
        dispatch({
            type: LOGIN_REQUEST,
            paylod: {
                email,
                password
            }
        });

        authService.login({ email, password })
            .then(() => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    paylod: {
                        email
                    }
                });
            })
            .catch(error => {
                dispatch({
                    type: LOGIN_ERROR,
                    error
                });
            });
    };
}

export function logout() {
    return dispatch => {
        dispatch({
            type: LOGOUT_REQUEST
        });

        authService.logout()
            .then(() => {
                dispatch({
                    type: LOGOUT_SUCCESS
                });
            })
            .catch(error => {
                dispatch({
                    type: LOGOUT_ERROR,
                    error
                });
            });
    };
}
