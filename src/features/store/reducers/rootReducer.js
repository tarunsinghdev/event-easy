import { combineReducers } from 'redux';

import testReducer from '../../sandbox/testReducer';
import asyncReducer from './asyncReducer';
import authReducer from './authReducer';
import eventReducer from './eventReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  test: testReducer,
  event: eventReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
});

export default rootReducer;
