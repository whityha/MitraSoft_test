import { takeEvery } from 'redux-saga/effects';

import { FETCH_USER_TYPE } from '@/redux/actions/userActions';

import loadUserSaga from './loadUserSaga';

export default function* watcherLoadPostsSaga() {
    yield takeEvery(FETCH_USER_TYPE, loadUserSaga);
}
