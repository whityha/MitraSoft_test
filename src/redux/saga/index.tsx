import { fork } from 'redux-saga/effects';

import watcherLoadCommentsSaga from './loadCommentsByPostID/watcherLoadComments';
import watcherLoadPostsSaga from './loadPosts/watcherLoadPostsSaga';

export default function* rootSaga() {
    console.log('Saga work');
    yield fork(watcherLoadCommentsSaga);
    yield fork(watcherLoadPostsSaga);
}
