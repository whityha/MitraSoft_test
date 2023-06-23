import { fork } from 'redux-saga/effects';

import watcherLoadPostsSaga from './loadPosts/watcherLoadPostsSaga';
import watcherLoadUserSaga from './loadUser/watcherLoadUserSaga';
import watcherLoadUserPostsSaga from './loadUserPosts/watcherLoadUserPostsSaga';

export default function* rootSaga() {
    yield fork(watcherLoadPostsSaga);
    yield fork(watcherLoadUserSaga);
    yield fork(watcherLoadUserPostsSaga);
}
