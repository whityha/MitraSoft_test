import { call, delay, put } from 'redux-saga/effects';

import { fetchCommentsById } from '@/api/fetchCommentsById';
import { FETCH_COMMENTS_TYPE, SET_COMMENTS } from '@/redux/actions';
import { PostComment } from '@/types';

export default function* loadCommentsByPostID({
    type = FETCH_COMMENTS_TYPE,
    payload: id,
}: {
    type: string;
    payload: number;
}) {
    const comments: Array<PostComment> = yield call(fetchCommentsById, id);
    yield delay(1000);
    yield put(SET_COMMENTS({ id, comments }));
}
