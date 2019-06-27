"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _redux = require("redux");

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _reactRedux = require("react-redux");

var _constant = _interopRequireDefault(require("../constant"));

var _reducer = _interopRequireDefault(require("../reducer"));

var _component = _interopRequireDefault(require("../component"));

var _hook = _interopRequireDefault(require("../hook"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = ({
  name
}) => {
  const context = (0, _react.createContext)(null);
  const compose = (0, _reduxDevtoolsExtension.composeWithDevTools)({
    name
  });
  const useDispatch = (0, _reactRedux.createDispatchHook)(context);
  const useSelector = (0, _reactRedux.createSelectorHook)(context);
  const store = (0, _redux.createStore)((0, _reduxPersist.persistReducer)({
    whitelist: ['persisted'],
    key: [name, _constant.default].join(' @ '),
    storage: _storage.default
  }, _reducer.default), compose());
  const persistor = (0, _reduxPersist.persistStore)(store);

  const withNODH = Component => props => _react.default.createElement(Component, _extends({
    context: context,
    store: store,
    persistor: persistor
  }, props));

  return {
    Provider: withNODH(_component.default),
    useNODH: (0, _hook.default)({
      useDispatch,
      useSelector
    })
  };
};

exports.default = _default;