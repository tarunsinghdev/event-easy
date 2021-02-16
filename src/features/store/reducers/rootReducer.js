import { combineReducers } from 'redux';

import testReducer from '../../sandbox/testReducer';
import asyncReducer from './asyncReducer';
import authReducer from './authReducer';
import eventReducer from './eventReducer';
import modalReducer from './modalReducer';
import profileReducer from './profileReducer';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    test: testReducer,
    event: eventReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer,
    profile: profileReducer,
  });

export default rootReducer;
