import {combineReducers} from 'redux';
import articles from './articleReducer';
import audio from './audioReducer';

export default combineReducers({
    articles,
    audio
});