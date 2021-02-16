import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { verifyAuth } from './actions/authActions';
import { createBrowserHistory } from 'history';

import rootReducer from './reducers/rootReducer';

export const history = createBrowserHistory();

const configStore = () => {
  const store = createStore(
    rootReducer(history),
    composeWithDevTools(applyMiddleware(thunk))
  );
  store.dispatch(verifyAuth());
  return store;
};

export default configStore;
