import { call, put } from 'redux-saga/effects';

import { fetchUserPosts } from '@/api/fetchUserPosts';
import { FETCH_USER_POSTS_TYPE, SET_USER_POSTS } from '@/redux/actions/userActions';
import { Post } from '@/types';

export default function* loadUserPostsSaga({
    type = FETCH_USER_POSTS_TYPE,
    payload: id,
}: {
    type: string;
    payload: number;
}) {
    const posts: Array<Post> = yield call(fetchUserPosts, id);
    yield put(SET_USER_POSTS(posts));
}
