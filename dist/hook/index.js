"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _first = _interopRequireDefault(require("lodash/first"));

var _attempt = _interopRequireDefault(require("lodash/attempt"));

var _react = require("react");

var _constant = _interopRequireDefault(require("../constant"));

var _stringify = _interopRequireDefault(require("../helpers/object/stringify"));

var _replace = _interopRequireDefault(require("../helpers/object/replace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = ({
  useDispatch,
  useSelector
}) => settings => {
  const dispatch = useDispatch();
  const state = useSelector(settings.selector);
  const connect = (0, _react.useCallback)((namespace, action) => (...params) => {
    const typify = level => `${_constant.default}: [${(0, _first.default)(level)}] ${namespace.join('.')}(${(0, _stringify.default)(params)});`;

    const save = path => mutation => dispatch({
      type: typify(path),
      path,
      mutation
    });

    const resources = {
      persisted: {
        save: save(['persisted'])
      },
      volatile: {
        save: save(['volatile'])
      }
    };
    return (0, _attempt.default)(action(...params), resources);
  }, [dispatch]);
  const actions = (0, _react.useMemo)(() => (0, _replace.default)(settings.actions).with(connect), [settings.actions, connect]);
  return [state, actions];
};

exports.default = _default;