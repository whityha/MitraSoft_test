import { call, put } from 'redux-saga/effects';

import { fetchPosts } from '@/api/fetchPosts';
import { SET_POSTS } from '@/redux/actions';
import { Post } from '@/types';

export default function* loadPostsSaga() {
    const posts: Array<Post> = yield call(fetchPosts);
    yield put(SET_POSTS(posts));
}
