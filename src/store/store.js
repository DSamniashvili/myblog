import userInfoReducer from '../components/login/reducer/userInfoReducer';
import blogReducer from '../components/blog/reducer/blogReducer';

import { combineReducers } from 'redux'
const redux = require('redux');
const {createStore} = redux;


const rootReducer = combineReducers({
    userInfo: userInfoReducer,
    blog: blogReducer,
});

const store = createStore(rootReducer);
export default store;
