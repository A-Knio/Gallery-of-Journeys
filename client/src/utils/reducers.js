import {
        UPDATE_PHOTOS,
        UPDATE_USER
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_PHOTOS:
            return {
                ...state,
                photos: [...action.photos],
            };

        case UPDATE_USER:
            return {
                ...state,
                user: action.user,
            };

        default:
            return state;
    }
};