"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _redux = require("redux");

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _constant = _interopRequireDefault(require("../constant"));

var _reducer = _interopRequireDefault(require("../reducer"));

var _component = _interopRequireDefault(require("../component"));

var _hook = _interopRequireDefault(require("../hook"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = ({
  name
}) => {
  const compose = (0, _reduxDevtoolsExtension.composeWithDevTools)({
    name
  });
  const store = (0, _redux.createStore)((0, _reduxPersist.persistReducer)({
    whitelist: ['persisted'],
    key: [name, _constant.default].join(' @ '),
    storage: _storage.default
  }, _reducer.default), compose());
  const persistor = (0, _reduxPersist.persistStore)(store);

  const withNODH = Component => props => _react.default.createElement(Component, _extends({
    store: store,
    persistor: persistor
  }, props));

  return {
    Provider: withNODH(_component.default),
    useNODH: _hook.default
  };
};

exports.default = _default;