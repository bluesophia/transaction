import {
    GET_BANKS_REQUEST,
    GET_BANKS_SUCCESS,
    GET_BANKS_ERROR
} from '../constants/bankConstants';

const initialState = {
    isBanksLoaded: false,
    progress: false,
    banks: []
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case GET_BANKS_REQUEST: {
            return { ...state, progress: true };
        }
        case GET_BANKS_SUCCESS: {
            const { banks } = action.paylod;
            return { ...state, banks, isBanksLoaded: true, progress: false };
        }
        case GET_BANKS_ERROR: {
            const { error } = action;
            return { ...state, error, progress: false };
        }
        default: {
            return state;
        }
    }
}
