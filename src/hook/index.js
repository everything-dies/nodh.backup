import first from 'lodash/first';
import attempt from 'lodash/attempt';
import { useMemo, useCallback } from 'react';

import NODH from 'constant';
import stringify from 'helpers/object/stringify';
import replace from 'helpers/object/replace';

export default ({ useDispatch, useSelector }) => settings => {
  const dispatch = useDispatch();
  const state = useSelector(settings.selector);
  const connect = useCallback(
    (namespace, action) => (...params) => {
      const typify = level =>
        `${NODH}: [${first(level)}] ${namespace.join('.')}(${stringify(
          params
        )});`;
      const save = path => mutation =>
        dispatch({ type: typify(path), path, mutation });
      const resources = {
        persisted: { save: save(['persisted']) },
        volatile: { save: save(['volatile']) },
      };

      return attempt(action(...params), resources);
    },
    [dispatch]
  );
  const actions = useMemo(() => replace(settings.actions).with(connect), [
    settings.actions,
    connect,
  ]);

  return [state, actions];
};
