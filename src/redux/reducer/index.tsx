import { Post, PostComment } from '@/types';

import { FETCH_COMMENTS_TYPE, FETCH_POSTS_TYPE, SET_POSTS_TYPE } from '../actions';

interface initialState {
    posts: Array<Post>;
    comments: Array<PostComment>;
}

const initialState: initialState = {
    posts: [],
    comments: [],
};

export const rootReducer = (state = initialState, action: any) => {
    const { payload } = action;
    switch (action.type) {
        case FETCH_POSTS_TYPE:
            return { ...state };
        case FETCH_COMMENTS_TYPE:
            return { ...state };
        case SET_POSTS_TYPE:
            return { ...state, posts: payload };
        default:
            return state;
    }
};
