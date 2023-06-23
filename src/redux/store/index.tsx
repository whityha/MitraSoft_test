import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { PostsListReducer } from '../reducers';
import { userReducer } from '../reducers/userReducer';
import rootSaga from '../saga';
const rootReducer = combineReducers({ PostsListReducer, userReducer });
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, undefined, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
