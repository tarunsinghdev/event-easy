import { combineReducers } from 'redux';

import testReducer from '../../sandbox/testReducer';
import authReducer from './authReducer';
import eventReducer from './eventReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  test: testReducer,
  event: eventReducer,
  modals: modalReducer,
  auth: authReducer,
});

export default rootReducer;
