import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage
};

const persisted = persistReducer(persistConfig, reducers);

const store = createStore(
  persisted,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export default {
  store,
  persistor
};
