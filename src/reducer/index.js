import get from 'lodash/get';
import attempt from 'lodash/attempt';

import NODH from 'constant';
import mutate from 'mutation';

export const getInitialState = () => ({ persisted: {}, volatile: {} });

export default (state = getInitialState(), { type, path, mutation }) => {
  switch (true) {
    case String(type).startsWith(NODH):
      return attempt(
        mutate({ path, value: mutation(get(state, path)) }),
        state
      );
    default:
      return state;
  }
};
