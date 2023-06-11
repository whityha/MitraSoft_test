import { Post } from '@/types';

import {
    FETCH_COMMENTS_TYPE,
    FETCH_POSTS_TYPE,
    SET_COMMENTS_TYPE,
    SET_MODIFIED_POSTS_TYPE,
    SET_POSTS_TYPE,
} from '../actions';

interface initialState {
    posts: Array<Post>;
    modifiedPosts?: Array<Post>;
}

const initialState: initialState = {
    posts: [],
};

export const PostsListReducer = (state = initialState, action: any) => {
    const { payload } = action;
    switch (action.type) {
        case FETCH_POSTS_TYPE:
            return { ...state };
        case FETCH_COMMENTS_TYPE:
            return { ...state };
        case SET_POSTS_TYPE:
            console.log(state);
            return { ...state, posts: payload };
        case SET_COMMENTS_TYPE:
            state.posts.find(({ id }) => id === payload.id)!.comments = payload.comments;
            if (state.modifiedPosts) {
                console.log(state.modifiedPosts);
                state.modifiedPosts.find(({ id }) => id === payload.id)!.comments =
                    payload.comments;
            }
            return {
                ...state,
                modifiedPosts: state.modifiedPosts ? [...state.modifiedPosts!] : undefined,
                posts: [...state.posts],
            };
        case SET_MODIFIED_POSTS_TYPE:
            return { ...state, modifiedPosts: payload };
        default:
            return state;
    }
};
