import { Post, User } from '@/types';

import {
    CLEAR_USER_TYPE,
    FETCH_USER_TYPE,
    SET_USER_POSTS_TYPE,
    SET_USER_TYPE,
} from '../actions/userActions';

interface initialState {
    currentUser?: User;
    userPosts?: Post[];
}

const initialState: initialState = {};

export const userReducer = (state = initialState, action: any) => {
    const { payload } = action;
    switch (action.type) {
        case FETCH_USER_TYPE:
            return { ...state };
        case SET_USER_TYPE:
            return { ...state, currentUser: payload };
        case SET_USER_POSTS_TYPE:
            return { ...state, userPosts: payload };
        case CLEAR_USER_TYPE:
            return { userPosts: undefined, currentUser: undefined };
        default:
            return state;
    }
};
