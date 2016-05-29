import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR
} from '../constants/authConstants';

const defaultUser = {
    email: 'user@transaction.com',
    password: '1234567890'
};

const initialState = Object.assign(defaultUser, {
    isLogin: false,
    progress: false
});

export default function auth(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST: {
            const { email, password } = action;
            return { ...state, email, password, progress: true };
        }
        case LOGIN_SUCCESS: {
            return { ...state, isLogin: true, progress: false };
        }
        case LOGIN_ERROR: {
            const { error } = action;
            return { ...state, error, progress: false };
        }
        case LOGOUT_REQUEST: {
            return { ...state, progress: true };
        }
        case LOGOUT_SUCCESS: {
            return Object.assign({ ...state, isLogin: false, progress: false }, defaultUser);
        }
        case LOGOUT_ERROR: {
            return { ...state, progress: false };
        }
        default: {
            return state;
        }
    }
}
