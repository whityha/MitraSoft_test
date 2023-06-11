import { takeEvery } from 'redux-saga/effects';

import { FETCH_POSTS } from '@/redux/actions';

import loadPostsSaga from './loadPostsSaga';

export default function* watcherLoadPostsSaga() {
    yield takeEvery(FETCH_POSTS().type, loadPostsSaga);
}
