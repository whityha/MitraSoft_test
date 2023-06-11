import { takeEvery } from 'redux-saga/effects';

import { FETCH_COMMENTS } from '@/redux/actions';

import loadCommentsByPostID from './loadCommentsSaga';

export default function* watcherLoadCommentsSaga() {
    yield takeEvery(FETCH_COMMENTS().type, loadCommentsByPostID);
}
