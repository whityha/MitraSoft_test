import { call, delay, put } from 'redux-saga/effects';

import { fetchUser } from '@/api/fetchUser';
import { FETCH_USER_TYPE, SET_USER } from '@/redux/actions/userActions';
import { User } from '@/types';

export default function* loadUserSaga({
    type = FETCH_USER_TYPE,
    payload: id,
}: {
    type: string;
    payload: number;
}) {
    console.log(type);
    const user: User = yield call(fetchUser, id);
    yield delay(1000);
    yield put(SET_USER(user));
}
