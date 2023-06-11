import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { PostsListReducer } from '../reducer';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(PostsListReducer, undefined, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
