import { takeEvery } from 'redux-saga/effects';

import { FETCH_USER_POSTS_TYPE } from '@/redux/actions/userActions';

import loadUserPostsSaga from './loadUserPostsSaga';

export default function* watcherLoadUserPostsSaga() {
    yield takeEvery(FETCH_USER_POSTS_TYPE, loadUserPostsSaga);
}
