import { Post, PostComment } from '@/types';

export const FETCH_COMMENTS_TYPE = 'fetchComments';
export const FETCH_POSTS_TYPE = 'fetchPosts';
export const SET_COMMENTS_TYPE = 'setComments';
export const SET_POSTS_TYPE = 'setPosts';
export const SORT_POSTS_BY_TITLE_TYPE = 'sortPosts';
export const SET_MODIFIED_POSTS_TYPE = 'setModifiedPosts';

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

export const SET_COMMENTS = ({ id, comments }: { id: number; comments: Array<PostComment> }) => {
    return {
        type: SET_COMMENTS_TYPE,
        payload: { id, comments },
    };
};

export const SET_MODIFIED_POSTS = (posts: Array<Post> | undefined) => {
    return {
        type: SET_MODIFIED_POSTS_TYPE,
        payload: posts,
    };
};
