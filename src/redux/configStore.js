import { applyMiddleware, combineReducers, createStore } from 'redux';
import { TodoListReducer } from './reducers/TodoListReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga';
import { LoadingReducer } from './reducers/LoadingReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    TodoListReducer,
    LoadingReducer
});

export const store = createStore(
    rootReducer, applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);