import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';

const configStore = () => {
  return createStore(rootReducer, composeWithDevTools());
};

export default configStore;
