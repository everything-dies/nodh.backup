import React from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import NODH from 'constant';
import reducer from 'reducer';
import Provider from 'component';
import useNODH from 'hook';

export default ({ name }) => {
  const compose = composeWithDevTools({ name });
  const store = createStore(
    persistReducer(
      { whitelist: ['persisted'], key: [name, NODH].join(' @ '), storage },
      reducer
    ),
    compose()
  );
  const persistor = persistStore(store);
  const withNODH = Component => props => (
    <Component store={store} persistor={persistor} {...props} />
  );

  return {
    Provider: withNODH(Provider),
    useNODH,
  };
};
