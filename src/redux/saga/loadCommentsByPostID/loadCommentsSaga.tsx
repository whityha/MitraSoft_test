import { call } from 'redux-saga/effects';

import { fetchCommentsById } from '@/api/fetchCommentsById';
import { FETCH_COMMENTS } from '@/redux/actions';
import { PostComment } from '@/types';

export default function* loadCommentsByPostID({
    type = FETCH_COMMENTS().type,
    payload: id,
}: {
    type: string;
    payload: number;
}) {
    const comments: Array<PostComment> = yield call(fetchCommentsById, id);
    yield console.log('Сработала Saga, action: fetchCommentsById', comments);
}
