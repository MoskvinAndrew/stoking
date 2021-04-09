import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {authReducer} from "store/reducers/authReducer";

const reducers = combineReducers({
    auth: authReducer,
});

export type IGlobalState = ReturnType<typeof reducers>;

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;
















