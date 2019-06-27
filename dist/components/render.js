"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _react2 = require("redux-persist/integration/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = ({
  store,
  persistor,
  children
}) => _react.default.createElement(_reactRedux.Provider, {
  store: store
}, _react.default.createElement(_react2.PersistGate, {
  persistor: persistor,
  loading: "Loading..."
}, children));

exports.default = _default;