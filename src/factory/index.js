import React, { createContext } from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createDispatchHook, createSelectorHook } from 'react-redux';

import NODH from 'constant';
import reducer from 'reducer';
import Provider from 'component';
import createHook from 'hook';

export default ({ name }) => {
  const context = createContext(null);
  const compose = composeWithDevTools({ name });
  const useDispatch = createDispatchHook(context);
  const useSelector = createSelectorHook(context);
  const store = createStore(
    persistReducer(
      { whitelist: ['persisted'], key: [name, NODH].join(' @ '), storage },
      reducer
    ),
    compose()
  );
  const persistor = persistStore(store);
  const withNODH = Component => props => (
    <Component
      context={context}
      store={store}
      persistor={persistor}
      {...props}
    />
  );

  return {
    Provider: withNODH(Provider),
    useNODH: createHook({ useDispatch, useSelector }),
  };
};
