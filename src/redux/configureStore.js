import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    const middleware = process.env.NODE_ENV !== 'production' ?
    [require('redux-immutable-state-invariant').default(), thunk] :
    [thunk];
    
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    )
}