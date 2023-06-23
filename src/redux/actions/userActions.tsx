import { Post, User } from '@/types';

export const FETCH_USER_TYPE = 'fetchUser';
export const FETCH_USER_POSTS_TYPE = 'fetchUserPosts';
export const SET_USER_TYPE = 'setUser';
export const SET_USER_POSTS_TYPE = 'setUserPosts';
export const CLEAR_USER_TYPE = 'clearUser';

export const FETCH_USER = (id: string | number) => {
    return {
        type: FETCH_USER_TYPE,
        payload: id,
    };
};

export const SET_USER = (user: User) => {
    return {
        type: SET_USER_TYPE,
        payload: user,
    };
};

export const FETCH_USER_POSTS = (id: string | number) => {
    return {
        type: FETCH_USER_POSTS_TYPE,
        payload: id,
    };
};

export const SET_USER_POSTS = (posts: Post[]) => {
    return {
        type: SET_USER_POSTS_TYPE,
        payload: posts,
    };
};

export const CLEAR_USER = () => {
    return {
        type: CLEAR_USER_TYPE,
        payload: undefined,
    };
};
