import { Post } from '@/types';

export const FETCH_COMMENTS_TYPE = 'fetchComments';
export const FETCH_POSTS_TYPE = 'fetchPosts';

export const SET_POSTS_TYPE = 'setPosts';

export const FETCH_POSTS = () => {
    return {
        type: FETCH_POSTS_TYPE,
    };
};

export const FETCH_COMMENTS = (id?: number) => {
    return {
        type: FETCH_COMMENTS_TYPE,
        payload: id,
    };
};

export const SET_POSTS = (posts: Array<Post>) => {
    return {
        type: SET_POSTS_TYPE,
        payload: posts,
    };
};
