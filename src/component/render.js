import { shape, func, node } from 'prop-types';
import React from 'react';
import { Provider as Redux } from 'react-redux';
import { PersistGate as Persistence } from 'redux-persist/integration/react';

const Provider = ({ store, persistor, children }) => (
  <Redux store={store}>
    <Persistence persistor={persistor} loading="Loading...">
      {children}
    </Persistence>
  </Redux>
);

Provider.propTypes = {
  store: shape({
    subscribe: func.isRequired,
    dispatch: func.isRequired,
    getState: func.isRequired,
  }).isRequired,
  persistor: shape({
    pause: func.isRequired,
    persist: func.isRequired,
    purge: func.isRequired,
    flush: func.isRequired,
    dispatch: func.isRequired,
    getState: func.isRequired,
    subscribe: func.isRequired,
  }).isRequired,
  children: node.isRequired,
};

export default Provider;
