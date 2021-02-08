import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { verifyAuth } from './actions/authActions';

import rootReducer from './reducers/rootReducer';

const configStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  store.dispatch(verifyAuth());
  return store;
};

export default configStore;
